(function () {
  var icons = window.lib.icons;
  var $icons = [];

  document.querySelector('.js-search').addEventListener("input", searchIcons);
  calcite.bus.on("modal:close", removeHash);
  document.querySelector('.js-version').innerHTML = window.lib.version;
  document.querySelector('.js-loader').classList.add('hide');
  var $iconContainer = document.querySelector('.js-icons');

  Object.keys(icons)
    .map(function (key) {
      return {name: key, icon: icons[key]}
    })
    .forEach(function (detail) {
      var $btn = document.createElement('button');
      $btn.classList = 'js-modal-toggle block padding-leader-2 padding-trailer-2 trailer-1 js-icon-select icon-select btn btn-transparent';
      $btn.setAttribute('data-icon', detail.name);
      $btn.setAttribute('data-modal', 'iconDetail');
      $btn.setAttribute('aria-label', 'View details of icon: ' + detail.name);
      var largest = getLargest(detail);
      $btn.appendChild(getSVG(detail.icon[largest], largest));
      var $name = document.createElement('span');
      $name.innerHTML = detail.name;
      $name.classList.add('icon-select--name');
      $btn.appendChild($name);
      $iconContainer.appendChild($btn);
      $btn.addEventListener("click", showDetail);
      $icons.push($btn);
    });
  calcite.init();

  if (window.location.hash.length > 1) {
    var active = window.location.hash.substring(1);
    if (icons[active]) {
      $iconContainer.querySelector('.js-icon-select[data-icon="' + active + '"]').click();
    }
  }

  function searchIcons (e) {
    $icons.forEach(function ($btn) {
      var name = $btn.getAttribute('data-icon');
      var icon = icons[name];
      var iconText = name + icon.alias.join('');
      var terms = e.target.value.toLowerCase().split(' ');
      var matches = terms.reduce((acc, term) => acc && iconText.toLowerCase().includes(term), true);
      if (matches) {
        $btn.classList.remove('hide');
      } else {
        $btn.classList.add('hide');
      }
    });
  }

  function getLargest (detail) {
    var i = detail.icon;
    return (i['21'] && 21) || (i['17'] && 17) || (i['13'] && 13);
  }

  function showDetail (e) {
    var key = e.target.getAttribute('data-icon');
    var icon = icons[key];
    var baseURL = 'https://github.com/ArcGIS/calcite-point-symbols/blob/master/icons/' + key + '-';
    var suffix = '.svg';
    var tags = icon.alias.map(function (alias) {
      return '<span class="label inline-block margin-right-quarter trailer-quarter">' + alias + '</span>';
    }).join('');
    var availableSizes = [13, 17, 21].filter(function (i) { return icon[i]; });
    window.location.hash = key;
    document.querySelector('.js-detail-name').innerHTML = key;
    document.querySelector('.js-detail-aliases').innerHTML = (tags && tags) || '---';
    document.querySelector('.js-detail-category').innerHTML = (icon.category && icon.category) || '---';
    document.querySelector('.js-detail-release').innerHTML = (icon.release && icon.release) || '---';

    [13, 17, 21].forEach(function (size) {
      var link = document.querySelector('.js-link-' + size);
      var iconDetail = document.querySelector('.js-detail-' + size);
      iconDetail.innerHTML = '';
      link.classList.add("hide");
      iconDetail.classList.add("hide");
      if (icon[size]) {
        document.querySelector('.js-link-' + size).href = baseURL + size + suffix;
        iconDetail.appendChild(getSVG(icon[size], size));
        link.classList.remove("hide");
        iconDetail.classList.remove("hide");
      }
    });
  }

  function getSVG (paths, size) {
    var $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    $svg.setAttribute('width', size);
    $svg.setAttribute('height', size);
    if (typeof paths === 'string') {
      paths = [paths];
    }
    paths.forEach(function (path) {
      var $path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      if (typeof path === 'string') {
        $path.setAttribute('d', path);
      } else {
        $path.setAttribute('d', path.d);
        if (path.opacity) {
          $path.setAttribute('opacity', path.opacity);
        }
      }
      $svg.appendChild($path);
    });
    return $svg;
  }

  function removeHash (fromOpen) {
    if (!fromOpen) {
      window.location.hash = '?';
    }
  }
})();

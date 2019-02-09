var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'beranda',
  },
  // About page
  {
    path: '/tentang/',
    url: './pages/tentang.html',
    name: 'tentang',
  },
  // satu
  {
    path: '/list-tanaman/',
    url: './pages/daftar-tanaman.html',
    name: 'list-tanaman',
  },
  {
    path: '/list-media-tanam/',
    url: './pages/daftar-media-tanam.html',
    name: 'list-media-tanam',
  },
  // crud
  {
    path: '/tabel_periodik/',
    url: './pages/daftar_tabel_hidro.html',
    name: 'tabel_periodik',
  },
  {
    path: '/input_tanamanku/',
    url: './pages/input_tanamanku.html',
    name: 'input_tanamanku',
  },
  {
    path: '/input_pengeluaran/',
    url: './pages/input_biaya.html',
    name: 'biaya-pengeluaranku',
  },
  {
    path: '/input_jadwalku/',
    url: './pages/input_jadwalku.html',
    name: 'input_jadwalku',
  },
  // read only
  {
    path: '/pengeluaran/',
    url: './pages/biayaku.html',
    name: 'biaya-pengeluaranku',
  },
  {
    path: '/jadwalku/',
    url: './pages/jadwalku.html',
    name: 'jadwal-hidroponik',
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 1</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 1</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },
  {
    path: '/panel-right-2/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 2</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 2</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },

  

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
    name: '404',
  },
];

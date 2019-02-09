// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

Framework7.use(Framework7Keypad);

// Init App
var app = new Framework7({
  id: 'com.hidroponik.app',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'Aditya',
        lastName: 'Harist',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hai Dunia!');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});
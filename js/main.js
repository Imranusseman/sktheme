if(window.localStorage.isDarkMode == null) {
  window.localStorage.isDarkMode = 'false';
}

if (window.localStorage.isDarkMode == 'true') {
  document.getElementById('appBody').classList.toggle('dark-theme');
}

document.getElementsByClassName('sk-header__search-bar')[0].addEventListener("keyup", function(event) {
  sHubApp.onSubmit(event);
});


const sHubApp = {
  scriptVersion: 'v1.0',
  changeTheme: () => {
    document.getElementById('appBody').classList.toggle('dark-theme');

    if (window.localStorage.isDarkMode == 'true') {
      window.localStorage.isDarkMode = 'false';
    } else {
      window.localStorage.isDarkMode = 'true';
    }
  }, 
  onSubmit: (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();

      document.location = "/search?q=" + document.getElementsByClassName('sk-header__search-bar')[0].value;
    }
  }
}
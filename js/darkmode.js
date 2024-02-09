function darkMode () {
  var isOn = false;
  if(Boolean(isOn) === false) {
      document.documentElement.setAttribute('data-theme', 'dark');
      var isOn = true;
  }
  else if(Boolean(isOn) === true) {
      document.documentElement.setAttribute('data-theme', 'light');
      var isOn = false;
  }
}
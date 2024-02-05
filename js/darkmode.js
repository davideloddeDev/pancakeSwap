function darkMode() {
    var isOn = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (!isOn) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
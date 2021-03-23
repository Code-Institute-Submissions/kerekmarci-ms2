// ******* DARK/LIGHT THEME TOGGLE  *******
let lightMode = localStorage.getItem('lightMode');
const themeToggle = document.getElementById('ThemeCheckbox');

const enableLightMode = () => {
    document.body.classList.add('light'); 
    localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
    document.body.classList.remove('light'); 
    localStorage.setItem('lightMode', 'disabled');
}

themeToggle.addEventListener('change', () => {
    lightMode = localStorage.getItem('lightMode');  
    if (lightMode !== 'enabled') {
        enableLightMode();
        console.log('Light mode enabled');
    } else {
        disableLightMode();
        console.log('Dark mode enabled');
    }
})
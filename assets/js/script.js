// ******* DARK/LIGHT THEME TOGGLE  *******

const themeToggle = document.getElementById('ThemeCheckbox');
const currentTheme = localStorage.getItem('data-theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        themeToggle.checked = false;
    } else {
        themeToggle.checked = true;
    }
}  

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');  
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark'); 
    }
} 

themeToggle.addEventListener('change', switchTheme, false);

/*
const enableLightMode = () => {
    document.body.classList.add('light'); 
    localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
    document.body.classList.remove('light'); 
    localStorage.setItem('lightMode', 'disabled');
}

// To load preference from last visit
if (lightMode === 'enabled') {
    enableLightMode();
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
})*/


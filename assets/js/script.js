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



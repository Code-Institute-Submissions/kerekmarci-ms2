// ******* DARK/LIGHT THEME TOGGLE  *******
// Some of the techniques applied and customised from videos https://www.youtube.com/watch?v=xodD0nw2veQ and https://www.youtube.com/watch?v=PD89iMr50Mw&t=400s

const themeToggle = document.getElementById('theme-checkbox');
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



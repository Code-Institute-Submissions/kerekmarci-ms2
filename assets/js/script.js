// ******* DARK/LIGHT THEME TOGGLE  *******

const themeToggle = document.getElementById('ThemeCheckbox');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light');  
})
// ******* DARK/LIGHT THEME TOGGLE  *******

const themeToggle = document.getElementById('ThemeCheckbox');
//const text = document.querySelectorAll('p');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light');
    document.body.children[0].classList.toggle('light'); 
    
})
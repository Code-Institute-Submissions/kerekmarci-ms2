function sendMail(contactForm) {
    emailjs.send('gmail', 'template_memory_game_fdb', {
        "gender": contactForm.gender.value,
        "age": contactForm.age.value,
        "easeOfUse": contactForm.easeOfUse.value,
        "gameExperience": contactForm.gameExperience.value,
        "siteLayout": contactForm.siteLayout.value
    });
    alert('Feedback sent, I appreciate your help :-)')
    return false;
}
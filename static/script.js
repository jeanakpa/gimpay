// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginOptions = document.querySelectorAll('.login-option');
    const loginForms = document.querySelectorAll('.login-form');

    // Fonction pour basculer entre les formulaires
    function switchForm(formType) {
        // Mettre à jour les boutons
        loginOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.option === formType);
        });

        // Mettre à jour les formulaires
        loginForms.forEach(form => {
            if (form.id === `${formType}Form`) {
                form.classList.add('active');
            } else {
                form.classList.remove('active');
            }
        });
    }

    // Ajouter les événements de clic aux boutons
    loginOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            switchForm(option.dataset.option);
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('countrySelect');
    const phoneInput = document.getElementById('phoneInput');

    // Met à jour l'indicatif de téléphone et le drapeau
    countrySelect.addEventListener('change', () => {
        const selectedOption = countrySelect.options[countrySelect.selectedIndex];
        const flagUrl = selectedOption.dataset.flag;
        const phoneCode = selectedOption.value;

        // Applique l'indicatif au champ de téléphone
        phoneInput.value = phoneCode;

        // Met à jour le drapeau dans la liste
        countrySelect.style.backgroundImage = `url(${flagUrl})`;
    });

    // Initialise avec le drapeau par défaut
    const defaultOption = countrySelect.options[countrySelect.selectedIndex];
    countrySelect.style.backgroundImage = `url(${defaultOption.dataset.flag})`;
    phoneInput.value = defaultOption.value;
});

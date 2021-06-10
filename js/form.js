let button = document.querySelector(".inscrire");
let prenom = document.querySelector('.form-control.prenom');
let prenomValid = true;
let nom = document.querySelector('.form-control.nom');
let nomValid = true;
let adresse = document.querySelector('.form-control.adresse');
let adresseValid = true;
let ville = document.querySelector('.form-control.ville');
let villeValid = true;
let codePostal = document.querySelector('.form-control.codePostal');
let codePostalValid = true;
let email = document.querySelector('.form-control.email');
let emailValid = true;
let motDePasse = document.querySelector('.form-control.motDePasse');
let motDePasseValid = true;
let motDePasseConfirm = document.querySelector('.form-control.motDePasseConfirm');
let motDePasseConfirmValid = true;
const emailReg = document.querySelector('.password');



adresse.addEventListener('blur',function(){
    const errorAdresse = document.querySelector('.error.adresse');

    if (adresse.value.match(/\d/g)==null && adresse.value!="") {
        errorAdresse.classList.add('d-block');
        errorAdresse.classList.remove('d-none');
    } else {
        errorAdresse.classList.add('d-none');
        errorAdresse.classList.remove('d-block');
    }
});

motDePasse.addEventListener('focus', function(){
    
    emailReg.classList.add('d-block');
    emailReg.classList.remove('d-none');
});

motDePasse.addEventListener('blur', function(){
    emailReg.classList.add('d-none');
    emailReg.classList.remove('d-block');
})

button.addEventListener('click', function(event){
    let isValid = false;
    const errorPrenom = document.querySelector('.error.prenom');
    const errorNom = document.querySelector('.error.nom');
    const errorVille = document.querySelector('.error.ville');
    const errorCodePostal = document.querySelector('.error.cp');
    const errorCodePostal2 = document.querySelector('.error.cp2');
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorEmail = document.querySelector('.error.email');
    const regPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const errorPassword = document.querySelector('.error.confirmPassword');
    

    event.preventDefault();
    if (prenom.value.length<2) {
        
        prenom.classList.add("is-invalid");
        prenomValid = false;
        errorPrenom.classList.add('d-block');
        errorPrenom.classList.remove('d-none');
    }  else {
        prenom.classList.remove("is-invalid");
        prenomValid = true;
        errorPrenom.classList.add('d-none');
        errorPrenom.classList.remove('d-block');
    }

    if (nom.value.length<2) {
        nom.classList.add('is-invalid');
        nomValid = false;
        errorNom.classList.add('d-block');
        errorNom.classList.remove('d-none');
    } else {
        nom.classList.remove('is-invalid');
        nomValid = true;
        errorNom.classList.add('d-none');
        errorNom.classList.remove('d-block');
    }

    if (adresse.value =='') {
        adresse.classList.add('is-invalid');
        adresseValid = false;
    } else {
        adresse.classList.remove('is-invalid');
        adresseValid = true;
    }

    if (ville.value.length<2) {
        ville.classList.add('is-invalid');
        villeValid = false;
        errorVille.classList.add('d-block');
        errorVille.classList.remove('d-none');
    } else {
        ville.classList.remove('is-invalid');
        villeValid = true;
        errorVille.classList.add('d-none');
        errorVille.classList.remove('d-block');
    }

    if (codePostal.value.length<5) {
        codePostal.classList.add('is-invalid');
        codePostalValid = false;
        errorCodePostal.classList.add('d-block');
        errorCodePostal.classList.remove('d-none');
        errorCodePostal2.classList.add('d-none');
        errorCodePostal2.classList.remove('d-block');
    } else if (codePostal.value.length>5) {
        codePostal.classList.add('is-invalid');
        codePostalValid = false;
        errorCodePostal2.classList.add('d-block');
        errorCodePostal2.classList.remove('d-none');
        errorCodePostal.classList.add('d-none');
        errorCodePostal.classList.remove('d-block');
    } else {
        codePostal.classList.remove('is-invalid');
        codePostalValid = true;
        errorCodePostal.classList.add('d-none');
        errorCodePostal.classList.remove('d-block');
        errorCodePostal2.classList.add('d-none');
        errorCodePostal2.classList.remove('d-block');
    }

    if (email.value =='' || regEmail.test(email.value)==false) {
        email.classList.add('is-invalid');
        emailValid = false;
        errorEmail.classList.add('d-block');
        errorEmail.classList.remove('d-none');
    } else {
        email.classList.remove('is-invalid');
        emailValid = true;
        errorEmail.classList.add('d-none');
        errorEmail.classList.remove('d-block');
    }

    if (regPassword.test(motDePasse.value)==false) {
        motDePasse.classList.add('is-invalid');
    } else {
        motDePasse.classList.remove('is-invalid');
    }

    if (motDePasse.value == '' ||  motDePasse.value !== motDePasseConfirm.value) {
        errorPassword.classList.add('d-block');
        errorPassword.classList.remove('d-none');
        motDePasseConfirm.classList.add('is-invalid');
        motDePassValid = false;
        motDePasseConfirmValid = false;
    } else {
        errorPassword.classList.add('d-none');
        errorPassword.classList.remove('d-block');
        motDePasseConfirm.classList.remove('is-invalid');
        motDePassValid = true;
        motDePasseConfirmValid = true;
    }

    if (prenomValid && nomValid && adresseValid && villeValid && codePostalValid && emailValid && motDePasseValid && motDePasseConfirmValid) {
        isValid = true;
    }

    if (isValid) {
        alert('Vous êtes inscrit');
    }




})
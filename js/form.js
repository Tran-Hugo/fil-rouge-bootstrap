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


button.addEventListener('click', function(){
    let isValid = false;
    
    if (prenom.value == '') {
        
        prenom.classList.add("is-invalid");
        prenomValid = false;
    }  else {
        prenom.classList.remove("is-invalid");
        prenomValid = true;
    }

    if (nom.value=='') {
        nom.classList.add('is-invalid');
        nomValid = false;
    } else {
        nom.classList.remove('is-invalid');
        nomValid = true;
    }

    if (adresse.value =='') {
        adresse.classList.add('is-invalid');
        adresseValid = false;
    } else {
        adresse.classList.remove('is-invalid');
        adresseValid = true;
    }

    if (ville.value =='') {
        ville.classList.add('is-invalid');
        villeValid = false;
    } else {
        ville.classList.remove('is-invalid');
        villeValid = true;
    }

    if (codePostal.value =='') {
        codePostal.classList.add('is-invalid');
        codePostalValid = false;
    } else {
        codePostal.classList.remove('is-invalid');
        codePostalValid = true;
    }

    if (email.value =='') {
        email.classList.add('is-invalid');
        emailValid = false;
    } else {
        email.classList.remove('is-invalid');
        emailValid = true;
    }

    if (motDePasse.value == '' ||  motDePasse.value !== motDePasseConfirm.value) {
        motDePasse.classList.add('is-invalid');
        motDePasseConfirm.classList.add('is-invalid');
        motDePassValid = false;
        motDePasseConfirmValid = false;
    } else {
        motDePasse.classList.remove('is-invalid');
        motDePasseConfirm.classList.remove('is-invalid');
        motDePassValid = true;
        motDePasseConfirmValid = true;
    }

    if (prenomValid && nomValid && adresseValid && villeValid && codePostalValid && emailValid && motDePasseValid && motDePasseConfirmValid) {
        isValid = true;
    }

    if (isValid) {
        alert('Vous êtes inscrit')
    }




})
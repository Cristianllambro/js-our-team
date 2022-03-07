const resultTeam = document.getElementById('team');
let container = document.querySelector('.team-container');

const namePeople = [
    {
        name: 'Wayne barnett',
        job: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        job: 'Chif Editor',
        image: 'angela-carol-chif-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Menager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Dveloper',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg'
    },

];


let image = document.createElement('img');
for (let i = 0; i < 6; i++) {
    let cardUser = document.createElement('team-card');
    cardUser.classList.add('card-image');
    cardUser.classList.add('card-text');
    cardUser.innerHTML = `${namePeople[i].name} <br> ${namePeople[i].job}`;

    container.append(cardUser);
}


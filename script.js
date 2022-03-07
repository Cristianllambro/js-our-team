const resultTeam = document.getElementById('team');
const container = document.querySelector('.team-container');
let nameUser = document.getElementById('name');
let roleUser = document.getElementById('role');
const btnAdd = document.getElementById('addMemberButton');
let image = document.getElementById('image');

const namePeople = [
    {
        name: 'Wayne barnett',
        job: 'Founder & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        job: 'Chif Editor',
        image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Menager',
        image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        job: 'Dveloper',
        image: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg'
    },

];

//add all card

for (let i = 0; i < 6; i++) {
    generateCard(namePeople[i].image, namePeople[i].name, namePeople[i].job)
}

// function for create card general mode
function generateCard (image, names, role) {
    let cardUser = document.createElement('div');
    cardUser.classList.add('team-card');
    cardUser.innerHTML = `
    <div class="card-image"><img src="${image}"/></div> 
    <div class="card-text">
    <h3>${names}</h3> 
    <p>${role}</p>
    </div>`;

    container.append(cardUser);
}

// add card with input
btnAdd.addEventListener('click', function() {

    //add variable input for user
    let newUser = {
        name: nameUser.value,
        job: roleUser.value,
        image: image.value
    }

    generateCard(image.value, nameUser.value, roleUser.value);
    namePeople.push(newUser);
    //clear input
    nameUser.value = '';
    roleUser.value = '';
    image.value = '';
})


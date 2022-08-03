// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

const team = [
    {
        'nome': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg',
    },
    {
        'nome': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg',
    },
    {
        'nome': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg',
    },
    {
        'nome': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg',
    },
    {
        'nome': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg',
    },
    {
        'nome': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg',
    },
]

const divEl = document.querySelector('.container');
const gridEl = document.querySelector('.grid');

for(let key in team){
    const value = team[key];
    // console.log('Name >> ' + value.nome + '; Role >> ' + value.role + '; Image >> ' + value.image + ';');
    // divEl.innerHTML += ` Name: ${value.nome}; Role: ${value.role}; Image: <img src="./img/${value.image}"> <br>`;
    const card = createCard(`./img/${value.image}`, value.nome, value.role);
    gridEl.append(card);
}

function createCard(srcImage, nameProfile, roleProfile){
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    const infoEl = document.createElement('div');
    infoEl.classList.add('info_profile', 'col');

    const imageEl = document.createElement('img');
    imageEl.classList.add('image_profile');
    imageEl.src = srcImage;

    const nameEl = document.createElement('span');
    nameEl.classList.add('name_profile');
    nameEl.innerHTML = nameProfile;
    const roleEl = document.createElement('span');
    roleEl.classList.add('role_profile');
    roleEl.innerHTML = roleProfile;

    infoEl.append(nameEl);
    infoEl.append(roleEl);

    cardEl.append(imageEl, infoEl);
    return cardEl
}
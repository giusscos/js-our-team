// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

function createMember(name, role, src){
    const member = {
        'nome': name,
        'role': role,
        'image': src
    }
    return member;
}

const team = [
    createMember('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    createMember('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'),
    createMember('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    createMember('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    createMember('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'),
    createMember('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg')
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
const URL_BASE = 'https://avatar-app.herokuapp.com/api/';
const URL_CATEGORY = 'characters/';

let markup = '';
let charNumber = 3;

const formRef = document.querySelector('.form');
const screenRef = document.querySelector('.screen');
const decrementBtnRef = document.querySelector('#previous');
const incrementBtnRef = document.querySelector('#next');
const inputRef = document.querySelector('#characterId');

formRef.addEventListener('submit', onFormSubmit);
decrementBtnRef.addEventListener('click', onDecrement);
incrementBtnRef.addEventListener('click', onIncrement);

function onDecrement() {
  charNumber -= 1;
  console.log(charNumber);
  inputRef.value = charNumber;
  resetScreen();
  insertMarkupInScreen();
}

function onIncrement() {
  charNumber += 1;
  console.log(charNumber);
  inputRef.value = charNumber;
  resetScreen();
  insertMarkupInScreen();
}

function onFormSubmit(evt) {
  evt.preventDefault();
  resetScreen();
  charNumber = Number(evt.currentTarget.elements.query.value);
  insertMarkupInScreen();
}

function insertMarkupInScreen() {
  getCharacterById().then(data => {
    createMarkupByQueryResponse(data);
    screenRef.insertAdjacentHTML('beforeend', markup);
  });
}

async function getCharacterById() {
  try {
    const response = await fetch(`${URL_BASE}${URL_CATEGORY}${charNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Please, enter Number Id', error.message);
  }
}

function createMarkupByQueryResponse(data) {
  if (data === null) {
    alert('The number is too low or too high. Please, enter number 1 to 200');
    return;
  }
  const bending = data.bending.map(element => element.name).join(', ');
  markup = `<img class="screen__image" src="${data.image}" alt="${data.name}" />
        <ul class="screen__list list">
          <li class="screen__item">
            <p>Name: <span class="screen__info">${data.name}</span></p>
          </li>
          <li class="screen__item">
            <p>Id: <span class="screen__info">${data.id}</span></p>
          </li>
          <li class="screen__item">
            <p>Age: <span class="screen__info">${data.age}</span></p>
          </li>
          <li class="screen__item">
            <p>Born: <span class="screen__info">${data.born}</span></p>
          </li>
          <li class="screen__item">
            <p>Gender: <span class="screen__info">${data.gender}</span></p>
          </li>
          <li class="screen__item">
            <p>Enthnicity: <span class="screen__info">${data.ethnicity.name}</span></p>
          </li>
          <li class="screen__item">
            <p>Nationality: <span class="screen__info">${data.nationality.name}</span></p>
          </li>
          <li class="screen__item">
            <p>
              Bending:
              <span class="screen__info">${bending}</span>
            </p>
          </li>
        </ul>`;
  return markup;
}

function resetScreen() {
  markup = '';
  screenRef.innerHTML = '';
}

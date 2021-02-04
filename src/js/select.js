const list = document.querySelector('.select-cities-list');
const listWrapper = document.querySelector('.select-cities-options');
const citiItem = document.querySelector('.select-city-item');
const cities = document.querySelectorAll('.select-city-item');
const customInput = document.querySelector('.select-custom-input');
const selectLabel = document.querySelector('.select-label');
const inputWrapper = document.querySelector('.select-input-wrapper');
const arrow = document.querySelector('.select-arrow');

let count = 0;
let direction = 'down';
let activate = false;


function changeColorCityItem(){
  cities.forEach((item, i) => {
    console.log(item.textContent);
    if (item.textContent.trim() === customInput.value.trim()) {
      item.style.opacity = '0.2';
    }else{
      item.style.opacity = '1';
    }
  })
}

function labelToggle(){
  selectLabel.classList.toggle('select-label--small');
}

function arrowToggle (){
  arrow.classList.toggle('select-arrow--open');
}

function citiesToggle(){
  listWrapper.classList.toggle('select-cities-options--close');
}

customInput.addEventListener('click', () => {
  // citiesToggle()
  if (listWrapper.classList.contains('select-cities-options--close')) {
    list.focus()
  }else{
    list.blur()
    citiesToggle()
    arrowToggle()
    document.body.style.overflow = 'scroll';
    if (customInput.value === '') {
        labelToggle()
    }
  }
})

// customInput.addEventListener('input', () => {
//   changeColorCityItem()
// })

document.addEventListener('click', (e) => {
  if(e.target !== citiItem && e.target !== customInput && e.target !== selectLabel &&
    !listWrapper.classList.contains('select-cities-options--close')){
      citiesToggle();
      document.body.style.overflow = 'scroll';

      if (customInput.value === '') {
          labelToggle()
      }

      arrowToggle()
    }
})

list.addEventListener('click', (e) => {

  // count = parseInt(e.target.id) + 1;
  direction = 'down';
  // console.log(count);
  let text = e.target.textContent;
  console.log(text);
  customInput.value = text;
  // e.target.style.opacity = '0.2';

  if (customInput.value === '') {
      labelToggle()
  }

  citiesToggle()
  arrowToggle()
  changeColorCityItem()
  e.target.blur()
  document.body.style.overflow = 'scroll';
})

list.addEventListener('focus', () => {
  document.body.style.overflow = 'hidden';

  citiesToggle()

  count = 0;
  direction = 'down';

  let activate = false;

  if (customInput.value === '') {
      labelToggle()
  }
  arrowToggle()
})

// list.addEventListener('blur', () => {
//   listWrapper.classList.toggle('select-cities-options--close');
// })

list.addEventListener('keydown', (e) => {
  // console.log(activate);

  if(e.keyCode == '40' && count < list.children.length){
    if(activate === false){
      activate = true;
    }

    if(direction === 'up'){
      count += 2;
      direction = 'down';
    }
    console.log(count);
    console.log(direction);
    list.children[count].focus();

    count++ ;
  }

  if(e.keyCode == '38'){
    if(direction === 'down' && count > 1){
      count -= 2;
    }else if (count === 0) {
      count = count;
    }else{count--}

    direction = 'up';
    // console.log(count);
    // console.log(direction);
    list.children[count].focus();
  }

  if(e.keyCode == '13' && activate){
    let text = '';

    text = e.target.textContent ;

    customInput.value = text;

    if (customInput.value === '') {
        labelToggle()
    }

    e.target.blur()
    citiesToggle()
    arrowToggle()
    changeColorCityItem()
    document.body.style.overflow = 'scroll';
  }

  if(e.keyCode == '9'){
    citiesToggle()
    document.body.style.overflow = 'scroll';

    if (customInput.value === '') {
        labelToggle()
    }
    arrowToggle()
  }
})

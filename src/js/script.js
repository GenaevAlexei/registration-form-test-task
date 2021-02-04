// тумблер онлайн-офлайн:
function thumblerOnOff (){
  const on = document.querySelector('.reg-on');
  const off = document.querySelector('.reg-off');
  const thumbler = document.querySelector('.reg-tumbler');
  const labelOff = document.querySelector('.reg-label-off');

  on.addEventListener('focus', () => {
    thumbler.style.boxShadow = "0px 2px 10px #FF7777";
  })

  on.addEventListener('blur', () => {
    thumbler.style.boxShadow = "none";
  })

  off.addEventListener('focus', () => {
    thumbler.style.boxShadow = "0px 2px 10px #FF7777";
  })

  off.addEventListener('blur', () => {
    thumbler.style.boxShadow = "none";
  })
}

thumblerOnOff ()

// прогресс-бар слева от ползунка:
 function inputRange(){
 const progress = document.querySelector('.reg-progress');
 const range = document.querySelector('.reg-range');
 const howMuch = document.querySelector('.reg-howMuch');
 const legend = document.querySelector('.reg-cost-legend');

 howMuch.textContent = "0";
 range.value = 0;

  range.addEventListener('input', () => {
  let widthProgress = String((range.value)*(range.clientWidth)/range.max)
  progress.style.width = `${widthProgress}px`;
  howMuch.textContent = String(range.value);
  })

  range.addEventListener('focus', () => {
    legend.style.color = "#ffffff";
    console.log(legend);
  })

  range.addEventListener('blur', () => {
    legend.style.color = "rgba(255, 255, 255, 0.3)";
  })
}

inputRange()

//
function toggleContactsLabel (){
  const contactInputs = document.querySelectorAll('.contacts-item');

  contactInputs.forEach((item, i) => {
    item.addEventListener('focus', () => {
      let label = item.previousElementSibling;
      console.log(label.className);
      if(item.value == ''){
        label.classList.toggle('contacts-label--small')
      }
    })

    item.addEventListener('blur', () => {
      let label = item.previousElementSibling;
      if(item.value == ''){
        label.classList.toggle('contacts-label--small')
      }
    })
  });

}

toggleContactsLabel ()


function toggleComments(){
  const commentsInput = document.querySelector('.contacts-comments');
  const label = document.querySelector('.contacts-label--comments');

  commentsInput.value = '';

  commentsInput.addEventListener('focus', () => {
    if (commentsInput.value.trim() === "") {
      label.classList.toggle('contacts-label--small')
    }
  })

  commentsInput.addEventListener('blur', () => {
    if (commentsInput.value.trim() === "") {
      label.classList.toggle('contacts-label--small')
    }
  })
}

toggleComments()

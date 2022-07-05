import AddRemove from "./AddRemove.js";

const popupAddItem = document.querySelector('.popup_add-item')
const popupOverlay = document.querySelector('.popup__overlay')
const btnAddItem = document.querySelector('.title-menu__button-add')
const mainContainer = document.querySelector('#main-content__container')
const formAddImage = document.querySelector('.popup__form_add-Image');
const inputLink = document.querySelector('.input-link');
const inputModel = document.querySelector('.input-model');
const inputDevice = document.querySelector('.input-device');
const inputDescription = document.querySelector('.input-description');
const btnGrid = document.querySelector('.buttons__item-grid');
const btnNoGrid = document.querySelector('.buttons__item-nogrid');
const mainContent = document.querySelector('.main-content-grid');
const mainContentContainer = document.querySelectorAll('.main-content__container-grid');
const mainContentImage = document.querySelectorAll('.main-content__image-grid');
const mainContentTextContainer = document.querySelectorAll('.main-content__text-container');

// Меняем дизайн меню на NO GRID 
const changeMainContentContainerOnNoGrid  = new AddRemove({selector: mainContentContainer, NewClassName: 'main-content__container-nogrid'});
const changeMainContentImageOnNoGrid = new AddRemove({selector: mainContentImage, NewClassName: 'main-content__image-nogrid'});
const changeMainContentTextContainerOnNoGrid = new AddRemove({selector: mainContentTextContainer, NewClassName: 'display_none'});
const changeMainContentOnNoGrid  = new AddRemove({selector: mainContent, NewClassName: 'main-content-nogrid'});

const changeOnNoGrid = () => {
  changeMainContentContainerOnNoGrid.changeClass()
  changeMainContentImageOnNoGrid.changeClass()
  changeMainContentTextContainerOnNoGrid.removeClass()
  changeMainContentOnNoGrid.addClassForAloneSelector()
}

btnNoGrid.addEventListener('click', (event) => {
  changeOnNoGrid()
})

// Меняем дизайн меню на GRID 
const changeMainContentContainerOnGrid  = new AddRemove({selector: mainContentContainer, NewClassName: 'main-content__container-grid'});
const changeMainContentImageOnGrid = new AddRemove({selector: mainContentImage, NewClassName: 'main-content__image-grid'});
const changeMainContentTextContainerOnGrid = new AddRemove({selector: mainContentTextContainer, NewClassName: 'display_none'});
const changeMainContentOnGrid  = new AddRemove({selector: mainContent, NewClassName: 'main-content-grid'});

const changeOnGrid = () => {
  changeMainContentContainerOnGrid.changeClass()
  changeMainContentImageOnGrid.changeClass()
  changeMainContentTextContainerOnGrid.addClass()
  changeMainContentOnGrid.addClassForAloneSelector()
}
btnGrid.addEventListener('click', () => {
  changeOnGrid()
})

// Закрытие попапа на ESC
const closePopupOnEsc = (event) => {
  if (event.key === "Escape"){
    closePopup()
  }
}
// Функция открытия попапа
const openPopup = () => {
  popupAddItem.classList.add('popup_active');
  document.addEventListener('keyup', closePopupOnEsc);
}
// Функция закрытия попапа
const closePopup = () => {
  popupAddItem.classList.remove('popup_active');
  document.removeEventListener('keyup', closePopupOnEsc);
}

// Открытие попапа на кнопку
btnAddItem.addEventListener('click', () => {
  openPopup()
})
// Закрытие попапа кликом на оверлей
popupOverlay.addEventListener('click', () => {
  closePopup()
})
// Функция включающая НЕ ГРИД и отключающая кнопку ГРИД при разрешении экрана менее 631px
window.addEventListener("resize", function() {
  if(this.innerWidth < 631) {
    btnGrid.disabled = true;
    btnGrid.classList.add('buttons__item-grid_disabled')
    changeOnNoGrid()
  } else {
    btnGrid.disabled = false;
    btnGrid.classList.remove('buttons__item-grid_disabled')
    changeOnGrid()
  }
}, true);

const ob = [
  {link: 'https://images.unsplash.com/photo-1657030871212-95d863306bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
  model: "Причал",
  device: 'CANON',
  description: 'Привет!'
},
  {link: 'https://images.unsplash.com/photo-1656875394347-41798ac96aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80',
  model: "Мы",
  device: 'SAMSUNG',
  description: 'Хэй!'
}
]

// Функции сбора данных ипунта и сабмита формы

const addInputValues = (link, model, device, description) => {
  const photoTemplate = document.querySelector('#template').content.querySelector('.main-content__container-grid').cloneNode(true);
  const templateImage = photoTemplate.querySelector('.main-content__image-grid');

  templateImage.src = link;
  templateImage.alt = description;

  const textModel = photoTemplate.querySelector('.span-model');
  const textDevice = photoTemplate.querySelector('.span-device');
  const textDesription = photoTemplate.querySelector('.span-description');
  
  textModel.textContent = model;
  textDevice.textContent = device;
  textDesription.textContent = description;


  return photoTemplate
}

// Добавляем карточку на страницу
const createImage = (link, model, device, description) => {
  const card = addInputValues(link, model, device, description);
  mainContainer.prepend(card)
}


// Собираем все нужные данные и описываем логику при сабмите формы
const addImage = (event) => {
  event.preventDefault();
  const device = inputDevice.value
  const model = inputModel.value
  const description = inputDescription.value
  const link = inputLink.value
  createImage(link, model, device, description);
  closePopup()
  formAddImage.reset()
}
ob.forEach((item) => {
  createImage(item.link, item.model, item.device, item.description)
})


// Сабмит формы
formAddImage.addEventListener('submit', addImage)

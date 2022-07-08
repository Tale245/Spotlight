
import AddRemove from "./AddRemove.js";

const popupAddItem = document.querySelector('.popup_add-item')
const popupOverlay = document.querySelector('.popup__overlay');
const popupOverlayImage = document.querySelector('.popup__overlay_img');
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
const popupOpenImage = document.querySelector('.popup_open-image')
const popupImage = popupOpenImage.querySelector('.popup__image-scale')
// Меняем дизайн меню на NO GRID 

btnNoGrid.addEventListener('click', () => {
  const mainContentContainer = document.querySelectorAll('.main-content__container-grid');
const mainContentImage = document.querySelectorAll('.main-content__image-grid');
const mainContentTextContainer = document.querySelectorAll('.main-content__text-container');

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
  changeOnNoGrid()
})

btnGrid.addEventListener('click', () => {
  const mainContentContainer = document.querySelectorAll('.main-content__container-nogrid');
  const mainContentImage = document.querySelectorAll('.main-content__image-nogrid');
  const mainContentTextContainer = document.querySelectorAll('.main-content__text-container');
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
changeOnGrid()
})

// Закрытие попапа на ESC
const closePopupOnEsc = (event) => {
  if (event.key === "Escape"){
    const popupIsOpened = document.querySelector('.popup_active')
    closePopup(popupIsOpened)
  }
}
// Функция открытия попапа
const openPopup = (popup) => {
  popup.classList.add('popup_active');
  document.addEventListener('keyup', closePopupOnEsc);
}
// Функция закрытия попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_active');
  document.removeEventListener('keyup', closePopupOnEsc);
}

// Открытие попапа на кнопку
btnAddItem.addEventListener('click', () => {
  openPopup(popupAddItem)
})
// Закрытие попапа кликом на оверлей
popupOverlay.addEventListener('click', () => {
  closePopup(popupAddItem)
})
popupOverlayImage.addEventListener('click', () => {
  closePopup(popupOpenImage)
})
// Функция включающая НЕ ГРИД и отключающая кнопку ГРИД при разрешении экрана менее 631px
window.addEventListener("resize", function() {
  if(this.innerWidth < 631) {
    btnGrid.disabled = true;
    btnGrid.classList.add('buttons__item-grid_disabled');
    popupOpenImage.classList.add('display_none')
  } else {
    btnGrid.disabled = false;
    btnGrid.classList.remove('buttons__item-grid_disabled')
    popupOpenImage.classList.remove('display_none')
    popupOpenImage.classList.remove('popup_active')
  }
}, true);

const ob = [
  {link: 'https://sun9-east.userapi.com/sun9-18/s/v1/if2/Vk6iQlge1cwR0iF5sQOLFPXWl2fuyVfYCAP_teBykW0yS9IbCZwKNKcSFm8JlP8TXv9p2UnthuxMZaitUNRx5jdF.jpg?size=1473x1919&quality=95&type=album',
  model: "Why not?",
  device: 'Iphone 11',
  description: 'we are'
},
{link: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80',
model: "Роза",
device: 'SONY, ILCE-7RM3',
description: 'Roses are red...'
},
//   {link: 'https://sun9-west.userapi.com/sun9-6/s/v1/if2/OI7lBIFgkPMtUgo00WzOVQfI1GU8l_0kWwlPztpPRZ-zGVni0jwfT38ChWJIWy9V6AX0iR4OUiD1P50ndD2Z7TVx.jpg?size=959x720&quality=95&type=album',
//   model: "My friend",
//   device: 'Iphone 11',
//   description: 'Someday'
// },
  {link: 'https://images.unsplash.com/photo-1586043389213-c38c53ca269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80',
  model: "-",
  device: 'Iphone 7',
  description: 'Never stop loving ♡'
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

  const imageModel = popupOpenImage.querySelector('.image-model')
  const imageDevice = popupOpenImage.querySelector('.image-device')
  const imageDescription = popupOpenImage.querySelector('.image-description')

  templateImage.addEventListener('click', () => {
    openPopup(popupOpenImage)
    popupImage.src = link;
    popupImage.alt = description
    imageModel.textContent = model;
    imageDevice.textContent = device;
    imageDescription.textContent = description;
  })
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
  closePopup(popupAddItem)
  const mainContentContainer = document.querySelectorAll('.main-content__container-nogrid');
  const mainContentImage = document.querySelectorAll('.main-content__image-nogrid');
  const mainContentTextContainer = document.querySelectorAll('.main-content__text-container');
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
changeOnGrid()
  formAddImage.reset()
}
ob.forEach((item) => {
  createImage(item.link, item.model, item.device, item.description)
})


// Сабмит формы
formAddImage.addEventListener('submit', addImage)

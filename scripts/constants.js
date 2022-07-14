const popupAddItem = document.querySelector('.popup_add-item')
const popupOverlay = document.querySelector('.popup__overlay');
const popupOverlayImage = document.querySelector('.popup__overlay_img');
const popupOverlayPriceList = document.querySelector('.popup__overlay_price-list')
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
const popupImage = popupOpenImage.querySelector('.popup__image-scale');
const popupPriceList = document.querySelector('.popup_price-list')
const buttonQ = document.querySelector('.title-menu__button-q')

export {popupAddItem, popupOverlay, popupOverlayImage, 
    btnAddItem, mainContainer, formAddImage, inputLink,
     inputModel, inputDevice, inputDescription, btnGrid, 
     btnNoGrid, mainContent, popupOpenImage, popupImage,
      popupPriceList, buttonQ, popupOverlayPriceList }
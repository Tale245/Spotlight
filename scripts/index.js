const btnGrid = document.querySelector('.buttons__item-grid');
const btnNoGrid = document.querySelector('.buttons__item-nogrid');
const mainContent = document.querySelector('.main-content-grid');
const mainContentContainer = document.querySelectorAll('.main-content__container-grid');
const mainContentImage = document.querySelectorAll('.main-content__image-grid');
const mainContentTextContainer = document.querySelectorAll('.main-content__text-container');
const popupAddItem = document.querySelector('.popup_add-item')
const popupOverlay = document.querySelector('.popup__overlay')
const btnAddItem = document.querySelector('.title-menu__button-add')

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

// Добавляем классы при нажатие на кнопку НЕ ГРИД
const changeOnNoGridContainer = () => {
  mainContentContainer.forEach((item) => {
    item.className = 'main-content__container-nogrid';
  })
}
const changeOnNoGridImage = () => {
  mainContentImage.forEach((item) => {
    item.className = 'main-content__image-nogrid';
  })
}
const changeOnNoGridTextContainer = () => {
  mainContentTextContainer.forEach((item) => {
    item.classList.remove('display_none');
  })
}

// Собираем все функции добавления классов НЕ ГРИД в одну
const changeOnNoGrid = () => {
  mainContent.className = 'main-content-nogrid';
  changeOnNoGridContainer();
  changeOnNoGridImage();
  changeOnNoGridTextContainer();
}

// Добавляем классы при нажатие на кнопку ГРИД
const changeOnGridContainer = () => {
  mainContentContainer.forEach((item) => {
    item.className = 'main-content__container-grid';
  })
}
const changeOnGridImage = () => {
  mainContentImage.forEach((item) => {
    item.className = 'main-content__image-grid';
  })
}
const changeOnGridTextContainer = () => {
  mainContentTextContainer.forEach((item) => {
  item.classList.add('display_none');
  })
}

// Собираем все функции добавления классов ГРИД в одну
const changeOnGrid = () => {
  mainContent.className = 'main-content-grid';
  changeOnGridContainer();
  changeOnGridImage();
  changeOnGridTextContainer();
}
// Замена на классы НЕ ГРИД нажатием на кнопку НЕ ГРИД
btnNoGrid.addEventListener('click', () => {
  changeOnNoGrid()
})
// Замена на классы ГРИД нажатием на кнопку ГРИД
btnGrid.addEventListener('click', () => {
  changeOnGrid()
})

// Функция включающая НЕ ГРИД и отключающая кнопку ГРИД при разрешении экрана менее 630px (630 включительно)
window.addEventListener("resize", function() {
  if(this.innerWidth < 630) {
    btnGrid.disabled = true;
    btnGrid.classList.add('buttons__item-grid_disabled')
    changeOnNoGrid()
  } else if (this.innerWidth > 630){
    btnGrid.disabled = false;
    btnGrid.classList.remove('buttons__item-grid_disabled')
    changeOnGrid()
  }
}, true);

// Функции сбора данных ипунта и сабмита формы

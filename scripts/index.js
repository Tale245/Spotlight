const btnGrid = document.querySelector('.buttons__item-grid');
const btnNoGrid = document.querySelector('.buttons__item-nogrid');
const mainContent = document.querySelector('.main-content-grid');
const mainContentContainer = document.querySelectorAll('.main-content__container-grid');
const mainContentImage = document.querySelectorAll('.main-content__image-grid');
const mainContentTextContainer = document.querySelectorAll('.main-content__text-container');

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

const changeOnNoGrid = () => {
  mainContent.className = 'main-content-nogrid';
  changeOnNoGridContainer();
  changeOnNoGridImage();
  changeOnNoGridTextContainer();
}

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

const changeOnGrid = () => {
  mainContent.className = 'main-content-grid';
  changeOnGridContainer();
  changeOnGridImage();
  changeOnGridTextContainer();
}

btnNoGrid.addEventListener('click', () => {
  changeOnNoGrid()
})
btnGrid.addEventListener('click', () => {
  changeOnGrid()
})

// const changeScreen = () 
// window.addEventListener("resize", function() {
//   if(this.innerWidth < 630) {
//     btnGrid.disabled = true;
//     btnGrid.classList.add('buttons__item-grid_disabled')
//     changeOnNoGrid()
//   } else if (this.innerWidth > 630){
//     btnGrid.disabled = false;
//     changeOnGrid()
//   }
// }, true);
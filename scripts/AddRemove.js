export default class AddRemove {
  constructor({selector, NewClassName}){
    this.selector = selector;
    this.NewClassName = NewClassName;
  }

  changeClass () {
   this.selector.forEach((item) => {
      item.className = this.NewClassName;
    })
  }
  removeClass () {
    this.selector.forEach((item) => {
      item.classList.remove(this.NewClassName)
    }) 
  }
  addClass () {
    this.selector.forEach((item) => {
      item.classList.add(this.NewClassName)
    }) 
  }
  addClassForAloneSelector () {
    this.selector.className = this.NewClassName  
  }
} 
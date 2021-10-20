const expertData = document.querySelector('[data-element="expert-data"]')

if (expertData) setTimeout(expertDataInit, 0)

function expertDataInit () {
  const slider = expertData.querySelector('[data-element="expert-data__slider"]')
  const sliderItems = slider.querySelectorAll('[data-element="expert-data__slider-item"]')

  const nav = expertData.querySelector('[data-element="expert-data__nav"]')
  const navItems = nav.querySelectorAll('[data-element="expert-data__nav-item"]')

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", checkoutNavItem)
  }

  function checkoutNavItem () {
    const oldActiveItem = nav.getElementsByClassName("expert-data__nav-item_active")[0]
    oldActiveItem.classList.remove("expert-data__nav-item_active")
    this.classList.add("expert-data__nav-item_active")
    const index = this.getAttribute("data-index")
    checkoutSlide(index)
  }

  function checkoutSlide (index) {
    const oldActiveSlide = slider.getElementsByClassName("expert-data__slider-item_active")[0]
    oldActiveSlide.classList.remove("expert-data__slider-item_active")
    sliderItems[index].classList.add("expert-data__slider-item_active")
  }
}

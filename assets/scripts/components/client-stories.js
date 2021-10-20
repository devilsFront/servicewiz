const clientStories = document.querySelector('[data-element="client-stories"]')

if (clientStories) setTimeout(clientStoriesInit, 0)

function clientStoriesInit () {
  const clientStoriesItemArray = document.querySelectorAll('[data-element="client-stories__item"]')

  const clientStoriesSlider = document.querySelector('[data-element="client-stories__slider"]')
  const clientStoriesNext = document.querySelector('[data-element="client-stories__btn_next"]')
  const clientStoriesPrev = document.querySelector('[data-element="client-stories__btn_prev"]')

  const clientStoriesCurrent = document.querySelector('[data-element="client-stories__current"]')

  clientStoriesNext.addEventListener("click", nextSlide)
  clientStoriesPrev.addEventListener("click", prevSlide)

  let activeIndex = 0

  function nextSlide () {
    if (!clientStoriesNext.classList.contains("client-stories__btn_next-active")) return

    clientStoriesPrev.classList.add("client-stories__btn_prev-active")

    const oldActiveSlide = clientStoriesSlider.getElementsByClassName("client-stories__item_active")[0]
    oldActiveSlide.classList.remove("client-stories__item_active")
    activeIndex = +activeIndex + 1

    if (activeIndex === clientStoriesItemArray.length - 1) {
      clientStoriesNext.classList.remove("client-stories__btn_next-active")
    }

    clientStoriesItemArray[activeIndex].classList.add("client-stories__item_active")
    refreshCurrentSlideNumber()
  }

  function prevSlide () {
    if (!clientStoriesPrev.classList.contains("client-stories__btn_prev-active")) return

    clientStoriesNext.classList.add("client-stories__btn_next-active")

    const oldActiveSlide = clientStoriesSlider.getElementsByClassName("client-stories__item_active")[0]
    oldActiveSlide.classList.remove("client-stories__item_active")
    activeIndex = +activeIndex - 1

    if (activeIndex === 0) {
      clientStoriesPrev.classList.remove("client-stories__btn_prev-active")
    }

    clientStoriesItemArray[activeIndex].classList.add("client-stories__item_active")
    refreshCurrentSlideNumber()
  }

  function refreshCurrentButtons () {
    if (activeIndex === 0) {
      clientStoriesPrev.disabled
    }
  }

  function refreshCurrentSlideNumber () {
    clientStoriesCurrent.innerHTML = +activeIndex + 1
  }
}

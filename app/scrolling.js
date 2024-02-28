const newInfo = document.querySelectorAll('.container')

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('scroll');
    }
  })
}

const options = {
  threshold: [0.5],
}

const observer = new IntersectionObserver(callback, options)

newInfo.forEach((elem, index) => {
    if (index > 0 && index < 5) observer.observe(elem)
})



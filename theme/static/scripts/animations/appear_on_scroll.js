const targetElements = document.getElementsByClassName('appear-on-scroll')

for (const e of targetElements) {
    e.classList.add('opacity-0')
}

window.addEventListener('scroll', () => {
    for (const e of targetElements) {
        if (e.getBoundingClientRect().y <= (window.innerHeight || document.documentElement.clientHeight) / 2 && !e.classList.contains('fade-in')) {
            e.classList.add('animate-fade-in')
        }
    }
})
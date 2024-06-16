if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (const path of document.getElementsByClassName('motion-safe:animate-draw-svg-path')) {
        const length = path.getTotalLength()
        path.style.strokeDasharray = length
        path.style.strokeDashoffset = length
        path.addEventListener('animationend', _ => {
            path.style.strokeDasharray = 0
            path.style.strokeDashoffset = 0
            if (path.classList.contains('light-ray')) {
                path.classList.remove('motion-safe:animate-draw-svg-path')
                path.classList.add('motion-safe:animate-light-ray')
            }
        })
    }
}
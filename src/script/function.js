const main = document.querySelector('.main')
const celebrate = main.querySelector('#celebrate')
const button = main.querySelector('.button')
const finish = main.querySelector('#finish')

const start = main.querySelector('.start')


button.addEventListener('click', ()=>{
    const celebrateEl = celebrate.content.cloneNode(true);
    main.append(celebrateEl);
    button.remove()
    const link6 = document.querySelector('.link6');
    link6.addEventListener('click', ()=>{
        const finishEl = finish.content.cloneNode(true);
        const info = main.querySelector('.info')
        info.remove()
        start.remove()
        main.append(finishEl);
    })
})




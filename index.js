const card1 = document.getElementById('card-1')
const card2 = document.getElementById('card-2')
const card3 = document.getElementById('card-3')
const menuButton = document.getElementById('menu-toggle')
const navList = document.querySelector('.nav-list')

let currentIndex = 0;

document.addEventListener('click', (e) => {
    if (currentIndex === 3) {
        currentIndex = 0
    }
    else if (e.target.id === 'next-btn') {
        if (currentIndex === 0) {
            card1.style.left = '-71%'
            card2.style.left = '10%'
            card3.style.left = '91%'
            card1.classList.remove('active')
            card2.classList.add('active')
            currentIndex++
        } else if (currentIndex === 1) {
            card2.style.left = '-71%'
            card3.style.left = '10%'
            card1.style.left = '91%'
            card2.classList.remove('active')
            card3.classList.add('active')
            currentIndex++
        } else if (currentIndex === 2) {
            card3.style.left = '-71%'
            card1.style.left = '10%'
            card2.style.left = '91%'
            card3.classList.remove('active')
            card1.classList.add('active')
            currentIndex++
        }
    }
    else if (e.target.id === 'prev-btn') {
        if (currentIndex === -1) {
            currentIndex = 2
        } else if (currentIndex === 0) {
            card1.style.left = '91%'
            card3.style.left = '10%'
            card2.style.left = '-71%'
            card1.classList.remove('active')
            card3.classList.add('active')
            currentIndex--
        }
        else if (currentIndex === 1) {
            card2.style.left = '91%'
            card1.style.left = '10%'
            card3.style.left = '-71%'
            card2.classList.remove('active')
            card1.classList.add('active')
            currentIndex--
            
        }
        else if (currentIndex === 2) {
            card3.style.left = '91%'
            card2.style.left = '10%'
            card1.style.left = '-71%'
            card3.classList.remove('active')
            card2.classList.add('active')
            currentIndex--
        }
    }
})

menuButton.addEventListener('click', () => {
    navList.classList.toggle('nav-visible');
})

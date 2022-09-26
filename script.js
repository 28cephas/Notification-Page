const markAll = document.getElementById('mark')
const numberN = document.getElementById('number')
const unread = document.querySelectorAll('.unread')
const read = document.querySelectorAll('.read')
const dots = document.querySelectorAll('.dot')
const box = document.querySelectorAll('.box')
const webber = document.getElementById('webber')
const unreadMark = document.getElementById('unread-mark')
const gray = document.getElementById('gray')
const unreadGray = document.getElementById('unread-gray')
const jacob = document.getElementById('jacob')
const unreadJacob = document.getElementById('unread-jacob')

function clear(){
    if(numberN.innerHTML > 0){
        numberN.innerHTML--
    }else{
        numberN.innerHTML = 0
    }

}

markAll.addEventListener('click', () => {
    numberN.innerHTML = 0
    
    unread.forEach( eachUnread => {
        eachUnread.classList.add('read')
        eachUnread.classList.remove('unread')
    })
    dots.forEach( dot => {
        dot.style.display = 'none'
    })
})

webber.addEventListener('click', () => {
    webber.style.backgroundColor = 'white'
    clear()
    unreadMark.style.opacity = '0'
})

gray.addEventListener('click', () => {
    gray.style.backgroundColor = 'white'
    unreadGray.style.opacity = '0'
    clear()
})

jacob.addEventListener('click', () => {
    jacob.style.backgroundColor = 'white'
    unreadJacob.style.opacity = '0'
    clear()
})

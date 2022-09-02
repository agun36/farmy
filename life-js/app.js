// let get the hamburger
const hamburger = document.querySelector('.hamburger')
console.log(hamburger)
// let add event listener to the hamburger to make it function
hamburger.addEventListener('click', (e) => {
  // let get nav items list
  let navItems = document.querySelector('.parent-nav-items-left')
  // let make it work like open and close
  if (navItems.style.display === 'none') {
    navItems.style.display = 'block'
    navItems.style.width = '100%'
  } else {
    navItems.style.display = 'none'
    navItems.style.width = '0'
  }
})
// let declare a variable for login link
const navRight = document.querySelector('.parent-nav-items-right')
console.log(navRight)
// let get the login item
let login = document.querySelector('.login')
console.log(login)
login.addEventListener('click', (e) => {
  e.preventDefault()
  window.location.href = '../html/signin.html'
})

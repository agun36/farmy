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
    // navItems.style.width = '0'
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

// innitialize sign in

import {
  signInWithEmailAndPassword,
  getAuth,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js'
// import app
import { app } from './auth.js'
// declare auth
const auth = getAuth(app)
// addeventlistener and stop form refreshing using prevent default
let loginBtn = document.querySelector('#login')
console.log(loginBtn)
loginBtn.addEventListener('submit', (e) => {
  Login()
  e.preventDefault()
})

async function Login() {
  let email = document.querySelector('#email').value
  let password = document.querySelector('#password').value
  try {
    const data = await signInWithEmailAndPassword(auth, email, password)
    let activeUser = data.user.uid
    window.location.replace('../html/dashboard.html')
  } catch (err) {
    let errorMessage = err
  }
}
// Navigate back to signup page
let signUp = document.querySelector('.sign-up')
signUp.addEventListener('click', (e) => {
  e.preventDefault()
  window.location.replace('../html/signup.html')
})

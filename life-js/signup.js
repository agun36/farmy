const hamburger = document.querySelector('.hamburger')
console.log(hamburger)
// let add event listener to the hamburger to make it function
hamburger.addEventListener('click', (e) => {
  // let get nav items list
  let navItems = document.querySelector('.parent-nav-items-left')
  // let make it work like open and close
  if (navItems.style.display === 'block') {
    navItems.style.display = 'block'
    navItems.style.width = '100%'
  } else {
    navItems.style.display = 'none'
    navItems.style.width = '0'
  }
})

//innit authentication
import {
  createUserWithEmailAndPassword,
  getAuth,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js'
// import firestore
import {
  doc,
  setDoc,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js'

//import engine
import { app, db } from './auth.js'

const auth = getAuth(app)
// eventlistener to our form
let registerBtn = document.querySelector('.form')
console.log(registerBtn)
registerBtn.addEventListener('submit', (e) => {
  register()
  e.preventDefault()
})

async function register() {
  let email = document.getElementById('email').value
  console.log(email)
  let username = document.querySelector('.username').value
  console.log(username)
  let phone = document.querySelector('.phone').value
  console.log(phone)
  let address = document.querySelector('.address').value
  console.log(address)
  let password = document.getElementById('password').value
  console.log(password)
  let gender = document.querySelector('#select').value
  console.log(gender)

  try {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    const userId = data.user.uid
    const res = await setDoc(doc(db, 'users', userId), {
      email: email,
      name: username,
      phoneInput: phone,
      addressInput: address,
      genders: gender,
    })

    console.log(res)

    alert('user created successfully')
    // window.location.href = '../html/dashboard.html'
  } catch (err) {
    // if (err.message == 'Firebase: Error (auth/email-already-in-use).') {
    //   alert('email  is taken')
    // }

    console.log(err)
  }
}
// end of the register area
// login area
// add eventlister to login to listen to our command
let login = document.querySelector('.login')
console.log(login)
login.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('click')
  // window.location.replace('../html/signin.html')
})

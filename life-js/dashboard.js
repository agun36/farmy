// hamburger
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
    // navItems.position = 'fixed'
    let avarter = document.querySelector('.avarter')
    avarter.style.position = 'absolute'
    avarter.style.right = '40%'
    avarter.style.bottom = '11rem'
  } else {
    navItems.style.display = 'none'
    // navItems.style.width = '0'
  }
})
// end of hamburger

// cart
let count = 0
let sum = 0
let cart = {}

if (localStorage.getItem('count')) {
  count = parseInt(localStorage.getItem('count'))
}

if (localStorage.getItem('sum')) {
  sum = parseInt(localStorage.getItem('sum'))
}

if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'))
}

updateCart()

let btns = document.querySelectorAll('.products button')

for (let i = 0; i < btns.length; i++) {
  let btn = btns[i]
  btn.addEventListener('click', add)

  // id = btn.dataset.id;
  // if (cart.indexOf(id) >= 0) {
  //     btn.className = "added";
  //     btn.textContent = "Remove";
  // }
}

function add(event) {
  let price = Number(event.target.dataset.price)
  let title = event.target.dataset.title
  let id = event.target.dataset.id
  let dis = document.querySelector('.dis')

  if (id in cart) {
    cart[id].qty++
  } else {
    let cartItem = {
      title: title,
      price: price,
      qty: 1,
    }
    cart[id] = cartItem
  }
  dis.innerHTML = count++
  sum += price

  console.log(cart)

  // let index = cart.indexOf(event.target.dataset.id);
  // if (index >= 0) {
  //     cart.splice(index, 1);
  //     count--;
  //     sum -= price;
  //     event.target.className = "";
  //     event.target.textContent = "Add to cart";
  // } else {
  //     cart.push(event.target.dataset.id);
  //     count++;
  //     sum += price;
  //     event.target.className = "added";
  //     event.target.textContent = "Remove";
  // }
  localStorage.setItem('cart', JSON.stringify(cart))
  updateCart()
}

function updateCart() {
  // document.getElementById('sum').textContent = sum
  document.querySelector('.dis').textContent = count
  localStorage.setItem('sum', sum)
  localStorage.setItem('count', count)
}

// let call the update button
let updateBtn = document.querySelector('.btn-update')
let fileInput = document.querySelector('.files')

// updateBtn.addEventListener('click', (e) => {
//   e.preventDefault()
//   console.log('click me')
// })
// fileInput.addEventListener('change', () => {
//   // const selectedFiles = [...fileInput.files]
//   console.log('upload')
// })
// // end of cart

// innitailizing auth
import {
  onAuthStateChanged,
  signOut,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js'

// innitializing firestore
import {
  doc,
  getDoc,
} from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js'
// importing auth from auth.js
import { auth, db } from './auth.js'

// let ActiveUser = ''

let User = {}
let FullName = ''
let Email = ''
let Address = ''
let PhoneNum = ''
let Gender = ''

async function getUserData(userId) {
  const docRef = doc(db, 'users', userId)
  const userData = await getDoc(docRef)
  User = userData.data()
  setTimeout(() => {
    document.querySelector('.showName').innerHTML = User.name
    document.querySelector('.showEmail').innerHTML = User.email
    document.querySelector('.showPhone').innerHTML = User.phoneInput
    document.querySelector('.showAddress').innerHTML = User.addressInput
    document.querySelector('.showGender').innerHTML = User.genders
    document.querySelector('.showNum').innerHTML = User.uid
    console.log(User)
  }, 3000)
}

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    getUserData(user.uid)
  } else {
    window.location.replace('../html/signin.html')
  }
})
let signOutnow = document.querySelector('.logout')
signOutnow.addEventListener('click', (e) => {
  e.preventDefault()
  signOut(auth).then(() => {
    alert('Logout Successfully')
    window.location.replace('../html/signin.html')
  })
})
// const logOut = () => {
//   signOut(auth).then(() => {
//     alert('you have log out')
//     window.location.replace('../html/signin.html')
//   })
// }

// async function getUserData(userId) {
//   const docRef = doc(db, 'users', userId)
//   const userData = await getDoc(docRef)
//   User = userData.data()
//   // console.log(User)
// }

// let prevent the button from refreshing the page

// let this button take us back to dashboard
let arrowleft = document.querySelector('.back-btn')
arrowleft.addEventListener('click', () => {
  window.location.replace('../html/dashboard.html')
})
let cart = {}
if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'))
}

let tbody = document.getElementById('tbody')

for (let id in cart) {
  let item = cart[id]

  let tr = document.createElement('tr')

  let title_td = document.createElement('td')
  title_td.textContent = item.title
  tr.appendChild(title_td)

  let price_td = document.createElement('td')
  price_td.textContent = item.price
  tr.appendChild(price_td)

  let qty_td = document.createElement('td')
  qty_td.textContent = item.qty
  tr.appendChild(qty_td)

  tbody.appendChild(tr)
}
Footer

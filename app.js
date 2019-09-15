console.log('client side JS loaded')

fetch('http://localhost:3000/weather?address=Boston').then((response) => {

   response.json().then((data) => {
     if (data.error) {
         console.log(data.error)
     }else {
         console.log(data.time)
         console.log(data.temp)
     }
     })
})

const weatherform = document.querySelector('form')
const search  = document.querySelector('input')

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    console.log('Testing'+ ' ' + location)
})
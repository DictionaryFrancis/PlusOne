const modal = document.querySelector('.container')
const closeBtn = document.querySelector('.close-icon')
const cancelBtn = document.querySelector('.btn-cancel')
const loginForm = document.querySelector('#login-form')
const confirmBtn = document.querySelector('.btn-confirm')
const subscribeBtn = document.querySelector('#subscribe-btn')


subscribeBtn.addEventListener('click', function(){
    modal.style.display = 'inline'
})


closeBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

cancelBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

confirmBtn.addEventListener('click', function (event) {


    setTimeout(function() {
    document.querySelector('.modal-inner').innerHTML =
    `<h2> Thank for submited via email!Will be a pleasure be with you in that journey!<br>
    <img class="yeah-img" src="/Images/yeah-img.png" alt="Hand gesturing Rock'n'Roll">`
    }, 800)

    setTimeout(function(){
    modal.style.display = 'none'
    },1500)

})

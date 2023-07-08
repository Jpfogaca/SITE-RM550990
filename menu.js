var itemmenu = document.querySelectorAll('.item-menu')

function select(){
    itemmenu.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

itemmenu.forEach((item)=>
    item.addEventListener('click',select)
)


var BtnAbrir = document.querySelector('#btn-abrir')
var menulateral = document.querySelector('.menu-nav')

BtnAbrir.addEventListener('click', function(){
    menulateral.classList.toggle('abrir')

})


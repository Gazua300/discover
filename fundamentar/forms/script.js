const female = document.getElementById('female')
const male = document.getElementById('male')
const bissex = document.getElementById('bissex')
const assex = document.getElementById('assex')
const pansex = document.getElementById('pansex')
const other = document.getElementById('other-orientation')
var selectedGenre = document.querySelectorAll('input[name="genre"]')

const axe = document.getElementById('axe')
const blues = document.getElementById('blues')
const country = document.getElementById('country')


const enableRadios = ()=>{
    female.removeAttribute('disabled')
    male.removeAttribute('disabled')
    bissex.removeAttribute('disabled')
    assex.removeAttribute('disabled')
    pansex.removeAttribute('disabled')
}


Array.from(selectedGenre).forEach(function(genre){
    genre.addEventListener('change', function(){
        if(genre.checked){
            other.setAttribute('disabled', 'disabled')
        }
    })
})


document.getElementById('enable').addEventListener('click', ()=>{
    other.removeAttribute('disabled')
})

document.getElementById('clear').addEventListener('click', ()=>{
    other.value = null

    enableRadios()
})

other.addEventListener('input', ()=>{
    pansex.setAttribute('disabled', 'disabled')
    assex.setAttribute('disabled', 'disabled')
    bissex.setAttribute('disabled', 'disabled')
    male.setAttribute('disabled', 'disabled')
    female.setAttribute('disabled', 'disabled')   
    
    if(!other.value){
        enableRadios()
    }
})

document.getElementById('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    
})
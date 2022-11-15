const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('Onclick', ()=>{
        nav.classList.add('active');
    })
    
}
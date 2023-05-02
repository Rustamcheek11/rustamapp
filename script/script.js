window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function() {
        const header = this.document.querySelector('header');
        const newLocal = 'sticky';
        header.classList.toggle(newLocal, this.window.scrollY > 0)
    })
})
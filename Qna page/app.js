const questionbtn = document.querySelectorAll(".question-btn");
// console.log(questionbtn);

questionbtn.forEach(function(btn){
    btn.addEventListener("click", function (e) {
        const click = e.currentTarget.parentElement.parentElement;
        click.classList.toggle('show-text');
    })
});
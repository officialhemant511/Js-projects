let cnt = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll('.first');

btns.forEach((e) => {
    e.addEventListener("click", (btn) => {
        const cs = btn.currentTarget.classList;
        console.log(cs);
        if (cs.contains('Dec')) {
            cnt--;
        }
        else if (cs.contains('res')) {
            cnt = 0;
        }
        else {
            cnt++;
        }
        if (cnt < 0)
            value.style.color = "red";
        else if (cnt > 0) value.style.color = "green";
        else value.style.color = "black";

        value.textContent = cnt;
    });
});
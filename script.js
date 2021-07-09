var lilist = document.querySelectorAll('.lilist');
var link = document.querySelectorAll('.link');
link.forEach(e => {
    e.style.display = "none";
});

lilist.forEach(e => {
    e.addEventListener("click", fun)
    function fun() {
        console.log("hii");
        
        console.log(e.childNodes[1]);
        if (e.childNodes[1].style.display === 'none') {
            e.childNodes[1].style.display = 'block';
        } else {
            e.childNodes[1].style.display = 'none';
        }
    }
});

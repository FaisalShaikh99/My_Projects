let count_value = 0;

const counterdisplay = document.getElementById("Display");

function changenumberindisplay() {
    counterdisplay.textContent = count_value;
}

 document.getElementById("Increment").addEventListener("click",function() {
 count_value++;
 changenumberindisplay();
});


 document.getElementById("Decrement").addEventListener("click",function(){
 count_value--;
 changenumberindisplay();
});
 document.getElementById("Reset").addEventListener("click",function() {
 count_value = 0 ;
 changenumberindisplay();
});
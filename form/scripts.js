var times = ["8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

times.forEach(function(el){
    var time = document.createElement("option");
    time.value = el;
    time.innerHTML = el;
    document.getElementById("time").appendChild(time);
});

months.forEach(function(el){
    var month = document.createElement("option");
    month.value = el;
    month.innerHTML = el;
    document.getElementById("month").appendChild(month);
});

document.getElementById("month").addEventListener('change', function(){
    alert("chagne")
    for (var i = 1; i <= 28;  i++){
        console.log(`<option value=${i}>${i}</option>`);
    }
});
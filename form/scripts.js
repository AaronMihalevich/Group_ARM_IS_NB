var times = ["8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm"];

times.forEach(function(el){
    var time = document.createElement("option");
    time.value = el;
    time.innerHTML = el;
    document.getElementById("time").appendChild(time);
});
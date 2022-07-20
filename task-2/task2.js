let numberOfImages = document.getElementsByClassName("cell").length;
let header = document.getElementById('header');
header.innerHTML = "Количество картинок: " + numberOfImages;


function updateClock() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var hours = today.getHours();
    var minutes = today.getMinutes();

    var yyyy = today.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
     if (minutes < 10) {
        minutes = '0' + minutes;
    }
    var today = " Дата/время: " + day + '.' + month + '.' + yyyy + ' ' + hours + ':' + minutes

    header.innerHTML = "Количество картинок: " + numberOfImages + today
    
}
timer = setInterval(updateClock, 1000);
/////////////////////////


$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    $('.b-popup').hide()
});
//Функции отображения PopUp
function PopUpShow(id){
    $(id).show();
}

//Функция скрытия PopUp
function PopUpHide(id){
    $(id).hide();
}

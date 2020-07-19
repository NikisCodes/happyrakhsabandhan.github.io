// Created by mayank

var press1 = 0 // on/off phone
var press2 = 0 // 1 aapp
var press3 = 0 // 1 app
var press4 = 0  // 1 app
var press5 = 0 // 1 app
var press6 = 0 // 1 app
var press7 = 0 //1 app
var press8 = 0// 1 app
var press9 = 0 //1 app
var press10 = 0
var press11 = 0
var press12 = 0
var points = 0 
var box1Top = ["50","94","93","92","91","90","89","88","87","86","85","84","83","82","81","80","79","78","77","76","75","74","73","72","71","70","69","68","67","66","65","64","63","62","61","60","59","58","57","56","55","54","53","52","51","50","49","48","47","46","45","44","43","42","41","40","39","38","37","36","35","34","33","32","31","30","29","28","27","26","25","24","23","22","21","20","19","18","17","16","15","14","13","12","11","10","9","8","7","6","5"] 
var box1Left = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93"] 
var date = new Date() ;
var hour = date.getHours();
var minutes = date.getMinutes();
var day = date.getDay();
var month = date.getMonth();
var date2 = date.getDate();
var nums = [""]
var days = ["Mon,", "Tue,", "Wed,", "Thu,", "Fri,", "Sat,", "Sun,"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
alert ("password 2020")
$(function () {
    $("#set-time").text(hour+":"+minutes)
    $("#set-time-5").text(hour+":"+minutes)
    $("#set-time-2").text(day)
    $("#set-time-3").text(month)
    $("#apps2-points").text("Points :" + points)
    $("#apps2-box1").css("left",box1Left[0] +"%")
    $("#apps2-box1").css("top",box1Top[0] +"%")
navigator.getBattery().then(function(battery) {

    var level = battery.level;
    $("#set-bat-num").text(level * 100 + "%");
    
        var charge = document.getElementById("battery-box1");
   
    charge.style.width = level * 100 + "%";
    
    })
   
    $("#set-time-4").text(date2)
    $("#screen-unlock-box1-text1").text(nums)
    if (minutes <= 9) {
        $("#set-time").text(hour+":"+" 0"+minutes)
        $("#set-time-5").text(hour+":"+" 0"+minutes)
    }
    if (day == 1) {
        $("#set-time-2").text(days[0])
    }
    if (day == 2) {
        $("#set-time-2").text(days[1])
    }
    if (day == 3) {
        $("#set-time-2").text(days[2])
    }
    if (day == 4) {
        $("#set-time-2").text(days[3])
    }
    if (day == 5) {
        $("#set-time-2").text(days[4])
    }
    if (day == 6) {
        $("#set-time-2").text(days[5])
    }
    if (day == 7) {
        $("#set-time-2").text(days[6])
    }
    if (month == 0) {
        $("#set-time-3").text(months[0])
    }
    if (month == 1) {
        $("#set-time-3").text(months[1])
    }
    if (month == 2) {
        $("#set-time-3").text(months[2])
    }
    if (month == 3) {
        $("#set-time-3").text(months[3])
    }
    if (month == 4) {
        $("#set-time-3").text(months[4])
    }
    if (month == 5) {
        $("#set-time-3").text(months[5])
    }
    if (month == 6) {
        $("#set-time-3").text(months[6])
    }
    if (month == 7) {
        $("#set-time-3").text(months[7])
    }
    if (month == 8) {
        $("#set-time-3").text(months[8])
    }
    if (month == 9) {
        $("#set-time-3").text(months[9])
    }
    if (month == 10) {
        $("#set-time-3").text(months[10])
    }
    if (month == 11) {
        $("#set-time-3").text(months[11])
    }
})
function btnOnOff() {
press1 ++
    if (press1 == 1) {
      $("#phone-screen-on").css("display","block")
      $("#set-time").css("display","block")
      $("#set-time-2").css("display","block")
      $("#set-time-3").css("display","block")
      $("#set-time-4").css("display","block")
      $("#icon-phone-screen").css("display","block")
      $("#icon-zamok-screen").css("display","block")
      $("#icon-camera-screen").css("display","block")
      $("#screen-unlock").css("display","none")
      $("#screen-unlock-open").css("display","none")
      $("#screen-menu-btn").css("display","none")
      $("#app3Open").css("display","none")
    }
    if (press1 == 2) {
      press1 = 0
        $("#phone-screen-on").css("display","none")
        $("#set-time").css("display","none")
        $("#set-time-2").css("display","none")
        $("#set-time-3").css("display","none")
        $("#set-time-4").css("display","none")
        $("#icon-phone-screen").css("display","none")
        $("#icon-zamok-screen").css("display","none")
        $("#icon-camera-screen").css("display","none")
        $("#screen-unlock").css("display","none")
        $("#screen-unlock-open").css("display","none")
        $("#screen-menu-btn").css("display","none")
        $("#appOpen").css("display","none")
        $("#app3Open").css("display","none")
    }
}
function phone1() {
    $("#screen-unlock").css("display","block")
    $("#phone-screen-on2").css("display","block")
}
function zamok1() {
    $("#screen-unlock").css("display","block")
    $("#phone-screen-on2").css("display","block")
}
function camera1() {
    $("#screen-unlock").css("display","block")
    $("#phone-screen-on2").css("display","block")
}
function phoneScreen1() {
    $("#screen-unlock").css("display","block")
    $("#phone-screen-on2").css("display","block")
}
function numScreen0() {
    if (nums != 00) {
         nums += 0
         $("#screen-unlock-box1-text1").text(nums)
       
     }
     if (nums == 2020) {
         $("#screen-unlock").css("display","none")
    $("#phone-screen-on2").css("display","none")
    $("#phone-screen-on").css("display","none")
    $("#set-time").css("display","none")
      $("#set-time-2").css("display","none")
      $("#set-time-3").css("display","none")
      $("#set-time-4").css("display","none")
      $("#app3Open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-menu-btn").css("display","block")
      nums = [""]
     }
}
function numScreen1() {
     if (nums != 11) {
         nums += 1
         $("#screen-unlock-box1-text1").text(nums)
         
     }
     if (nums == 2020) {
         $("#screen-unlock").css("display","none")
    $("#phone-screen-on2").css("display","none")
    $("#phone-screen-on").css("display","none")
    $("#set-time").css("display","none")
      $("#set-time-2").css("display","none")
      $("#set-time-3").css("display","none")
      $("#set-time-4").css("display","none")
      $("#app3Open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-box1-text1").text("")
      $("#screen-menu-btn").css("display","block")
      nums = [""]
     }
}
function numScreen2(){
  if (nums != 22) {
         nums += 2
         $("#screen-unlock-box1-text1").text(nums)
        
     }
     if (nums == 2020) {
         $("#screen-unlock").css("display","none")
    $("#phone-screen-on2").css("display","none")
    $("#phone-screen-on").css("display","none")
    $("#set-time").css("display","none")
      $("#set-time-2").css("display","none")
      $("#set-time-3").css("display","none")
      $("#set-time-4").css("display","none")
      $("#app3Open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-box1-text1").text("")
      $("#screen-menu-btn").css("display","block")
      nums = [""]
     }
}
function numScreen3() {
    if (nums != 33) {
         nums += 3
         $("#screen-unlock-box1-text1").text(nums)
         
     }
     if (nums == 2020) {
         $("#screen-unlock").css("display","none")
    $("#phone-screen-on2").css("display","none")
    $("#phone-screen-on").css("display","none")
    $("#set-time").css("display","none")
      $("#set-time-2").css("display","none")
      $("#set-time-3").css("display","none")
      $("#set-time-4").css("display","none")
      $("#app3Open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-box1-text1").text("")
      $("#screen-menu-btn").css("display","block")
      nums = [""]
     }
}
function numScreen4() {
    if (nums != 44) {
         nums += 4
         $("#screen-unlock-box1-text1").text(nums)
         
     }
     if (nums == 2020) {
         $("#screen-unlock").css("display","none")
    $("#phone-screen-on2").css("display","none")
    $("#phone-screen-on").css("display","none")
    $("#app3Open").css("display","block")
    $("#set-time").css("display","none")
      $("#set-time-2").css("display","none")
      $("#set-time-3").css("display","none")
      $("#set-time-4").css("display","none")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-box1-text1").text("")
      $("#screen-menu-btn").css("display","block")
      nums = [""]
     }
}
function numScreen5() {
    if (nums != 55) {
         nums += 5
         $("#screen-unlock-box1-text1").text(nums)
        
     }
     if (nums == 2020) {
         $("#screen-unlock").css("display","none")
    $("#phone-screen-on2").css("display","none")
    $("#phone-screen-on").css("display","none")
    $("#set-time").css("display","none")
      $("#set-time-2").css("display","none")
      $("#set-time-3").css("display","none")
      $("#set-time-4").css("display","none")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-box1-text1").text("")
      $("#screen-menu-btn").css("display","block")
      $("#app3Open").css("display","block")
      nums = [""]
     }
}
function numScreen6() {
    if (nums != 66) {
         nums += 6
         $("#screen-unlock-box1-text1").text(nums)
         
     }
     if (nums == 2020) {
         $("#screen-unlock").css("display","none")
    $("#phone-screen-on2").css("display","none")
    $("#phone-screen-on").css("display","none")
    $("#set-time").css("display","none")
      $("#set-time-2").css("display","none")
      $("#set-time-3").css("display","none")
      $("#set-time-4").css("display","none")
      $("#app3Open").css("display","block")
      $("#screen-menu-btn").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-box1-text1").text("")
      nums = [""]
     }
}
function numScreen7() {
    if (nums != 77) {
         nums += 7
         $("#screen-unlock-box1-text1").text(nums)
         
     }
     if (nums == 2020) {
         $("#screen-unlock").css("display","none")
    $("#phone-screen-on2").css("display","none")
    $("#phone-screen-on").css("display","none")
    $("#set-time").css("display","none")
      $("#set-time-2").css("display","none")
      $("#set-time-3").css("display","none")
      $("#set-time-4").css("display","none")
      $("#app3Open").css("display","block")
      $("#screen-menu-btn").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-box1-text1").text("")
      nums = [""]
     }
}
function numScreen8() {
    if (nums != 88) {
         nums += 8
         $("#screen-unlock-box1-text1").text(nums)

     }
     if (nums == 2020) {
         $("#screen-unlock").css("display","none")
    $("#phone-screen-on2").css("display","none")
    $("#phone-screen-on").css("display","none")
    $("#set-time").css("display","none")
      $("#set-time-2").css("display","none")
      $("#set-time-3").css("display","none")
      $("#set-time-4").css("display","none")
      $("#app3Open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-menu-btn").css("display","block")
      $("#screen-unlock-box1-text1").text("")
      nums = [""]
     }
}
function numScreen9() {
     
     if (nums != 99) {
         nums += 9
         $("#screen-unlock-box1-text1").text(nums)
       
     }
     if (nums == 2020) {
         $("#screen-unlock").css("display","none")
    $("#phone-screen-on2").css("display","none")
    $("#phone-screen-on").css("display","none")
    $("#app3Open").css("display","block")
      $("#set-time").css("display","none")
      $("#set-time-2").css("display","none")
      $("#set-time-3").css("display","none")
      $("#set-time-4").css("display","none")
      $("#screen-unlock-open").css("display","block")
      $("#screen-unlock-open").css("display","block")
      $("#screen-menu-btn").css("display","block")
      $("#screen-unlock-box1-text1").text("")
      nums = [""]

     }
}
function clearNums() {
    if (nums == nums) {
        nums = [""]
        $("#screen-unlock-box1-text1").text("")
    }
}
function apps1() {
    $("#screen-unlock-open").css("display","none")
    $("#appOpen").css("display","block")
    $("#icon-phone-screen").css("display"," none")
    $("#icon-zamok-screen").css("display"," none")
    $("#icon-camera-screen").css("display"," none")
    $("#app3Open").css("display","none")
}
function btnCenter() {
    $("#screen-unlock-open").css("display","block")
    $("#appOpen").css("display","none")
    $("#icon-phone-screen").css("display"," none")
    $("#icon-zamok-screen").css("display"," none")
    $("#icon-camera-screen").css("display"," none")
    $("#app2Open").css("display","none")
    $("#app3Open").css("display","block")
    
}
function playerApps2() {
    function randint(min,max) {
        return (min + Math.ceil(Math.random()*(max + 1 - min)))-1;
    }
 function randint(min,max) {
        return (min + Math.ceil(Math.random()*(max + 1 - min)))-1;
    }
    var num1 = randint (1,89)
    var num2 = randint (1,93)
    points ++
    $("#apps2-box1").css("top",box1Top[num1] +"%")
    $("#apps2-points").text("Points :" + points)
    
    points ++
    $("#apps2-box1").css("left",box1Left[num2] +"%")
    $("#apps2-points").text("Points :" + points)
}
function apps2Shop() {
    if (press2 == 0,1) {
        $("#apps2-shop-open").css("display","block")
        press2 ++
    }
    if (press2 == 2) {
        $("#apps2-shop-open").css("display","none")
        press2 = 0
    }
}
function appBuy1() {
    if (press3 == 0) {
        if (points >= 30) {
            points -= 30
            $("#apps2-points").text("Points :" + points)
            $("#apps2-buy-1").css("color","red")
            $("#apps2-box1").css("background-color","red")
            press3 = 2
        }
        else {
            alert ("You need 30points")
        }
    }
    if (press3 == 2) {
        $("#apps2-buy-1").css("color","red")
            $("#apps2-box1").css("background-color","red")
    }
}

//
function appBuy2() {
    if (press4 == 0) {
        if (points >= 30) {
            points -= 30
            $("#apps2-points").text("Points :" + points)
            $("#apps2-buy-2").css("color","blue")
            $("#apps2-box1").css("background-color","blue")
            press4 = 2
        }
        else {
            alert ("You need 30points")
        }
    }
    if (press4 == 2) {
        $("#apps2-buy-2").css("color","blue")
            $("#apps2-box1").css("background-color","blue")
    }
}
//
function appBuy3() {
    if (press5 == 0) {
        if (points >= 30) {
            points -= 30
            $("#apps2-points").text("Points :" + points)
            $("#apps2-buy-3").css("color","green")
            $("#apps2-box1").css("background-color","green")
            press5 = 2
        }
        else {
            alert ("You need 30points")
        }
    }
    if (press5 == 2) {
        $("#apps2-buy-3").css("color","green")
            $("#apps2-box1").css("background-color","green")
    }
}
function apps2() {
    $("#app2Open").css("display","block")
}
//
function appBuy4() {
    if (press6 == 0) {
        if (points >= 30) {
            points -= 30
            $("#apps2-points").text("Points :" + points)
            $("#apps2-buy-4").css("color","skyblue")
            $("#apps2-box1").css("background-color","skyblue")
            press6 = 2
        }
        else {
            alert ("You need 30points")
        }
    }
    if (press6 == 2) {
        $("#apps2-buy-4").css("color","skyblue")
            $("#apps2-box1").css("background-color","skyblue")
    }
}
function apps2() {
    $("#app2Open").css("display","block")
    $("#app3Open").css("display","none")
}
//
function appBuy5() {
    if (press7 == 0) {
        if (points >= 30) {
            points -= 30
            $("#apps2-points").text("Points :" + points)
            $("#apps2-buy-5").css("color","lime")
            $("#apps2-box1").css("background-color","lime")
            press7 = 2
        }
        else {
            alert ("You need 30points")
        }
    }
    if (press7 == 2) {
        $("#apps2-buy-5").css("color","lime")
            $("#apps2-box1").css("background-color","lime")
    }
}
function appBuy6() {
    if (press8 == 0) {
        if (points >= 30) {
            points -= 30
            $("#apps2-points").text("Points :" + points)
            $("#apps2-buy-6").css("color","darkred")
            $("#apps2-box1").css("background-color","darkred")
            press8 = 2
        }
        else {
            alert ("You need 30points")
        }
    }
    if (press8 == 2) {
        $("#apps2-buy-6").css("color","darkred")
            $("#apps2-box1").css("background-color","darkred")
    }
}
function appBuy7() {
    if (press9 == 0) {
        if (points >= 30) {
            points -= 30
            $("#apps2-points").text("Points :" + points)
            $("#apps2-buy-7").css("color","cyan")
            $("#apps2-box1").css("background-color","cyan")
            press9 = 2
        }
        else {
            alert ("You need 30points")
        }
    }
    if (press9 == 2) {
        $("#apps2-buy-7").css("color","cyan")
            $("#apps2-box1").css("background-color","cyan")
    }
}
function apps2() {
    $("#app2Open").css("display","block")
    $("#app3Open").css("display","none")
}



function clearResult() {
    var res = document.getElementById("res");
    res.innerHTML = 0;
}

function equal() {
    var res = document.getElementById("res").innerHTML;
    var answer = eval(res);
    document.getElementById("res").innerHTML = answer;
}

function delChar() {
    var res = document.getElementById("res");
    res.innerHTML = res.innerHTML.substr(0, res.innerHTML.length-1);
    if (res.innerHTML == "") {
        res.innerHTML = 0;
    }
}

function addOne() {
    var res = document.getElementById("res");
    if (res.innerHTML == 0) {
        res.innerHTML = 1;
    } else if (res.innerHTML == "Infinity") {
        res.innerHTML = 1;
    } else {
        res.innerHTML += 1;
    }
}

function addTwo() {
    var res = document.getElementById("res");
    if (res.innerHTML == 0) {
        res.innerHTML = 2;
    } else if (res.innerHTML == "Infinity") {
        res.innerHTML = 2;
    } else {
        res.innerHTML += 2;
    }
}

function addThree() {
    var res = document.getElementById("res");
    if (res.innerHTML == 0) {
        res.innerHTML = 3;
    } else if (res.innerHTML == "Infinity") {
        res.innerHTML = 3;
    } else {
        res.innerHTML += 3;
    }
}

function addFour() {
    var res = document.getElementById("res");
    if (res.innerHTML == 0) {
        res.innerHTML = 4;
    } else if (res.innerHTML == "Infinity") {
        res.innerHTML = 4;
    } else {
        res.innerHTML += 4;
    }
}

function addFive() {
    var res = document.getElementById("res");
    if (res.innerHTML == 0) {
        res.innerHTML = 5;
    } else if (res.innerHTML == "Infinity") {
        res.innerHTML = 5;
    } else {
        res.innerHTML += 5;
    }
}

function addSix() {
    var res = document.getElementById("res");
    if (res.innerHTML == 0) {
        res.innerHTML = 6;
    } else if (res.innerHTML == "Infinity") {
        res.innerHTML = 6;
    } else {
        res.innerHTML += 6;
    }
}

function addSeven() {
    var res = document.getElementById("res");
    if (res.innerHTML == 0) {
        res.innerHTML = 7;
    } else if (res.innerHTML == "Infinity") {
        res.innerHTML = 7;
    } else {
        res.innerHTML += 7;
    }
}

function addEight() {
    var res = document.getElementById("res");
    if (res.innerHTML == 0) {
        res.innerHTML = 8;
    } else if (res.innerHTML == "Infinity") {
        res.innerHTML = 8;
    } else {
        res.innerHTML += 8;
    }
}

function addNine() {
    var res = document.getElementById("res");
    if (res.innerHTML == 0) {
        res.innerHTML = 9;
    } else if (res.innerHTML == "Infinity") {
        res.innerHTML = 9;
    } else {
        res.innerHTML += 9;
    }
}

function addZero() {
    var res = document.getElementById("res");
    if (res.innerHTML == 0) {
        res.innerHTML = 0;
    } else if (res.innerHTML == "Infinity") {
        res.innerHTML = 0;
    } else {
        res.innerHTML += 0;
    }
}

function addPoint() {
    var res = document.getElementById("res");
    if (res.innerHTML == "Infinity") {
        res.innerHTML += "";
    } else {
        res.innerHTML += ".";
    }
}

function addPlus() {
    var res = document.getElementById("res");
    if(res.innerHTML == "Infinity") {
        res.innerHTML = "+";
    } else {
        res.innerHTML += "+";
    }
}

function addMinus() {
    var res = document.getElementById("res");
    if(res.innerHTML == "Infinity") {
        res.innerHTML = "-";
    } else {
        res.innerHTML += "-";
    }
}

function addS1() {
    var res = document.getElementById("res");
    if(res.innerHTML == "Infinity") {
        res.innerHTML = "*";
    } else {
        res.innerHTML += "*";
    }
}

function addS2() {
    var res = document.getElementById("res");
    if(res.innerHTML == "Infinity") {
        res.innerHTML = "/";
    } else {
        res.innerHTML += "/";
    }
}

function addS3() {
    var res = document.getElementById("res");
    if(res.innerHTML == "Infinity") {
        res.innerHTML = "%";
    } else {
        res.innerHTML += "%";
    }
}
function btnLeft() {
    
}
function btnRight() {
    
}


function appBuy8() {
    if (press10 == 0) {
        if (points >= 40) {
            points -= 40
             $("#apps2-points").text("Points :" + points)
            $("#apps2-buy-8").css("color","gray")
            $("#apps2-box1").css("border-radius","0% 0% 0% 0%")
            press10 = 2
        }
        else {
            alert ("You need 40points")
        }
    }
    if (press10 == 2) {
        $("#apps2-box1").css("border-radius","0% 0% 0% 0%")
    }
}
function appBuy9() {
    if (press11 == 0) {
        if (points >= 40) {
            points -= 40
             $("#apps2-points").text("Points :" + points)
            $("#apps2-buy-9").css("color","gray")
            $("#apps2-box1").css("border-radius","50%")
            press11 = 2
        }
        else {
            alert ("You need 40points")
        }
    }
    if (press11 == 2) {
        $("#apps2-box1").css("border-radius","50%")
    }
}
function appBuy10() {
    if (press12 == 0) {
        if (points >= 40) {
            points -= 40
             $("#apps2-points").text("Points :" + points)
            $("#apps2-buy-10").css("color","gray")
            $("#apps2-box1").css("border-radius","20% 0% 20% 0%")
            press12 = 2
        }
        else {
            alert ("You need 40points")
        }
    }
    if (press12 == 2) {
        $("#apps2-box1").css("border-radius","20% 0% 20% 0%")
    }
}


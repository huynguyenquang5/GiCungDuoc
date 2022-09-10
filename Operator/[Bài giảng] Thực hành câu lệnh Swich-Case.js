// let opera = "/"
// let a = 6;
// let b = 3;
// switch (opera){
//     case '+': alert("a + b = " + (a+b)); break;
//     case '-': alert("a - b = " + (a-b)); break;
//     case '*': alert("a * b = " + (a*b)); break;
//     case '/': alert("a / b = " + (a/b)); break;
//     default: alert("khong co phep toan"); break;
// }

// let a = 100;
// let b = 200;
//
// switch (a) {
//     case 100: alert("a = " + a);
//     switch (b) {
//         case 200: alert("b = " + b);
//     }
// }

// let curDate = new Date();
// let time = curDate.getHours();
// if (time < 10) {
//     greeting = "Good morning";
// } else if (time < 20) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// alert(greeting);


// switch (new Date().getDay()) {
//     case 0:
//         day = "Chủ Nhật";
//         break;
//     case 1:
//         day = "Thứ hai";
//         break;
//     case 2:
//         day = "Thứ ba";
//         break;
//     case 3:
//         day = "Thứ tư";
//         break;
//     case 4:
//         day = "Thứ năm";
//         break;
//     case 5:
//         day = "Thứ sáu";
//         break;
//     case 6:
//         day = "Thứ bảy";
//         break;
// }
// document.write(day);

// switch (new Date().getDay()) {
//     case 6:
//         text = "Today is Saturday";
//         break;
//     case 0:
//         text = "Today is Sunday";
//         break;
//     default:
//         text = "Looking forward to the Weekend";
// }
// document.write(text);

// switch (new Date().getDay()) {
//     case 1:
//     case 2:
//     case 3:
//     default:
//         text = "Looking forward to the Weekend";
//         break;
//     case 4:
//     case 5:
//         text = "Soon it is Weekend";
//         break;
//     case 0:
//     case 6:
//         text = "It is Weekend";
// }
// document.write(text)

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
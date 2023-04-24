// Dạng đầy đủ

if (condition){ //true - so sánh & logic
    //statements
}else{
    //statements
}

// Dạng thiếu
if(condition){
    //statements
}

// Lồng nhau
if(condition){ // true
    if(condition2){ //true

    }
}else {

}

//Bậc thang
if (condition){
    //statements
}else if (condition2){

}else if (condition3){

}else {

}

//Switch
let day = parseInt(prompt("Nhập ngày"));
switch (day) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Ngày đi làm")
        break;
    case 7:
    case 8:
        console.log("Ngày nghỉ")
        break;
    default:
        console.log("Về hành tinh của bạn đi")
}
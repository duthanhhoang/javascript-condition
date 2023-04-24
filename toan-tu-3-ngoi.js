let a = 2;
let b = 2;

if ((a + b) < 4) {
    if((a+b) < 2){
        result = "Superlow"
    }else {
        result = 'Below';
    }
} else {
    result = 'Over';
}

(a+b) < 4 ? (a+b)<2 ? result = "superlow": result = "Below" : result = "Over";
// result = (a+b) < 4 ? "Below" : "Over";
console.log(result);
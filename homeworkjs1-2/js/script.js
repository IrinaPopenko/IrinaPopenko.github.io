function pow(base,exponent){

    var result;

    if (base == 0){
        result = 0;
        return result;
    }

    if (exponent == 0){
        result = 1;
        return result;
    }else if (exponent == 1){
        result = base;
        return result;
    }

    result = base;

    for (var i = 2; i <= exponent; i++){
        result *= base;
    }

    return result;
}

var base = prompt("Ввести число");
var exponent = prompt("Ввести степень");

console.log("Результат = ", pow(base, exponent));
function doubleValues(arr){
    return arr.map(function(num){
        return num * 2;
    });
}

function onlyEvenValues(arr){
    return arr.filter(function(num){
        return num % 2 === 0;
    });
}

function showFirstAndLast(arr){
    return arr.map(function(str){
        return str[0] + str[str.length - 1];
    });
}

function addKeyAndValue(arr, key, value){
    return arr.map(function(obj){
        obj[key] = value;
        return obj;
    });
}

function vowelCount(str){
    const vowels = "aeiou";
    const result = {};

    str.toLowerCase().split("").forEach(function(char){
        if(vowels.includes(char)){
            result[char] = (result[char] || 0) + 1;
        }
    });

    return result;
}

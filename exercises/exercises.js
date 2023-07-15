// Question 1
function stripPunctuation(e) {
    return e.replace(/[^0-9A-Z]+/gi,"");
}

// Question 2
function rotateArray(mainArr) {
    if (Array.isArray(mainArr)){
        let arr = [...mainArr]
        if(arr.length == 0){
            return [];
        }else {
            let rotatedArr = [];
        for (let i=0; i < arr.length; i++){
            rotatedArr.push(arr[i])
        }
        rotatedArr.push(rotatedArr.shift())
        return rotatedArr 
        }
    }else {
        return undefined
    }
}

// Question 3
function letterCaseCounts(str) {
    let lowercase = [];
    let uppercase = [];
    let neither = [];

    for (let i=0; i < str.length; i++){
        if (str[i].match( /[A-Z]/)){
            uppercase.push(str[i])
        } else if (str[i].match( /[a-z]/)) {
            lowercase.push(str[i])
        } else {
            neither.push(str[i])
        }
        
    }
    return { lowercase: lowercase.length,
             neither: neither.length, 
             uppercase: uppercase.length } 
}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };

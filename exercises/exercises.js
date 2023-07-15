// Question 1
function stripPunctuation(e) {
    return e.replace(/[^0-9A-Z]+/gi,"");
}

// Question 2
function rotateArray() {
    if(arr.length == 0){
        return []
    } else if (Array.isArray(arr)){
        let rotatedArr = [];
        for (let i=0; i < arr.length; i++){
            rotatedArr.push(arr[i])
        }
        rotatedArr.push(rotatedArr.shift())
        return rotatedArr
    } else {
        return undefined
    }
}

// Question 3
function letterCaseCounts() {
    
}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };

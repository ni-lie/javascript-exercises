const reverseString = function(inputString) {
    let arr_string = inputString.split('');
    
    let reversed_string = arr_string.reduce(
                                        (acc, char) => char + acc
                                        , '');
    return reversed_string;
};

// Do not edit below this line
module.exports = reverseString;

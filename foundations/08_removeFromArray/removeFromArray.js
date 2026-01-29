const removeFromArray = function(inputArray, ...arrayOfValuesToRemove) {
    filteredArray = inputArray.filter(item => !arrayOfValuesToRemove.includes(item));
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;

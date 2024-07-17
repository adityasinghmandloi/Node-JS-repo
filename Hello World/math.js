function add(a, b){
    return a+b;
}


function sub(a, b){
    return a-b;
}

// multiple export - module.exports can be done once only
module.exports ={addFn: add, subFn: sub};

//exports.function-name can be used multiple time
/*exports.add=(a, b)=>a+b

exports.sub=(a, b)=>a-b*/

// Depends on the use caase which one to be used or preffered ==============most preferable====module.exports//////////
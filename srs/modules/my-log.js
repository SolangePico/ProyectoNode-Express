module.exports.info = function info(text){
    console.log("info:", text);
    return text;
}

module.exports.error = function error(text){
    console.log("error:", text);
    return text;
}

//module.exports = {info, error};


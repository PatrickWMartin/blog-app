const getDate = function(){
    let d = new Date();
    return `${d.getFullYear()}-${d.getDate()}-${d.getMonth()+1}T${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

}
//Logging

const reqLogger = (req, _, next) => {
    console.log(`${getDate()}\t${req.method}\t${req.headers.origin}\t${req.url}`)
    next()
};

export {reqLogger}

const middlewareObs = (req, res, next) => {
    console.log("hai")
    next();
}

module.exports = middlewareObs
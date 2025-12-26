const {constants} = require("../constants");

const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode?res.statusCode:500; // if true take statusCode or 500 
    switch(statusCode){
        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden",
                message:err.message, // err is the error thrown - throw new Error(---- meassage)
                stackTrace:err.stack, // location of the err 
            });
        case constants.NOT_FOUND:
            res.json({
                title:"Not found",
                message:err.message, // err is the error thrown - throw new Error(---- meassage)
                stackTrace:err.stack, // location of the err 
            });
        case constants.SERVER_ERROR:
            res.json({
                title:"server error",
                message:err.message,
                stackTrace:err.stack, 
            });
        case constants.UNAUTHORIZED:
            res.json({
                title:"Unauthorized",
                message:err.message,
                stackTrace:err.stack, 
            });
        case constants.VALIDATION_ERROR:
            res.json({
                title:"validation error",
                message:err.message,
                stackTrace:err.stack,
            });
        default:
            console.log(err);
            break;
    }
}

module.exports = errorHandler;
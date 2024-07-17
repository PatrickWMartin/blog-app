import { writeLogsToFile, getDate } from "./logEvents.js"

function errorHandler (err, req, res, next) {
    const errorLogMsg = `${getDate()}\tERROR: ${err.message}\t${req.url}`
    writeLogsToFile('errorLogs.txt', errorLogMsg);
    console.error(errorLogMsg);
    res.status(500);
    res.send('ERROR: ' + err.message);
}

export {errorHandler}

import { existsSync, mkdirSync, appendFileSync } from 'fs'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url'

const getDate = function(){
    let d = new Date();
    return `${d.getFullYear()}-${d.getDate()}-${d.getMonth()+1}T${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

}

const reqLogger = (req, _, next) => {
    const logConent = `${getDate()}\t${req.method}\t${req.headers.origin}\t${req.url}`;
    console.log(logConent);
    writeLogsToFile('reqLogs.txt', logConent);
    next()
};

const writeLogsToFile = (logFile, logContent) => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const logsPath = join(__dirname, '..', 'logs'); 
    if(!existsSync(logsPath)){
        mkdirSync(logsPath);
    }
    appendFileSync(join(logsPath,logFile), logContent+'\n');
};

export {reqLogger, writeLogsToFile, getDate}

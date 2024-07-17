import 'dotenv/config';

const whitelist = [process.env.ORIGIN_URL];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || (process.env.ENV === 'dev' && !origin)){
            callback(null, true)
        } else {
            callback(new Error('CORS Policy Violation'))
        }
    },
    optionsSuccessStatus: 200,
};

export {corsOptions} 

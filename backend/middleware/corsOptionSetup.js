import 'dotenv/config';

const whitelist = [process.env.ORIGIN_URL];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || (process.env.ENV === 'dev' && !origin)){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200,
};

export {corsOptions} 

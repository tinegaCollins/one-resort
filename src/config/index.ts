import dotenv from 'dotenv';

dotenv.config();

 
const MONGO_URL = process.env.MONGO_URL;
const SERVER_PORT = process.env.PORT ? process.env.PORT : 8080;
const BREVO_PASS = process.env.BREVO_PASS;
const BREVO_EMAIL = process.env.BREVO_EMAIL;


export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    },
    mailConfig: {
        host: 'smtp-relay.brevo.com',
        port: 587,
        secure: false, 
        auth: {
            user: BREVO_EMAIL,
            pass: BREVO_PASS,
        },
    },
    from: BREVO_EMAIL,
    support :'collinstinega003@gmial.com',
}
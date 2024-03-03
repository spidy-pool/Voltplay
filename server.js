import express from 'express';
import dotenv from 'dotenv';
import Defaultdata from './default.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';


import Connection from './database/db.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
import path from 'path';




dotenv.config();

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "./client/build")));


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function(err){
        res.status(500).send(err);
    });
});

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const URP = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@cluster07.aomjovw.mongodb.net/?retryWrites=true&w=majority`

Connection(URP);






app.listen(PORT, () => console.log(`port is running`));
Defaultdata();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';

paytmParams['EMAIL']='www.spidypool8171@gmail.com';
paytmParams['MOBILE_NO']='1234567890';












// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
// }

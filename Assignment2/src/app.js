import express, { request, response } from 'express';
import bodyParser from 'body-parser';
import {playLottery} from './game';

    const app = express();

    //app.use(express.urlencoded);

    app.use(express.static('public'));


    // create application/json parser
    var jsonParser = bodyParser.json()
 
    // create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false });
 
    // POST /login gets urlencoded bodies
    app.post('/games', urlencodedParser, function (req, res) {
        
        let output = playLottery(req.body.choice);
        if (output==0)
              return res.redirect('/happy.html');
        else 
            return res.redirect('/sad.html');
    });

    app.get('/',function(req,res)
    {
     // returns static page index.html
        res.sendFile('../public/index.html');
    });

    app.get('/happy.html',function(req,res)
    {
     // returns static page index.html
        res.sendFile('../public/Happy.html');
    });

    
    app.get('/sad.html',function(req,res)
    {
     // returns static page index.html
        res.sendFile('../public/sad.html');
    });

     app.post('/submit-form',(req,res)=>{
        let num = req.body.choice;
        let lottery = playLottery(parseFloat(choice));
        response.send(lottery);
    }); 

export default app;

const express = require('express');
const app = express();
const Url = require("./model/Site")
const shortid = require('shortid')



const dotenv = require('dotenv')
dotenv.config();
const dbConnect = require('./config/db/dbConnect')


dbConnect();


app.use(express.json())

app.get('/', (req, res) => {
    res.json("hello")
})
//---short url generator
app.post('/short', async (req, res) => {
    const { origUrl } = req.body;
    const base = process.env.BASE;
    console.log(base)
  
    const urlId = shortid.generate();
    console.log( "kj " + urlId);
   // if (validateUrl(origUrl)) {
      try {
        let url = await Url.findOne({ origUrl });
        if (url) {
          res.json(url);
        } else {
          const shortUrl = `${base}/${urlId}`;
          console.log(shortUrl);
  
          url = new Url({
            origUrl,
            shortUrl,
            urlId,
            //date: new Date(),
          });
  
          await url.save();
          res.json(url);
        }
      } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
      }
    
  });

//----
app.get('/:urlId', async (req, res) => {

    //console.log("he")
    const shortUrl = await Url.findOne({ urlId: req.params.urlId })
    if (shortUrl == null) return res.sendStatus(404)
  
    //shortUrl.clicks++
    shortUrl.save()
  
    res.redirect(shortUrl.origUrl)
  })
//




const PORT = process.env.PORT || 5000;















app.listen(PORT, console.log(`Using this port ${PORT}`));
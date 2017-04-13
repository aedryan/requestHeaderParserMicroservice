const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.use('/favicon.ico', express.static("favicon.ico"));

app.get('/', (req, res) => {
    const ip = req.ip;
    const language = req.header("accept-language").replace(/,.+/,'');
    const operatingSystem = req.header("user-agent").replace(/\).+/,'').slice(req.header("user-agent").indexOf("(") + 1);

    res.json({ip: ip, language: language, OS: operatingSystem});
});

app.listen(app.get('port'), () => {
    console.log("App is running", app.get('port'));
});
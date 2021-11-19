const express = require('express')
const app = express()
const port = 5000

const moogoose = require('mongoose')
moogoose.connect('mongodb+srv://dublesy:sypark!2@psy.8wpnq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connnected..'))
  .catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

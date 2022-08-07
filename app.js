const express = require('express')
const { dirname } = require('path')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine','ejs')

app.use('/static',express.static(path.join(__dirname,'public'))) 
app.use('/assets',express.static(path.join(__dirname,'public/assets')))



app.get('/', (req, res) => {
    res.render('index',{title:'Login System'})
}
)

app.use('/about', (req, res) => {
    res.render('about')
}
)

app.use('/contact', (req, res) => {
    res.render('contact')
}
)

app.listen(port, () => {
console.log(`Example app listening on port ${port}!`)
})
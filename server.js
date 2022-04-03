const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()
const DB = 'mongodb+srv://Bhumit47:bhumit47123@cluster0.mvgtd.mongodb.net/blog?retryWrites=true&w=majority'

mongoose.connect(DB, {
}).then(()=>{
  console.log('successful');
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(400)

// mongodb+srv://Bhumit47:bhumit47123@cluster0.jtbna.mongodb.net/Blog?retryWrites=true&w=majority


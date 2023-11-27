const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
//express app

const app = express();
const dbURI='mongodb+srv://netjohn:johnninja123@cluster0.si3wl2r.mongodb.net/Nodetut?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result)=>app.listen(7000))
.catch((err) => console.log(err));


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

//listen for requests
//register view engine

//connect to monogobdb



// app.use((req, res, next)=>{
//     console.log('new request made');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     next();
// });
//static files


// app.use(express.static('public'));
// app.use(morgan('dev'));

// app.get('/add-blog', (req, res)=>{
//     const blog = new Blog({
//         title:'new blog 2',
//         snippet:'about my blog',
//         body:'more about my blog'
//     });

//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// });



// app.get('/all-blogs', (req, res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// });

// app.get('/single-blog', (req, res)=>{
//     Blog.findById('65578621c634b0d51352125f')
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// });

app.get('/', (req, res)=>{
    // res.send('<p>Home page</p>');
    // res.sendFile('./views/index.html', {root: __dirname});
    // console.log(res.statusCode)
    res.redirect('/blogs');
})

app.get('/about', (req, res)=>{
    // res.sendFile('./views/about.html', {root: __dirname});
    // console.log(res.statusCode)
    res.render('about', {title:'About'});

    

})

app.use('/blogs', blogRoutes)

app.use((req, res)=>{
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    // console.log(res.statusCode)
    res.status(404).render('404', {title:'404'});
})



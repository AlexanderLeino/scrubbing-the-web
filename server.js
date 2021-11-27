const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { contains } = require('cheerio/lib/static')

const PORT = 3001
const app = express()

app.use(express.static('public'))



const movies = []



    axios.get('https://www.esquire.com/entertainment/movies/g3383/best-horror-movies-of-all-time/')
    .then((response) => {
        const html = response.data
       
        const $ = cheerio.load(html)
        
        $('.listicle-slide-hed-text', html).each(function(){
            const title = $(this).text()
        
                movies.push({
                    title: title,
                })
                
                
               
                
                

               
                
            })
            
        })
    
    app.get('/', (req, res) => {
        console.log('Get Route was hit')
        res.json(movies)
    })


    app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}, have fun :) !`)
    })
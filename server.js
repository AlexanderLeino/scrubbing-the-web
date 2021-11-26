const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')



const PORT = 3001
const app = express()

app.use(express.static('public'))

const playerNames = []

const url = 'https://www.packers.com/team/stats/'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        $('.nfl-o-roster__player-name',html).each(function(){
            let name = $(this).text()
            playerNames.push(name)
            
            let playerNamesFiltered = [...new Set(playerNames)]
            playerNamesFiltered.sort()
        $()
            
            
        })
        
    })
    .catch(e => {
        console.log(e)
    })
    
    app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}, have fun :) !`)
    })
   
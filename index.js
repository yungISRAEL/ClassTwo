const express = require('express');
const app = express()
const port = 8152;
const worldCup = [
    {
        country:"France",
        player: "Kylian Mbappe",
        coach: "Didier Deschamps",
        number: "10"
    },

    {
        country: "brazil",
        player: "Neymar Jr",
        coach: "Tite",
        number: "10"
    },

    {
        country: "Argentina",
        player: "Lionel Messi",
        coach: "Lionel Scaloni",
        number: "10"
    },

    {
        country: "Germany",
        player: "Manuel Neuer",
        coach: "Hansi Flick",
        number: "1"
    },

    {
        country: "Spain",
        player: "Sergio Ramos",
        coach: "Luis Enrique",
        number: "4"
    }

]

app.get('/', (req, res) => {
    res.send('Welcome to Backend Class')
    console.log('I have accessed the Path');
    
})

app.get("/worldcup", (req, res) => {
    res.send(worldCup)
    // console.log('I have accessed the Path');
    
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
})
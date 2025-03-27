var request = require('request-promise');
const { user }= require('../models')
exports.listMovies = async (req, res) =>{
    try {
        const { search } = req.query
        let getMovies = await getMoviewApiCall(search)
        console.log("Incoming request", getMovies)
        console.log("Incoming request", typeof getMovies)
        res.render('movie', { movie: getMovies });

    } catch (error) {
        console.error(error)
    }
}

const getMoviewApiCall = async (search) => {
    try {
        let apikey = "OMDB_API_KEY";
        var options = {
            'method': 'GET',
            'url': `http://www.omdbapi.com/?t=${search}&apikey=${apikey}`,
            'headers': {
            }
        };
        let getResponse = await request(options)
        if (typeof getResponse == 'string') getResponse = JSON.parse(getResponse)
            return getResponse
    } catch (error) {
        console.error(error)
    }
}

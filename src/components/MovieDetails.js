import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`)

            .then(res => {
                console.log(res.data, 'res');
            })

            .catch(err => { console.log(err) })
    }, [])
    return (
        <div>
            hello from movie details
        </div>
    )
}

export default MovieDetails

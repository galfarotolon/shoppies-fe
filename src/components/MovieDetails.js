import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import placeholder from '../images/placeholder.png'

const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`)

            .then(res => {
                console.log(res.data, 'res');
                setMovieDetails(res.data)
            })

            .catch(err => { console.log(err) })
    }, [])
    return (
        <div className='movie-Details-container'>
            {
                movieDetails && (<h2>{movieDetails.Title}</h2>)
            }


        </div>
    )
}

export default MovieDetails

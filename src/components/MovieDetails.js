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
        <div className='details-container'>
            {
                movieDetails && (
                    <>
                        <div className='details-poster'>
                            <img src={movieDetails.Poster} />
                            <p>{movieDetails.Year}</p>
                            <p>{movieDetails.Runtime}</p>
                        </div>
                        <div className='details-info'>
                            <h2>{movieDetails.Title}</h2>

                            <h5>{movieDetails.Genre}</h5>
                            <p>{movieDetails.Plot}</p>
                            <p>{movieDetails.Actors}</p>
                            <p>{movieDetails.BoxOffice}</p>
                            <p>{movieDetails.Director}</p>
                            <p>{movieDetails.Rated}</p>
                            {movieDetails.Ratings.map(rating => {
                                console.log(rating.Source);

                                return (<>

                                    <h3>{rating.Source}</h3>
                                    <p>{rating.Value}</p>
                                </>)

                            })}

                            <p>{movieDetails.Awards}</p>
                            <p>{movieDetails.Writer}</p>
                            <p>{movieDetails.Production}</p>



                        </div>
                    </>

                )}


        </div>
    )
}

export default MovieDetails

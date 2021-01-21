import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'


const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState();

    const { id } = useParams();
    const history = useHistory();



    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`)

            .then(res => {
                setMovieDetails(res.data)
            })

            .catch(err => { console.log(err) })
    }, [])


    return (
        <div className='details-container'>
            {movieDetails && (
                <>
                    <div className='details-poster'>
                        <img src={movieDetails.Poster} />
                        {movieDetails.Ratings.map((rating, idx) => {
                            return (<div className='ratings' key={idx}>
                                <p> <strong>{rating.Source}</strong>: {rating.Value}</p>
                            </div>)
                        })}

                    </div>
                    <div className='details-info'>

                        <h2>{movieDetails.Title}</h2>
                        <button onClick={() => history.push('/')} ><i className="far fa-times-circle fa-2x"></i></button>

                        <p><strong>Year Released: </strong>{movieDetails.Year}</p>
                        <p><strong>Runtime: </strong>{movieDetails.Runtime}</p>
                        <p><strong>Genre: </strong>{movieDetails.Genre}</p>
                        <p><strong>Plot: </strong>{movieDetails.Plot}</p>
                        <p><strong>Main Cast: </strong> {movieDetails.Actors}</p>
                        <p><strong>Box Office: </strong> {movieDetails.BoxOffice}</p>
                        <p><strong>Directed by: </strong> {movieDetails.Director}</p>
                        <p><strong>Rating: </strong> {movieDetails.Rated}</p>
                        <p><strong>Awards and Nominations: </strong> {movieDetails.Awards}</p>
                        <p><strong>Writers: </strong>{movieDetails.Writer}</p>
                        <p><strong>Produced by: </strong> {movieDetails.Production}</p>



                    </div>
                </>

            )}


        </div>
    )
}

export default MovieDetails

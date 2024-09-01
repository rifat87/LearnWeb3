import React from 'react';


//  Now we are going to  use props for  multiple use,  but  we can't  use props here, otherwise we have to add props to everywhere. Thats why we will use destructuring
const MovieCard = ({ movie }) => {
    return(
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A'?movie.Poster: 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;
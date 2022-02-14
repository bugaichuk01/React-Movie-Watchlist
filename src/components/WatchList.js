import React from 'react';
import {useSelector} from "react-redux";
import MovieCard from "./MovieCard";

function WatchList() {
    const {watchlist} = useSelector(state => state);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My Watchlist</h1>
                    <span className='count-pill'>{watchlist.length} {watchlist.length === 1 ? 'Movie' : 'Movies'}</span>
                </div>
                <div className="movie-grid">
                    {watchlist.length > 0
                        ? (
                            watchlist.map((movie) => (
                                <MovieCard movie={movie} type='watchlist'/>
                            )))
                        : (
                            <h1 className='no-movies'>No movies in your list, add some!</h1>
                        )}
                </div>
            </div>
        </div>
    );
}

export default WatchList;

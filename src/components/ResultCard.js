import {useDispatch, useSelector} from "react-redux";
import {addToWatched, addToWatchlist} from "../store/actions";

function ResultCard({movie}) {
    const dispatch = useDispatch();
    const store = useSelector(state => state)

    let storedMovie = store.watchlist.find((item) => item.id === movie.id);
    let storedMovieWatched = store.watched.find((item) => item.id === movie.id);


    const toWatchlist = () => {
        dispatch(addToWatchlist(movie))
    }

    const toWatched = () => {
        dispatch(addToWatched(movie))
    }

    return (
        <div>
            <div className="result-card">
                <div className="poster-wrapper">
                    {movie.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                             alt={`${movie.title} Poster`}
                        />
                    ) : (
                        <div className="filter-poster"></div>
                    )}
                </div>
                <div className="info">
                    <div className="header">
                        <h3 className="title">{movie.title}</h3>
                        <h4 className="release-date">
                            {movie.release_date ? movie.release_date.replaceAll('-', '.') : '-'}
                        </h4>
                    </div>
                    <div className="controls">
                        <button
                            disabled={!!storedMovie || !!storedMovieWatched}
                            className="btn"
                            onClick={toWatchlist}
                        >Add to Watch List</button>

                        <button
                            disabled={!!storedMovieWatched}
                            className="btn"
                            onClick={toWatched}
                        >Add to Watched</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultCard;
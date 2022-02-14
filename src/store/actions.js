import {
    ADD_TO_WATCHED,
    ADD_TO_WATCHLIST,
    MOVE_TO_WATCHLIST,
    REMOVE_FROM_WATCHED,
    REMOVE_FROM_WATCHLIST
} from './constants';

export const addToWatchlist = (payload) => ({type: ADD_TO_WATCHLIST, payload});
export const removeFromWatchlist = (payload) => ({type: REMOVE_FROM_WATCHLIST, payload});
export const addToWatched = (payload) => ({type: ADD_TO_WATCHED, payload});
export const removeFromWatched = (payload) => ({type: REMOVE_FROM_WATCHED, payload});
export const moveToWatchlist = (payload) => ({type: MOVE_TO_WATCHLIST, payload});
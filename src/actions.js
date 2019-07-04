import {CHANGE_SEARCHFIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FAIL
} from './constants';

export const setSearchField = (text) => ({
    payload : text,
    type : CHANGE_SEARCHFIELD
})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then( data => dispatch({ type : REQUEST_ROBOTS_SUCCESS , payload : data }))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAIL , payload : error}))
}
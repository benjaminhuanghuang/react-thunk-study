//  https://www.youtube.com/watch?v=1QI-UE3-0PU
import axios from 'axios';

export function fetchUsers() {
    const requst = axios.get('http://jsonplaceholder.typicode.com/users');

    // Vanilla redux expect us to return an action. But we need to wait the request object to reslove
    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({ type: "FETCH_PROFILES", playload: data });
        });
    }
}
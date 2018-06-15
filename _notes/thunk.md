By default, Redux action creators don’t support asynchronous actions like fetching data, so here’s where we utilise Redux Thunk. 
Thunk allows you to write action creators that **return a function instead of an action**. The inner function can receive the store methods dispatch and getState as parameters, but we'll just use dispatch.


If it wasn’t for Redux Thunk, we would probably end up having just one action creator, something like this:
```
    export function itemsFetchData(url) {
        const items = axios.get(url);

        return {
            type: 'ITEMS_FETCH_DATA',
            items
        };
    }
```
Obviously, it would be a lot harder in this scenario to know if the items are still loading or checking if we have an error.

Using Redux Thunk, our action creator will be:
```
    export function itemsFetchData(url) {
        return (dispatch) => {
            dispatch(itemsAreLoading(true));

            axios.get(url)
                .then((response) => {
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(itemsAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
                .catch(() => dispatch(itemsHaveError(true)));
        };
    }
```
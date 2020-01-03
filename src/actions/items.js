/*
    Action creators. 
    action creators are functions that return an action.
    action is an object that describes what should change.

    Component needs to have 3 properties: items, hasErrored and isLoading to work
    , which correlates to needing 3 unique actions.

*/
export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

//will be called when the data has been successfully fetched, with the data passed to it as items.
export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

/*
we need a fourth action creator that calls our 3 other action (creators) depending on the status of fetching the data. 

By default, Redux action creators don’t support asynchronous actions like fetching data, 
so here’s where we utilise Redux Thunk. 
Thunk allows you to write action creators that **return a function instead of an action**. 
The inner function can receive the store methods dispatch and getState as parameters, 
but we'll just use dispatch.
*/
export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
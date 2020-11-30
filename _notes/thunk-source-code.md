redux-thunk最重要的思想，就是可以接受一个返回函数的action creator。
如果这个action creator 返回的是一个函数，就执行它，如果不是，就按照原来的next(action)执行。



```
function createThunkMiddleware(extraArgument) {
 return ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
   return action(dispatch, getState, extraArgument);
  }
  return next(action);
 };
} 
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware; 
export default thunk;
```

Translate to ES5:

```
function createThunkMiddleware(extraArgument) {
  return function({ dispatch, getState }) {
    return function(next){
      return function(action){
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }
        return next(action);
      };
    }
  }
}
```

正因为这个action creator可以返回一个函数，那么就可以在这个函数中执行一些异步的操作。
```
export function addCount() {
  return {type: ADD_COUNT}
} 
export function addCountAsync() {
  return dispatch => {
    setTimeout( () => {
      dispatch(addCount())
    },2000)
  }
}
```
addCountAsync函数就返回了一个函数，将dispatch作为函数的第一个参数传递进去，在函数内进行异步操作就可以了。

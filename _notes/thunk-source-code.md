thunk是函数编程届的一个专有名词，主要用于calculation delay（延迟计算）。

在未引入redux-thunk之前，store.dispatch(action)的action只能是对象，dispatch只是把action传给reducer

引入redux-thunk后，store.dispatch(action)的action可以是函数，在action里可以call API获取数据，再传给store。

redux-thunk的核心思想，就是可以接受一个返回函数的action creator。

如果这个action creator 返回的是一个函数，就调用这个function（并传入 dispatch 和 getState 及 extraArgument 为参数），而不是任由让它到达 reducer，因为 reducer 是个纯函数，Redux 规定到达 reducer 的 action 必须是一个 plain object 类型。

如果不是，就按照原来的next(action)执行。


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

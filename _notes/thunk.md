By default, Redux action creators don’t support asynchronous actions like fetching data, so here’s where we utilise Redux Thunk. 
Thunk allows you to write action creators that **return a function instead of an action**. The inner function can receive the store methods dispatch and getState as parameters, but we'll just use dispatch.


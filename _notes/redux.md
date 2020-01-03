There are a few core principles to Redux which we need to understand:

- There is 1 global state object that manages the **state** for your entire application. In this example, it will behave identically to our initial component’s state. It is the single source of truth.

- The **only way to modify the state** is through emitting an **action**, which is an object that describes what should change. Action Creators are the functions that are dispatched to emit a change – all they do is return an action.

- When an action is dispatched, a **Reducer** is the function that actually changes the state appropriate to that action – or returns the existing state if the action is not applicable to that reducer.

- Reducers are "pure functions". They should not have any side-effects nor mutate the state — they must return a modified copy.

- Individual reducers are combined into a single rootReducer to create the discrete properties of the state.

- The **Store** is the thing that brings it all together: it represents the state by using the rootReducer, any middleware (Thunk), and allows you to actually dispatch actions.

- For using Redux in React, the <Provider /> component wraps the entire application and passes the store down to all children.

## Design the actions
Our state needs to have 3 properties: items, hasErrored and isLoading for this application to work, which correlates to needing 3 unique actions.

Now, here is why Action Creators are different to Actions and do not necessarily have a 1:1 relationship: we need a fourth action creator that calls our 3 other action (creators) depending on the status of fetching the data. This fourth action creator is almost identical to our original fetchData() method, but instead of directly setting the state with this.setState({ isLoading: true }), we'll dispatch an action to do the same: dispatch(isLoading(true)).



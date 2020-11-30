import React from "react";
//
import ItemList from "./containers/ItemListContainer";

import HelloReduxFunctional from "./components/HelloReduxFunctional";

import HelloReduxClass from "./components/HelloReduxClass";

const App = () => {
  return (
    <>
      {/* <ItemList /> */}

      <HelloReduxFunctional />

      {/* <HelloReduxClass /> */}
    </>
  );
};

export default App;

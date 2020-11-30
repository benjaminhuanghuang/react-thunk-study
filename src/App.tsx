import React from "react";
//
import ItemList from "./containers/ItemListContainer";

import HelloReduxFunctional from "./components/HelloReduxFunctional";

import HelloReduxClass from "./components/HelloReduxClass";


import Age from "./components/Age";


const App = () => {
  return (
    <>
      {/* <ItemList /> */}

      <HelloReduxFunctional />

      <HelloReduxClass />
      
      <Age />
    </>
  );
};

export default App;

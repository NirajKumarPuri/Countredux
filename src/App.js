import React from "react";
import Count from "./Component/Count/index.js";
import store from "./Store.js";
import { Provider } from "react-redux";
import './App.css';

function App() {
  return (
    <Provider store={store}>
     <Count/>
     </Provider>
    
  );
}

export default App;

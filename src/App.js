import React from "react";
import './App.css';
import Bugs from './components/Bugs';
import configureStore from './store/configureStore';
import { Provider } from "react-redux";
import AddBug from "./components/AddBug";

const store = configureStore();

function App() {
  
  return (
    <Provider store={store}>
      <Bugs />
      <AddBug />
    </Provider>
  );
}

export default App;

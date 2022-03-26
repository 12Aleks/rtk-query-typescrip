import React from 'react';
import './App.css';
import {useAppSelector} from "./store/hooks/redux";

function App() {
    const {} = useAppSelector(state => state.userReducer.users)
  return (
    <div className="App">
       test
    </div>
  );
}

export default App;

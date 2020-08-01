import React from "react";
import LoginOauth from "./component/loginOauth";
// import MainPage from "./component/MainPage";
import { Provider } from 'react-redux'


function App() {
  return (
    // <Provider store={store}>
      <div className="App">
        <LoginOauth />
      </div>
    // </Provider>
  );
}

export default App;

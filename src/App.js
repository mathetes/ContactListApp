import React, { Component } from 'react';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />          
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

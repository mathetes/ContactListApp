import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
      contacts: [
        {
          id: 1,
          name: "Roman Ayapergenov",
          email: "nsk.roman@gmail.com",
          phone: "777-777-777"
        },
        {
          id: 2,
          name: "Nadejda Ayapergenova",
          email: "Nadejda@gmail.com",
          phone: "333-333-3333"
        },
        {
          id: 3,
          name: "Kirill Ayapergenov",
          email: "snoyter@gmail.com",
          phone: "999-999-9999"
        }
      ]
    };
  
  render() {
    return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
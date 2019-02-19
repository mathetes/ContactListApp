import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
    return {
      ...state,
      contacts: state.contacts.filter(
        contact => contact.id !== action.payload
      )
    };
    case 'ADD_CONTACT':
    return {
      ...state,
      contacts: [action.payload,
      ...state.contacts]
    };
    default:
      return state;
  }
}

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
      ],
      dispatch: action => this.setState(state => reducer(state, action))
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
import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
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

    deleteContact = id => {
      const { contacts } = this.state;

      const newContacts = contacts.filter(contact => contact.id !== id)
    
      this.setState({
        contacts: newContacts
      });
    };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={ contact }
            deleteClickHandler={this.deleteContact.bind( this,contact.id)}
          />
        ))
        }
      </React.Fragment>

    )
  }
}

export default Contacts;

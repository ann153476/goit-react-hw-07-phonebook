import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts.contacts);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter></Filter>
      {contacts.length === 0 ? (
        <div>
          <h2>There is no contacts</h2>
        </div>
      ) : (
        <ContactList />
      )}
    </>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

const Home = ({ handleLogout }) => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    setLoading(true);
    setTimeout(() => {
      fetch('https://randomuser.me/api/?results=20')
        .then((response) => response.json())
        .then((data) => {
          setContacts((prevContacts) => [...prevContacts, ...data.results]);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching contacts:', error);
          setLoading(false);
        });
    }, 1000);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchContacts();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <p>{`${contact.name.first} ${contact.name.last}`}</p>
            <img src={contact.picture.thumbnail} alt={contact.name.first} />
          </li>
        ))}
      </ul>
      {loading && <h2>Loading...</h2>}
    </div>
  );
};

export default Home;

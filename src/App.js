import './App.css';
import { useEffect, useState } from 'react';
import { Container } from './components/styles/container.styled';

const baseUrl = 'https://rest-guest-list-api.herokuapp.com';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  // grabing the data from API

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(baseUrl);
      // parsing the data
      const res = await response.json();
      setGuests(res);
      setLoading(false);
    }
    fetchUserData();
  }, []);

  // Creating Guest using POST

  async function createNewGuest() {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    });
    const createdGuest = await response.json();
    console.log(createdGuest);

    // copy the original array with spread operator and add the data into new array
    const stateCopy = [...guests];
    stateCopy.push(createdGuest);
    setGuests(stateCopy);
  }

  // update de state  of a guest with Delete
  async function deleteGuest(guest) {
    const response = await fetch(`${baseUrl}/${guest.id}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();
    console.log(deletedGuest);
    // filter the deleted guest from the array of guests
    const removeGuest = guests.filter((g) => g.id !== deletedGuest.id);
    setGuests(removeGuest);
  }

  // update attendace

  async function updateGuest(guest) {
    const response = await fetch(`${baseUrl}/${guest.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: guest.attending }),
    });
    const updatedGuest = await response.json();
    console.log(updatedGuest);
  }

  // handleAttending function for checkbox
  function handleAttending(id, attending) {
    // update Attendance checkbox in the frontend
    const copyGuests = [...guests];
    const guestFound = copyGuests.find((guest) => guest.id === id);
    // update attending property of guestFound to the currentTarget.checked
    guestFound.attending = attending;
    updateGuest(guestFound);
    // guestFound is a reference to the "old" object inside copyGuests; that's why copyGuests is updated
    setGuests(copyGuests);
  }

  return (
    <Container>
      <div>
        <h1>Grill Party</h1>
      </div>
      <div>
        <input
          id="firstName"
          value={firstName}
          placeholder="First Name"
          disabled={loading}
          onChange={(e) => {
            setFirstName(e.currentTarget.value);
          }}
        />
        <input
          id="lastName"
          value={lastName}
          placeholder="Last Name"
          disabled={loading}
          onChange={(e) => {
            setLastName(e.currentTarget.value);
          }}
        />
        <button
          onClick={() => {
            setFirstName(firstName);
            setLastName(lastName);
            createNewGuest();
          }}
        >
          Add Guest
        </button>
      </div>
      <h2>Guest List</h2>
      {loading ? 'Loading...' : ''}
      <div>
        <ul>
          {guests.map((guest) => {
            return (
              <li key={guest.id}>
                {guest.firstName} {guest.lastName}{' '}
                <span>
                  <input
                    type="checkbox"
                    id="attending"
                    checked={guest.attending}
                    onChange={(event) =>
                      handleAttending(guest.id, event.currentTarget.checked)
                    }
                  />
                </span>
                <span>
                  {' '}
                  <label htmlFor="attending">Attending</label>
                  <button
                    onClick={() => {
                      deleteGuest(guest);
                    }}
                  >
                    X
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

export default App;

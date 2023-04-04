import Input from './components/Users/Input'
import './App.css';
import UserList from './components/Users/UserList';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState([]);

  const handleDeleteUser = (updatedUsers) => {
    setUser(updatedUsers);
  };

  const SaveData = (key, price, dish, table) => {
    setUser((prevState) => {
      return [
        ...prevState,
        { userid: key, dishprice: price, userdish: dish, usertable: table },
      ];
    });
  };

  return (
    <div className="App">
      <Input onAddUser={SaveData} />
      <h2>Orders</h2>
      <UserList users={user} onDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App;

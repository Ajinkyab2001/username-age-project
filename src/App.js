
import { useState } from 'react';
import './App.css';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [userList,setUserList ]= useState([])
    
  const addUserHandler = (userN,userA,userC) => {
    setUserList((prevUser)=>{
        return [...prevUser,{username:userN , age : userA , collegeName : userC}]
    })
  }

  return (
    <div className="App">
          <AddUser onAddUser = {addUserHandler} />
          <UsersList  users={userList} />
    </div>
  );
}

export default App;

import React, { useRef } from "react";
import { useState } from 'react';
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModule";

const AddUser = (props) => {
  // const [enteredUserName,setEnteredUserName] = useState('');
  // const [enteredAge,setEnteredAge] = useState('');

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeNameInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollegeName = collegeNameInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredCollegeName.trim().length === 0) {
      setError({
        title: "Empty Username and age and college name",
        msg: "Please enter valid Username , age and college name(non empty)",
      });
      return;
    }
    // + will convert string(enteredAge ) to number
    if (+enteredUserAge < 1) {
      setError({ title: "Invalid age", msg: "Please enter valid age(>0)" });
      return;
    }
    // console.log(enteredUserName,enteredAge)
    props.onAddUser(enteredName, enteredUserAge,enteredCollegeName);
    // setEnteredUserName('');
    // setEnteredAge('');

    nameInputRef.current.value='';
    ageInputRef.current.value='';
    collegeNameInputRef.current.value='';
  };

  // const inputHandler = (e) => {
  //         if(e.target.name === 'username'){
  //           setEnteredUserName(e.target.value);
  //         }else if(e.target.name === 'age'){
  //           setEnteredAge(e.target.value);
  //         }
  // }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModule
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        />
      )}

      <Card>
        <form onSubmit={addUserHandler} className="input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            // value={enteredUserName}
            // onChange={inputHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            name="age"
            // value={enteredAge}
            // onChange={inputHandler}
            ref={ageInputRef}
          />
          <label htmlFor="college">College Name</label>
          <input
            id="college"
            type="text"
            name="college"
            // value={enteredAge}
            // onChange={inputHandler}
            ref={collegeNameInputRef}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

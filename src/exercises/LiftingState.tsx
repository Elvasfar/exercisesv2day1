import { BaseProps } from "../types";
import { User, users as usersDB, getNextId } from "../data/data";
import { useState } from "react";
import UserTableWithButtons from "../components/UserTableWithButtons";
import "../liftingState.css"
import UserFormControlled, {
  AddEditDeleteFunction,
} from "../components/UserFormControlled";


export default function LiftingState({ title }: BaseProps) {
  const [users, setUsers] = useState(usersDB);
  const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);


  const addEditDeleteUser: AddEditDeleteFunction = (user, isDelete) => {
    if (isDelete) {
      // Delete the user
      setUsers(prevUsers => prevUsers.filter(u => u.id !== user.id));
    } else if (user.id) {
      // Edit the user
      setUsers(prevUsers => prevUsers.map(u => u.id === user.id ? user : u));
      setUserToEdit(undefined); // Clear the userToEdit state after editing
    } else {
      // Create the user
      const newUser = { ...user, id: getNextId() }; // Assuming getNextId provides a new unique id
      setUsers(prevUsers => [...prevUsers, newUser]);
    }
  };
  


  const editUser = (id: number) => {
    // Find the user in the users array with the given id
    const userToEdit = users.find(user => user.id === id);
    if (userToEdit) {
      // Set the userToEdit state to the found user
      setUserToEdit(userToEdit);
    }
  };
  
  <h2>{title}</h2>;
  return (
    <>      
        <div className="outer">
          <h2 style={{ margin: 0 }}>Root Component</h2>
          <p style={{ margin: 0 }}>
            This is where ALL the users live (Single Source of truth).{" "}
            <em>User Count:</em> <b>{users.length}</b>
          </p>
          <p><em>User To Edit:</em> <b>{JSON.stringify(userToEdit)}</b></p>


          <div className="outer-user-table">
            <div className="user-table">
              <UserTableWithButtons users={users} editUser={editUser} />
            </div>
            <div className="user-form">
              <UserFormControlled
                title="Add User"
                onSubmitUser={addEditDeleteUser}
                defaultUser={userToEdit}
              />
            </div>
          </div>
        </div>
    </>
  );
}

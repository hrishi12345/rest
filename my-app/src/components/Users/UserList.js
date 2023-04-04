function UserList(props) {
    const tables = [...new Set(props.users.map((user) => user.usertable))];
  
    const handleDeleteUser = (userId) => {
      // Filter out the user with the given userId from the list of users
      const updatedUsers = props.users.filter((user) => user.userid !== userId);
      
      // Call the onDeleteUser prop with the updated list of users
      props.onDeleteUser(updatedUsers);
    };
  
    return (
      <div>
        {tables.map((table) => (
          <div key={table}>
            <h2>{table}</h2>
            <ul>
              {props.users
                .filter((user) => user.usertable === table)
                .map((user) => (
                  <li key={user.userid}>
                    {user.userid} {user.dishprice} {user.userdish}
                    <button onClick={() => handleDeleteUser(user.userid)}>Delete</button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
  export default UserList;
  
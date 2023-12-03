import { useState } from "react";
import Card from "./components/Card";
import Login from "./components/Login";
import One from "./components/One";
import AddUser from "./components/AddUser";
import Acompo from "./components/Acompo";
import Bcompo from "./components/Bcompo";
import ContextProvider from "./components/Context";
function App() {
  let [users, setUsers] = useState({});
  const addUser = (newUser) => {
    setUsers((prev) => {
      return(
        {
          name: newUser.name,
          password: newUser.password
        }
      )
    });
    console.log(newUser);
  }
  return (
    <ContextProvider>
      <div className="container my-5" style={{maxWidth:700}}>
        <Acompo />
        <Bcompo />
        {/* <h4>Username : {users.name}</h4>
        <h4>Password : {users.password}</h4>
        <AddUser addUser = {addUser} /> */}
       {/* <Login addUser = {addUser } /> */}
    </div>
    </ContextProvider>
  );
}

export default App;

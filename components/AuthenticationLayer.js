import { usersStore, usersDispatch } from "../store/users";
import Button from "@material-ui/core/Button";
import Login from "./Login";

export default function AuthenticationLayer({ children }) {
  const users = usersStore();
  const dispatchUser = usersDispatch();
  console.log(users);
  
  const login = () => {
    dispatchUser({
      type: "LOGIN",
    });
  };

  const logout = () => {
    dispatchUser({
      type: "LOGOUT",
    });
  };

  return (
    <div>
      <h1> Auth layer</h1>
      <Button onClick={() => login()} color="primary">
        Log in
      </Button>
      <Button onClick={() => logout()} color="primary">
        Log out
      </Button>

      {"felipe" + " - " + users.loggedIn}
      <br />
      <hr />
      {users.loggedIn ? children : <Login />}
    </div>
  );
}

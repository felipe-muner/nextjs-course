import { usersStore, usersDispatch } from "../store/users";
import Button from "@material-ui/core/Button";
import Login from "./Login";

export default function AuthenticationLayer({ children }) {
  const users = usersStore();
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

  console.log(users);
  const dispatchUser = usersDispatch();
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

import { usersStore, usersDispatch } from "../store/users";
import Button from "@material-ui/core/Button";

function Admins() {

  const users = usersStore();
  const dispatchUser = usersDispatch();

  const add = () => {
    dispatchProduct({
      type: "INCREASE",
    });
  };

  const remove = () => {
    dispatchProduct({
      type: "DECREASE",
    });
  };

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
  // dispatch({ type: 'INCREASE' })

  return (
    <div>
      <Button onClick={() => add()} color="primary">
        Add Object
      </Button>
      <Button onClick={() => remove()} color="primary">
        Remove Last
      </Button>
      {JSON.stringify(products)}
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h1> Users Login example Context Api </h1>
      <div>
        users
        {JSON.stringify(users)}
        <Button onClick={() => login()} color="primary">
          Log in
        </Button>
        <Button onClick={() => logout()} color="primary">
          Log out
        </Button>
      </div>
    </div>
  );
}

export default Admins;

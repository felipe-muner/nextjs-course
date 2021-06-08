import { usersStore } from "../store/users";
import Login from "./Login";

export default function AuthenticationLayer({ children }) {
  const users = usersStore();

  return (
    <div>
      {users.loggedIn ? children : <Login />}
    </div>
  );
}

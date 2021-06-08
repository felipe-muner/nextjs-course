import { usersStore, usersDispatch } from "../store/users";

export default function Login() {
  const users = usersStore();
  const dispatchUser = usersDispatch();
  return (
    <div>
      <h1> Login</h1>
    </div>
  );
}

// ConfirmationDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selected: PropTypes.object.isRequired,
// };

import { useState } from "react";

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

const IfElseComp = (props) => {
  if (props.isLogged) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default function Conditional() {
  const [isLogged, setIsLogged] = useState(false);
  const [felipeSelect, setFelipeSelect] = useState('lime');
  // const count = 0
  const count = 0;
  const felipeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
    <li key={el.toString()}>{el * 4}</li>
  ));
  const toggleLogin = () => {
    setIsLogged((prev) => !prev);
    console.log("this is:", isLogged);
  };

  const handleChange = (e) => {
    console.log('handleChange', e.target.value)
    setFelipeSelect(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your favorite flavor is: " + felipeSelect);
  };

  return (
    <>
      <IfElseComp isLogged={isLogged} />
      <button onClick={() => toggleLogin()}>toggle activity</button>
      <div>
        {count && <h1>Messages: {count}</h1>}
        <ul>{felipeArray}</ul>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Pick your favorite flavor: {felipeSelect}
            <select value={felipeSelect} onChange={handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

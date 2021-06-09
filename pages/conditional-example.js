import { useState }from 'react'

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
}

export default function Conditional() {  
  const [isLogged, setIsLogged] = useState(false);
  // const count = 0
const count = 1
  const toggleLogin = () => {
    setIsLogged(prev => !prev)
    console.log("this is:", isLogged);
  };

  return (
    <>
      <IfElseComp isLogged={isLogged} />
      <button onClick={() => toggleLogin()}>toggle activity</button>
      <div>
      { count && <h1>Messages: {count}</h1>}
    </div>
    </>
  );
}

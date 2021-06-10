import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

function RedirectPlay() {
  const [timeLeft, setTimeLeft] = useState(20);
  const [buttonOn, setButtonOn] = useState(1);

  const router = useRouter()

  console.log(router)

  useEffect(() => {
    // exit early when we reach 0
    console.log(timeLeft)
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 2000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  useEffect(() => {
    console.log(buttonOn)
    if(buttonOn > 10){
      router.push('/products')
    }

  }, [buttonOn]);

  const buttonThree = () => setButtonOn(buttonOn + 1);


  return (
    <div>
      <h1>{timeLeft}</h1>
      <Link href="/products" passHref className="btn btn-primary">
        <button>Redirect to products</button>
      </Link>


      <button onClick={buttonThree}>Toggle Activity</button>{" "}
      {" " + buttonOn}
    </div>
  );
}

export default RedirectPlay;

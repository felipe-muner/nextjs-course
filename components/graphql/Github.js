import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Github({user}) {
  console.log(user)
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  // if (loading) return <h1>loading...</h1>;
  // if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // if (!data) return null;

  return (
    <div>
      <h1>G HUB I'm</h1>
      <div>
        {JSON.stringify(user)}
      </div>
    </div>
  );
}
// export async function getStaticProps() {
//   const res = await fetch(`https://api.github.com/users/felipe-muner`, {
//     method: "GET",
//     headers: {
//       Authorization: process.env.TOKEN_GITHUB,
//     },
//   });
//   console.log(await res.json());
//   console.log(process.env.TOKEN_GITHUB);
//   // .then((data) => data.json())
//   // .then(setData)
//   // .then(() => setLoading(false))
//   // .catch(setError);

//   // const db = await myDB.connect({
//   //   host: process.env.DB_HOST,
//   //   username: process.env.DB_USER,
//   //   password: process.env.DB_PASS,
//   // });
//   // ...

//   return {
//     props: {
//       felipe: 10,
//     },
//   };
// }

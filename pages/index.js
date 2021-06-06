import Head from "next/head";
import { Fragment } from "react";
// import useSwr from 'swr'
// const fetcher = (url) => fetch(url).then((res) => res.json())

function HomePage(props) {
  console.log(props)
  return (
    <Fragment>
      <Head>        
        <title>Felipe Muner - Portifolio</title>
        <meta name="description" content="Meetups around the world." />
      </Head>
      {JSON.stringify(props)}

    </Fragment>
  );
}

//always on server side, do it if you need to access the req or data changes frequently
// export async function getServerSideProps(context){
//   const req = context.req
//   const res = context.res
//   //only runs on the server
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   }  
// }

// export async function getStaticProps() {
  // const client = await MongoClient.connect(STRING_CON, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
  // const db = client.db();
  // const meetupsCollection = db.collection("meetups");

  // const meetups = await meetupsCollection.find().toArray();

  // client.close();

  // return {
  //   props: {
  //     meetups: meetups.map((m) => ({
  //       id: m._id.toString(),
  //       title: m.title,
  //       address: m.address,
  //       image: m.image,
  //     })),
  //   },
  //   revalidate: 10,
  // };
// }

export default HomePage;

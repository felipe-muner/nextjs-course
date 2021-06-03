import { MongoClient } from "mongodb"; // only used on server side
import MeetupList from "../components/meetups/MeetupList";
import { STRING_CON } from "../constants";
// import useSwr from 'swr'
// const fetcher = (url) => fetch(url).then((res) => res.json())

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",
    address: "first street",
    description: "my meetup",
  },
  {
    id: "m2",
    title: "Second ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",
    address: "second street",
    description: "my meetup2",
  },
];

function HomePage({ meetups }) {
  // const { data, error } = useSwr('/api/users', fetcher)
  // console.log(data)
  return <MeetupList meetups={meetups} />;
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

export async function getStaticProps() {
    const client = await MongoClient.connect(STRING_CON);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray()

    client.close()

  return {
    props: {
      meetups: meetups.map(m => ({
        id: m._id.toString(),
        title: m.title,
        address: m.address,
        image: m.image
      }))
    },
    revalidate: 10,
  };
}

export default HomePage;

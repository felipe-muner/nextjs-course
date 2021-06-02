import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First ",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",
    address: "first street",
    description: "my meetup",
  },
  {
    id: "m2",
    title: "Second ",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",
    address: "second street",
    description: "my meetup2",
  },
];

function HomePage({ meetups }) {
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
  // const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  // const data = await res.json();

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;

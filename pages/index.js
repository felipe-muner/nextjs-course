import MeetupList from "../components/meetups/MeetupList";
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
  // const response = await fetch('/api/meetups', {
  //   method: 'GET'
  // })

  // const data = await response.json()

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;

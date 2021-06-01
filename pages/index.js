import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First ",
    image:
      "https://ae01.alicdn.com/kf/HTB1URwXRpXXXXXpapXXq6xXFXXXQ/Roupa-de-cachorro-casaco-de-guitarra-engra-ado-para-animais-de-estima-o-filhotes-e-cachorros.jpg_Q90.jpg_.webp",
    address: "1234 street",
    description: "my meetup",
  },
  {
    id: "m2",
    title: "Second ",
    image:
      "https://ae01.alicdn.com/kf/HTB1URwXRpXXXXXpapXXq6xXFXXXQ/Roupa-de-cachorro-casaco-de-guitarra-engra-ado-para-animais-de-estima-o-filhotes-e-cachorros.jpg_Q90.jpg_.webp",
    address: "1234 street",
    description: "my meetup",
  },
];

function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

export async function getStaticProps() {

  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()
  data.forEach(o => console.log(o.name))

  return { props: { meetups: DUMMY_MEETUPS } };
}

export default HomePage;

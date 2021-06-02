import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails({ meetupData }) {
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
    />
  );
}

export async function getStaticPaths() {
  //use this one if its dynamic[:id] and you have getStaticProps getting data on serverside..
  return {
    fallback: false, //generate and get then dynamically
    //false says you have all path made already
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",
        title: "felipe 1231",
        address: "hahaha address 123",
      },
    },
  };
}

export default MeetupDetails;

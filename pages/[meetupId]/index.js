import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { STRING_CON } from "../../constants";

function MeetupDetails({ meetupData }) {
  console.log("12312321");
  console.log(meetupData);
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(STRING_CON, {useNewUrlParser: true, useUnifiedTopology: true});
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  //use this one if its dynamic[:id] and you have getStaticProps getting data on serverside..
  return {
    fallback: false, //generate and get then dynamically
    //false says you have all path made already
    paths: meetups.map((m) => ({
      params: { meetupId: m._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(STRING_CON, {useNewUrlParser: true, useUnifiedTopology: true});
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  console.log(meetup);

  client.close();

  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        image: meetup.image,
        title: meetup.title,
        description: meetup.description,
        address: meetup.address
      },
    },
  };
}

export default MeetupDetails;

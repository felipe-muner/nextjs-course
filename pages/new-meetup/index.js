
import { Fragment } from "react";
import Head from "next/router";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(payload) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
    // router.replace('/') //deny client to click on back button, need to confirm
  }
  return (
    <Fragment>
    <Head>
        <title>HomePage - New Meetup</title>
        <meta name="description" content="Add your own meetups and create great opportunities." />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;

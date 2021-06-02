import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function NewMeetupPage(){
  async function addMeetupHandler(payload){
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers:{
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage
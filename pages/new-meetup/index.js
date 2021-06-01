import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function NewMeetupPage(){
  function addMeetupHandler(payload){
    console.log(payload)
  }
  return <NewMeetupForm onAddMeetUp={addMeetupHandler}/>
}

export default NewMeetupPage
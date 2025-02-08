import EventRegistrationForm from "./EventForm.css";


export default function CreateEvent(){
    return(
    <EventRegistrationForm
    nameValue = ""
    startTimeValue = ""
    endTimeValue = ""
    dateValue = ""
    placeValue = ""
    descriptionValue = ""
    clubValue = ""
    slotsValue = ""
    action = "create"
    />)
}
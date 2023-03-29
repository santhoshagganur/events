// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails} = props
  const {imageUrl, name, location} = eventDetails

  const changeActiveEvent = event => {
    console.log(event.id)
  }

  return (
    <li className="event-card" onClick={changeActiveEvent}>
      <img src={imageUrl} alt="event" className="event-image" />
      <h1 className="event-name"> {name} </h1>
      <p className="event-place"> {location} </p>
    </li>
  )
}

export default EventItem

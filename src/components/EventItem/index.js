// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEvent} = props
  const {id, imageUrl, name, location} = eventDetails

  const changeActiveEvent = () => {
    setActiveEvent(id)
  }

  return (
    <li className="event-card">
      <button
        type="button"
        className="user-interaction-button"
        onClick={changeActiveEvent}
      >
        <img src={imageUrl} alt="event" className="event-image" />
      </button>

      <p className="event-name"> {name} </p>
      <p className="event-place"> {location} </p>
    </li>
  )
}

export default EventItem

// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registeredSuccess: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  console.log(activeEventRegistrationStatus)

  const renderNoActiveEventCard = () => (
    <p className="event-results-suggestion">
      Click on an event, to view its registration details.
    </p>
  )

  const renderRegisteredView = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-icon"
      />
      <h1 className="event-results-suggestion">
        You have already registered for the event.
      </h1>
    </div>
  )

  const registrationsClosedView = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-content">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-register-image"
      />
      <p className="yet-to-register-content">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const renderResults = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registeredSuccess:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return registrationsClosedView()
      default:
        return renderNoActiveEventCard()
    }
  }

  return <div className="event-results-container">{renderResults()}</div>
}

export default ActiveEventRegistrationDetails

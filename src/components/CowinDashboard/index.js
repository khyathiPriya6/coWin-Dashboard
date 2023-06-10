import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge/index'
import VaccinationByGender from '../VaccinationByGender/index'
import VaccinationCoverage from '../VaccinationCoverage/index'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {coWinDetails: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    if (response.ok) {
      const cowinData = await response.json()
      const formatedData = {
        last7DaysVaccinations: cowinData.last_7_days_vaccination,
        vaccinationByGender: cowinData.vaccination_by_gender,
        vaccinationByAge: cowinData.vaccination_by_age,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        coWinDetails: formatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-view-message">Something went wrong</h1>
    </div>
  )

  renderGraphs = () => {
    const {coWinDetails} = this.state
    return (
      <>
        <VaccinationCoverage
          vaccinationCoverageDetails={coWinDetails.last7DaysVaccinations}
        />
        <VaccinationByGender
          vaccinationByGenderDetails={coWinDetails.vaccinationByGender}
        />
        <VaccinationByAge
          vaccinationByAgeDetails={coWinDetails.vaccinationByAge}
        />
      </>
    )
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderPages = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGraphs()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="icon-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="cowin-icon"
          />
          <p className="icon-heading">Co-WIN</p>
        </div>
        <h1 className="info-para">CoWIN Vaccination in India</h1>
        <div className="graphs-container">{this.renderPages()}</div>
      </div>
    )
  }
}

export default CowinDashboard

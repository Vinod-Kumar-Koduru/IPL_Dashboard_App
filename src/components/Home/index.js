import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import TeamCard from '../TeamCard'

const url = 'https://apis.ccbp.in/ipl'
class Home extends Component {
  state = {isLoading: true, teamData: []}

  componentDidMount() {
    this.getTeam()
  }

  getTeam = async () => {
    const response = await fetch(url)
    const getData = await response.json()
    // console.log(getData)
    const formatData = getData.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamData: formatData, isLoading: false})
  }

  loadingTeams = () => {
    const {teamData} = this.state
    return (
      <ul className="unorder-container">
        {teamData.map(eachTeam => (
          <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
        ))}
      </ul>
    )
  }

  loaderDisplay = () => (
    <div data-testid="loader">
      {' '}
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-contianer">
        <div className="list-element-con">
          <div className="Heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-heading">IPL dashboard</h1>
          </div>
        </div>
        <div className="flex-con">
          {isLoading ? this.loaderDisplay() : this.loadingTeams()}
        </div>
      </div>
    )
  }
}
export default Home

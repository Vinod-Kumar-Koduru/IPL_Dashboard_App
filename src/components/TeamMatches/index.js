import {Component} from 'react'
import './index.css'

const iplTeamUrl = 'https://apis.ccbp.in/ipl'

class TeamMatches extends Component {
  state = {teamMatche: [], isLoading: true}

  componentDidMount() {
    this.getMatchDetailes()
  }

  getMatchDetailes = async () => {
    const {match} = this.props
    console.log(match) // here propsa are not passing
    const {params} = match
    const {id} = params
    const response = await fetch(`${iplTeamUrl}/${id}`)
    console.log(response)
  }

  getMatchColor = () => {
    const {match} = this.props
    console.log(match)
  }

  render() {
    const {isLoading} = this.state
    // console.log(this.props)
  }
}
export default TeamMatches

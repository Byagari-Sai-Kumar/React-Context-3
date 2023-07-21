import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      let homeImage
      let activeBackgroundColor

      if (isDarkTheme === false) {
        homeImage =
          'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        activeBackgroundColor = 'light'
      } else {
        homeImage = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        activeBackgroundColor = 'dark'
      }

      return (
        <Link to="/" className="homeLink">
          <div className={`homeBgContainer ${activeBackgroundColor}`}>
            <Navbar />
            <img src={homeImage} alt="home" className="homeImage" />
            <h1 className="homeHeading">Home</h1>
          </div>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

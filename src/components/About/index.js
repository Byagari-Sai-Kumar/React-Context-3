import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      let aboutImage
      let activeBackgroundColor

      if (isDarkTheme === false) {
        aboutImage =
          'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        activeBackgroundColor = 'light'
      } else {
        aboutImage =
          'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        activeBackgroundColor = 'dark'
      }

      return (
        <Link to="/about" className="aboutLink">
          <div className={`homeBgContainer ${activeBackgroundColor}`}>
            <Navbar />
            <img src={aboutImage} alt="about" className="homeImage" />
            <h1 className="homeHeading">About</h1>
          </div>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      let activeBackgroundColor

      if (isDarkTheme === false) {
        activeBackgroundColor = 'light'
      } else {
        activeBackgroundColor = 'dark'
      }

      return (
        <Link to="/not-found" className="homeLink">
          <div className={`homeBgContainer ${activeBackgroundColor}`}>
            <Navbar />
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="homeImage"
            />
            <h1 className="notFoundHeading">Lost Your Way?</h1>
            <p className="notFoundPara">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

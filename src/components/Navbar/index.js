import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      let websiteLogo
      let theme
      let activeBackgroundColor
      let listItem

      if (isDarkTheme === false) {
        websiteLogo =
          'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        theme = 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        activeBackgroundColor = 'light'
        listItem = 'listItemDark'
      } else {
        websiteLogo =
          'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        theme = 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        activeBackgroundColor = 'dark'
        listItem = 'listItemLight'
      }

      const onChangeTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={`navbarContainer ${activeBackgroundColor}`}>
          <img src={websiteLogo} alt="website logo" className="websiteLogo" />

          <ul className="homeAboutContainer">
            <Link to="/" className="linkItem">
              <li className={listItem}>Home</li>
            </Link>
            <Link to="/about" className="linkItem">
              <li className={listItem}>About</li>
            </Link>
          </ul>

          <button
            type="button"
            className="themeButton"
            data-testid="theme"
            onClick={onChangeTheme}
          >
            <img src={theme} alt="theme" className="themeImage" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar

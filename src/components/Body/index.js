import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      console.log(`showcontent ${showContent}`)
      console.log(`showleftnavbar ${showLeftNavbar}`)

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="navbar-container">
              <h1 className="body-header">Left Navbar Menu</h1>
              <ul className="item-lists">
                <li className="item-list">Item 1</li>
                <li className="item-list">Item 2</li>
                <li className="item-list">Item 3</li>
                <li className="item-list">Item 4</li>
              </ul>
            </div>
          ) : (
            ''
          )}

          {showContent ? (
            <div className="content-container">
              <h1 className="body-header">Content</h1>
              <p className="body-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : (
            ''
          )}

          {showRightNavbar ? (
            <div className="navbar-container">
              <h1 className="body-header">Right Navbar Menu</h1>
              <div className="add-box">
                <h1 className="ad-box-header">Ad 1</h1>
              </div>

              <div className="add-box">
                <h1 className="ad-box-header">Ad 2</h1>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

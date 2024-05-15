import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRighttNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <nav className="configuration-controller-container">
          <div className="configuration-content-container">
            <h1 className="layout-header">Layout</h1>
            <ul className="checkbox-lists">
              <li className="checkbox-list">
                <input
                  type="checkbox"
                  id="content"
                  className="checkbox-input"
                  onChange={onChangeContent}
                />
                <label className="label-name" htmlFor="content">
                  Content
                </label>
              </li>

              <li className="checkbox-list">
                <input
                  type="checkbox"
                  id="leftNavbar"
                  className="checkbox-input"
                  onChange={onChangeLeftNavbar}
                />
                <label className="label-name" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </li>

              <li className="checkbox-list">
                <input
                  type="checkbox"
                  id="rightNavbar"
                  className="checkbox-input"
                  onChange={onChangeRighttNavbar}
                />
                <label className="label-name" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </li>
            </ul>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

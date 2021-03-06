import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "../css/global.css"
import {FormattedMessage, useIntl} from "react-intl"

const Header = ({ navigation }) => {
  const [visibility, setVisibility] = useState(false)
  const toogleVisibility = () => {
    setVisibility(!visibility)
  };
  const intl = useIntl();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className=" flex items-center flex-shrink-0 text-white mr-6">
        <Link to={`/${intl.locale}`}><FormattedMessage id="siteTitle"/></Link>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={toogleVisibility}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto block ${!visibility &&
          "hidden"}`}
      >
        <div className="text-sm lg:flex-grow">
          {navigation.map((elem, i) => (
            <Link
              to={elem.link}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
              key={i}
            >
              {elem.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Header

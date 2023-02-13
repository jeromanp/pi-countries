import React from 'react'
import style from "./NotFound.module.css"
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div>
      <div className={style.container}>
  <h2>Oops! Page not found.</h2>
  <h1>404</h1>
  <p>We can't find the page you're looking for.</p>
  <Link to="/home">Go back home</Link>
</div>

    </div>
  )
}

export default NotFound
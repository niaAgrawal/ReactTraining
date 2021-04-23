import React from 'react'
import PropTypes from 'prop-types'

export default function CardBlock ({header, subheader, avatar, username, href, children}) {
  return (
      <div className='card bg-light'>
        <h4 className='header-lg center-text'>
          {header}
        </h4>
        <img
          className='avatar'
          src={avatar}
          alt={`Avatar for ${username}`}
        />
        <h4 className='center-text'>
          Score: {subheader}
        </h4>
        <h2 className='center-text'>
          <a className='link' href={href}>
            {username}
          </a>
        </h2>
        {children}
      </div>
  )
}

CardBlock.propTypes ={
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
}
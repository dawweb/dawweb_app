import React from 'react'

const Toggle = ({ className, callback, innerText }) => {
  return (
    <button
      type="button"
      className={className}
      onMouseDown={e => {
        e.preventDefault()
        callback()
      }}
    >
      {innerText}
    </button>
  )
}

export default Toggle
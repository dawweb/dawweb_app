import React from 'react'

const Toggle = ({ callback, className, innerText }) => {
  const handleMouseDown = e => {
    e.preventDefault()
    callback()
  }

  return (
    <button
      type="button"
      className={className}
      onMouseDown={handleMouseDown}
    >
      {innerText}
    </button>
  )
}

export default Toggle
import React from 'react'

export const StatBar = (props) => {
  let { bgcolor, basestat } = props

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 10,
  }

  const fillerStyles = {
    height: '100%',
    //width: `${basestat < 100 ? basestat : 100}%`,
    width: `${(basestat * 100) / 160}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  }

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${basestat}`}</span>
      </div>
    </div>
  )
}

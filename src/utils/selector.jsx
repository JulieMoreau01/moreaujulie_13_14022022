import React from 'react'
import { useSelector } from 'react-redux'

function DisplayTestButton() {
  const testest = useSelector((state) => state.yesClick)
  console.log('lapin')
  return <p>{testest ? "j'ai cliqué" : "j'ai décliqué"}</p>
}

export default DisplayTestButton

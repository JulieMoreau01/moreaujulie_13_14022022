import React from 'react'
import { useSelector } from 'react-redux'

function DisplayTestButton() {
  const testest = useSelector((state) => state.clickOrNot)
  return <p>{testest ? "j'ai cliqué" : "j'ai décliqué"}</p>
}

export default DisplayTestButton

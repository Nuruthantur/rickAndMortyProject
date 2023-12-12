/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import ListItem from './ListItem'

function FullList({ names }) {
  return (
    <ul>
      { names.map((name, i) => {
        return <ListItem key={i} name={name} />
      }) }
    </ul>
  )
}

export default FullList
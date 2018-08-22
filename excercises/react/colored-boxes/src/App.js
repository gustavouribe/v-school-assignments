import React from 'react'
import Box from './Box'
import './index.css'

const App = () => {
  return (
    <div className='container'>
      <Box color="red" title="title" subtitle="subtitle" description="description"/>
      <Box color="red" greeting="hello"/>
      <Box color="red" greeting="hello"/>
      <Box color="red" greeting="hello"/>
    </div>
  )
}

export default App;
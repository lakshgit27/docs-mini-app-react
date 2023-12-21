import React from 'react'
import Background from './components/Background'

const App = () => {
  return (
    <div className='w-full relative h-screen bg-zinc-800'>
      <Background/>
      <div className='  fixed top-0 z-[3]  w-full h-screen bg-sky-800/50'></div>
     
    </div>
  )
}

export default App
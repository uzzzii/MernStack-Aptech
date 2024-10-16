import React from 'react'

function Test() {
    function apple(){
        alert('Welcome to apple')
    }
  return (
    <div>
    <button onClick={apple}>CLick Me</button>
    </div>
  )
}

export default Test

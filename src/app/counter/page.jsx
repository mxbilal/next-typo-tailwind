'use client'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [count, setcount] = useState(0)
  return (
    <div>
      count-------{count}-------
      client page <button onClick={() => setcount(r => r + 1)} >+</button>
    </div>
  )
}

export default page

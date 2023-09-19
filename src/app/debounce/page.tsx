'use client'
import React, { useState,useDeferredValue, Suspense } from 'react'

const Debouncing = () => {
  const [text, setText] = useState('')
  const deffered = useDeferredValue(text)
  console.log('deff',deffered)
  return (
    <div>
      <input value={text} onChange={(e)=>setText(e.target.value)} />
      <Suspense fallback={<h2>Loading...</h2>}>
        <p>{deffered}</p>
      </Suspense>
    </div>
  )
}

export default Debouncing

import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

import IconCat from '../assets/images/Icons/IconCat';

function CatFact() {
  const [fact, setFact] = useState("")
  const [loading, setLoading] = useState(false)

  async function fetchFact() {
    setLoading(true)
    const res = await fetch("https://meowfacts.herokuapp.com/?lang=esp")
    const data = await res.json()
    setFact(data.data[0])
    setLoading(false)
  }

  useEffect(() => {
    fetchFact()
  }, [])

  return (
    <div style={{display: 'flex', justifyContent: 'flex-end',}}>
      <p className='text-light'>{loading ? "Cargando.." : fact}</p>
      <button variant="outline-light" className='catbutton' onClick={fetchFact}><IconCat /></button>
    </div>
  )
}
  export default CatFact;
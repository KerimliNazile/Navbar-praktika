import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Detail = () => {
  const [detail, setDetail] = useState()
  const { id } = useParams()
  const fetchDetail = async () => {
    const res = await axios(`http://localhost:3000/outs/${id}`)
    setDetail(res.data)
  }
  useEffect(() => {
    fetchDetail()
  }, [])
  return (
    <div>

      <Helmet>
        <title>Detail</title>
      </Helmet>
      <h1>Detail</h1>
      <div className="Detail">
        {
          detail ? <>
            <ul>
              <li>{detail.text}</li>
              <li>{detail.price}</li>
            </ul>
          </> : ''
        }
      </div>
    </div>
  )
}

export default Detail
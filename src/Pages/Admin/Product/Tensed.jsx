import axios from 'axios'
import React, { useState } from 'react'

const Tensed = () => {
    const [pic, setPic] = useState({
      pic: '',
      img: ''
    })

    const handleSet = (e) => {
        const file = e.target.files[0]
        const reads = new FileReader()
        reads.readAsDataURL(file)
        reads.onloadend = () => {
            setPic({
              pic: reads.result,
              img: file.name
              // img: URL.createObjectURL(file)
            })
        }
    }

    const handleSubmit = async () => {
      const formdata = new FormData()
      formdata.append('thumb', pic.pic)
      const res = await axios.post(`http://localhost:5001/api/products/upload`, formdata)
      console.log(res)
    }
  return (
    <div>
        <input name="thumb" type="file" onChange={handleSet} />
        <br />
        <br />
        <br />
        <br />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Tensed
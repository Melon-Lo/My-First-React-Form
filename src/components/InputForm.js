import { useState } from 'react'
import './InputForm.css'

export default function InputForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isRevealed, setIsRevealed] = useState(false)
  const [outputClassName, setOutputClassName] = useState('hidden')

  const handleSubmit = (e) => {
    e.preventDefault()

    // When the button is clicked, change the output's className.
    if(outputClassName === 'hidden') {
      if(name.length === 0 || email.length === 0) {
        // If there's empty blank(s), show the alert. 
        return alert('Please fill the blank(s)!')
      }
      setOutputClassName('show')
    } else  {
      setOutputClassName('hidden')
    }

    setIsRevealed(!isRevealed)
  }
 
  return (
    <>
      <form className="content" onSubmit={(e) => handleSubmit(e)}>
          <div className="content-input-box">
            <h5 className="content-title">Name:</h5>
            <input className="content-input" type="text" placeholder='Please enter your name.' onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="content-input-box">
            <h5 className="content-title">E-mail:</h5>
            <input className="content-input" type="text" placeholder='Please enter your e-mail.' onChange={(e) => setEmail(e.target.value)}/>
          </div>
          {/* Based on the state of 'isRevealed', change the content in the button. */}
          <button className='submit'>{isRevealed ? 'Hide' : 'Submit'}</button>
      </form>
      <div className={outputClassName}>
        <div className="output-result">
          <p className="output-title">Name:&nbsp;</p>
          <p>{name}</p>
        </div>
        <div className="output-result">
          <p className="output-title">E-mail:&nbsp;</p>
          <p>{email}</p>
        </div>
      </div>
    </>
  )
}
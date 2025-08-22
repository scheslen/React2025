import './App.css'
import { useState } from 'react'
import {Modal} from './components/Modal/Modal.tsx'
import {Form} from './components/Form/Form.tsx'


function App() {

  const [modalVisible, setModalVisible] = useState(true)

  const clickHandler = () =>{
    setModalVisible(true)
  }

  return (
    <>
      <h1>React Forms</h1>
      <div className='controls'>
        <button className='btn controls-btn' onClick={clickHandler}>Uncontrolled Form</button>
        <button className='btn controls-btn' onClick={clickHandler}>React Hook Form</button>
      </div>

     {modalVisible && <Modal title='New form' onClose={() =>{setModalVisible(false)}}>
        <Form />
      </Modal>
     }
    </>
  )
}

export default App

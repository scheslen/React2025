import './App.css';
import { useState } from 'react';
import { Modal } from './components/Modal/Modal.tsx';
import { Form } from './components/Form/Form.tsx';
import { FormHook } from './components/FormHook/FormHook.tsx';

export function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [mode, setMode] = useState('Uncontrolled Form');

  const clickHandler1 = () => {
    setModalVisible(true);
    setMode('Uncontrolled Form');
  };

  const clickHandler2 = () => {
    setModalVisible(true);
    setMode('React Hook Form');
  };

  return (
    <>
      <h1>React Forms</h1>
      <div className="controls">
        <button className="btn controls-btn" onClick={clickHandler1}>
          Uncontrolled Form
        </button>

        <button className="btn controls-btn" onClick={clickHandler2}>
          React Hook Form
        </button>
      </div>

      {modalVisible && (
        <Modal
          title={mode}
          onClose={() => {
            setModalVisible(false);
          }}
        >
          { mode === 'Uncontrolled Form'?
            <Form onSubmit={() => setModalVisible(false)} />
            :  <FormHook onSubmit={() => setModalVisible(false)} />
}
        </Modal>
      )}
    </>
  );
}

export default App;

import { useState } from 'react'
import UncontrolledForm from './UncontrolledForm'
import ControlledForm from './ControlledForm';
import UncontrolledModal from './UncontrolledModal'
import ControlledModal from './ControlledModal'

function App() {
  const [shouldShow, setShouldShow] = useState(false)

  const handleDisplayModal = (state) => {
    setShouldShow(state)
  }

  return (
    <>
      <h1>Controlled vs Uncontrolled Components</h1>
      <UncontrolledForm />
      <ControlledForm />
      {/* Uncontrolled Modal */}
      <UncontrolledModal />
      {/* Controlled Modal */}
      <button onClick={() => handleDisplayModal(true)}>Show Controlled Modal</button>
      <ControlledModal shouldShow={shouldShow} displayModal={handleDisplayModal}/>
    </>
  );
}

export default App;

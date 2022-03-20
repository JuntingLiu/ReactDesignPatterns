import { useState } from 'react'
import UncontrolledForm from './UncontrolledForm'
import ControlledForm from './ControlledForm';
import UncontrolledModal from './UncontrolledModal'
import ControlledModal from './ControlledModal'
import UncontrolledOnboardingFlow from './UncontrolledOnboardingFlow';
import ControlledOnboardingFlow from './ControlledOnboardingFlow';

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: 'Junting' })}>Next</button>
  </>
)
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 68 })}>Next</button>
  </>
)
const StepThree = ({ goToNext }) =>(
  <>
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext({ hairColor: 'black' })}>Next</button>
  </>
)
const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hobby: 'Drink Coffee' })}>Next</button>
  </>
)

function App() {
  const [shouldShow, setShouldShow] = useState(false)
  const [onboardingData, setOnboardingData] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleDisplayModal = (state) => {
    setShouldShow(state)
  }

  const goToNext = stepData => {
    setOnboardingData({ ...onboardingData, ...stepData })

    if ((onboardingData.age && onboardingData.age >= 62) ? currentIndex >= 3 : currentIndex >= 2) {
      console.log('Finish data:', stepData)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
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
      <h2>Uncontrolled Onboarding Flow</h2>
      <UncontrolledOnboardingFlow onFinish={(data) => console.log('Finish:', data)}>
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
      </UncontrolledOnboardingFlow>
      <h2>Controlled Onboarding Flow</h2>
      <ControlledOnboardingFlow
        currentIndex={currentIndex}
        onNext={goToNext}
        onFinish={(data) => console.log('Finish:', data)}
        >
        <StepOne />
        <StepTwo />
        { onboardingData.age >= 60 && <StepThree /> }
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;

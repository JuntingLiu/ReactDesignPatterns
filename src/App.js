import './App.css';
import SplitScreen from './SplitScreen'

const LeftHandComponent = ({ name }) => {
  return <h1 style={{background: 'green'}}>{name}</h1>
}
const RightHandComponent = ({ message }) => {
  return <h1 style={{background: 'red'}}>{message}</h1>
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={5}>
      <LeftHandComponent name="Junting" />
      <RightHandComponent message="Developer" />
    </SplitScreen>
  );
}

export default App;

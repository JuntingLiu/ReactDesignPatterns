import RecursiveComponent from './RecursiveComponent'
// import { DangerButton, BigSuccessButton } from './componsition'
import { DangerButton, BigSuccessButton } from './partiallyApply'

const nestedObject = {
	a: 1,
	b: {
		b1: 4,
		b2: {
			b23: 'Hello',
		},
		b3: {
			b31: {
				message: 'Hi',
			},
			b32: {
				message: 'Hi',
			}
		}
	},
	c: {
		c1: 2,
		c2: 3,
	}
}

function App() {

  return (
    <>
      <h1>Component composition</h1>
      <br />
      <RecursiveComponent data={nestedObject} />
      <br />
      <DangerButton text="Don't do it!" />
      <BigSuccessButton text="Success" />
    </>
  );
}

export default App;

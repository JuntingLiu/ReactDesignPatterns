import './App.css';
import { people, products } from './mock-data'
import SplitScreen from './components/SplitScreen'
import RegularList from './components/RegularList'
import NumberedList from './components/NumberedList'
import { SmallPersonListItem, LargePersonListItem } from './people'
import { SmallProductsListItem, LargeProductsListItem } from './products'

const LeftHandComponent = ({ name }) => {
  return <h1 style={{background: 'green'}}>{name}</h1>
}
const RightHandComponent = ({ message }) => {
  return <h1 style={{background: 'red'}}>{message}</h1>
}

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={5}>
        <LeftHandComponent name="Junting" />
        <RightHandComponent message="Developer" />
      </SplitScreen>
      <br />
      <RegularList
        items={people}
        resourceName={"person"}
        itemComponent={SmallPersonListItem}
      />
      <br />
      <NumberedList
        items={people}
        resourceName={"person"}
        itemComponent={LargePersonListItem}
      />
      <br />
      <RegularList
        items={products}
        resourceName={"product"}
        itemComponent={SmallProductsListItem}
      />
      <br />
      <NumberedList
        items={products}
        resourceName={"product"}
        itemComponent={LargeProductsListItem}
      />
    </>
  );
}

export default App;

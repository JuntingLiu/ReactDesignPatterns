import UserInfo from './UserInfo'
import ProductInfo from './ProductInfo'

function App() {

  return (
    <>
      <h1>Higher-Order Components</h1>
      <UserInfo userId="125"/>
      <br />
      <ProductInfo productId="1" />
    </>
  );
}

export default App;

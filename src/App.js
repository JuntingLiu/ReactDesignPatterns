import UserInfo from './UserInfo'
import CurrentUserLoader from './CurrentUserLoader'
import UserLoader from './UserLoader'
import ResourceLoader from './ResourceLoader'
import ProductInfo from './ProductInfo'

function App() {

  return (
    <>
      <h1>Container Components</h1>
      <h2>CurrentUserLoader</h2>
      <ResourceLoader resourceUrl={"/current-user"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>
      <h2>UserLoader</h2>
      <ResourceLoader resourceUrl={"/users/123"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>
      <h2>ResourceLoader</h2>
      <ResourceLoader resourceUrl={"/products/1"} resourceName={"product"}>
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;

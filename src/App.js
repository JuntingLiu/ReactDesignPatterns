import axios from 'axios'
import UserInfo from './UserInfo'
// import CurrentUserLoader from './CurrentUserLoader'
// import UserLoader from './UserLoader'
import ResourceLoader from './ResourceLoader'
import ProductInfo from './ProductInfo'
import DataSource from './DataSource'

const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data
}

const getLocalStorageData = key => () => {
  return localStorage.getItem(key);
}

const Text = ({message}) => <p>{message}</p>

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
      <h3>DataSource</h3>
      <DataSource getDataFunc={getServerData("/users/125")} resourceName="user">
        <UserInfo/>
      </DataSource>
      <h3>DataSource from localStorage</h3>
      <DataSource getDataFunc={getLocalStorageData("message")} resourceName="message">
        <Text />
      </DataSource>
    </>
  );
}

export default App;

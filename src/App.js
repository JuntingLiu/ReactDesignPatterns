import UserInfo from './UserInfo'
import CurrentUserLoader from './CurrentUserLoader'
import UserLoader from './UserLoader'

function App() {

  return (
    <>
      <h1>Container Components</h1>
      <h2>CurrentUserLoader</h2>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <h2>UserLoader</h2>
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;

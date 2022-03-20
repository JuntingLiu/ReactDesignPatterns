import CurrentUserLoader from './CurrentUserLoader'
import UserInfo from './UserInfo'

function App() {

  return (
    <>
      <h1>Container Components</h1>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}

export default App;

import printProps from './printProps'
import UserInfo from './UserInfo'
import withUser from './withUser'

const UserInfoWrapped = printProps(UserInfo)
const UserInfoWithLoader = withUser(UserInfo, '123')

function App() {

  return (
    <>
      <h1>Higher-Order Components</h1>
      <UserInfoWrapped name={"Junting"} />
      <UserInfoWithLoader />
    </>
  );
}

export default App;

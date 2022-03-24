import printProps from './printProps'
import UserInfo from './UserInfo'

const UserInfoWrapped = printProps(UserInfo)

function App() {

  return (
    <>
      <h1>Higher-Order Components</h1>
      <UserInfoWrapped name={"Junting"} />
    </>
  );
}

export default App;

import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext';

function App() {
  const userData = { name: "Alice", email: "jane.doe@example.com", age: '25', bio: "Loves hiking and photography" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

import UserList from './UserList';

const App = () => {
  const users = [
    { id: 1, name: 'Real_Dhagax', email: 'dhgax@gmail.com'},
    { id: 2, name: 'Super Aic', email: 'aic@gmail.com' },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import AddressForm from './components/forms/AddressForm';

function App() {
  const [userShippingInfo, setUserShippingInfo] = useState({
    streetAddress: '',
    city: '',
    state: '',
    zip: 0
  });

  const userShippingActions = {
    create: (data) => setUserShippingInfo(data),
    read: () => getUserShippingInfo(),
    update: (data) => setUserShippingInfo(data),
    delete: ''
  }

  function updateUserShippingInfo(userShippingData) {
    userShippingActions.update(userShippingData)
  }

  function getUserShippingInfo() {
    return userShippingInfo;
  }

  console.log({ userShippingInfo });
  return (
    <div className="App">
      <AddressForm updateUserShippingInfo={updateUserShippingInfo} userShippingInfo={userShippingInfo}/>
    </div>
  );
}

export default App;

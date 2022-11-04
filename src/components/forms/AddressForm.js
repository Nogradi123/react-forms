import React, { useState } from 'react'

export default function AddressForm(props) {
    console.log({props});

    // const [zip, setZip] = useState(0);
    // const [city, setCity] = useState('');
    // const [streetAddress, setStreetAddress] = useState('');
    // const [state, setStateInput] = useState('');


    // function getFormData() {
    //     console.log({addressFormData})
    // }

    // const [addressFormData, setAddressFormData] =useState({
    //     streetAddress: '',
    //     city: '',
    //     state: '',
    //     zip: 0
    // })

    const handleChange = (event) => {
        // console.log({ event.target})
        event.preventDefault();

        props.updateUserShippingInfo({
            ...props.userShippingInfo, 
            [event.target.name]: event.target.value})
    }

  return (
    <div>
        <label>
            Street Address: <input name="streetAddress" type="text" value={props.userShippingInfo.streetAddress} onChange={(e) => handleChange(e)} />
        </label>
        <label>
            City: <input name="city" type="text" value={props.userShippingInfo.city} onChange={(e) => handleChange(e)}/>
        </label>
        <label>
            State: <input name="state" type="text" value={props.userShippingInfo.state} onChange={(e) => handleChange(e)}/>
        </label>
        <label>
            Zip: <input name="zip" type="number" value={props.userShippingInfo.zip} onChange={(e) => handleChange(e)}/>
        </label>

        {/* <button onClick={getFormData}> Click Me</button> */}
    </div>
  )
}

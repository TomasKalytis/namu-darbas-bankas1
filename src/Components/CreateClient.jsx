import { useState } from "react";
import './CreateClient.scss';


export default function CreateClient({ setCreate }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [account, setAccount] = useState('')
  const [balance, setBalance] = useState(0.00)
  
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

  const add = () => {
    setCreate(
      {
        firstName: capitalizeFirstLetter(firstName),
        lastName: capitalizeFirstLetter(lastName),
        address,
        account,
        balance: parseFloat(balance).toFixed(2),
      });

    }
    
  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-title">Create New Client</h5>
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              name="name" 
              value={firstName}
              onChange={e =>setFirstName(e.target.value)}
              className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              value={lastName}
              onChange={e =>setLastName(e.target.value)} 
              className="form-control" />
          </div>
          <div className="col-12">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={e =>setAddress(e.target.value)}
              className="form-control"
              placeholder="as 'Aušros g. 16, Vilnius'"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Acount Number</label>
            <input 
              type="number" 
              name="accountNo:"
              min={1}
              value={account} 
              onChange={e =>setAccount(e.target.value)}
              className="form-control" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Balance</label>
            <div className="input-group">
              <input 
                type="number" 
                name="balance"
                min={0}
                value={parseFloat(balance).toFixed(2)} 
                onChange={e => setBalance(e.target.value)}
                className="form-control" 
                placeholder="0,00"/> 
                <span className="input-group-text">EUR</span>
            </div>
          </div>
          <div className="col-12">
            <button
              type="button"
              onClick={add}
              className="btn btn-outline-success"
            >
              Create Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



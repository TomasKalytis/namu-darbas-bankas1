import { useEffect, useState } from "react";

export default function Edit({edit, setEdit, setUpdate}) {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [account, setAccount] = useState('');
    const [balance, setBalance] = useState('');
     
    useEffect(() => {
        if (null === edit){
            return;
        }
        setFirstName(edit.firstName);
        setLastName(edit.lastName);
        setAddress(edit.address);
        setAccount(edit.account);
        setBalance(edit.balance);
    }, [edit]);

    const save = () => {
        setUpdate({ ...edit, firstName, lastName, address, account, balance });
        setEdit(null);
      }

    if (null === edit) {
        return null;
    }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Client</h5>
            <button type="button" className="btn-close" onClick={() => setEdit(null)}></button>
          </div>
          <div className="modal-body">
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
              type="text" 
              name="accountNo:"
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
                value={balance} 
                onChange={e =>setBalance(e.target.value)}
                className="form-control" 
                placeholder="0,00"/> 
                <span className="input-group-text">EUR</span>
            </div>
          </div>
          </div>
          <div className="modal-footer">
            <button onClick={() => setEdit(null)} type="button" className="btn btn-secondary">
              Cancel
            </button>
            <button onClick={save} type="button" className="btn btn-success">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
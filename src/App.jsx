import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import List from './Components/List';
import CreateClient from './Components/CreateClient';
import Clear from './Components/Clear';
import { useEffect, useState } from 'react';
import { destroy, read, store, update } from './Functions/LocalStorage';
import Edit from './Components/Edit';

const KEY = 'client';

function App() {

  const [client, setClient] = useState(null);
  const [create, setCreate] = useState(null);
  const [remove, setRemove] = useState(null);
  const [clear, setClear] = useState(null);
  const [edit, setEdit] = useState(null);
  const [updateData, setUpdateData] = useState(null);

  useEffect(() => {
    setClient(read(KEY));
    }, []);

  useEffect(() => {
    if (null === create) {
      return;
    }
    const id = store(KEY, create);
    setClient(client => [...client, {id, ...create}])
  }, [create]);

  useEffect(() => {
    if (null === clear){
      return;
    }
    destroy(KEY, clear.id )
    setClient(client => client.filter(client => client.id !== clear.id))
    setClear(null);
    setRemove(null);
  }, [clear]);

  useEffect(() =>{
    if (null === updateData){
      return;
    }
    update(KEY, update)
    setClient(client => client.map(client => client.id === updateData.id ? updateData : client))
    setUpdateData(null);
    setEdit(null);
  }, [updateData]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <CreateClient setCreate={setCreate}/>
        </div>
        <div className="col">
          <List  client={client} setRemove={setRemove} setEdit={setEdit}/>
        </div>
      </div>
      <Clear remove={remove} setRemove={setRemove} setClear={setClear}/>
      <Edit edit={edit} setEdit={setEdit} setUpdate={setUpdateData}/>
    </div>
  );
}

export default App;
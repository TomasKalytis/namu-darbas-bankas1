export default function List({ client, setRemove, setEdit }) {
  
  const sortClientsByLastName = (clients) => {
    return clients.slice().sort((a, b) => {
      const lastNameA = a.lastName.toUpperCase();
      const lastNameB = b.lastName.toUpperCase();
      return lastNameA.localeCompare(lastNameB);
    });
  };

  const sortedClients = client !== null && client.length !== 0 ? sortClientsByLastName(client) : client;

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-title">Client List</h5>
        <ul className="list-group">
          {sortedClients === null && <li className="list-group-item">Loading...</li>}
          {sortedClients !== null && !sortedClients.length && (
            <li className="list-group-item">No Clients</li>
          )}
          {sortedClients !== null &&
            sortedClients.length !== 0 &&
            sortedClients.map((client) => (
              <li key={client.id} className="list-group-item">
                <div className="client-account">
                    <div>
                        <p>Name: {client.firstName} {client.lastName}</p>
                        <p>Adress: {client.address}</p>
                        <p>Account No.: {client.account}</p>
                        <p>Balance: {client.balance} EUR</p>
                    </div>
                    <div className="buttons">
                      <button onClick={() => setRemove(client)} className="btn btn-danger float-end">
                          Delet account
                      </button>
                      <button onClick={() => setEdit(client)} className="btn btn-success float-end">
                          Edit
                      </button>
                    </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

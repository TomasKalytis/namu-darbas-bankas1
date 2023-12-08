export default function Delete({ remove, setRemove, setClear }) {

    if (null === remove) {
        return null;
    }

  return (
    <div className="modal" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm clrearing</h5>
            <button type="button" className="btn-close" onClick={() => setRemove(null)}></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to clear this account?</p>
          </div>
          <div className="modal-footer">
            <button onClick={() => setRemove(null)} type="button" className="btn btn-secondary">
              Cancel
            </button>
            <button onClick={() => setClear(remove)} type="button" className="btn btn-danger">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

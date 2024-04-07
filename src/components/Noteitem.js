import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ backgroundColor: "lightgray", margin: "10px"}}>
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <i className="fas fa-trash-alt"></i>
                <i className="fas fa-pen"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;

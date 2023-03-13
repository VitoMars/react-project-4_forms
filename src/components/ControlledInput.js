import React, { useState } from "react";

const ControlledInput = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [persone, setPersone] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && cellulare) {
      setPersone([
        ...persone,
        {
          id: new Date(Date.now()).getTime().toString(),
          nome,
          email,
          cellulare,
        },
      ]);
    }
  };

  return (
    <form className="shadow rounded p-4">
      <div className="form-group d-flex align-item-center justify-content-center container my-2">
        <label htmlFor="nome" className="fw-bold col-3">
          Nome:
        </label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="form-control col-9"
        ></input>
      </div>
      <div className="form-group d-flex align-item-center justify-content-around container my-2">
        <label htmlFor="email" className="fw-bold col-3">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control col-9"
        ></input>
      </div>
      <div className="form-group d-flex align-item-center justify-content-around container my-2">
        <label htmlFor="cellulare" className="fw-bold col-3">
          Cellulare:
        </label>
        <input
          id="email"
          type="tel"
          name="cellulare"
          value={cellulare}
          onChange={(e) => setCellulare(e.target.value)}
          className="form-control col-9"
        ></input>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Invia
        </button>
      </div>
    </form>
  );
};

export default ControlledInput;

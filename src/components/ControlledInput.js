import React, { useState } from "react";

const ControlledInput = () => {
  const [persona, setPersona] = useState({
    nome: "",
    email: "",
    cellulare: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persona.nome && persona.email && persona.cellulare) {
      setPersona([
        ...persona,
        {
          id: new Date(Date.now()).getTime().toString(),
          ...persona,
        },
      ]);
      setPersona({
        nome: "",
        email: "",
        cellulare: "",
      });
    } else {
      alert("Riempi il form");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona({ ...persona, [name]: value });
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
          value={persona.nome}
          onChange={handleChange}
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
          value={persona.email}
          onChange={handleChange}
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
          value={persona.cellulare}
          onChange={handleChange}
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

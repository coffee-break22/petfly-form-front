import React from "react";
import "../../styles/Pasos.css";

function Paso4({ formData, handleChange }) {
  return (
    <>
      {/* Paso 4 */}
      <div className="title-step4">
        <p>Para conocer los costos y trámites para viajar con tu mascota, completa la información a continuación:</p>
      </div>
      <div className="form-group form-option">
        <label htmlFor="name">Nombre y Apellidos del pasajero</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group form-option">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group form-option">
        <label htmlFor="phone">Celular</label>
        <input
          type="tel"
          className="form-control"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+57 3505297452"
          required
        />
        <p className="terminosycondiciones
        ">Al continuar, estoy aceptando los <a href="https://petfly.io/terminos-y-condiciones/" target="_blank">términos y condiciones</a> y la <a href="https://petfly.io/politica-privacidad/" target="_blank">declaración de privacidad</a>.</p>

      </div>
    </>
  );
}

export default Paso4;



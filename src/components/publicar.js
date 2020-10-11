import React from "react";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUser
} from '@fortawesome/free-solid-svg-icons';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";
console.log(document.getElementsByClassName("descPub"))
  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        <h1 className="queDes"><FontAwesomeIcon icon={faUser}/> &nbsp;&nbsp;¿Qué desea publicar, Hernán?</h1>
        <form onSubmit>
          <div className="container-fluid des">
            <input className="descPub" type="text"></input>
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <label>Añadir a tu publicación</label><br></br>
          <div form="inline">
            <button className="btnAña"><img src={require("./imagen.svg")}width="20" height="20" alt=""></img>&nbsp;&nbsp;Imagen</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btnAña"><img src={require("./clip.svg")}width="20" height="20" alt=""></img>&nbsp;&nbsp;Archivo</button>
          </div>
          <br></br>
          <button className="btnPub">Publicar</button>
        </form>
        <a href="javascript:;" className="modal-close" onClick={handleClose}>
          Este es un recordstorio de poner un botón para cancelar xd
        </a>
      </div>
    </div>
  );
};

export default Modal;

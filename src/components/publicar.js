import React, { Component } from "react";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUser
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { render } from "@testing-library/react";

function publicar(){
  var f = new Date();
  console.log(f.getHours() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
  
  axios({
    method: "post",
    url: "http://localhost:3000/admin/subirPosts",
    data:{
        body: document.getElementsByClassName("descPub")[0].value,
        arch_adjunto: this.state.file
    }
  })
    .then((resp) => {
  })
    .catch((err) => {
      console.log(err)
    })
}

export default class Modal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    window.location.reload()
  };
  render() {
    if (!this.props.show) {
      return null;
    }else{
    return (
      <div className="modalAbierto">
        <div className="modal-container">
          <div className="row">
            <h1 className="queDes ml-3">&nbsp;&nbsp;Crear publicación</h1>
            <button href="javascript:;" className="modal-close" onClick={this.onClose}>
              <img src={require('./cruz.svg')}></img>
            </button>
          </div>
          <hr className="lineaModal"></hr>
          <form onSubmit={publicar}>
            <div className="container-fluid des">
              <textarea className="descPub" type="textarea" rows="10" maxLength="100"></textarea>
            </div>
            <br></br>
            <div align="center">
              <img className="publicfoto" src={this.state.file}/><br></br>
              <label>Añadir a tu publicación </label><br></br>
              <div className="row justify-content-center">
                <label className="btnAña">
                  &nbsp;&nbsp;<img src={require("./imagen.svg")}width="20" height="20" alt=""></img>&nbsp;&nbsp;Imagen
                  <input type="file" style={{display:'none'}} onChange={this.handleChange}/>
                </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="btnAña">
                  &nbsp;&nbsp;<img src={require("./clip.svg")}width="20" height="20" alt=""></img>&nbsp;&nbsp;Documento
                  <input type="file" style={{display:'none'}} onChange={this.handleChange}/>
                </label>
              </div>
              <br></br>
              <button className="btnPub">Publicar</button>
              </div>
          </form>
        </div>
      </div>
    );
  }}
}
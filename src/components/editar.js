import React, { Component } from "react";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUser
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { render } from "@testing-library/react";



function postImg(){
  document.getElementsByClassName("publicfoto")[0].style.height="200px"
}

export default class Modal2 extends React.Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      file: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  onClose2 = e => {
    this.props.onClose2 && this.props.onClose2(e);
    window.location.reload()
  };
  publicar(e){
    var f = new Date();
    var fecha = f.getFullYear() + '-'  + f.getMonth() + '-' + f.getDay() + '-'
    var archivo = document.getElementsByClassName("publicfoto")[0] 
    console.log(archivo.src)
    console.log(document.getElementsByClassName("descPub")[0].value)
    axios({
      method: 'post',
      url: 'http://localhost:3000/user/subirPost',
      mode: 'cors',
       headers: {
         /* { "X-localization": localStorage.getItem("lan") },
          { "Access-Control-Allow-Origin": true },
          { "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Acmcept '},
          { "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE" },
          { "Access-Control-Max-Age": 3600 },*/
          Authorization: 'Bearer ' + window.localStorage.getItem('token')
       },
      data:{
        body: document.getElementsByClassName("descPub")[0].value ,
        arch_adjunto: "archivo", 
        date: fecha
      }
  }).then((resp) => {
    //resp.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    console.log("RESPONSE RECEIVED: ", resp);
  }).catch((err) =>  console.log("AXIOS ERROR: ", err));
  }
  render() {
    if (!this.props.show2) {
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
          <form>
            <div className="container-fluid des">
              <textarea className="descPub" type="textarea" rows="10" maxLength="100"></textarea>
            </div>
            <br></br>
            <div align="center">
              <img className="publicfoto" src={this.state.file}/><br></br>
              <label>Añadir a tu publicación </label><br></br>
              <div className="row justify-content-center">
                <label onClick={postImg} className="btnAña">
                  &nbsp;&nbsp;<img src={require("./imagen.svg")}width="20" height="20" alt=""></img>&nbsp;&nbsp;Imagen
                  <input type="file" style={{display:'none'}} onChange={this.handleChange}/>
                </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="btnAña">
                  &nbsp;&nbsp;<img src={require("./clip.svg")}width="20" height="20" alt=""></img>&nbsp;&nbsp;Documento
                  <input type="file" style={{display:'none'}} onChange={this.handleChange}/>
                </label>
              </div>
              <br></br>
              <button onClick={this.publicar} className="btnPub">Publicar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }}
}
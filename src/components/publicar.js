import React, { Component } from "react";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUser
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { render } from "@testing-library/react";



function postImg(){
  document.getElementsByClassName("publicfoto")[0].style.height="300px"
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
  publicar(e){
    e.preventDefault()
    console.log(window.localStorage.getItem("token"))
    var postData = {
      body: document.getElementsByClassName("descPub")[0],
      arch_adjunto: "hola"
    };
    let axiosConfig = {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem('token')
      }
    };
    var f = new Date();
    console.log(f.getHours() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());

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
          Authorization: 'Bearer ' + token
       },
      data:{
        body:"hola",
        arch_adjunto:"hola", 
      }
  }).then((resp) => {
    //resp.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    console.log("RESPONSE RECEIVED: ", resp);
  }).catch((err) =>  console.log("AXIOS ERROR: ", err));
  }
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
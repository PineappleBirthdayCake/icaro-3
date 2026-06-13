import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Banner from "../assets/images/backgrounds/banner.png"
import Homebottombar from "./HomeBottomBar";

const HomeBody = () => {
    return (
        <div className="container core">
            <h5 className="text-light hometitle">App sencilla de notas compatible con todos los dispositivos.</h5>
            <img src={Banner} className="banner" />
            <h6 className="text-light homeinfo">Accede a tus notas en cualquier lado con una cuenta.</h6>
            <Button variant="warning" className="disabled text-dark homebutton" >Crear cuenta</Button>
            <Link to="/notes" className="text-dark" style={{textDecoration: 'none',}}>
            <Button variant="warning" className="homebutton" >Ir a notas</Button>
            </Link>
            <Homebottombar />
        </div>
    )
}

export default HomeBody
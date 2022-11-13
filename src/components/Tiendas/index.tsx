import React from "react";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import "./estilos.css"

const Tiendas = () => {
  return (
    <Row justify="center" align="middle">
      <Col lg={12} md={12} sm={24} xs={24}>
        <Slide direction="right">
          <h1>Tu tienda 😎</h1>
        </Slide>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Slide direction="left">
          <a
            href={"https://gregory-shop-ropa-simpleshop.vercel.app/"}
            target="blank"
            className="ancla"
            style={{
              fontSize: "1.5rem",
              color: "#212121",
            }}
          >
            <span>🌟</span>
            Ver demo Tienda Vestimenta
          </a>
          <a
            href={"https://gregory-shop-celular-simpleshop-loyp.vercel.app/"}
            target="blank"
            className="ancla"
            style={{
              fontSize: "1.5rem",
              color: "#212121",
            }}
          >
            <span>🌟</span>
            Ver demo Equipos Móbiles
          </a>

          <a
            href={"https://gregory-shop-comida.vercel.app/"}
            target="blank"
            className="ancla"
            style={{
              fontSize: "1.5rem",
              color: "#212121",
            }}
          >
            <span>🌟</span>
            Ver demo Delivery Comida
          </a>
        </Slide>
      </Col>
    </Row>
  );
};

export default Tiendas;

import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";
import { ContactContainer } from "./styles";

const Contact = ({ title, id }: ContactProps) => {
  const urlWhatsaapp = (text: string, whatshapNumber: string) =>
    `https://wa.me/${whatshapNumber}?text=${encodeURIComponent(text)}`;

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={14} md={14} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={""} />
            <p style={{ textAlign: "center" }}>contacto@tiendasgregory.com</p>
          </Slide>
        </Col>
        <Col lg={10} md={10} sm={24} xs={24}>
          <Slide
            direction="right"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <a
              href={urlWhatsaapp("Tengo una consulta", "59896658338")}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src="/img/svg/whatsapp.webp"
                alt="whatsapp"
                aria-label="consultar por whatsapp"
                style={{ width: "9rem", height: "9rem" }}
              />
            </a>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);

import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { Button } from "../../common/Button";
import { CustomNavLinkSmall, Span } from "../../components/Header/styles";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Tiendas = lazy(() => import("../../components/Tiendas"));

const Home = () => {
  return (
    <Container>
      <CustomNavLinkSmall
        style={{
          position: "fixed",
          zIndex: "2",
          bottom: "7rem",
          right: "0.1rem",
          width: "180px",
        }}
      >
        <Span>
          <a target="blank" href="https://buy.stripe.com/dR62bG5ZTbiXeWIcMN">
            <Button aria-label="Ir a realizar mi compra."> Quiero mi tienda Ya!</Button>
          </a>
        </Span>
      </CustomNavLinkSmall>
      <ScrollToTop />

      <MiddleBlock/>

      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="developer.svg"
        id="intro"
      />

      <Tiendas />

      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;

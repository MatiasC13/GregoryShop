import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { Button } from "../../common/Button";
import { CustomNavLinkSmall, Span } from "../../components/Header/styles";
import { useHistory } from "react-router-dom";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  const history = useHistory();



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
      // onClick={() => scrollTo("contact")}
      >
        <Span>
          {/* <Button>{t("Contacto")}</Button> */}
          {/* <Link to="/payment"> */}
          <a target="blank" href="https://buy.stripe.com/dR62bG5ZTbiXeWIcMN">  <Button > Quiero mi tienda Ya!</Button></a>
          {/* </Link> */}
        </Span>
      </CustomNavLinkSmall>
      <ScrollToTop />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        // button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />

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

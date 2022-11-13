import { withTranslation } from "react-i18next";
import { Row } from "antd";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection } from "./styles";

const MiddleBlock = () => {
  return (
    <MiddleBlockSection>
      <Slide direction="left">
        <Row justify="center" align="middle">
          <video
            controls
            autoPlay
            loop
            muted
            width={"100%"}
            controlsList="nodownload"
          >
            <source src="https://firebasestorage.googleapis.com/v0/b/admin-gregory-shop.appspot.com/o/gregory%2FgregoryVideo.mp4?alt=media&token=53dc79d4-8fad-4de2-b45a-737b8d117f0c" />
            Tu navegador no es compatible con el video
          </video>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
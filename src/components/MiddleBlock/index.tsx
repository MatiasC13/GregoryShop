import { withTranslation } from "react-i18next";
import { Row } from "antd";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
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
            <source
              // src="https://res.cloudinary.com/matiascabral/video/upload/v1665587240/gregory/gregoryVideo_naauvc.mp4"
              src="https://firebasestorage.googleapis.com/v0/b/admin-gregory-shop.appspot.com/o/gregory%2FgregoryVideo.mp4?alt=media&token=9a8a1350-0ed8-4e97-88a9-0b437ab67599"
              // type="video/mp4"
            />
            Tu navegador no es compatible con el video
          </video>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
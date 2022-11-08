import { Row } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import i18n from "i18next";
import { Extra } from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {
  const urlWhatsaapp = (text: string, whatshapNumber: string) =>
    `https://wa.me/${whatshapNumber}?text=${encodeURIComponent(text)}`;
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="50px" height="50px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-evenly"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <SocialLink
              href={"https://www.instagram.com/tiendasgregory/"}
              src="instagram.png"
            />
            <SocialLink
              href={urlWhatsaapp(
                "Hola ¿Cómo hago para tener mi supertienda?",
                "59897183426"
              )}
              src="whatsapp.png"
            />

            {/* </FooterContainer> */}
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);

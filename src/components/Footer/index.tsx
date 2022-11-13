import { Row } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { Extra } from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
  aria: string;
}

const Footer = () => {
  
  const SocialLink = ({ href, src, aria }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={aria}
      >
        <SvgIcon src={src}  width="50px" height="50px" />
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
              href={"https://www.facebook.com/tiendasgregory/"}
              src="facebook.webp"
              aria="ir a Facebook"
            />
            <SocialLink
              href={"https://www.instagram.com/tiendasgregory/"}
              src="instagram.webp"
              aria="ir a Instagram"
            />
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);

import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

type Props = {
  shouldGoHome?: boolean;
};

const LogoText = {
  text: 'Tamouya'
}
const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const LogoStyled = () => (
  <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
    <Image
      src="/images/backgrounds/rocket.png"
      alt="logo"
      height={40}
      width={40}
      priority
    />
    <div style={{ fontSize: "1.6rem", fontWeight: "bold" }}>{LogoText.text}</div>
  </div>
);

const Logo = ({ shouldGoHome = true }: Props) => {
  return (
    <>
      {shouldGoHome ? (
        <LinkStyled href="/">
          <LogoStyled />
        </LinkStyled>
      ) : (
        <LogoStyled />
      )}
    </>
  );
};

export default Logo;

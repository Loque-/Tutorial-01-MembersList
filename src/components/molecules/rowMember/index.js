import { styled } from "@stitches/react";
import { tableSize } from "styles";

const Member = styled("div", {
  marginBottom: "1px",
  paddingBottom: "1px",
  borderBottom: "solid 1px rgba(255, 255, 255,.2)",
  cursor: "default"
});

const Inner = styled("div", {
  ...tableSize,
  transition: "color .25s, background-color .25s, box-shadow .25s",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255,.2)"
  }
});

const Image = styled("img", {
  width: "50px",
  height: "50px"
});
const Name = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "0px 5px"
});
const Date = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "0px 5px"
});

function MemberComponent({ imgURL, name, joinDate }) {
  // JSX
  return (
    <Member>
      <Inner>
        <Image src={imgURL} alt="member" />
        <Name>{name}</Name>
        <Date>{joinDate}</Date>
      </Inner>
    </Member>
  );
}

export default MemberComponent;

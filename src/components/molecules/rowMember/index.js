import React from "react";
import { styled } from "@stitches/react";
import { tableSize } from "styles";
import BungieIcon from "components/atoms/icons/bungie";

const BUNGIE_PROFILE_URL = "https://www.bungie.net/en/Profile/";

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
const JoinDate = styled("div", {
    display: "flex",
    alignItems: "center",
    padding: "0px 5px"
});
const LastOnlineDate = styled("div", {
    display: "flex",
    alignItems: "center",
    padding: "0px 5px"
});
const Links = styled("div", {
    display: "flex",
    alignItems: "center",
    padding: "0px 5px"
});

const BungieLink = styled("a", {
    display: "flex",
    width: "50px",
    padding: "10px"
});

function formatDate(dateString) {
    const formattedDate = new Date(dateString).toLocaleString("en-GB");
    return formattedDate;
}

function MemberComponent({
    image,
    name,
    joinDate,
    lastOnline,
    bungieId,
    bungieMemberType,
    ...props
}) {
    return (
        <Member>
            <Inner>
                <Image src={image} alt="member" />
                <Name>{name}</Name>
                <JoinDate>{formatDate(joinDate)}</JoinDate>
                <LastOnlineDate>{formatDate(lastOnline)}</LastOnlineDate>
                <Links>
                    <BungieLink
                        target="_blank"
                        rel="noreferrer"
                        href={`${BUNGIE_PROFILE_URL}${bungieMemberType}/${bungieId}`}
                    >
                        <BungieIcon />
                    </BungieLink>
                </Links>
            </Inner>
        </Member>
    );
}

export default React.memo(MemberComponent);

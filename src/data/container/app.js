import React from "react";
import App from "components/App";
import useAxios from "axios-hooks";

// /GroupV2/{groupId}/Members/
// https://www.bungie.net/Platform/

const API_ROOT = "https://www.bungie.net/Platform/";
const GROUP_ID = 3845745;
const API_KEY = "c98d45d4434546bfaa5ad45464b86230";

function filterData(member) {
    const name = member.destinyUserInfo.LastSeenDisplayName;
    const joinDate = member.joinDate;
    const image = `https://www.bungie.net/${member.bungieNetUserInfo.iconPath}`;
    const bungieId = member.bungieNetUserInfo.membershipId;
    const bungieMemberType = member.bungieNetUserInfo.membershipType;
    const destinyId = member.destinyUserInfo.membershipId;
    const destinyMemberType = member.destinyUserInfo.membershipType;

    return {
        name,
        joinDate,
        image,
        bungieId,
        bungieMemberType,
        destinyId,
        destinyMemberType
    };
}

function AppContainer() {
    const [{ data, loading, error }] = useAxios({
        url: `${API_ROOT}GroupV2/${GROUP_ID}/Members/`,
        headers: {
            "X-API-Key": API_KEY
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    // Tidy data
    const members = data.Response.results.map(filterData);

    // console.log(members);

    return <App members={members} memberCount={members.length} />;
}

export default AppContainer;

import React, { useEffect, useState } from "react";
import App from "components/App";
import axios from "axios";
import useAxios from "axios-hooks";

const API_ROOT = "https://www.bungie.net/Platform/";
const GROUP_ID = 3845745;
const API_KEY = "c98d45d4434546bfaa5ad45464b86230";

function filterProfileData(member) {
    const lastOnline = member.profile.data.dateLastPlayed;

    return {
        lastOnline
    };
}

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
    const [combinedMembersData, setCombinedMembersData] = useState([]);
    const [
        { data: clanData, loading: clanLoading, error: clanError }
    ] = useAxios({
        url: `${API_ROOT}GroupV2/${GROUP_ID}/Members/`,
        headers: {
            "X-API-Key": API_KEY
        }
    });

    useEffect(() => {
        if (!clanData) return false;
        const filteredMemberData = clanData.Response.results.map(filterData);
        const combineMemberData = filteredMemberData.map((member) => {
            return axios({
                method: "GET",
                url: `${API_ROOT}Destiny2/${member.destinyMemberType}/Profile/${member.destinyId}/?components=100,200`,
                headers: {
                    "X-API-Key": API_KEY
                }
            })
                .then((res) => {
                    const combinedData = {
                        ...member,
                        ...filterProfileData(res.data.Response)
                    };

                    return combinedData;
                })
                .catch((e) => console.error(e));
        });

        Promise.all(combineMemberData).then((combinedData) => {
            setCombinedMembersData(combinedData);
        });
    }, [clanData, setCombinedMembersData]);

    if (!clanLoading) {
        if (clanError) return <p>Error!</p>;
        if (combinedMembersData.length > 0) {
            return (
                <App
                    members={combinedMembersData}
                    memberCount={combinedMembersData.length}
                />
            );
        }
        return <p>Loading...</p>;
    }

    return <p>Loading...</p>;
}

export default AppContainer;

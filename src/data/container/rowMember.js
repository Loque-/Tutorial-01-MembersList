import React from "react";
import MemberRow from "components/molecules/rowMember";
import useAxios from "axios-hooks";

const API_ROOT = "https://www.bungie.net/Platform/";
const GROUP_ID = 3845745;
const API_KEY = "c98d45d4434546bfaa5ad45464b86230";

function RowMemberContainer({ destinyMemberType, destinyId, ...props }) {
    const [{ data, loading, error }] = useAxios({
        url: `${API_ROOT}Destiny2/${destinyMemberType}/Profile/${destinyId}/?components=100,200`,
        headers: {
            "X-API-Key": API_KEY
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) {
        return <p>Error! </p>;
    }

    // Tidy data
    console.log("hello", data.Response.profile.data.dateLastPlayed);

    const lastOnline = data.Response.profile.data.dateLastPlayed;

    return <MemberRow lastOnline={lastOnline} {...props} />;
}

export default RowMemberContainer;

import React from "react";
import App from "components/App";
import useAxios from "axios-hooks";

// /GroupV2/{groupId}/Members/
// https://www.bungie.net/Platform/

const API_ROOT = "https://www.bungie.net/Platform/";
const GROUP_ID = 3845745;

function AppContainer() {
    const [{ data, loading, error }] = useAxios({
        url: `${API_ROOT}GroupV2/${GROUP_ID}/Members/`,
        headers: {
            "X-API-Key": "c98d45d4434546bfaa5ad45464b86230"
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    console.log("data", data.Response.results.length);

    return (
        <App
            members={data.Response.results}
            memberCount={data.Response.results.length}
        />
    );
}

export default AppContainer;

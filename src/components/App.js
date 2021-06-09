import React, { useState } from "react";
import { members } from "data/membersData";
import TableHeader from "components/organisms/tableHeader";
import TableBody from "components/organisms/tableBody";
import { basicSort } from "utils";

import "styles.css";

const DEFAULT_SORT = "joinDate";

function filterData(member) {
    const name = member.destinyUserInfo.LastSeenDisplayName;
    const joinDate = member.joinDate;
    const image = `https://www.bungie.net/${member.bungieNetUserInfo.iconPath}`;
    const lastOnline = member.lastOnline;
    const bungieId = member.bungieNetUserInfo.membershipId;

    console.log(bungieId);
    return {
        name,
        joinDate,
        image,
        lastOnline,
        bungieId
    };
}

//

export default function App() {
    // Tidy data
    const filteredData = members.map(filterData);

    // Define default state
    const [sortedData, setSortedData] = useState(
        filteredData.sort(basicSort(DEFAULT_SORT))
    );
    const [sortName, setSortName] = useState(DEFAULT_SORT);
    const [sortReverse, setSortReverse] = useState(false);

    // Sort function
    function sortData(on) {
        let isReverse = false;

        // If we are sorting on the same as the current sortName
        if (on === sortName) {
            isReverse = sortReverse ? false : true;
        }

        const updatedData = filteredData.sort(basicSort(on, isReverse));

        // Update state
        setSortedData(updatedData);
        setSortName(on);
        setSortReverse(isReverse);
    }

    return (
        <>
            <TableHeader sortFunction={sortData} />
            <TableBody tableData={sortedData} />
        </>
    );
}

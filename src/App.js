import React, { useState } from "react";
import { styled } from "@stitches/react";
import { members } from "./membersData";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { basicSort } from "./utils";

import "./styles.css";

const DEFAULT_SORT = "joinDate";

const Table = styled("div", {});

function filterData(member) {
    const name = member.destinyUserInfo.LastSeenDisplayName;
    const joinDate = member.joinDate;
    const image = `https://www.bungie.net/${member.bungieNetUserInfo.iconPath}`;

    return {
        name,
        joinDate,
        image
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
        <Table>
            <TableHeader sortFunction={sortData} />
            <TableBody tableData={sortedData} />
        </Table>
    );
}

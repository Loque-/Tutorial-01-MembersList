import React, { useState } from "react";
import TableHeader from "components/organisms/tableHeader";
import TableBody from "components/organisms/tableBody";
import { basicSort } from "utils";

import "styles.css";

const DEFAULT_SORT = "joinDate";

//

export default function App({ members = [], memberCount = 0 }) {
    // Define default state
    const [sortedData, setSortedData] = useState(
        members.sort(basicSort(DEFAULT_SORT))
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

        const updatedData = members.sort(basicSort(on, isReverse));

        // Update state
        setSortedData(updatedData);
        setSortName(on);
        setSortReverse(isReverse);
    }

    return (
        <>
            <TableHeader sortFunction={sortData} memberCount={memberCount} />
            <TableBody tableData={sortedData} />
        </>
    );
}

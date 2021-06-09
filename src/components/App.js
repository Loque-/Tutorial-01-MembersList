import React, { useState } from "react";
import TableHeader from "components/organisms/tableHeader";
import TableBody from "components/organisms/tableBody";
import { basicSort } from "utils";

import "styles.css";

const DEFAULT_SORT = "joinDate";

function App({ members = [], memberCount = 0 }) {
    const [sortName, setSortName] = useState(DEFAULT_SORT);
    const [sortReverse, setSortReverse] = useState(false);

    const [sortedData] = useState(
        members.sort(basicSort(sortName, sortReverse))
    );

    function sortData(on) {
        let isReverse = false;

        // If we are sorting on the same as the current sortName
        if (on === sortName) {
            isReverse = sortReverse ? false : true;
        }

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

export default React.memo(App);

import { styled } from "@stitches/react";
import { tableSize } from "styles";

const TableHeadRow = styled("div", {
    ...tableSize,
    color: "hsla(0,0%,100%,.6)",
    marginBottom: "1px",
    paddingBottom: "1px",
    borderBottom: "solid 1px rgba(255, 255, 255,.2)",
    transition: "color .25s, background-color .25s, box-shadow .25s",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255,.2)"
    }
});
const ColumnTitle = styled("div", {
    display: "flex",
    alignItems: "center",
    padding: "0px 5px",
    height: "38px",
    transition: "color .25s, background-color .25s, box-shadow .25s",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255,.2)"
    }
});

// React component
function TableHeaderComponent({ sortFunction }) {
    // JSX
    return (
        <TableHeadRow>
            <ColumnTitle
                onClick={() => {
                    sortFunction("image");
                }}
            >
                Image
            </ColumnTitle>
            <ColumnTitle
                onClick={() => {
                    sortFunction("name");
                }}
            >
                Name
            </ColumnTitle>
            <ColumnTitle
                onClick={() => {
                    sortFunction("joinDate");
                }}
            >
                Join Date
            </ColumnTitle>
            <ColumnTitle
                onClick={() => {
                    sortFunction("lastOnline");
                }}
            >
                Last Online
            </ColumnTitle>
            <ColumnTitle
                onClick={() => {
                    sortFunction("bungieId");
                }}
            >
                Bungie Profile
            </ColumnTitle>
        </TableHeadRow>
    );
}

export default TableHeaderComponent;

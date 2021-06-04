import { styled } from "@stitches/react";
import { tableSize } from "./styles";

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

function TableHeaderComponent({ imgURL, name, joinDate }) {
    // JSX
    return (
        <TableHeadRow>
            <ColumnTitle>Image</ColumnTitle>
            <ColumnTitle>Name</ColumnTitle>
            <ColumnTitle>Join Date</ColumnTitle>
        </TableHeadRow>
    );
}

export default TableHeaderComponent;

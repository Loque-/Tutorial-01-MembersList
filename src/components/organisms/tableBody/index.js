import MemberRow from "components/molecules/rowMember";

function TableBody({ tableData }) {
    return tableData.map((member, i) => <MemberRow key={i} {...member} />);
}

export default TableBody;

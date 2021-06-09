import MemberRow from "components/molecules/rowMember";

function createMemberRow(member) {
    // Find relevant bits of data
    const name = member.name;
    const joinDate = new Date(member.joinDate).toLocaleDateString();
    const imgURL = member.image;
    const lastOnline = new Date(member.lastOnline).toLocaleDateString();

    return (
        <MemberRow
            key={name}
            imgURL={imgURL}
            name={name}
            joinDate={joinDate}
            lastOnline={lastOnline}
        />
    );
}

function TableBody({ tableData }) {
    return tableData.map(
        // Do this function
        createMemberRow
    );
}

export default TableBody;

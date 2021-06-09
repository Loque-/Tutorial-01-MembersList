import MemberRow from "components/molecules/rowMember";

function createMemberRow(member) {
    // Find relevant bits of data
    const name = member.name;
    const joinDate = new Date(member.joinDate).toLocaleDateString();
    const imgURL = member.image;
    const lastOnline = new Date(member.lastOnline).toLocaleDateString();
    const bungieId = member.bungieId;

    return (
        <MemberRow
            key={name}
            imgURL={imgURL}
            name={name}
            joinDate={joinDate}
            lastOnline={lastOnline}
            bungieId={bungieId}
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

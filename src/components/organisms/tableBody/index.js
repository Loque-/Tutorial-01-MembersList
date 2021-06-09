import MemberRow from "components/molecules/rowMember";

function createMemberRow(member) {
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
    return tableData.map(createMemberRow);
}

export default TableBody;

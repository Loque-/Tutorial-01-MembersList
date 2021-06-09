import MemberRow from "data/container/rowMember";

function createMemberRow(member) {
    const name = member.name;
    const joinDate = new Date(member.joinDate).toLocaleDateString();
    const imgURL = member.image;
    const bungieId = member.bungieId;
    const bungieMemberType = member.bungieMemberType;
    const destinyId = member.destinyId;
    const destinyMemberType = member.destinyMemberType;

    return (
        <MemberRow
            key={name}
            imgURL={imgURL}
            name={name}
            joinDate={joinDate}
            bungieId={bungieId}
            bungieMemberType={bungieMemberType}
            destinyId={destinyId}
            destinyMemberType={destinyMemberType}
        />
    );
}

function TableBody({ tableData }) {
    return tableData.map(createMemberRow);
}

export default TableBody;

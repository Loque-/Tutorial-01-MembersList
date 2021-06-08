import MemberRow from "components/molecules/rowMember";

function createMemberRow(member) {
  // Find relevant bits of data
  const name = member.name;
  const joinDate = new Date(member.joinDate).toLocaleDateString();
  const imgURL = member.image;

  return (
    <MemberRow key={name} imgURL={imgURL} name={name} joinDate={joinDate} />
  );
}

function TableBody({ tableData }) {
  return tableData.map(
    // Do this function
    createMemberRow
  );
}

export default TableBody;

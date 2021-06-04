import { members } from "./members";
import TableHeader from "./tableHeader";
import Member from "./member";

import "./styles.css";

// Render list of users from JS object
// [x] Get data
// [x] Render data
// [x] Style data
// [ ] Sortable columns
// [ ] Link profiles to something
// [ ] Border animation on hover
// [ ] Get members list from bungie API
// [ ] Folder setup and organisation

function createMemberRow(member) {
    // Find relevant bits of data
    const name = member.destinyUserInfo.LastSeenDisplayName;
    const joinDate = new Date(member.joinDate).toLocaleDateString();
    const imgURL = `https://www.bungie.net/${member.bungieNetUserInfo.iconPath}`;

    return (
        <Member key={name} imgURL={imgURL} name={name} joinDate={joinDate} />
    );
}

// createMemberRow(members[0])

export default function App() {
    return (
        <div className="App">
            <TableHeader />
            {
                // for every member in members array
                members.map(
                    // Do this function
                    createMemberRow
                )
            }
        </div>
    );
}

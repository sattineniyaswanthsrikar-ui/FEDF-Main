import Uniparent from "./Uniparent";

// Child component — RECEIVES data as props (read-only!)
function ProfileCard({ user }) {
  //                   ↑ destructuring the props object
  return (
    <div>
      <h2>{user.name}</h2>     {/* can READ props */}
      <p>Age: {user.age}</p>   {/* but CANNOT change them */}
    </div>
  );

}
export default ProfileCard;

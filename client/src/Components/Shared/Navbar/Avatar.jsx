import { useContext } from "react";
import avatartImg from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";
const Avatar = () => {
  const { user } = useContext(AuthContext);
  return (
    <img
      src={user && user.photoURL ? user.photoURL : avatartImg}
      alt="profile"
      height={"30"}
      width="30"
      className="rounded-full "
    />
  );
};

export default Avatar;

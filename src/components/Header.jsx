import { useNavigate } from "react-router";
import logoMoviesGPT from "../assets/logoMoviesGPT.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="absolute flex justify-between items-center z-10 px-8 py-2 bg-linear-to-b from-black w-screen">
      <img className="w-44" src={logoMoviesGPT} />
      {user && (
        <div className="text-white text-sm flex justify-between items-center">
          <span className="mx-8">Welcome back {user?.displayName}</span>
          <button
            className="bg-transparent hover:bg-[#e60304] text-[#e60304] font-semibold hover:text-white py-2 px-4 border border-[#e60304] hover:border-transparent rounded"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

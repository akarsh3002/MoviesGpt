import { useNavigate } from "react-router";
import logoMoviesGPT from "../assets/logoMoviesGPT.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute flex justify-between items-center z-10 px-8 py-2 bg-linear-to-b from-black w-screen">
      <img className="w-44" src={logoMoviesGPT} />
      {user && (
        <div className="text-white text-sm flex gap-6 justify-between items-center">
          <button
            className="bg-transparent hover:bg-[#7747cb] text-[#7747cb] font-semibold hover:text-white py-2 px-4 border border-[#7747cb] hover:border-transparent rounded"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Go Home" : "AI Search"}
          </button>
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

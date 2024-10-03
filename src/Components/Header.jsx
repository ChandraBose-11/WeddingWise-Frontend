import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  Navbar,
  TextInput,
} from "flowbite-react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toggleTheme } from "../Redux/Slice/themeSlice";
import { signOutSuccess } from "../Redux/Slice/userSlice";

const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentuser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  // console.log(currentuser);

  // Signout
  const handleSignOut = () => {
    dispatch(signOutSuccess());
    localStorage.removeItem("Token");
    navigate("/signin");
  };
  return (
    <Navbar className="border-t-2 border-b-4 bg-red-100 dark:bg-black">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-violet-600 via-fuchsia-700 to-pink-500 rounded-lg text-white">
          Wedding-Wise
        </span>
      </Link>
      <Button
        className="w-12 h-10 lg:hidden text-dark"
        gradientDuoTone="purpleToPink"
        outline
        pill
      >
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          gradientDuoTone="purpleToPink"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        {currentuser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="user"
                img={currentuser.rest.profilePicture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentuser.rest.username}</span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <DropdownDivider />
            <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="purpleToPink">SignIn</Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/weddingvenues"} as={"div"}>
          <Link to="/weddingvenues">WeddingVenues</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/planningtool"} as={"div"}>
          <Link to="/planningtool">PlanningTool</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/weddingVendors"} as={"div"}>
          <Link to="/weddingVendors">WeddingVendors</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/bride"} as={"div"}>
          <Link to="/bride">Bride</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/groms"} as={"div"}>
          <Link to="/groms">Grooms</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;

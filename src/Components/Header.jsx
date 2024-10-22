import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  Navbar,
} from "flowbite-react";
import React from "react";
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
        <span className="px-2 py-1  text-red-700">
          WEDDINGWISE!!
        </span>
      </Link>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          gradientDuoTone="pinkToOrange"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        {currentuser ? (
          <Dropdown
            arrowIcon={false}
            inline
             className="font-bold bg-red-100"
            label={
              <Avatar
                alt="user"
                img={currentuser.profilePicture}
                rounded
              />
            }
          >
            <Dropdown.Header >
              <span className="block text-sm">{currentuser.username}</span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <DropdownDivider />
            <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="pinkToOrange">SignIn</Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
      <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
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
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;

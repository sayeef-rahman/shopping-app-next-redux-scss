import { RootState } from "@/pages/_app";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HamburgerMenu from "./HamburgerMenu";
// import "../styles/globals.scss";

export default function NavBar() {
  const state = useSelector((state: RootState) => state);
  const [isShowNavLinks, setIsShowNavLinks] = useState(false);
  const [IsMobileView, setIsMobileView] = useState(false);
  const [localUser, setLocalUser] = useState<null | string>(null);

  const handleNavLinks = () => {
    setIsShowNavLinks(!isShowNavLinks);
  };

  console.log("isShowNavLinks", isShowNavLinks);
  console.log("IsMobileView", IsMobileView);
  // console.log("window", window);

  useEffect(() => {
    const updateMobileView = () => {
      if (typeof window !== undefined) {
        if (window.innerWidth > 600) {
          setIsMobileView(false);
        } else {
          setIsMobileView(true);
        }
      }
    };
    if (typeof window !== undefined) {
      const localUser: string | null = localStorage.getItem("user");
      if (localUser) {
        setLocalUser(JSON.parse(localUser));
      } else {
        setLocalUser(null);
      }
      window.addEventListener("resize", updateMobileView);
      updateMobileView();
    }
    return () => window.removeEventListener("resize", updateMobileView);
  }, []);

  return (
    <nav>
      <div className="nav container">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <Link href={"/"} className="nav-title">
            Adventure Shop
          </Link>
        </div>
        <div className="nav-btn" onClick={handleNavLinks}>
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        {isShowNavLinks && IsMobileView && (
          <div className="nav-links">
            <Link href="/category" onClick={handleNavLinks}>
              Categories
            </Link>
            {(state.user || localUser) && (
              <Link href="/">{state.user.name ?? localUser}</Link>
            )}
          </div>
        )}
        {!IsMobileView && (
          <div className="nav-links">
            <Link href="/category">Categories</Link>
            {(state.user || localUser) && (
              <Link href="/">{state.user.name ?? localUser}</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

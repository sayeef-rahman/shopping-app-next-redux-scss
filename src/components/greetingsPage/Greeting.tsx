import { RootState } from "@/pages/_app";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Greeting = () => {
  // const state = useSelector((state: RootState) => state);
  return (
    <section className="login-main-wrapper" data-testid={"greeting-main"}>
      <div className="main-container">
        <div className="login-process">
          <div className="login-main-container">
            <div className="thankyou-wrapper">
              {/* <h1>Thank you {state.user.name?.toLocaleUpperCase()}</h1> */}
              <p>for shopping with us.</p>
              <Link href="/category">Shop More</Link>
              <div className="clr"></div>
            </div>
            <div className="clr"></div>
          </div>
        </div>
        <div className="clr"></div>
      </div>
    </section>
  );
};

export default Greeting;

import { addUserToState, removeUserFromState } from "@/redux/slices/userSlice";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const WelcomeForm = () => {
  const dispatch = useDispatch<Dispatch<UnknownAction>>();
  const router = useRouter();
  const handleNameSumit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    const form_values = Object.fromEntries(formData);

    if (form_values.nameInput) {
      dispatch(
        addUserToState({
          name: `${form_values.nameInput}`,
        })
      );
      router.push("/category");
    } else {
      toast.error("Please enter your name!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        toastId: "welcomePageNameError",
        hideProgressBar: true,
      });
      dispatch(removeUserFromState());
    }
  };

  return (
    <div className="parent-wrapper" data-testid="form">
      <div className="subscribe-wrapper">
        <h4>WELCOME TO ADVENTURE SHOP</h4>
        <p>Please share your name with us.</p>
        <form
          action=""
          className="homepage-form"
          onSubmit={(e) => {
            handleNameSumit(e);
          }}
        >
          <input
            type="text"
            name="nameInput"
            className="subscribe-input"
            placeholder="Your Name"
            data-testid={"name-input"}
          ></input>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

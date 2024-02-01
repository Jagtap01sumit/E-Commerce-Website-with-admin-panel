"user client";
import React, { useState } from "react";
import { useRoutes } from "react-router-dom";

const Index = () => {
  const [otpInput, setOtpInput] = useState("");
  const router = useRoutes();

  const email =
    typeof window !== "undefined" ? localStorage.getItem("email") : null;

  const submitForm = async (e) => {
    e.preventDefault();
  };

  const resendOTP = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-5 rounded-lg">
        <div className="text-center">
          <h2>Email Verification</h2>
          {email && (
            <p className="text-sm font-medium text-gray-400">
              {`We have sent a code to your email ${email}`}
            </p>
          )}
        </div>
        <form onSubmit={submitForm}>
          <div className="flex flex-col space-y-3 mt-4">
            <input
              className="form-control text-center"
              type="number"
              min={1000}
              max={9999}
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
            />
            <div className="flex flex-col space-y-4">
              <div className="d-flex align-items-center justify-content-center m-3">
                <button className="btn--dark" type="submit">
                  Verify Account
                </button>
              </div>
              <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't receive the code?</p>{" "}
                <button onClick={resendOTP} className="btn">
                  Resend
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;

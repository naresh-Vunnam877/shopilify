import React, { useState } from "react";
import AnchorLink from "../../Components/common/Link";
import Input from "../../Components/common/Input";
import Button from "../../Components/common/Button";

const Register = () => {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [crfm_password, setCrfmPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };
  const handlecrfmPassChange = (event) => {
    setCrfmPassword(event.target.value);
  };
  const handleClick = () => {
    console.log("Button clicked!", fullname, email, password);
  };

  return (
    <form className="flex items-center justify-center h-screen mx-20">
      <div className="lg:w-2/5 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <div className="flex flex-row justify-center"></div>
        <div className="flex flex-row justify-center">
          <h2 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">
            Register your account.
          </h2>
        </div>
        <div className="mt-3 mb-3">
          <Input
            type="text"
            label="FullName"
            value={fullname}
            onChange={handleNameChange}
          />
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={handlePassChange}
          />
          <Input
            type="password"
            label="Confirm Password"
            value={crfm_password}
            onChange={handlecrfmPassChange}
          />

          <Button onClick={handleClick}>Register</Button>
        </div>
        <div className="flex flex-row items-center justify-center ">
          <h4 className="title-font sm:text-1xl text-1xl mb-4 font-medium text-white flex flex-row ">
            Already have account.
            <AnchorLink path={"login"} name={"Login"} />{" "}
          </h4>
        </div>
      </div>
    </form>
  );
};

export default Register;

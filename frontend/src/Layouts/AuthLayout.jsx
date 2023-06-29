import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="container mx-auto bg-black text-white min-h-screen">
      <main className="container mx-auto">{children}</main>
    </div>
  );
};

export default AuthLayout;

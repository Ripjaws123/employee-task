import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formdata.email, formdata.password);
    console.log("hello guys");
    console.log(formdata);
  };

  const changeHandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full h-screen  flex justify-center items-center">
      <div className="w-[60%] h-[60%] bg-slate-400 rounded-xl flex justify-center items-center p-4">
        {/* Left Section */}
        <div className="bg-green-500 w-[40%] h-full flex justify-center items-center rounded-2xl">
          <h1 className="text-7xl font-bold">Login</h1>
        </div>
        {/* Right Section */}
        <div className=" w-[60%] h-full flex justify-center items-center flex-col gap-6">
          <h1 className="text-4xl font-bold">Employee Details</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center  w-[70%] gap-6"
          >
            <input
              onChange={changeHandler}
              type="email"
              value={formdata.email}
              name="email"
              placeholder="Enter your email"
              className="w-full h-10  border-black border-2  rounded-lg outline-none p-2 "
            />
            <input
              onChange={changeHandler}
              type="password"
              name="password"
              value={formdata.password}
              placeholder="Enter your Password"
              className="w-full h-10  border-black border-2 rounded-lg outline-none p-2"
            />
            <button
              type="submit"
              className="w-full h-10 bg-blue-500 rounded-lg text-lg font-semibold "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

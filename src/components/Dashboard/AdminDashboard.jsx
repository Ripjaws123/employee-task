import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({ changeUser }) => {
  // getting the data from the local storage
  const authdata = useContext(AuthContext);

  // State to store employee data
  const [employees, setEmployees] = useState([]);

  // Fetch employee data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("employees"));
    if (storedData) {
      setEmployees(storedData);
    }
  }, []);

  // Setting the Form to accept the data
  const [taskData, setTaskData] = useState({
    title: "",
    date: "",
    description: "",
    assignto: "",
    category: "",
    active: true,
    newTask: true,
    completed: false,
    failed: false,
  });

  // Change Function
  const handleChanger = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  // Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    const data = JSON.parse(localStorage.getItem("employees"));
    console.log(data);
    data.forEach(function (element) {
      if (taskData.assignto === element.name) {
        element.tasks.push(taskData);
        console.log(element.tasks);

        // Update the task count based on the task status
        if (taskData.newTask) {
          element.taskCount.newTask += 1;
        }
        if (taskData.active) {
          element.taskCount.active += 1;
        }

        console.log(element.taskCount);
      }
    });
    localStorage.setItem("employees", JSON.stringify(data));

    setEmployees(data);

    setTaskData({
      title: "",
      date: "",
      description: "",
      assignto: "",
      category: "",
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    });
  };

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    changeUser("");
  };

  return (
    <div className="bg-slate-400 w-full h-screen p-5">
      {/* Employee Details */}
      <div className="bg-gray-500 w-full flex justify-between items-center h-20 p-4 rounded-xl">
        <div className="flex flex-col ">
          <span className="text-xl font-semibold text-white">Hello</span>
          <span className="text-3xl font-bold text-white">Ripon</span>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-blue-500 px-4 py-2 rounded-lg text-lg font-bold text-white shadow-lg"
          >
            Logout
          </button>
        </div>
      </div>
      {/* Create Task */}
      <div className="bg-gray-500 w-full h-[50%]  rounded-xl p-3 mt-4">
        <form
          onSubmit={handleSubmit}
          className=" w-full h-full rounded-2xl flex justify-between items-center"
        >
          {/* left */}
          <div className=" w-[50%] h-full flex flex-col gap-3 justify-evenly items-center pb-3 ">
            <div className="flex flex-col gap-1 w-[85%] h-[20%]">
              <span className="text-lg font-medium text-white">Task Title</span>
              <input
                onChange={handleChanger}
                value={taskData.title}
                name="title"
                type="text"
                placeholder="Task Title"
                className="rounded-lg p-2 shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-1 w-[85%] h-[20%]">
              <span className="text-lg font-medium text-white">Date</span>
              <input
                onChange={handleChanger}
                value={taskData.date}
                name="date"
                type="date"
                className="rounded-lg p-2 shadow-lg"
                placeholder="Date"
              />
            </div>
            <div className="flex flex-col gap-1 w-[85%] h-[20%]">
              <span className="text-lg font-medium text-white">Assign To</span>
              <input
                onChange={handleChanger}
                value={taskData.assignto}
                name="assignto"
                placeholder="Assign To"
                className="rounded-lg p-2 shadow-lg"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 w-[85%] h-[20%]">
              <span className="text-lg font-medium text-white">Category</span>
              <input
                onChange={handleChanger}
                value={taskData.category}
                name="category"
                placeholder="Category"
                className="rounded-lg p-2 shadow-lg"
                type="text"
              />
            </div>
          </div>
          {/* right */}
          <div className=" w-[50%] h-full flex flex-col justify-evenly items-center">
            <div className="flex flex-col gap-2  w-[85%] ">
              <span className="text-lg font-medium text-white">
                Description
              </span>
              <textarea
                onChange={handleChanger}
                value={taskData.description}
                name="description"
                placeholder="Description"
                id=""
                cols="30"
                rows="8"
                type="text"
                style={{ resize: "none" }}
                className="rounded-lg p-2 shadow-lg"
              ></textarea>
            </div>
            <div className=" flex flex-col w-[85%] mt-2">
              <button
                type="submit"
                className="bg-blue-500 p-3 rounded-lg font-medium text-white shadow-lg"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Task Lists */}
      <div className="bg-gray-500 w-full h-[35%] rounded-xl p-4 mt-4 flex flex-col gap-3 ">
        <div className="w-full h-10 bg-orange-400 rounded-xl flex  justify-evenly items-center p-4">
          <span className="text-lg font-bold w-[19%] text-white flex justify-center items-center underline pr-5">
            Employee Name
          </span>
          <span className="text-lg font-bold w-[18%] text-white flex justify-center items-center underline pr-4">
            New Task
          </span>
          <span className="text-lg font-bold w-[18%] text-white flex justify-center items-center underline pr-3">
            Active Task
          </span>
          <span className="text-lg font-bold w-[18%] text-white flex justify-center items-center underline">
            Completed Task
          </span>
          <span className="text-lg font-bold w-[18%] text-white flex justify-center items-center underline">
            Failed Task
          </span>
        </div>
        <div id="tasks" className=" flex flex-col gap-3 overflow-y-auto">
          {authdata.employee.map((emp, idx) => {
            return (
              <div
                key={idx}
                className="w-full h-10 bg-green-400 rounded-xl flex justify-around items-center p-4"
              >
                <span className="text-lg font-semibold  w-[18%] flex justify-center items-center">
                  {emp?.name}
                </span>
                <span className="text-lg font-semibold  w-[18%] flex justify-center items-center">
                  {emp.taskCount.newTask}
                </span>
                <span className="text-lg font-semibold  w-[18%] flex justify-center items-center">
                  {emp.taskCount.active}
                </span>
                <span className="text-lg font-semibold  w-[18%] flex justify-center items-center">
                  {emp.taskCount.completed}
                </span>
                <span className="text-lg font-semibold  w-[18%] flex justify-center items-center">
                  {emp.taskCount.failed}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

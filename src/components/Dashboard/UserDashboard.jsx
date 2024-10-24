import AcceptTask from "../TaskList/AcceptTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";
import NewTask from "../TaskList/NewTask";

const UserDashboard = ({ data, changeUser }) => {
  console.log(data);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    changeUser('')
  };

  return (
    <div className="bg-slate-400 w-full h-screen p-8">
      {/* Employee Details */}
      <div className="bg-gray-500 w-full flex justify-between items-center h-20 p-4 rounded-xl">
        <div className="flex flex-col ">
          <span className="text-xl font-semibold text-white">Hello</span>
          <span className="text-3xl font-bold text-white">{data.name}</span>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-blue-500 px-4 py-2 rounded-lg text-lg font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
      {/* Task Details */}
      <div className="bg-gray-500 w-full gap-10 flex justify-evenly items-center rounded-xl p-4 mt-9">
        <div className=" bg-yellow-400 w-80 h-24 rounded-2xl">
          <div className="flex flex-col justify-center items-center h-full">
            <span className="text-3xl font-bold mr-[67px]">
              {data.taskCount.newTask}
            </span>
            <span className="text-xl font-semibold">New Task</span>
          </div>
        </div>
        <div className=" bg-green-400 w-80 h-24 rounded-2xl">
          <div className="flex flex-col justify-center items-center h-full">
            <span className="text-3xl font-bold mr-[125px]">
              {data.taskCount.completed}
            </span>
            <span className="text-xl font-semibold">Completed Task</span>
          </div>
        </div>
        <div className=" bg-orange-400 w-80 h-24 rounded-2xl">
          <div className="flex flex-col justify-center items-center h-full">
            <span className="text-3xl font-bold mr-[116px]">
              {data.taskCount.active}
            </span>
            <span className="text-xl font-semibold">Accepted Task</span>
          </div>
        </div>
        <div className=" bg-red-400 w-80 h-24 rounded-2xl">
          <div className="flex flex-col justify-center items-center h-full">
            <span className="text-3xl font-bold mr-[88px]">
              {data.taskCount.failed}
            </span>
            <span className="text-xl font-semibold">Failed Task</span>
          </div>
        </div>
      </div>
      {/* Completion Details */}
      <div
        id="tasklist"
        className="bg-gray-500 w-full gap-6 flex justify-evenly items-center rounded-xl p-4 mt-12 overflow-x-scroll flex-nowrap"
      >
        {data.tasks.map((task, idx) => {
          if (task.active) {
            return <AcceptTask task={task} key={idx} />;
          }
          if (task.completed) {
            return <CompleteTask task={task} key={idx} />;
          }
          if (task.failed) {
            return <FailedTask task={task} key={idx} />;
          }
          if (task.newTask) {
            return <NewTask task={task} key={idx} />;
          }
        })}
      </div>
    </div>
  );
};

export default UserDashboard;

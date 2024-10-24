const NewTask = ({task}) => {
  return (
    <div className=" bg-yellow-400 flex-shrink-0 w-[23rem] h-80 rounded-2xl p-6">
      <div className="flex  justify-between items-center">
        <span className="px-3 py-1 text-white bg-red-500 rounded-lg">{task?.category}</span>
        <span className="text-sm text-white font-semibold">{task?.date}</span>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{task?.title}</h1>
        <p id="message" className=" mt-2 h-[9.5rem] overflow-y-auto">
          {task?.description}
        </p>
      </div>
      <div className="mt-3">
        <button className="bg-blue-500 px-3 py-1 rounded-lg text-lg font-semibold">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;

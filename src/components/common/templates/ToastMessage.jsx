import toast from "react-hot-toast";

const url = "https://github.com/vineet-53";
export default function ToastMessage({ t }) {
  const handleProfile = (e) => {
    window.open(url);
  };
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 bg-[#FFFFFF]`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/116667797?v=4"
              alt="vineet-singh"
              onClick={handleProfile}
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">Vineet Singh</p>
            <p className="mt-1 text-sm text-gray-500">
              You can Move Around the Cards
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={handleProfile}
          className=" w-full border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Link
        </button>
      </div>
    </div>
  );
}

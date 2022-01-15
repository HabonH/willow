import Sidebar from "./Sidebar/Sidebar";

const Main = () => {
  const user = localStorage.getItem("user");
  return (
    <div>
      <h1>Main App</h1>
      <Sidebar />
    </div>
  );
};

export default Main;

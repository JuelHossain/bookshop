import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div className="h-screen w-full flex">
      <Sidebar />
      <Content />
    </div>
  );
}


import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskManager from "./pages/TaskManager";
import Posts from "./pages/Posts";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Welcome Home</div>} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Layout>
  );
}
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // Import Outlet for layout
import "./App.css";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, 
        { path: "/start-framework", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/portfolio", element: <Portfolio /> },
      ],
    },
    { path: "*", element: <h1>404 - Page Not Found</h1> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

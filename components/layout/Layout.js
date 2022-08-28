import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen">
      <div className="max-w-6xl mx-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen">
      <div className="max-w-6xl h-full mx-auto">
        <div>
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
}

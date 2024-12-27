import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App;

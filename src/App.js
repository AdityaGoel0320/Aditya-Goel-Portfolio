import './App.css';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';
import SkillPage from './Pages/SkillPage';
import Footer from './Pages/Footer';


function App() {
  return (

    <>
        <Navbar />
        <HomePage />
        <SkillPage />
        <ProjectsPage />
        <ContactPage />
        <Footer />
    </>
  );
}

export default App;

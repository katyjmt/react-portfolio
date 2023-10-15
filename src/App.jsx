import { useState } from 'react'
import './styles/App.css'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <nav>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>
      <main>{renderPage()}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

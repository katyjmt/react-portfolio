import { useState } from 'react'
import './styles/App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';

export default function App() {
  // const [currentPage, setCurrentPage] = useState('Home');

  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   }
  //   if (currentPage === 'Portfolio') {
  //     return <Portfolio />;
  //   }
  //   return <Contact />;
  // }

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

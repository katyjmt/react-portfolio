import '../styles/Nav.css'

export default function Navigation( {currentPage, handlePageChange} ) {
  return (
    <>
      <div className='nav-container'>
        <div className='nav'>
          <ul>
            <li>
              <a 
                href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
            </li>
            <li>
              <a 
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
            <li>
              <a 
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact / CV</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
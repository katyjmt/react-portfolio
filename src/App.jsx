import './styles/App.css'
import Portfolio from './components/Portfolio'
import About from './components/About'
import PageTitle from './components/PageTitle'
import Nav from './components/Nav'
import Underline from './components/Underline'
import Form from './components/Form'
import LinksCV from './components/LinksCV'

function App() {

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>

        <div className="keywords centered">Developer | Designer | Data Nerd</div>
        <PageTitle />
        <About />
        <PageTitle />
        <Underline />
        <Portfolio />
        <PageTitle />
        <Underline />
        <p>Have a question? Get in contact via the form below.</p>
        <div className='contact-page'>
        <Form />
        <LinksCV />
        </div>
      </main>
    </>
  );
}

export default App

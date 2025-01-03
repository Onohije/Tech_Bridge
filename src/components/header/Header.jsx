import Logo from '../../assets/images/logo.svg'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo-img'/>
        <div className='menu'>
            <a href="/">Companies</a>
            <a href="/candidates">Candidates</a>
            <a href='/assessment'>Assessment</a>
            <a href='/jobs'>Post a job</a>
            <a href='/career-advice'>Career Advice</a>
        </div>
        <div className='auth'>
            <button>Sign in</button>
            <button className='login-btn'>Log In</button>
        </div>
    </div>
  )
}

export default Header
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "../components/style/Home.css"
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
export const Nav = () => {
    const navigate = useNavigate()
    const CalculatorChich = ()=>{
        navigate('/calculator')
    }
    const ColourBox = ()=>{
        navigate('/colorbox')
    }
    const Todo = ()=>{
        navigate('/todo')
    }
    const handleLogout=(e)=>{
        e.preventDefault()
        localStorage.removeItem("Data")
        navigate('/')
    }
    
  useEffect(()=>{
    if(!localStorage.getItem("Data")) return navigate('/')
  })
    return (
        <div>
            <nav className='navigation'>
                <ul>
                    <li>Home</li>
                    <li onClick={CalculatorChich}>Calculator</li>
                    <li onClick={ColourBox}>Colour Box</li>
                    <li onClick={Todo}>Todo list</li>
                    <li><button className='btn btn-danger float-end' onClick={handleLogout}>Log Out</button></li>
                </ul>
            </nav>
        </div>
    )
}

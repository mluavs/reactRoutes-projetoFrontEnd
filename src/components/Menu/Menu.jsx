import { Component } from "react";
import { Link } from 'react-router-dom';
import { List } from 'phosphor-react';
import logo from '../../assets/logozin.png';
import styles from './menu.styles.css';


class Menu extends Component {
    state={ clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
    return (
        <>
        <nav>
            <img src={logo} />
        <div>
        <ul id="navbar" className={this.state.clicked ? '#navbar active' : "#navbar"}>
            <li>
                <Link to="/" className='active'>Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/comments">Comments</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        </div>
        <div id='mobile' onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        </nav>
        </>
    )
}}

export default Menu
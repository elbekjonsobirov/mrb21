import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Style/Header.scss';
import logo from './HeaderImg/logo.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default class Header extends Component {
    render() {
        return (
            <div className='header-page'>
                <div className="navbar-card">
                    <div className="navbar-left">
                        <img src={logo} alt="" className="navbar logo" />
                        <ul>
                            <li>
                                <Link to="/">
                                    Asosiy sahifa
                                </Link>
                            </li>
                            <li >
                                <Link to="/xizmatlar">
                                    Xizmatlar
                                </Link>
                            </li>
                            <li >
                                <Link to="/fanresurs">
                                    Fan resurslari
                                </Link>
                            </li>
                            <li>
                                <a href="https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en" target="blank">
                                    Yangiliklar
                                </a>
                            </li>
                            <li>
                                <Link to="/muallif">
                                    Muallif
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Stack spacing={2} direction="row" className='navbar-right'>
                        <Button variant="text">Sign in</Button>
                        <Button variant="contained">Sign up</Button>
                    </Stack>

                </div>
            </div>
        )
    }
}

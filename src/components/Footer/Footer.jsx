import React, { Component } from 'react'
import './Style/Footer.scss'
import FooterPhoto from './FooterImg/logo.png'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-page'>
                <div className="footer-left">
                    <img src={FooterPhoto} alt="" />
                    O'zbekiston Respublikasi oliy va o'rta-maxsus ta'lim vazirligi
                </div>
                <div className="footer-right">
                    <div className="footer-contact">
                        <h1 className="footer-title">
                            Aloqa
                        </h1>
                        <p className="number">
                            +998 97 575-6785
                        </p>
                    </div>
                    <div className="footer-contact">
                        <h1 className="footer-title">
                            Ijtimoiy tarmoqlar
                        </h1>
                        <span>
                            <a href="https://t.me/mrB21" target="blank">
                                <i class="fa-brands fa-telegram"></i>
                            </a>
                            <a href="https://www.instagram.com/mrb180416" target="blank">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="qmuhammad2001@gmail.com" target="_blank">
                                <i class="fa-solid fa-envelope"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

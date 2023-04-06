import React, { Component } from 'react'
import photo from './MuallifImg/muallif.jpg'
import './Style/Muallif.scss'

export default class Muallif extends Component {
  render() {
    return (
      <div className="muallif-page">
        <div className="muallif-about-card">
          <div className="muallif-about">
            <h1 className="about-me">
              O'zim Haqimda
              <span></span>
            </h1>
            <p className="about-me-comment">
              Texnologiyalar : Flutter , JavaScript , Django , React JS , GitHub , Redux
            </p>
            <h3>
              <span>Ism:</span>
              Qurbonov Muhammad
            </h3>
            <h3>
              <span>Yosh:</span>
              21 yosh
            </h3>
            <h3>
              <span>Email:</span>
              qmuhammad2001@gmail.com
            </h3>
            <h3>
              <span>Manzil:</span>
              O'zbekiston. Samarqand
            </h3>
          </div>
          <div className="muallif-imgs">
            <img src={photo} alt="" />
          </div>
        </div>

          <h1 className="work">
            Ish tajribam
            <span></span>
          </h1>
        <div className="dev-about-card">
          <div className="left">
            <h2>
              <h4></h4>
            </h2>
            <div className="left-content">
              <p className="talim">
                Universitet
              </p>
              <p className="yil">
                2019-2023
              </p>
              <p className="comment">
                Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti Samarqand filiali
              </p>
            </div>
          </div>
          <div className="right">
            <h2>
              <h4></h4>
            </h2>
            <div className="right-content">
              <p className="talim">
                Maktab
              </p>
              <p className="yil">
                2008-2019
              </p>
              <p className="comment">
                Samarqan viloyati Kattaqo'rg'on tumani <br /> 14-maktab
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

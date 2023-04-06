import React, { Component } from 'react'
import './Style/Asosiy.scss'
import AsosiyOne from './AsosiyImg/asosiyOne.png'
import AsosiyTwo from './AsosiyImg/asosiyTwo.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default class Asosiy extends Component {
  render() {
    return (
      <div className='asosiy-page'>
        <div className="asosiy-section">
          <div className="asosiy-left">
            <h1 className="asosiy-title">
              Butun  Google  siz  uchun  ishlaydi
            </h1>
            <p className="asosiy-commit">
              Google hisobingizga kiring va ishlatadigan
              Google xizmatlaringizning barcha imkoniyatlaridan foydalaning.
              Hisobingiz Google xizmatlarini moslashtirish orqali koʻproq ishlar bajarish
              hamda istalgan joydan muhim maʼlumotlaringizga osongina kirish imkoniyatini beradi.
            </p>
            <div className="buttons">
              <Link to='/xizmatlar'>
                <Button variant="contained">Google xizmatlari haqida</Button>
              </Link>
            </div>
          </div>
          <div className="asosiy-right">
            <img src={AsosiyOne} alt="/" />
          </div>
        </div>
        <div className="asosiy-hisob">
          <img src={AsosiyTwo} alt="/" />
          <h1 className="asosiy-hisob-title">
            Yordamga  tayyor
          </h1>
          <p className="asosiy-hisob-commit">
            Chrome va YouTube kabi Google xizmatlari hisobingiz bilan kirganingizda
            yanada yaxshiroq ishlaydi va koʻproq ishlar bajarishingizga yordam beradi.
            Hisobingizda istalgan vaqt istalgan qurilmada avtomatik kiritish,
            moslashtirilgan tavsiyalar kabi foydali funksiyalardan foydalanishingiz mumkin.
          </p>
          <a href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank">
            <Button variant="contained">google hisob ochish</Button>
          </a>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Xizmatbooks extends Component {
  render() {
    return (
      <div className='xizmatlar-pages'>
        <img src="data:image/png;base64,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" alt="/" />
        <p className="classroom-comment">
          O'zingizning pochtangizdan telefoningizga bepul qo'ng'iroq qilishni yoki inglizchadan ruschaga xatni to'g'ridan-to'g'ri Gmail-ga tarjima qilishni xohlamaysizmi? Ushbu haftada 15 yoshga to'lgan Google-ning bepul elektron pochta dasturi foydalanuvchilarni yangiliklar bilan hayratda qoldirishda davom etmoqda.
        </p>
        <p className="classroom-comment">
          Texnik jihatdan, Microsoft sizga Outlook.com orqali qo'ng'iroq qilishingizga imkon beradi, ammo qo'ng'iroq paytida siz dasturdan chiqib, Skype-ga o'tasiz.
        </p>
        <div className="classroom-video-card">
          <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/52uN1WIcPCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="classroom-video-about">
            <h1>Nomi:
              <span>Gmail elektron pochtasidan foydalanish</span>
            </h1>
            <h1>Manba:
              <a target="_blank" href="https://youtu.be/52uN1WIcPCs">
                Najot Ta'lim
              </a>
            </h1>
            <h1>Video tili:
              <span>O'zbekcha</span>
            </h1>
            <a target="_blank" href="https://youtu.be/52uN1WIcPCs" className='youtube-link'>YouTube orqali ko'rish</a>
          </div>
        </div>
        <p className="classroom-comment">
          Bu Snapchat emas, lekin fikr bir xil. Siz Gmail-da muddati tugashini belgilashingiz mumkin va u vaqt o'tishi bilan tugaydi. Siz hatto matnli xabar yordamida oluvchiga yuborilgan parolni talab qilish orqali qo'shimcha maxfiylik qatlamini qo'shishingiz mumkin.
        </p>
        <p className="classroom-comment">
          Gmail-da, Google Boshlang'ich papkasida eng muhim xabarlarni baham ko'radi va qolganlarini kamdan-kam ko'riladigan toifalarga, Ijtimoiy tarmoqlar va Ofertalarga joylashtiradi. Shunday qilib, forumlardagi cheksiz savdo va yangilanishlarning barchasi sizning asosiy xabarlar qutingizni bezovta qilmaydi.
        </p>
        <div className="classroom-video-card">
          <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/g6zYF7fbJk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="classroom-video-about">
            <h1>Nomi:
              <span>The Most Comprehensive Google Meet Tutorial</span>
            </h1>
            <h1>Manba:
              <a target="_blank" href="https://youtu.be/g6zYF7fbJk8">
                Kevin Stratvert
              </a>
            </h1>
            <h1>Video tili:
              <span>Inglizcha</span>
            </h1>
            <a target="_blank" href="https://youtu.be/g6zYF7fbJk8" className='youtube-link'>YouTube orqali ko'rish</a>
          </div>
        </div>
        <p className="classroom-comment">
          Topshiriqlarni baholash uchun hujjatlarni oldindan va keyinroq jo'natadigan yuborish tugmasi bilan ishlov beriladi. Shogird qog'ozni yaratadi va keyinchalik uni "o'qituvchiga" aylantiradi, bu uning docga tahrir qilish imkoniyatini o'chirib qo'yadi, ammo faqatgina ko'rinishga ega bo'ladi. (O'quvchilarning Google Drive papkasida hali ham mavjud.) O'qituvchi hujjatni belgilaydi va sinfni belgilaydi va uni tahrirlashga qaytara oladigan o'quvchiga qaytaradi.
        </p>
        <a className='class-links' href="https://gmail.google.com/" target="_blank">Google Gmail</a>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Xizmatmeet extends Component {
  render() {
    return (
      <div className='xizmatlar-pages'>
        <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/04/9e01de06-e0ad-4524-ae3b-64feea028852-5ea9946c10e3a.jpeg" alt="/" />
        <p className="classroom-comment">
          Google Meet bu Big G tomonidan yaratilgan videokonferentsaloqa xizmati, darhol, lekin juda kuchli. Internetda biz tez-tez pandemiyani to'xtatish paytida videokonferentsaloqa xizmatlari haqida gaplashdik, biz o'zimiz eng yaxshi xizmatlarga chuqur tadqiq qildik.
        </p>
        <p className="classroom-comment">
          Google birinchi navbatda Hangout-ni ishga tushirgandan so'ng, keyin video qo'ng'iroq qilishning yaxshi tajribasini ishlab chiqdi Google Duo. Birinchisi Hangout Meet-ga aylandi, so'ngra faqat Meet, professional videokonferentsaloqa echimi, Duo do'stlar o'rtasidagi guruh qo'ng'iroqlari uchun unga tenglashtirildi.
        </p>
        <div className="classroom-video-card">
          <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/zDWaWzqz3jI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="classroom-video-about">
            <h1>Nomi:
              <span>Google meet dasturidan foydalanish</span>
            </h1>
            <h1>Manba:
              <a target="blank" href="https://youtu.be/zDWaWzqz3jI">Rasul Atamuratov</a>
            </h1>
            <h1>Video tili:
              <span>O'zbekcha</span>
            </h1>
            <a target="blank" href="https://youtu.be/zDWaWzqz3jI" className='youtube-link'>YouTube orqali ko'rish</a>
          </div>
        </div>
        <p className="classroom-comment">
          Yuqorida aytib o'tilganidek, Google Meet bu ajoyib va ​​kuchli vosita bulutli videokonferentsaloqa xizmati, bu G-to'plamni to'ldiradi. G-suite - bu Google tomonidan taqdim etiladigan (haq evaziga) korxonalar yoki muassasalarga taqdim etadigan zamonaviy vositalar to'plami.
        </p>
        <p className="classroom-comment">
          Webex kabi Google Meet, Jitsi, Zoom kabi, bu professional videokonferentsaloqa vositasi. Uning kuchi borliqda bulutli xizmat, shuning uchun konferentsiyalarni boshlash va ularga qo'shilish uchun ish stoli mijozi talab qilinmaydi, mijoz faqat mobil foydalanish uchun talab qilinadi va Android va iOS (iPhone va iPad tizimi) uchun mavjud.
        </p>
        <div className="classroom-video-card">
          <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/u-Hob5pjJSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="classroom-video-about">
            <h1>Nomi:
              <span>The Most Comprehensive Google Meet Tutorial</span>
            </h1>
            <h1>Manba:
              <a target="blank" href="https://youtu.be/u-Hob5pjJSA">
                saperis
              </a>
            </h1>
            <h1>Video tili:
              <span>Inglizcha</span>
            </h1>
            <a target="blank" href="https://youtu.be/u-Hob5pjJSA" className='youtube-link'>YouTube orqali ko'rish</a>
          </div>
        </div>
        <p className="classroom-comment">
          Topshiriqlarni baholash uchun hujjatlarni oldindan va keyinroq jo'natadigan yuborish tugmasi bilan ishlov beriladi. Shogird qog'ozni yaratadi va keyinchalik uni "o'qituvchiga" aylantiradi, bu uning docga tahrir qilish imkoniyatini o'chirib qo'yadi, ammo faqatgina ko'rinishga ega bo'ladi. (O'quvchilarning Google Drive papkasida hali ham mavjud.) O'qituvchi hujjatni belgilaydi va sinfni belgilaydi va uni tahrirlashga qaytara oladigan o'quvchiga qaytaradi.
        </p>
        <a className='class-links' href="https://meet.google.com/" target="blank">Google Meet</a>
      </div>
    )
  }
}

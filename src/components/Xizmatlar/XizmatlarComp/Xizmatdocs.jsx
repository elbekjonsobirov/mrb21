import React, { Component } from 'react'

export default class Xizmatdocs extends Component {
  render() {
    return (
      <div className='xizmatlar-pages'>
        <img src="https://i0.wp.com/blog.lulu.com/wp-content/uploads/2018/12/Writing-with-Google-Docs-Blog-Graphic-Header.jpg?fit=1200%2C675&ssl=1" alt="/" />
        <p className="classroom-comment">
          Google Docs siz veb-brauzerda foydalanadigan so'zlarni ishlash dasturidir. Google Docs Microsoft Wordga o'xshaydi va Google hisobiga ega bo'lgan har bir kishi tomonidan bepul foydalanilishi mumkin (Gmail bo'lsa, allaqachon Google hisobi mavjud).
        </p>
        <p className="classroom-comment">
          Google docs bilan ishlash
        </p>
        <div className="classroom-video-card">
          <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/I1I7A2c7lL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="classroom-video-about">
            <h1>Nomi:
              <span>Google meet dasturidan foydalanish</span>
            </h1>
            <h1>Manba:
              <a target="_blank" href="https://youtu.be/I1I7A2c7lL4">
                Salom Dunyo
              </a>
            </h1>
            <h1>Video tili:
              <span>O'zbekcha</span>
            </h1>
            <a target="_blank" href="https://youtu.be/I1I7A2c7lL4" className='youtube-link'>YouTube orqali ko'rish</a>
          </div>
        </div>
        <p className="classroom-comment">
          Microsoft Word-dan Google Docs'ga qaraganda ko'proq xususiyatlarga ega bo'lishiga qaramay, foydalanuvchilarning Google so'z protsessoridan foydalanishlari mumkin bo'lgan bir necha sabablar mavjud.
          Biri xarajat. Google Drive bepul bo'lgani uchun, uni urish qiyin. Buning yana bir sababi, hamma narsa bulutda saqlanadi. Ya'ni, bitta kompyuterga ulanmaslik yoki fayllaringizga kirish uchun USB stik
          atrofida yurish shart emas. Nihoyat, Google Docs, inson guruhlari uchun bir vaqtning o'zida hujjatning qaysi versiyasini eng dolzarb deb xavotirlamasdan, o'sha hujjatda ishlashni juda osonlashtiradi.
        </p>
        <p className="classroom-comment">
          Microsoft Word-dan farqli o'laroq, Google Docs hujjatlarni o'zaro bog'lash imkonini beradi. Aytaylik, siz qog'ozni yozmoqdasiz va ilgari yozilgan narsangizni alohida hujjatga yo'naltirishni xohlaysiz. O'zingizni takrorlashdan ko'ra bu hujjatga URL manzilni qo'shishingiz mumkin. Siz yoki boshqa biror kishi ushbu havolani bosganingizda, hujjat hujjati alohida oynada ochiladi.
        </p>
        <div className="classroom-video-card">
          <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/z9i_h-WMQ68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="classroom-video-about">
            <h1>Nomi:
              <span>The Most Comprehensive Google Meet Tutorial</span>
            </h1>
            <h1>Manba:
              <a target="_blank" href="https://youtu.be/z9i_h-WMQ68">
                Howfinity
              </a>
            </h1>
            <h1>Video tili:
              <span>Inglizcha</span>
            </h1>
            <a target="_blank" href="https://youtu.be/z9i_h-WMQ68" className='youtube-link'>YouTube orqali ko'rish</a>
          </div>
        </div>
        <p className="classroom-comment">
          Topshiriqlarni baholash uchun hujjatlarni oldindan va keyinroq jo'natadigan yuborish tugmasi bilan ishlov beriladi. Shogird qog'ozni yaratadi va keyinchalik uni "o'qituvchiga" aylantiradi, bu uning docga tahrir qilish imkoniyatini o'chirib qo'yadi, ammo faqatgina ko'rinishga ega bo'ladi. (O'quvchilarning Google Drive papkasida hali ham mavjud.) O'qituvchi hujjatni belgilaydi va sinfni belgilaydi va uni tahrirlashga qaytara oladigan o'quvchiga qaytaradi.
        </p>
        <a className='class-links' href="https://docs.google.com/" target="_blank">Google Docs</a>
      </div>
    )
  }
}

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Style/Fanresurs.css'

// maruza

import maruza1 from './maruza/1maruza.pdf'
import maruza2 from './maruza/2maruza.pdf'
import maruza3 from './maruza/3maruza.pdf'
import maruza4 from './maruza/4maruza.pdf'
import maruza5 from './maruza/5maruza.pdf'
import maruza6 from './maruza/6maruza.pdf'
import maruza7 from './maruza/7maruza.pdf'
import maruza8 from './maruza/8maruza.pdf'
import maruza9 from './maruza/9maruza.pdf'
import maruza10 from './maruza/10maruza.pdf'
import maruza11 from './maruza/11maruza.pdf'
import maruza12 from './maruza/12maruza.pdf'
import maruza13 from './maruza/13maruza.pdf'
import maruza14 from './maruza/14maruza.pdf'
import maruza15 from './maruza/15maruza.pdf'

// laboratoriya

import laboratoriya1 from './laboratoriya/1laboratoriya.pdf'
import laboratoriya2 from './laboratoriya/2laboratoriya.pdf'
import laboratoriya3 from './laboratoriya/3laboratoriya.pdf'
import laboratoriya4 from './laboratoriya/4laboratoriya.pdf'
import laboratoriya5 from './laboratoriya/5laboratoriya.pdf'
import laboratoriya6 from './laboratoriya/6laboratoriya.pdf'
import laboratoriya7 from './laboratoriya/7laboratoriya.pdf'
import laboratoriya8 from './laboratoriya/8laboratoriya.pdf'
import laboratoriya9 from './laboratoriya/9laboratoriya.pdf'
import laboratoriya10 from './laboratoriya/10laboratoriya.pdf'

// mustaqil

import mustaqil1 from './mustaqil ish/1mustaqil.pdf'
import mustaqil2 from './mustaqil ish/2mustaqil.pdf'
import mustaqil3 from './mustaqil ish/3mustaqil.pdf'
import mustaqil4 from './mustaqil ish/4mustaqil.pdf'
import mustaqil5 from './mustaqil ish/5mustaqil.pdf'
import mustaqil6 from './mustaqil ish/6mustaqil.pdf'
import mustaqil7 from './mustaqil ish/7mustaqil.pdf'
import mustaqil8 from './mustaqil ish/8mustaqil.pdf'
import mustaqil9 from './mustaqil ish/9mustaqil.pdf'
import mustaqil10 from './mustaqil ish/10mustaqil.pdf'

// adabiyotlar

import adabiyot1 from './Adabiyot/1adabiyot.pdf'
import adabiyot2 from './Adabiyot/2adabiyot.pdf'
import adabiyot3 from './Adabiyot/3adabiyot.pdf'
import adabiyot4 from './Adabiyot/4adabiyot.pdf'
import adabiyot5 from './Adabiyot/5adabiyot.pdf'
import adabiyot6 from './Adabiyot/6adabiyot.pdf'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Fanresurs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }} className="fan-allcard">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='fan-heads'>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='fan-head'>
                    <Tab label="Ma'ruza" {...a11yProps(0)} />
                    <Tab label="Laboratoriya" {...a11yProps(1)} />
                    <Tab label="Mustaqil ta'lim" {...a11yProps(2)} />
                    <Tab label="Adabiyotlar" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">1-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza2} download>Ofis faoliyatiga moljallangan dasturiy mahsulotlar. MS Office paketi sozlamalari.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">2-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza1} download>Matnli hujjatlarni tayyorlashni avtomatlashtirish vositasi. Obyektlar bilan ishlash.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">3-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza3} download>MS Excelda murojaatlar. Arifmetik operatorlar, havolalar, formulalar va Excel funksiyalari bilan ishlash.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">4-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza4} download>Excelda ma’lumotlar bilan ishlash. Diagrammalar tayyorlash va funksiyalar grafiklarini chizish, hisobot jadvallarini tayyorlash.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">5-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza5} download>Microsoft PowerPoint dasturi yordamida taqdimot tayyorlash.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">6-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza6} download>Google servislari bilan tanishish. Asosiy tushunchalar. Google servislarining turlari.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">7-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza7} download>Google Drive bilan ishlash.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">8-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza8} download>Google Docs hujjatlari bilan ishlash.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">9-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza9} download>Google Sheets jadvallaridan foydalanish.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">10-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza10} download>Google Slides taqdimotlari asosiy imkoniyatlari
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">11-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza11} download>Google Forms yordamida onlayn testlar tayyorlash va so‘rovlar tashkil etish.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">12-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza12} download>Videoaloqa uchun Google Hangoutsdan foydalanish.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">13-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza13} download>Google Classroom imkoniyatidan foydalanish.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">14-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza14} download>Google Earth, Google Shopping servislari imkoniyatlari.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">15-ma'ruza</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={maruza15} download>Google bulutli xizmatlari turlari.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">1-Laboratoriya</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={laboratoriya1} download>Matnni tahrirlash va formatlash. Word jadvallari bilan ishlash.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">2-Laboratoriya</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={laboratoriya2} download>MS Excelda jadvallar tayyorlash va hisoblashlarni amalga oshirishi.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">3-Laboratoriya</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={laboratoriya3} download>Diagrammalar tayyorlash. Funksiyalarni grafik yechimi, funksiyalar
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">4-Laboratoriya</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={laboratoriya4} download>Taqdimot tayyorlash. Stillarni sozlash. Animatsiyalarni boshqarish
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">5-Laboratoriya</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={laboratoriya5} download>Google da akkaunt yaratish va foydalanish
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">6-Laboratoriya</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={laboratoriya6} download>Google drive imkoniyatlaridan foydalanish.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">7-Laboratoriya</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={laboratoriya7} download>Google Docs hujjatlari bilan ishlash.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">8-Laboratoriya</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={laboratoriya8} download>Google Sheets jadvallaridan foydalanish.
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">9-Laboratoriya</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={laboratoriya9} download>Google Forms yordamida onlayn testlar yaratish
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">10-Laboratoriya</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={laboratoriya10} download>Google Earth servisi imkoniyatlari
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">1-Mustaqil ta'lim</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={mustaqil1} download>Google Alert
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">2-Mustaqil ta'lim</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={mustaqil2} download>Google Calendar
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">3-Mustaqil ta'lim</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={mustaqil3} download>Google Books
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">4-Mustaqil ta'lim</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={mustaqil4} download>Google Earth
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">5-Mustaqil ta'lim</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={mustaqil5} download>Google Flights
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">6-Mustaqil ta'lim</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={mustaqil6} download>Google Play
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">7-Mustaqil ta'lim</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={mustaqil7} download>Google Meet
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">8-Mustaqil ta'lim</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={mustaqil8} download>Google Voice
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">9-Mustaqil ta'lim</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={mustaqil9} download>Google Finance
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">10-Mustaqil ta'lim</div>
                    <div className="fan-resurs-val">Mavzu nomi:
                        <a href={mustaqil10} download>Google Podcasts
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Fan o'qituvchisi: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">adabiyot</div>
                    <div className="fan-resurs-val">Adabiyot nomi:
                        <a href={adabiyot1} download>Google Drive & Docs
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Muallif: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">adabiyot</div>
                    <div className="fan-resurs-val">Adabiyot nomi:
                        <a href={adabiyot2} download>Используем сервисы Google  2013
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Muallif: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">adabiyot</div>
                    <div className="fan-resurs-val">Adabiyot nomi:
                        <a href={adabiyot3} download>How Google Works by Eric Schmidt
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Muallif: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">adabiyot</div>
                    <div className="fan-resurs-val">Adabiyot nomi:
                        <a href={adabiyot4} download>How google tests software
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Muallif: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">adabiyot</div>
                    <div className="fan-resurs-val">Adabiyot nomi:
                        <a href={adabiyot5} download>Excel 2019 All in One For Dummies by Greg Harvey
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Muallif: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
                <div className="fan-resurs">
                    <div className="fan-resurs-num">adabiyot</div>
                    <div className="fan-resurs-val">Adabiyot nomi:
                        <a href={adabiyot6} download>Weverka peter office 365 allinone for dummies
                            <span>
                                <i class="fa-solid fa-arrow-down"></i>
                                Yuklab olish
                            </span>
                        </a>
                    </div>
                    <h1 className="fan-mentor">Muallif: <span>Shodmonov Davron</span></h1>
                    <h4 className="fan-name">Fan nomi:
                        <span>Google servislari va ofis ilovalari</span>
                    </h4>
                </div>
            </TabPanel>
        </Box>
    );
}

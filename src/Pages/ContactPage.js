import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'My Contact'} span={'My Contact'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.874173888888!2d107.56288971477284!3d-6.905646495010206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5dcf44e2171%3A0xea9722a99df984a0!2sJl.%20Kebon%20Kopi%20No.12%2C%20Cibeureum%2C%20Kec.%20Cimahi%20Sel.%2C%20Kota%20Cimahi%2C%20Jawa%20Barat%2040535!5e0!3m2!1sid!2sid!4v1629874590932!5m2!1sid!2sid" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+62 85795158771'} title={'Phone Number'}/>
                    <ContactItem icon={email} text1={'suryaekobumi@gmail.com'} title={'E-mail'}/>
                    <ContactItem icon={location} text1={'Jl. Kebon Kopi no 12, Cimahi Jawa Barat'} text2={'Indonesia'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;

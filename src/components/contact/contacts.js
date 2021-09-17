import React from 'react';
import Feedback from './feedback/feedback';
import './contact.scss'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <div className='contact__info'>
                    <h2 className='title-2'>Контакты</h2>
                    <p className='contact__title'>Фактический адрес</p>
                    <p className='contact__text'>Tsum Center 155 Chuy Ave, Bishkek, Kyrgyzstan</p>
                    <p className='contact__title'>Ежедневно, с 9:00 до 21:00</p>
                    <a className='contact__text' href='tel:+996703313274'>+996 (703) 31-32-74 </a>
                    <p className='contact__title'>По вопросам розничных продаж</p>
                    <a className='contact__text' href='mailto:info@mobilius.ru'>info@mobilius.ru</a>
                </div>
                <div className='contact__map'>
                    <iframe title="My Daily Marathon Tracker" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13985.077871387339!2d74.59765783338436!3d42.86776398081949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c0cdbbae15%3A0xa6b565413fa531df!2sTsum%20Center!5e0!3m2!1sen!2sus!4v1630443923311!5m2!1sen!2sus" ></iframe>
                </div>
            </div>
            <Feedback/>
        </div>
    )
}
export default Contact;
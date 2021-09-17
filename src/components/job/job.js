import React from 'react';
import './job.scss';

const Job = () => {
    return (
        <div className='Job'>
            <div className='container'>
                <h2 className='title-2'>Вакансии</h2>
                <ul className='job__ul'>
                    <li className='job__li'>
                        <ul className='job__ul-3'>
                            <li className='job__li1'>Позиция</li>
                            <li className='job__li2'>Опыт работы</li>
                            <li className='job__li3'>Зарплата</li>
                            <li className='job__li4'>Информация</li>
                        </ul>
                    </li>
                    <li className='job__li'>
                        <ul className='job__ul-2'>
                            <li className='job__li1'>Продавец-консультант</li>
                            <li className='job__li2'>2-3 года</li>
                            <li className='job__li3'>45000-55000 сом</li>
                            <li className='job__li4'>Оформление по ТК, премии по итогам работы</li>
                        </ul>
                    </li>
                    <li className='job__li'>
                        <ul className='job__ul-2'>
                            <li className='job__li1'>Инженер по ремонту телефонов</li>
                            <li className='job__li2'>2-3 года</li>
                            <li className='job__li3'>45000-55000 сом</li>
                            <li className='job__li4'>Оформление по ТК, премии по итогам работы</li>
                        </ul>
                    </li>
                    <li className='job__li'>
                        <ul className='job__ul-2'>
                            <li className='job__li1'>Главный бухгалтер</li>
                            <li className='job__li2'>2-3 года</li>
                            <li className='job__li3'>45000-55000 сом</li>
                            <li className='job__li4'>Оформление по ТК, премии по итогам работы</li>
                        </ul>
                    </li>
                </ul>
                <div className='job__admin-adress'>
                    <p className='job__text'>Отдел кадров:</p>
                    <a className='job__link' href='tel:+996703313274'>+996703313274</a>
                    <a className='job__link' href='mailto:hr.mobilus.kg'>hr.mobilus.kg</a>
                </div>
            </div>
        </div>
    )
}

export default Job;
import React from 'react'

const Button = ({ text }) => {
    return (
        <button className='bg-[#1064E5] w-[189px] h-[40px] rounded-[45px] text-white text-[14px] font-[500]'>{text}</button>
    )
}
const Article = ({ image, text, info }) => {
    return (
        <article className='flex items-center gap-[20px]'>
            <aside>
                <img src={image} alt="" />
            </aside>
            <aside className='flex flex-col gap-[10px]'>
                <b className='text-[24px] font-[500]'>{text}</b>
                <p className='w-[222px]'>{info}</p>
            </aside>
        </article>
    )
}
const Sections = ({ info, text, text2, text3, text4, button }) => {
    return (
        <aside className='flex flex-col gap-[20px]'>
            <h1 className='lg:text-[40px] font-[500]'>{info}</h1>
            <ul className='flex flex-col gap-[10px]'>
                <li className='lg:w-[512px]'>{text}</li>
                <li className='lg:w-[512px]'>{text2}</li>
                <li className='lg:w-[512px]'>{text3}</li>
                <li className='lg:w-[512px]'>{text4}</li>
            </ul>
            <button>{button}</button>
        </aside>
    )
}

const Card = ({ image }) => {
    return (
        <article className='flex flex-col items-start gap-[10px]'>
            <img src={image} alt="" />
            <div className='flex flex-col text-start pl-[15px]'>
                <span className='lg:text-[14px] font-[500]'>28.05.2020</span>
                <b className='lg:text-[24px] font-[500]'>Заголовок короткий в <br /> две строки</b>
            </div>
        </article>
    )
}

export { Button, Article, Sections, Card }
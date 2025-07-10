import React from 'react'
import logo from './assets/Group 7.png'
import { Article, Button, Card, Sections } from './components/cpmnts'
import menu from './assets/Group 1390.png'
import manWithLaptop from './assets/box.png'
import tochki from './assets/Group 1399.png'
import speedometer from './assets/speedometer 1.png'
import like from './assets/positive-vote 1.png'
import pig from './assets/piggy-bank 1.png'
import excel from './assets/Group 1392.png'
import ukraine from './assets/ukraine.png'
import novaPoshta from './assets/novaPoshta.png'
import nix from './assets/nix.png'
import xlib from './assets/xlib.png'
import card1 from './assets/Placeholder.png'
import card2 from './assets/Placeholder — копия.png'
import play from './assets/Group 1278.png'
import whiteLogo from './assets/whiteLogo.png'


const App = () => {
  const data = [
    {
      first: "Demo",
      second: "30 документів",
      price1: "0",
      price2: "грн/місяць",
      button: "Зарегистрироваться"
    },
    {
      first: "Business",
      second: "1 000 документів",
      price1: "1 000",
      price2: "грн/рік",
      button: "Закакзать"
    },
    {
      first: "Pro",
      second: "10 000 документів",
      price1: "9 000",
      price2: "грн/рік",
      button: "Заказать"
    },
    {
      first: "Individual",
      second: "Необмежена кількість документів",
      price1: "     ",
      price2: "     ",
      button: "Связаться с нами"
    }
  ]
  return (
    <>
      <header className='bg-gradient-to-br from-white pb-[25px] via-[#DEEEFC] to-[#DAE9F6]'>
        <nav className='flex items-center justify-between px-[10%] py-[2%]'>
          <img src={logo} alt="" />
          <ul className='lg:flex hidden gap-[50px] items-center'>
            <li>0 800 750 643</li>
            <li>ПРО НАС</li>
            <li>ЦЕНЫ</li>
            <li>КОНТАКТЫ</li>
            <button className='border border-[#1064E5] w-[110px] h-[40px] rounded-[43px] bg-transparent'>Вход</button>
            <Button text={'Pегистрация'} />
            <li>Рус</li>
          </ul>
          <img className='lg:hidden block' src={menu} alt="" />
        </nav>
        <div className='flex items-center'>
          <aside className='text-[#061224E5] items-start relative z-10 flex flex-col gap-[20px] pl-[10%] max-w-[550px]'>
            <h1 className='md:text-[40px] md:w-[581px] font-[500]'>Цифровой документооборот в три этапа:</h1>
            <p className='flex items-center gap-[10px]'>
              <span className='text-[24px] font-[500] text-[#061224E5]'>1</span><span> - 2 </span><span> - 3</span>
            </p>
            <b>Быстрая регистрация</b>
            <p className='md:w-[454px]'>Мы создали, возможно, самую простую регистрацию. Регистрируйся, получай полный доступ к сервису и 1000 подписей документов в подарок!</p>
            <Button text={'Попробовать Бесплатно'} />
            <img className='relative left-[200px] pb-[10px] lg:left-[540px] top-[25px]' src={tochki} alt="" />
          </aside>
          <aside>
            <img className='lg:block hidden relative z-[0]' src={manWithLaptop} alt="" />
          </aside>
        </div>
      </header>
      <main className='mt-[50px]'>
        <section className='flex items-center lg:flex-row flex-col gap-[100px] justify-center'>
          <Article image={speedometer} text={'Моментально'} info={'Никаких задержек. 1 секунда на подписание'} />
          <Article image={like} text={'Глобально'} info={'Сервис доступен 24 \ 7 со всех устройств'} />
          <Article image={pig} text={'Экономно'} info={'В 30 раз дешевле чем почта и курьеры'} />
        </section>
        <section className='flex lg:flex-row flex-col px-[20px] lg:px-[0px] lg:gap-[0px] gap-[20px] mt-[50px] items-center bg-[#D8F1F0] justify-evenly pt-[50px]'>
          <aside>
            <Sections
              info={'Комфорт в работе'}
              text={'- Создавай документы по твоим личным привычным шаблонам. Это индивидуально!'}
              text2={'- Настраивай порядок подписание документа, если вас несколько человек. Это ответственно!'}
              text3={'- Загружай XML файл с собственным шаблоном готового документа. Это удобно!'}
              text4={'- Работай в супер простом и понятном интерфейсе без сложностей. Это приятно!'}
            />
            <Button text={'Узнать больше'} />
          </aside>
          <aside>
            <img src={excel} alt="" />
          </aside>
        </section>
        <section className='flex lg:flex-row flex-col-reverse px-[20px] lg:px-[0px] lg:gap-[0px] gap-[20px] mt items-center bg-[#D8F1F0] justify-evenly py-[50px]'>
          <aside>
            <img src={excel} alt="" />
          </aside>
          <aside>
            <Sections
              info={'Наш продукт это:'}
              text={'- Web версия без установки программного обеспечения'}
              text2={'- Возможность бесплатно и безлимитно обрабатывать входящие документы'}
              text3={'- Простота интеграции с 1С и другими сервисами'}
              text4={'- Поддержка входа через Mobile ID'}
            />
            <Button text={'Зарегистрироваться'} />
          </aside>
        </section>
        <section>
          <h1 className='text-center my-[50px] md:text-[40px] font-[500]'>Пакеты цифровых подписей </h1>
          <div className='flex lg:flex-row flex-wrap justify-center gap-[30px]'>
            {data.map((e, i) => {
              return (
                <article key={i} className='rounded-[4px] bg-[#DEEEFC] w-[256px] h-[320px] flex flex-col gap-[10px] py-[10px] pl-[30px] items-start justify-evenly'>
                  <h1 className='text-[28px] font-[500]'>{e.first}</h1>
                  <div>
                    <p className='font-[500]'>{e.second}</p>
                    <div>
                      <span className='text-[48px] font-[700]'>{e.price1}</span>
                      <span>{e.price2}</span>
                    </div>
                  </div>
                  <Button text={e.button} />
                </article>
              )
            })}
          </div>
        </section>
        <section className='mt-[50px] py-[50px] bg-[#D8F1F0] text-center flex flex-col gap-[10px] text-[#061224E5]'>
          <h1 className='lg:text-[73px] font-[800]'>5 820 125 114 </h1>
          <b className='lg:text-[40px] lg:font-[500]'>подписано документов</b>
          <p className='lg:w-[478px] m-auto'>Наша компания уже более 30 лет создает удобные решения для бизнеса любого размера. Мы гордимся Signy как безопасным и комфортным продуктом</p>
        </section>
        <section className='flex flex-col items-center pb-[50px] gap-[20px]'>
          <h1 className='text-center font-[500] text-[40px] my-[50px]'>Друзья Signy</h1>
          <div className='flex flex-wrap items-center gap-[15px] justify-evenly'>
            <img src={ukraine} alt="" />
            <img src={novaPoshta} alt="" />
            <img src={nix} alt="" />
            <img src={xlib} alt="" />
          </div>
          <img src={tochki} alt="" />
        </section>
        <section className='text-center bg-[#D8F1F0] py-[50px] text-[#061224E5] flex flex-col'>
          <h1 className='lg:font-[500] font-[700] lg:text-[40px]'>Интересно пишем про </h1>
          <div className='mt-[50px] flex flex-wrap lg:gap-[0px] gap-[20px] justify-evenly'>
            <Card image={card1} />
            <Card image={card2} />
            <div className='lg:block hidden'>
              <Card image={card1} />
            </div>
          </div>
        </section>
        <section className='flex flex-col pb-[50px] gap-[0px] lg:gap-[20px]'>
          <h1 className='text-[#061224E5] text-[22px] lg:text-[40px] font-[500] py-[50px] text-center'>Познакомимся в живую? </h1>
          <img className='w-[75%] lg:w-[50%] m-auto' src={play} alt="" />
        </section>
        <section className='bg-[#DEEEFC] flex flex-col items-center gap-[20px] lg:px-[0px] px-[20px] text-[#061224E5] py-[50px]'>
          <h1 className='text-[40px] font-[500]'>Популярные вопросы и ответы на них</h1>
          <ul className='flex flex-col gap-[10px]'>
            <li><span className='font-[500] text-[#1064E5]'>+</span> Почему круглую пиццу ставят в квадратную коробку, а нарезают треугольниками?</li>
            <li className='flex flex-col gap-[5px]'>
              <b className='text-[500]'> <span className='font-[500] text-[#1064E5]'>-</span> Почему после ремонта дорога опять проваливается?</b>
              <span> - Потому что делают ее без соблюдения технологических процессов.</span>
            </li>
            <li><span className='font-[500] text-[#1064E5]'>+</span> Почему вода мокрая?</li>
            <li><span className='font-[500] text-[#1064E5]'>+</span> Видят ли микробы друг друга?</li>
            <li><span className='font-[500] text-[#1064E5]'>+</span> Почему кровь красная а вены синие?</li>
            <li><span className='font-[500] text-[#1064E5]'>+</span> Из чего сделана радуга? </li>
          </ul>
        </section>
        <section className='flex flex-col py-[75px] lg:px-[0px] px-[20px] gap-[30px] text-center items-center text-[#061224E5]'>
          <h1 className='font-[500] text-[40px]'>Подпишись на наши новости!</h1>
          <p>Введи свой электронный адрес и будь в курсе всех обновлений</p>
          <div className='flex gap-[10px] lg:flex-nowrap justify-center flex-wrap'>
            <input className='w-[100%] h-[40px] pl-[15px] border border-[#1064E5] rounded-[37px]' type="text" />
            <Button text={'ОТПРАВИТЬ'} />
          </div>
        </section>
      </main>
      <footer className='bg-[#061224] px-[50px] text-white flex lg:flex-row flex-col items-start justify-between lg:px-[150px] py-[75px]'>
        <aside className='flex flex-wrap gap-[20px] lg:gap-[75px]'>
          <div className='flex flex-col gap-[20px] lg:gap-[150px]'>
            <img src={whiteLogo} alt="" />
            <b>© 2020 Signy</b>
          </div>
          <div className='flex flex-col gap-[20px] lg:gap-[47px]'>
            <div className='flex flex-col'>
              <span>Про нас</span>
              <span>Цены</span>
            </div>
            <div className='flex flex-col'>
              <span>Вход</span>
              <span>Регистрация</span>
            </div>
            <b>Договір оферти</b>
          </div>
          <div className='flex flex-col gap-[20px] lg:gap-[140px]'>
            <div className='flex flex-col'>
              <span>Блог</span>
              <span>Контакты</span>
            </div>
            <b>Безпека сервісу</b>
          </div>
        </aside>
        <aside className='flex flex-wrap gap-[20px] lg:gap-[75px]'>
          <div className='flex flex-col'>
            <span>infosmartsign@smarttender.biz</span>
            <span>Facebook</span>
          </div>
          <ul className='flex flex-col gap-[10px]'>
            <li>пр-т Миколи Бажана, 14 А <br />
              Київ, 02072</li>
            <li>0 800 750643</li>
            <li>+380 44 334 56 43</li>
            <li>+380 44 338 86 43</li>
          </ul>
        </aside>
      </footer>
    </>
  )
}

export default App
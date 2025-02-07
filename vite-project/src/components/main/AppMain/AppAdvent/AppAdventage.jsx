import priceImg from '../assets/price.svg'
import choiceImg from '../assets/choice.svg'
import locationImg from '../assets/location.svg'
import './styleAdvent.scss'
export default function Adventage() {
    return (
        <section className="adventageSection">
            <h2>Наши преимущества</h2>
            <div className="wrapperAdventage">
                <div className="card">
                    <img src={priceImg} alt="" />
                    <h3>Доступные цены</h3>
                    <p>Цены за аренду наших номеров существенно ниже, чем средние по рынку</p>
                </div>
                <div className="card">
                    <img src={locationImg} alt="" />
                    <h3>Удобное местоположения</h3>
                    <p>Мы находимся рядом в шаговой доступности от вокзала</p>
                </div>
                <div className="card">
                    <img src={choiceImg} alt="" />
                    <h3>Широкий выбор услуг</h3>
                    <p>Вместе с гостиницей в здании есть столовая, тренажёрный зал и баня</p>
                </div>
            </div>
        </section>
    )
}
import './styleMain.scss'
import enteringPhoto from '../../../assets/photo/hostel/entering.png'
import buildingPng from '../../../assets/photo/hostel/building.svg'
import BookButton from './AppBookButton/BookButton'
import arrowButton from './assets/leftArrow.svg'
import Adventage from './AppAdvent/AppAdventage'

export default function Main() {
    return (
        <>
            <section className="section-main">
                <div className="section-main__wrapper">
                    <p className="section-main__p">
                        Эконом-хостел с широким ассортиментом услуг по доступной цене в Братске
                    </p>
                    <BookButton />
                    <p className="section-main__p-cooperation">
                        Активно сотрудничаем с крупными организациями, к примеру, 
                        БРАЗ и ИЛИМ. Предлагаем выгодные условия проживания и трёхразовое питание
                    </p>
                    <img src={buildingPng} alt="" className='buildingPng'/>
                </div>
                
                <div className="slider">
                    <img src={enteringPhoto} alt="photo of entrance" className='slide'/>
                    <div className="switch-wrapper">
                        <img src={arrowButton} alt="left arrow" className='arrow leftArrow'/>
                        <img src={arrowButton} alt="right arrow" className='arrow rightArrow'/>
                    </div>
                </div>
            </section>
            <Adventage />
        </>
    )
}
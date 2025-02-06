import icon from '../../../../assets/icon.svg';
import './styleLogo.scss'

export default function Logo() {
    return (
        <div className="logo">
                <span className='spanLogo'>Высотк</span>
                <img src={icon} alt='logo'/>
        </div>
    )
}
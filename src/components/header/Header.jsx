import classes from './Header.module.css';
import button from '/images/button.png';
import logo from '/images/logo.png';
import search from '/images/search.png';
import camera from '/images/camera.png';
import dots from '/images/dots.png';
import bell from '/images/bell.png';
import user from '/images/user.png';
import mInfo from '/images/v-dots-info.png';

export default function Header() {
    return (
        <>
            <div className={classes['wrapper-header']}>
                <div className={classes['wrapper-left']}>
                    <button className={classes['menu']}>
                        <div className={classes['dash']}></div>
                        <div className={classes['dash']}></div>
                        <div className={classes['dash']}></div>
                    </button>

                    <button className={classes['main']}>
                        <img className={classes['logo']} src={button} alt='Main page button'/>
                        <img className={classes['logo-title']} src={logo} alt='Main page button'/>
                    </button>

                    <form className={classes['search-form']}>
                        <input className={classes['search-input']} placeholder='Search'></input>
                        <button className={classes['search-btn']}><img src={search} alt='Search button'/></button>
                    </form>
                </div>

                <div className={classes['wrapper-right']}></div>
                    <div className={classes['icon-btns']}>
                        <button><img src={camera} alt='Video add-button'/></button>
                        <button><img src={dots} alt='Info button'/></button>
                        <button><img src={bell} alt='Notification button'/></button>
                    </div>
                    <div className={classes['user-pic']}>
                        <img src={user} alt='User page button'/>
                    </div>
                    <div className={classes['mob-menu']}>
                        <button><img src={search} alt='Search button'/></button>
                        <button><img src={mInfo} alt='Info button'/></button>
                    </div>
            </div>
        </>
    )
}
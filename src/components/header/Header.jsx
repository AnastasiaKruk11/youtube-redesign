import classes from './Header.module.css'

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
                        <img className={classes['logo']} src='../public/button.png'></img>
                        <img className={classes['logo-title']} src='../public/logo.png'></img>
                    </button>

                    <form className={classes['search-form']}>
                        <input className={classes['search-input']} placeholder='Search'></input>
                        <button className={classes['search-btn']}><img src='../public/search.png'></img></button>
                    </form>
                </div>

                <div className={classes['wrapper-right']}></div>
                    <div className={classes['icon-btns']}>
                        <button><img src='../public/camera.png'></img></button>
                        <button><img src='../public/dots.png'></img></button>
                        <button><img src='../public/bell.png'></img></button>
                    </div>
                    <div className={classes['user-pic']}>
                        <img src='../public/user.png'></img>
                    </div>
                    <div className={classes['mob-menu']}>
                        <button><img src='../public/search.png'></img></button>
                        <button><img src='../public/v-dots-info.png'></img></button>
                    </div>
            </div>
        </>
    )
}
import classes from './BottomNavigation.module.css';

export default function BottomNavigation() {
    return (
        <div className={classes['nav-wrapper']}>
            
            <div className={classes['nav-item']}>
                <button><img src='../public/home-pic.png'></img></button>
                <p>Home</p>
            </div>
            <div className={classes['nav-item']}>
                <button><img src='../public/trend-pic.png'></img></button>
                <p>Trending</p>
            </div>
            <div className={classes['nav-item']}>
                <button><img src='../public/folders-pic.png'></img></button>
                <p>Subscriptions</p>
            </div>
            <div className={classes['nav-item']}>
                <button><img src='../public/folder-pic.png'></img></button>
                <p>Library</p>
            </div>    
                         
        </div>
    )
}
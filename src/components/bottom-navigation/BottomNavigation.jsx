import classes from './BottomNavigation.module.css';
import home from '/images/home-pic.png';
import trend from '/images/trend-pic.png';
import folders from '/images/folders-pic.png';
import folder from '/images/folder-pic.png';

export default function BottomNavigation() {
    return (
        <div className={classes['nav-wrapper']}>
            
            <div className={classes['nav-item']}>
                <button><img src={home} alt='Main page button'/></button>
                <p>Home</p>
            </div>
            <div className={classes['nav-item']}>
                <button><img src={trend} alt='Trends button'/></button>
                <p>Trending</p>
            </div>
            <div className={classes['nav-item']}>
                <button><img src={folders} alt='Subscriptions button'/></button>
                <p>Subscriptions</p>
            </div>
            <div className={classes['nav-item']}>
                <button><img src={folder} alt='Library button'/></button>
                <p>Library</p>
            </div>    
                         
        </div>
    )
}
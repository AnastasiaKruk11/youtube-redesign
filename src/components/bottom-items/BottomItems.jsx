import VideoItems from "../video-items/VideoItems";
import classes from './BottomItems.module.css';
import cl from '../sidebar/Sidebar.module.css';

export default function BottomItems({items}) {
    return (
        <div className={classes['bottom-wrapper']}>
            <div className={cl['sidebar-top']}>
                <h1>Next</h1>
                <div className={cl['autoplay-box']}>
                    <p>AUTOPLAY</p>
                    <label className={cl['switch']}>
                        <input type="checkbox"></input>
                        <span className={cl['slider']}></span>
                    </label>
                </div>
            </div>
            <div className={classes['bottom-items']}>
                <VideoItems items={items} />
            </div>
        </div>
    )
}
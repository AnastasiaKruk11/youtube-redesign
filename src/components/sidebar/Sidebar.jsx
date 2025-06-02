import classes from './Sidebar.module.css';
import VideoItems from '../video-items/VideoItems';

export default function Sidebar({items}) {
    return (
        <>
            <aside>
                <div className={classes['sidebar-top']}>
                    <h1>Next</h1>
                    <div className={classes['autoplay-box']}>
                        <p>AUTOPLAY</p>
                        <label className={classes['switch']}>
                            <input type="checkbox"></input>
                            <span className={classes['slider']}></span>
                        </label>
                    </div>
                </div>
                <VideoItems items={items} />           
            </aside>
        </>
    )
}
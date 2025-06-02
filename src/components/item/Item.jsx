import classes from './Item.module.css';

export default function Item({item}) {
    return (
        <div className={classes['video-content']}>
            <iframe width="100%" height="213" src={item.src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{item.title}</h3>
            <div className={classes['video-info']}>
                <p>{item.views} views</p>
                <p>{item.author}</p>
            </div>
        </div>
    )
}
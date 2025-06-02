import classes from './ActiveItem.module.css';

export default function ActiveItem({item}) {
    return (
        <>
            <div className={classes['container']}>
                <iframe width="100%" height="100%" src={item.src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className={classes['title-info']}>
                    <h1>{item.title}</h1>
                    <button><img src='youtube-page/public/arrow.png'></img></button>
                </div>
                <div className={classes['video-info']}>
                    <p>{item.views} views</p>
                    <div>
                        <button className={classes['like-btn']}>123 <img src='/images/like.png'></img></button>
                        <button className={classes['dislike-btn']}>15 <img src='../public/dislike.png'></img></button>
                        <button className={classes['share-btn']}><img src='../public/share.png'></img> Share</button>
                        <button className={classes['menu-dots']}><img src='../public/dots-info.png'></img></button>
                    </div>
                </div>
            </div>
            <div className={classes['main-video-footer']}>
                <div className={classes['channel-pic']}>
                    <img src='youtube-page/public/channel-pic.png'></img>
                </div>
                <div className={classes['description']}>
                    <h4>{item.author}</h4>
                    <p className={classes['publish-date']}>{item.date}</p>
                    <p className={classes['description-text']}>{item.description}</p>
                    <button className={classes['show-more-btn']}>Show more</button>
                </div>
                <div className={classes['subscribe-btn']}>
                    <button>Subscribe</button>
                </div>
            </div>
        </>
    )
}
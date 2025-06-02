import classes from './ActiveItem.module.css';
import like from '/images/like.png';
import arrow from '/images/arrow.png';
import dislike from '/images/dislike.png';
import share from '/images/share.png';
import dots from '/images/dots-info.png';
import channel from '/images/channel-pic.png';

export default function ActiveItem({item}) {
    return (
        <>
            <div className={classes['container']}>
                <iframe width="100%" height="100%" src={item.src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className={classes['title-info']}>
                    <h1>{item.title}</h1>
                    <button><img src={arrow} alt='More info'/></button>
                </div>
                <div className={classes['video-info']}>
                    <p>{item.views} views</p>
                    <div>
                        <button className={classes['like-btn']}>123 <img src={like} alt='Like button'/></button>
                        <button className={classes['dislike-btn']}>15 <img src={dislike} alt='Dislike button'/></button>
                        <button className={classes['share-btn']}><img src={share} alt='Share button'/> Share</button>
                        <button className={classes['menu-dots']}><img src={dots} alt='Menu button'/></button>
                    </div>
                </div>
            </div>
            <div className={classes['main-video-footer']}>
                <div className={classes['channel-pic']}>
                    <img src={channel} alt='Channel picture'/>
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
import Item from "../item/Item";

export default function VideoItems({items}) {
    return (
        <div>
            {
                items.map((item) => {
                    return <Item item={item}/>
                })
            }
        </div>
    )
}
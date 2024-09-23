import ItemList from "./ItemList";


const RestaurantCategory = ({data,showList,setShowList}) => {

    const Accordion = () => {
        // setShowList(!showList)
        setShowList();
    };
    // console.log(data)
    return <div className="my-4 p-2 mx-auto w-6/12 text-gray-800 shadow-md bg-slate-50">
        <div className="flex justify-between font-bold text-lg cursor-pointer" 
        onClick={Accordion}>
        <span className="px-2">{data.title} ({data.itemCards.length})</span>
        <span>🔻</span>
        </div>
        {showList && <ItemList items={data.itemCards} />}
    </div>
}
export default RestaurantCategory;
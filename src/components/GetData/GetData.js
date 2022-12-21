import { useData } from "../DataContext/DataContext";
const GetData=()=>{
    const {data}=useData();

return(
    <div>
       {data.map((items)=><div key={items.id}>
        <h2>{items.name}</h2>
       </div>)}
    </div>
)
}

export default GetData;
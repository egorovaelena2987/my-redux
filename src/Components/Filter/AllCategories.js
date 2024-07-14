import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
           <h1>What are you looking for?</h1>
           {['PARKA', 'COAT', 'LEATHER', 'HATS', 'ALL']
           .map (category => <Filter category={category}/>)}

            </div>
    ) 
}
export default AllCategories;
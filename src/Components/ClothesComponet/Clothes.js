import { useSelector } from "react-redux";
import dataClothes from "../../Data/dataClothes";
import Cloth from "./Cloth";
import { getSelectedCategory } from "../../redux/clothesSlice";

const Clothes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
            {dataClothes
            .filter(cloth => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === cloth.category;
            })
            .map(cloth => <Cloth cloth={cloth}/>)}
        </div>
    )
}
export default Clothes;
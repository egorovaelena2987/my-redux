const ChangeItem = ({item, setItem}) => {
    const addItem = () => {
        const newItem = item + 1;
        setItem(newItem)
    }
    const removeItem = () => {
        if (item <= 1) return;
        const newItem = item - 1;
        setItem(newItem)
    }
    return(
        <div>
            <button onClick={addItem}>+</button>
            <span>{item}</span>
            <button onClick={removeItem}>-</button>
        </div>
    )
}
export default ChangeItem;
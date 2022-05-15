import { useCallback, useMemo, useState } from "react";
import { Item } from "./components/Item";

function App() {
  const [items, setItem] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");
  const [wishList, setWishList] = useState<string[]>([])

  function addItemTolist() {
    // setItem([...items, `Items ${items.length}`]);
    setItem((items) => [...items, `Item ${items.length}`]);
  }

  // simulando um tipo de calculo para utilizar o useMemo
  const countItemsWithOneValue = useMemo(() => { //
    console.log('teste')
    return items.filter((item) => item.includes("1")).length;
  }, [items]); // dependência

  // useCallback function
  const addItemToWishList = useCallback((item: string) => {
    setWishList(state => [...state, item])
  }, [])

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button onClick={addItemTolist}> Add Item</button>
      {items.map((item) => {
        return <Item key={item} title={item} onAddToWishList={addItemToWishList} />;
      })}

      <div>Contagem: {countItemsWithOneValue}</div>
    </div>
  );
}

export default App;

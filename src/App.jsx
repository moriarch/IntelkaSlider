import { useEffect, useState } from "react";
import Head from "./components/head";
import Sceleton from "./components/Sceleton";
import Item from "./components/Item";
import SliderContainer from "./components/SliderContainer";

function App({ url }) {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(new Array(5).fill(null))


  useEffect(() => {
    fetch('https://intelka-shop.ru'+url)
      .then((response) => response.json())
      .then((response) => {
        setState(response);
        setItems(response.items)
        setLoading(!loading)
      });
  }, []);



  return (
    <div className="container mainSection">
      <Head loading={loading} state={state} />
      <SliderContainer>
              {items.map((item, index)=> <Item data={item} loading={loading}  key={'item_'+index}/>)}
      </SliderContainer>
    </div>
  );
}

export default App;

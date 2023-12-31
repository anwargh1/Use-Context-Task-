import { useState } from "react";
import { MyContext } from "./components/MyContext";
import List from "./components/List";
export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>  
      <MyContext.Provider value={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={(e) => {
              setIsLarge(e.target.checked);
            }}
          />      

          Use large images
        </label> 

        <hr />
        <List />

    </MyContext.Provider>
    </>
  );
}

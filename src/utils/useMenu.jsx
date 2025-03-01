import { useEffect, useState } from "react";
import { menuApi } from "../utils/Api";

const useMenu = (resid) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(menuApi + resid);
    const json = await data.json();
    setMenuData(json.data);
  };
  return menuData;
};

export default useMenu;

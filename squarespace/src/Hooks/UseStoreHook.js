import { useSelector, useDispatch } from "react-redux";

export const useStoreHook = () => {

    const pages = useSelector((state) => state.pages);
    const home = useSelector((state) => state.home);
    const menu = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  return { pages, home, menu, dispatch };
};

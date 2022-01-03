import { useContext } from "react"
import { Context } from "../Context/ContextProvider"

const useCart = () => {
    return useContext(Context);
}

export default useCart;
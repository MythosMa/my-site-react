import { createContext, useContext } from "react";
import { CounterStore } from "./counterStore";

export const StoreContext = createContext({
  counterStore: new CounterStore(),
});

export const useStores = () => useContext(StoreContext);

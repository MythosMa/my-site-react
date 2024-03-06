import { initializeStore, StoreContext } from "./index";

export function StoreProvider({ children }: any) {
  // create the store
  const store = initializeStore();

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

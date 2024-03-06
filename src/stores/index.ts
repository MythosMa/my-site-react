// import { createContext, useContext } from "react";
// import { enableStaticRendering } from "mobx-react-lite";

// import { counterStore } from "./counterStore";

// enableStaticRendering(typeof window === "undefined");

// let store: any;

// export function initializeStore() {
//   const _store = store ?? {
//     counterStore,
//   };

//   // For server side rendering always create a new store
//   if (typeof window === "undefined") return _store;

//   // Create the store once in the client
//   if (!store) store = _store;

//   return _store;
// }

// export const StoreContext = createContext({
//   counterStore,
// });

// export const useStores = () => useContext(StoreContext);

import { CounterStore } from "./counterStore";

export type RootStoreHydration = {
  count: number;
};

export class RootStore {
  counterStore: CounterStore;

  constructor() {
    this.counterStore = new CounterStore(this);
  }

  hydrate(data?: RootStoreHydration) {
    if (data) {
      this.counterStore.hydrate(data.count);
    }
  }
}

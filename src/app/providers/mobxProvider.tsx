"use client";

import { StoreContext, useStores } from "@/stores/index";

export function MobxProviders({ children }: { children: React.ReactNode }) {
  const stores = useStores();
  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
}

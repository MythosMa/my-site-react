"use client";

import { observer } from "mobx-react-lite";
import { useStores } from "@/stores/index";

const Home = observer(() => {
  const { counterStore } = useStores();
  return (
    <button
      onClick={() => {
        counterStore.increment();
      }}
    >
      {counterStore.count}
    </button>
  );
});

export default Home;

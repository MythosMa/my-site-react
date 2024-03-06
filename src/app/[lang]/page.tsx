import { useCounterStore } from "@/app/providers/mobxProvider";

export default function Home() {
  const counterStore = useCounterStore();
  return (
    <button
      onClick={() => {
        counterStore.increment;
      }}
    >
      {counterStore.count}
    </button>
  );
}

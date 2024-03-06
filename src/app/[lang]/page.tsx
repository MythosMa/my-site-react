
export default function Home() {
  const { counterStore } = useStores();
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

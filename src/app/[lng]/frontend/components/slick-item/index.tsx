import styles from "./index.module.scss";

const Card = ({
  component,
  content: { title, list },
}: {
  component: React.ReactNode;
  content: {
    title: string;
    list?: string[];
  };
}) => {
  return (
    <div className="p-4 w-full h-full flex flex-col">
      <div className="h-1/2 w-full flex items-center justify-center">
        {component}
      </div>
      <div className={styles["card-devider"]}></div>
      <div className="h-1/2 flex items-center justify-center text-white">
        <div className="flex flex-col">
          <div className="text-[18px] font-bold">{title}</div>
          {list && list.length && (
            <ul className="ml-4">
              {list.map((item) => (
                <li className="list-disc">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

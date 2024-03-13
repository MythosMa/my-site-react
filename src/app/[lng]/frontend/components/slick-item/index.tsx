import styles from "./index.module.scss";

const SlickItem = ({
  component,
  content: { title, descriptionList },
}: {
  component: React.ReactNode;
  content: {
    title: string;
    descriptionList?: string[];
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
          {descriptionList && descriptionList.length && (
            <ul className="ml-4">
              {descriptionList.map((item) => (
                <li className="list-disc">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlickItem;

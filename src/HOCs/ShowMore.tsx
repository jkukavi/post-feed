import { useState } from "react";

interface ShowMoreProps<T> {
  children: ({ item }: { item: T }) => JSX.Element;
  data: T[];
  increment: number;
  propsMessage?: string;
}

const ShowMore = <T,>({
  children: Child,
  data,
  increment,
  propsMessage,
}: ShowMoreProps<T>) => {
  console.log(propsMessage + "ShowMore");
  const [shown, setShown] = useState(increment);

  const showMore = () => {
    setShown(shown + increment);
  };

  const isThereMore = shown < data.length;

  return (
    <>
      {data.slice(0, shown).map((item, i) => (
        <Child item={item} key={i} />
      ))}
      {isThereMore && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "5rem",
          }}
        >
          <button onClick={showMore} data-testid="show-button">
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default ShowMore;

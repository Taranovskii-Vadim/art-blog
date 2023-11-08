import { useEffect, useState } from "react";

type Props = {
  title: string;
  target: number;
  duration?: number;
  postfix?: string;
};

const Counter = ({ title, target, postfix, duration = 1000 }: Props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const step = Math.abs(Math.floor(duration / target));

    const increment = (current: number) => {
      if (current < target) {
        setValue(++current);

        setTimeout(() => increment(current), step);
      }
    };

    increment(0);
  }, [target, duration]);

  return (
    <div className="w-32">
      <h2>{title}</h2>
      <p className="text-xl font-bold">
        {value}
        {postfix || null}
      </p>
    </div>
  );
};

export default Counter;

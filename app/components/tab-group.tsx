import clsx from "clsx";
import { motion } from "framer-motion";
import type { ReactElement, ReactNode } from "react";
import { useEffect, useRef, Children, useState } from "react";

type TabProps = {
  name: string;
  children: ReactNode;
};

export function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}

type TabGroupProps = {
  children: Array<ReactElement<typeof Tab>>;
  label: string;
  className?: string;
};

export default function TabGroup({
  children,
  label,
  className,
}: TabGroupProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  useEffect(() => {
    if (focusedIndex !== null) {
      buttonRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);
  return (
    <div className={clsx("grid grid-cols-12 gap-4", className)}>
      <div
        role="tablist"
        aria-label={label}
        className="flex col-span-12 md:flex-col md:col-span-3"
      >
        {Children.map(children, (tab, index) => (
          <motion.button
            type="button"
            id={`tab-${index}`}
            key={`tab-${index}`}
            role="tab"
            tabIndex={index !== focusedIndex ? -1 : 0}
            aria-selected={index === activeIndex}
            aria-controls={`panel-${index}`}
            onClick={() => {
              setFocusedIndex(index);
              setActiveIndex(index);
            }}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                event.preventDefault();
                setFocusedIndex(((focusedIndex ?? 0) + 1) % children.length);
              }
              if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                event.preventDefault();
                const newIndex = (focusedIndex ?? 0) - 1;
                setFocusedIndex(newIndex > -1 ? newIndex : children.length - 1);
              }
            }}
            className={clsx(
              "py-2 px-2 text-left focus:bg-stone-400 focus:outline-none hover:bg-stone-400 border-b-2 md:border-b-0 md:border-l-2 border-transparent",
              {
                "border-white": index === activeIndex,
                "font-bold": index === activeIndex,
                "bg-stone-600": index === activeIndex,
              }
            )}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            {tab.props.name}
          </motion.button>
        ))}
      </div>
      <div className="col-span-12 md:col-span-9 grid grid-rows-1">
        {Children.map(children, (tab, index) => (
          <div
            id={`panel-${index}`}
            key={`panel-${index}`}
            role="tabpanel"
            tabIndex={index !== activeIndex ? -1 : 0}
            aria-labelledby={`tab-${index}`}
            aria-hidden={index !== activeIndex}
            className={clsx(
              "row-start-1 col-start-1 transition	ease-in-out duration-100",
              {
                "opacity-0": index !== activeIndex,
                "opacity-100": index === activeIndex,
                "pointer-events-none": index !== activeIndex,
                "delay-200": index === activeIndex,
              }
            )}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
}

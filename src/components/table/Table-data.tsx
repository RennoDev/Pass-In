import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableDataProps extends ComponentProps<"td"> {}

export function TableData(props: TableDataProps) {
  return (
    <td
      {...props}
      className={twMerge("py-3 px-4 text-sm text-zinc-300", props.className)}
    ></td>
  );
}

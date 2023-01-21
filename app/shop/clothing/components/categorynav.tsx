import Link from "next/link";
import clsx from "clsx";

function CategoryNav({ segment }: { segment: string }) {
  console.log(segment);

  return (
    <div className="border border-black grid mt-4 grid-cols-4 rounded">
      <Link
        href={"/shop/clothing"}
        className={clsx("focus:outline-none cursor-pointer px-2 py-1 text-base font-semibold  text-center rounded", {
          "border border-black": segment === "all",
        })}
      >
        All
      </Link>
      <Link
        href={"/shop/clothing/women"}
        className={clsx("focus:outline-none cursor-pointer px-2 py-1 text-base font-semibold  text-center rounded", {
          "border border-black": segment === "women",
        })}
      >
        Women
      </Link>
      <Link
        href={"/shop/clothing/men"}
        className={clsx("focus:outline-none cursor-pointer px-2 py-1 text-base font-semibold  text-center rounded", {
          "border border-black": segment === "men",
        })}
      >
        Men
      </Link>
      <Link
        href={"/shop/clothing/kids"}
        className={clsx("focus:outline-none cursor-pointer px-2 py-1 text-base font-semibold  text-center rounded", {
          "border border-black": segment === "kids",
        })}
      >
        Kids
      </Link>
    </div>
  );
}

export default CategoryNav;

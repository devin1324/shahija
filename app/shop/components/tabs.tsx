"use client";
import { Tab } from "@headlessui/react";

function Tabs() {
  return (
    <Tab.Group>
      <Tab.List as="div" className="border border-black grid grid-cols-3 mt-4 rounded px-[2px] py-[2px]">
        <Tab
          as="div"
          className={
            "cursor-pointer px-2 py-1 text-base  text-center rounded border border-black ui-selected:border ui-selected:border-black ui-not-selected:border-none focus:outline-none"
          }
        >
          Women
        </Tab>
        <Tab
          as="div"
          className={
            "cursor-pointer px-2 py-1 text-base  text-center rounded ui-selected:border ui-selected:border-black focus:outline-none"
          }
        >
          Men
        </Tab>
        <Tab
          as="div"
          className={
            "cursor-pointer px-2 py-1 text-base  text-center rounded ui-selected:border ui-selected:border-black focus:outline-none"
          }
        >
          Kids
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel as="div" className={"grid grid-cols-3 justify-evenly mt-4"}>
          Content 1
        </Tab.Panel>
        <Tab.Panel as="div" className={"grid grid-cols-3"}>
          Content 2
        </Tab.Panel>
        <Tab.Panel as="div" className={"grid grid-cols-3"}>
          Content 3
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs;

function ClothTypeCard({ text }: { text: string }) {
  return (
    <div className="w-24 h-24 border border-black px-2 py-2 justify-self-center rounded-lg">
      <h1 className="font-semibold text-xs">{text}</h1>
    </div>
  );
}

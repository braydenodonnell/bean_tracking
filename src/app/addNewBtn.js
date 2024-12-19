"use client";

import { useState } from "react";

import { PlusIcon } from "@heroicons/react/24/outline";
import AddNewCoffee from "./addNewCoffee";

export default function AddNew() {
  const [addNew, setAddNew] = useState(false);

  return (
    <div>
      <button
        onClick={() => setAddNew(true)}
        className="absolute top-4 right-4 flex gap-2 capitalize bg-green-500 rounded-full items-center py-1 px-3 text-stone-800"
      >
        <PlusIcon className="size-5" />
        add coffee
      </button>

      {addNew && <AddNewCoffee addNew={addNew} setAddNew={setAddNew} />}
    </div>
  );
}

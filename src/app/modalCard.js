import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ModalCard({ showModal, setShowModal }) {
  return (
    <div
      onClick={() => setShowModal(!showModal)}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white border border-stone-200 rounded-lg shadow-md p-6 w-1/3 h-fit cursor-default relative"
      >
        <div className="space-y-2 flex flex-col items-center">
          <h2 className="text-2xl font-bold">Brand</h2>
          <p className="text-xl">Name of coffee</p>
          <p className="text-sm">Roast Date: 01/01/2024</p>
        </div>

        <div className="border-t border-stone-200 mt-4 mb-8 flex justify-around pt-4">
          <div className="text-center">
            <h3 className="font-semibold text-stone-700">Grind Setting</h3>
            <p className="text-stone-600 text-center">15</p>
          </div>

          <div>
            <h3 className="font-semibold text-stone-700">Brewing Method</h3>
            <p className="text-stone-600 text-center">Espresso</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-stone-700">Additional Notes:</h3>
          <div className="bg-stone-100 py-2 px-4 rounded-lg border border-stone-200 shadow-sm min-h-24">
            <p className="text-stone-600 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              eaque exercitationem, dolorem error deserunt voluptate at
              aspernatur praesentium officia sed odio non, iusto amet nisi.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          {/* Confirmation will appear -> if yes -> delete from db */}
          <button
            onClick={() => {
              alert("Are you sure you want to remove?");
            }}
            className="px-2 py-1 rounded-lg bg-red-500 text-stone-800 w-24 text-lg shadow-sm hover:shadow-none hover:bg-red-600 transition-all"
          >
            Remove
          </button>

          {/* Another popup window will appear for user to edit their card (can edit anythine, in case on any misspelling and/or update) */}
          <button className="px-2 py-1 rounded-lg bg-green-500 text-stone-800 w-24 text-lg shadow-sm hover:shadow-none hover:bg-green-600 transition-all">
            Edit
          </button>
        </div>

        <button
          onClick={() => setShowModal(!showModal)}
          className="absolute top-4 right-4 hover:bg-stone-100 hover:rounded-full h-8 w-8 flex justify-center items-center"
        >
          <XMarkIcon className="size-6 text-stone-500" />
        </button>
      </div>
    </div>
  );
}

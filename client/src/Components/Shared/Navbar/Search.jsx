import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold px-6 ">Anywhere</div>
        <div className=" text-sm font-semibold px-6 border-x-[1px] flex-1 hidden sm:block">
          Any Week
        </div>
        <div className=" text-sm pl-6 pr-2 text-gray-600 flex justify-between items-center gap-3 ">
          <div className="hidden sm:block">Add Guests</div>
          <div className="bg-rose-500 text-white p-2  rounded-full">
            <BiSearch size={18}></BiSearch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

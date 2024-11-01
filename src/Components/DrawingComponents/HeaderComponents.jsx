import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Button } from "@/components/ui/button"
import { assets } from "../../../Images/asset";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const items = [
    { id: 1, name: 'Item One', category: 'Category A' },
    { id: 2, name: 'Item Two', category: 'Category B' },
    { id: 3, name: 'Item Three', category: 'Category A' },
    { id: 4, name: 'Item Four', category: 'Category C' },
    { id: 4, name: 'Item Four', category: 'Category C' },
    { id: 4, name: 'Item Four', category: 'Category C' },
    { id: 4, name: 'Item Four', category: 'Category C' },
    { id: 4, name: 'Item Four', category: 'Category C' },
    { id: 4, name: 'Item Four', category: 'Category C' },
    { id: 4, name: 'Item Four', category: 'Category C' },
    { id: 4, name: 'Item Four', category: 'Category C' },
    { id: 4, name: 'Item Four', category: 'Category C' },
];

const SketchDropDown = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter items based on search query
    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toString().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <>
            <div className="shadow sm:w-[20rem] md:w-[25rem]">
                <ul className="absolute right-0 top-0 bg-[#FCFFF7] md:w-[25rem] sm:w-[20rem] h-[30rem] font-bold pl-[20px] flex flex-col gap-[6px] shadow rounded-[10px]">
                    <div className="flex flex-row gap-1 items-center mt-[20px] shadow-md mr-[1.5rem] pl-[10px] rounded-[40px]">
                        <IoSearch size={30}/>
                        <input type="search" placeholder="Search" value={searchQuery} onChange={handleSearch} className="bg-transparent outline-none h-[2.5rem] pl-[10px] w-[100%] pr-[10px] border-none"/>
                    </div>
                    <ul className="flex flex-wrap w-full justify-between pr-[1.5rem] overflow-auto scrollbar-thin overflow-y-scroll">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <div key={item.id} className="h-[7rem] w-[7rem]">
                                    {item.name}
                                </div>
                            ))
                        ) : (
                            <li>No results found</li>
                        )}
                    </ul>
                </ul>
            </div>
        </>
    )
}

const IconRotate = ({isRotated, toggleRotation}) => {
    return(
        <div onClick={toggleRotation}>
            <SketchDropDown className={`transform transition-transform duration-300 ${isRotated ? 'rotate-180' : 'rotate-0'}`}/>
        </div>
    )
}

const DropDownMenu = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isRotated, setIsRotated] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    const toggleRotation = () => {
        setIsRotated((prev) => !prev);
      };
    return (
        <>
            <div className="shadow">
                <ul className="absolute right-[20px] top-[70px] bg-[#FCFFF7] w-[10rem] h-[10rem] font-bold pl-[20px] flex flex-col gap-[6px] shadow rounded-[10px] pt-[3px] cursor-pointer">
                    <li>Daily Challenge</li>
                    <li onClick={toggleVisibility}>Sketch</li>
                    <li>Favourites</li>
                    <li>Saved Work</li>
                    <li>Print</li>
                    {isVisible ? <IconRotate isRotated={isRotated} toggleRotation={toggleRotation}/> : null}
                </ul>
            </div>
        </>
    )
}

export const HeaderComponents = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
    return (
        <div className='flex flex-row justify-between items-center mt-[20px] mb-[10px] ml-[10px] mr-[10px]'>
            <MdOutlineArrowBackIosNew size={30} />
            <div className="flex flex-row gap-4 justify-center items-center">
                <Button className='rounded-[20px] bg-[#096566]'>Undo</Button>
                <Button className='rounded-[20px] bg-[#096566]'>Share</Button>
                <Button className='rounded-[20px] bg-[#096566]'>Save</Button>
                <img src={assets.dropmenu} alt="menu" width={30} onClick={toggleVisibility} />
                {isVisible ? <DropDownMenu /> : null}
            </div>
        </div>
    )
}

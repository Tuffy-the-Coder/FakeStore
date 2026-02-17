import { FaRegCopyright } from "react-icons/fa";

function Footer() {
    return (
        <div className="h-15 bg-gray-900 w-full text-white text-[0.8rem] font-[calibri] font-semibold flex flex-col justify-center items-center ">
            <div className="gap-4 flex">
                <span className="cursor-pointer hover:underline">Conditions of Use & Sale</span>
                <span className="cursor-pointer hover:underline">Privacy Notice</span>
                <span className="cursor-pointer hover:underline">Interest-Based Ads</span>
            </div>
            <div className="flex gap-1">
                <FaRegCopyright className="text-[1rem] pt-1"/>2026-2027, FakeStore.github, Inc. or its affiliates
            </div>
        </div>
    )
}

export default Footer
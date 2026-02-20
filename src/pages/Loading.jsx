import img from "../assets/load.png"

export default function Loading() {
    return (
        <div className="flex  gap-2 justify-center items-center h-[80.5vh]">
            <h1 className="text-amber-50 text-5xl">Loading</h1>
            <img src={img} alt="" className=" w-12 h-14 pt-2"/>
        </div>
        

    )
}
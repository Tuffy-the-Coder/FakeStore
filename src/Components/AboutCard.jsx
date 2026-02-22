import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function AboutCard({ data }) {

    return (
        <>
            <div className="flex flex-col md:flex-row gap-20 justify-between items-center">
                {data.map(item => (
                    <div className="h-80 w-80 pt-10 border-2 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-4xl text-gray-900"
                        key={item.id}>

                        <h2 className="font-bold text-center text-3xl">{item.title}</h2>
                        <p className=" font-semibold pt-3 pl-5">{item.description}</p>
                        <ul className="pl-10 pt-3 list-disc font-semibold">
                            {item.list.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AboutCard;


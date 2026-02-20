import AboutCard from "../Components/AboutCard"


function About() {
    const data = [
        {
            id: 1,
            title: "About the Project",
            description: "This project was created as part of my React learning journey. Users can:",
            list: ["Browse products", "View product details", "Add items to cart", "Explore categories"]
        },
        {
            id: 2,
            title: "Technologies Used",
            description: "Technologies i used for creating this Project:",
            list: ["React", "React Router", "FakeStore API", "Tailwind"]
        },
        {
            id: 3,
            title: "Features",
            description: "Feature available as of now:",
            list: ["Responsive design", "Product filtering", "Shopping cart", "Shopping cart", "Dynamic routing"]
        },
        
    ]

    return (

        <div className="flex flex-col gap-10 p-10">

            <div className="text-blue-200 flex flex-col gap-4 [text-shadow:_1px_1px_5px_#000]">
                <h2 className="font-bold text-4xl">Welcome to FakeStore</h2>
                <p>A modern React e-commerce project powered by FakeStore API.
                    FakeStore is a demo e-commerce application built using React.
                    It demonstrates how to fetch data from APIs, manage state, and create responsive user interfaces.
                </p>
            </div>

            <AboutCard data={data}/>

        </div>
    )
}

export default About
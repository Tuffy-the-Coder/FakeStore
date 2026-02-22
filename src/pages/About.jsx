import { FaReact, FaShoppingCart, FaFilter, FaMobileAlt, FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiTailwindcss, SiReactrouter } from "react-icons/si";


function About() {

    const features = [
        {
            icon: <FaShoppingCart />,
            title: "Shopping Experience",
            desc: "Browse products, view details and manage your cart easily."
        },
        {
            icon: <FaFilter />,
            title: "Smart Filtering",
            desc: "Filter and sort products for better discovery."
        },
        {
            icon: <FaMobileAlt />,
            title: "Responsive Design",
            desc: "Fully responsive across mobile, tablet and desktop."
        }
    ];


    const tech = [
        { icon: <FaReact />, name: "React" },
        { icon: <SiReactrouter />, name: "React Router" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" }
    ];


    return (

        <div className="text-white">


            {/* Intro */}
            <section className=" h-[300px] flex flex-col items-center justify-center bg-gradient-to-r from-amber-400 to-yellow-600 text-black p-16 text-center">

                <h1 className="text-5xl font-bold">
                    About FakeStore
                </h1>

                <p className="mt-4 max-w-2xl mx-auto text-lg">
                    FakeStore is a modern ecommerce project built with React to
                    demonstrate real-world frontend development skills.
                </p>

            </section>



            {/* Project Info */}
            <section className="max-w-5xl mx-auto p-10 text-center">

                <h2 className="text-3xl font-bold mb-4">
                    The Project
                </h2>

                <p className="text-gray-300">
                    This project was created as part of my React learning journey.
                    It demonstrates API integration, cart management, routing,
                    filtering and responsive UI design using modern tools.
                </p>

            </section>



            {/* Features */}
            <section className="max-w-6xl mx-auto p-10">

                <h2 className="text-3xl font-bold text-center mb-10">
                    Features
                </h2>


                <div className="grid md:grid-cols-3 gap-8">

                    {features.map((item, index) => (

                        <div
                            key={index}
                            className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition"
                        >

                            <div className="text-3xl text-amber-400 mb-4">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-400">
                                {item.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </section>



            {/* Tech Stack */}
            <section className="bg-zinc-900 p-10 text-center">

                <h2 className="text-3xl font-bold mb-8">
                    Technologies Used
                </h2>


                <div className="flex justify-center gap-10 text-4xl">

                    {tech.map((item, index) => (

                        <div key={index} className="flex flex-col items-center gap-2">

                            <span className="text-amber-400">
                                {item.icon}
                            </span>

                            <span className="text-sm">
                                {item.name}
                            </span>

                        </div>

                    ))}

                </div>

            </section>



            {/* About me */}
            <section className="max-w-4xl mx-auto p-10 text-center">

                <h2 className="text-3xl font-bold mb-4 text-white">
                    Developer
                </h2>

                <p className="text-gray-400 mb-6">
                    Hi, I'm the developer of FakeStore. This project was built using React,
                    Tailwind, and FakeStore API to practice real-world ecommerce development.
                </p>


                {/* Links */}
                <div className="flex justify-center gap-6 text-3xl">

                    <a
                        href="https://github.com/Tuffy-the-Coder"
                        target="_blank"
                        className="text-white hover:text-gray-400 hover:scale-125 transition"
                    >
                        <FaGithub />
                    </a>


                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        className="text-white hover:text-blue-400 hover:scale-125 transition"
                    >
                        <FaLinkedin />
                    </a>


                    <a
                        href="https://youtube.com/@Tuffy_the_Coder"
                        target="_blank"
                        className="text-white hover:text-red-500 hover:scale-125 transition"
                    >
                        <FaYoutube />
                    </a>


                    <a
                        href="https://instagram.com/anuragrwt.exe"
                        target="_blank"
                        className="text-white hover:text-pink-500 hover:scale-125 transition"
                    >
                        <FaInstagram />
                    </a>


                    <a
                        href="mailto:rawat123anurag@gmail.com"
                        target="_blank"
                        className="text-white hover:text-amber-400 hover:scale-125 transition"
                    >
                        <FaEnvelope />
                    </a>

                </div>



            </section>


        </div>

    );

}

export default About;
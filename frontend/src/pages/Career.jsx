import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter } from "react-icons/fa";


export default function Career() {

    const positions = [
        {
            department: "Corp",
            post: "Business Finance",
            location: "Head Office",
            experience: "4-5 years",
            type: "Full Time",
            id: "NU0001"
        },
        {
            department: "Corp",
            post: "Product Analyst",
            location: "Head Office",
            experience: "1-3 years",
            type: "Full Time",
            id: "NU0002"
        },
        {
            department: "Delivery",
            post: "Engineer Lead - Allied AI",
            location: "Head Office",
            experience: "9+ years",
            type: "Full Time",
            id: "NU0003"
        },
        {
            department: "Delivery",
            post: "Engineering Manager",
            location: "Head Office",
            experience: "4-6 years",
            type: "Full Time",
            id: "NU0004"
        },
        {
            department: "Tech",
            post: "Backend Engineer",
            location: "Head Office",
            experience: "2-4 years",
            type: "Full Time",
            id: "NU0005"
        },
    ];

    let lastDepartment = null;

    const categoryCounts = positions.reduce((acc, item) => {
        acc[item.department] = (acc[item.department] || 0) + 1;
        return acc;
      }, {});

    return (
        <div className="pt-15">
            <div className='flex justify-between pb-5 max-[480px]:pt-10 max-[480px]:pb-10 bg-[linear-gradient(to_right,rgba(134,157,246,0.8),rgba(194,204,243,0.8)),url(./src/assets/images/team_img.jpg)] bg-cover bg-center  h-[40rem] '>
                <div className="w-sm">
                    <div className="text-5xl font-bold text-white">Join Us!</div>
                    <div className="text-5xl font-bold text-white">Build the future of Enterprise AI</div>
                </div>
                <div className="text-5xl font-bold"><span className="text-white">TEN</span><span className="text-blue-500">AI</span></div>
            </div>
            <div className="flex justify-center items-center pt-5 pb-5 ">
                <a href="#" className="px-2 text-gray-400 text-3xl"><FaFacebook /></a>
                <a href="#" className="px-2 text-gray-400 text-3xl"><FaTwitter /></a>
                <a href="#" className="px-2 text-gray-400 text-3xl"><FaInstagram /></a>
                <a href="#" className="px-2 text-gray-400 text-3xl"><FaLinkedin /></a>
            </div>
            <div>
                <div className="text-3xl font-bold text-center text-blue-600">Open Positions!</div>
                <div className="grid grid-cols-5 px-20 py-10">
                    <div className="col-span-1">
                        <div className="flex">
                            <div className="flex items-center border-2 p-1 w-fit">
                                <FaSearch className="text-gray-500 w-6" />
                                <input type="search" name="" placeholder="Search" className="focus:outline-none" />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="27" width="22" viewBox="0 0 576 512" className="ml-2 mt-1 cursor-pointer">
                                <path d="M3.9 22.9C10.5 8.9 24.5 0 40 0L472 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z" />
                            </svg>
                        </div>
                    </div>
                    <div className="col-span-4">
                        {positions.map((position) => {
                            const showDepartment = lastDepartment !== position.department;
                            lastDepartment = position.department;
                            return (
                                <div key={position.id} className="mb-2">
                                    <div className="flex items-center">
                                        {showDepartment && <h1 className="text-blue-600 text-2xl font-medium">{position.department}</h1>}
                                        {showDepartment && <div className="bg-blue-600 border rounded-2xl px-2 py-0.5 text-white ml-2">{categoryCounts[position.department]} jobs</div>}
                                    </div>
                                    <div className="grid gap-4">
                                        <a href="#" className="flex flex-col border-2 p-5 mt-5 rounded-md">
                                            <div className="text-blue-600 font-medium">{position.post}</div>
                                            <div className="flex items-center">
                                                <span>{position.location}</span>
                                                <div className="border-3 rounded-full border-gray-400 mx-2"></div>
                                                <span>{position.experience}</span>
                                                <div className="border-3 rounded-full border-gray-400 mx-2"></div>
                                                <span>{position.type}</span>
                                                <div className="border-3 rounded-full border-gray-400 mx-2"></div>
                                                <span>{position.id}</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

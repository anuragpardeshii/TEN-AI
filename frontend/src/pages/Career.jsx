import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function Career() {
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

        </div>
    </div>
  )
}

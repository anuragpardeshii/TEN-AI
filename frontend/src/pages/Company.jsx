import Connect from "@/components/Connect";
import Impact from "@/components/Impact";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function Company() {

    useEffect(() => {
        Aos.init({ duration: 800, once: true })
    }, [])

    return (
        <>
            <div className='pt-15'>
                <section className='pt-20 pb-5 max-[480px]:pt-10 max-[480px]:pb-10 pl-10 pr-10 max-[480px]:pl-6 max-[480px]:pr-6'>
                    <div className='pb-15 max-[480px]:pb-5'>
                        <div className="bg-white w-fit pr-2 pl-0.5 py-0.5 gap-2 dark:bg-slate-800 border border-slate-300 dark:border-slate-300 font-[Manrope] text-slate-700 dark:text-slate-300 text-xs flex align-center rounded-4xl">
                            <img
                                className="bg-yellow-200 rounded-4xl overflow-auto p-0.5 w-4 h-4"
                                src="https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/668f703d2aa0bf69a597c3d9_Label%20Arrow.svg"
                                alt=""
                            />
                            Our Story
                        </div>
                        <div className='flex justify-between items-end max-[480px]:flex-col max-[480px]:items-start pt-2 pb-15'>
                            <h1 className='font-bold min-[480px]:self-end max-[480px]:pb-5 text-5xl max-[480px]:text-4xl'>Future of Enterprise AI</h1>
                            <div className="w-[35%] max-[480px]:w-full text-[#0009] dark:text-accent-foreground leading-6.5">We believe enterprise customer engagement is on the brink of a dramatic transformation.</div>
                        </div>
                        <img src="./team_img.jpg" className='rounded-md' alt="team_img" data-aos='fade-up' />
                    </div>
                </section>
                <section className='pl-10 pr-10 pb-24 max-[480px]:pl-6 max-[480px]:pr-6'>
                    <div className='grid grid-cols-11 max-[480px]:flex max-[480px]:flex-col'>
                        <div className='font-[500] col-span-3 text-[#0006] max-[480px]:pb-5 dark:text-accent-foreground'>Mission & Vision</div>
                        <div className="col-span-6">
                            <div className="text-3xl pb-5">Imagine a world with super-intelligent agents that know everything about your customers, and are available 24/7 to solve any issue instantly at minimal cost.</div>
                            <div className="text-sm text-[#0009] w-[65%] dark:text-accent-foreground">Our AI agents anticipate customer needs, suggesting next purchases to boost revenue without annoying your customers. They analyze extensive data to generate sharp insights, shaping your business and product strategy. They resolve customer queries, paving the way for the ultimate customer experience where every interaction is highly personalized.</div>
                        </div>
                        <img src="./x_img.svg" className="col-span-2 justify-self-end self-end w-[150px] absolute dark:invert" alt="x_img" />
                    </div>
                </section>
                <div className='border-t-2 ml-10 mr-10 dark:border-white'></div>
                <section className='pl-10 pr-10 pt-24 pb-24 max-[480px]:pl-6 max-[480px]:pr-6'>
                    <div className="">
                        <div className='grid grid-cols-5 max-[991px]:flex max-[991px]:flex-col'>
                            <div className="col-span-2 bg-cover h-[40rem] w-full rounded-md bg-[url(./premji_b.jfif)] p-5 bg-center flex flex-col justify-end items-start max-[991px]:w-full" data-aos='fade-up'>
                                <div className="bg-white rounded-md p-4 leading-6">
                                    <div className="text-[#000000bf] font-medium">Premji B</div>
                                    <div className="text-[#0009]">Senior AI Product Leader</div>
                                </div>
                            </div>
                            <div className="col-span-3 self-center max-[991px]:self-start max-[991px]:pl-0 max-[991px]:pt-10 pl-25 w-[85%] max-[991px]:w-[100%] ">
                                <h2 className="text-4xl font-medium pb-4">Our Leadership</h2>
                                <div className="text-sm text-[#0009] w-[65%] dark:text-accent-foreground pt-5 max-[991px]:w-[100%]">Premji B, a seasoned leader with 26 years in agile product management, excels in driving innovation, team development, and strategic growth.</div>
                                <div className="text-sm text-[#0009] w-[65%] dark:text-accent-foreground pt-5 max-[991px]:w-[100%]">With 27+ years of experience in Product Management consulting and as a strategist, The Transcendental Professional is a trusted expert in guiding organizational transformation. Through exciting workshops on team building, agile development, and more, he helps businesses thrive. </div>
                                <div className="text-sm text-[#0009] w-[65%] dark:text-accent-foreground pt-5 max-[991px]:w-[100%]">A graduate of the Hindustan College of Engineering, Kelambakkam, Tamil Nadu, Premji B is celebrated for his expertise in product innovation, customer experience, and scaling businesses globally. Under his leadership, TEN is shaping the future of customer engagement, blending AI efficiency with the human touch to create exceptional customer experiences.</div>
                            </div>
                        </div>

                    </div>
                </section>
                <section>{<Impact />}</section>
                <section className='pl-10 pr-10 pt-24 pb-24 max-[480px]:pl-6 max-[480px]:pr-6'>
                    <div>
                        <div className="grid grid-cols-5 max-[991px]:flex max-[991px]:flex-col">
                            <div className="col-span-3">
                                <div className="">
                                    <h1 className="font-bold min-[480px]:self-end max-[480px]:pb-5 md:w-[25rem] text-5xl max-[480px]:text-4xl">Build the Future Of Enterprise AI</h1>
                                    <Link to='career' className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-9 has-[>svg]:px-3 z-50 cursor-pointer p-5 mt-6 text-sm text-white dark:hover:text-black bg-[#245ae2] hover:bg-black dark:hover:bg-white rounded-full">
                                        View open roles →
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-2 text-sm text-[#0009] w-[75%] max-md:w-full max-[991px]:w-[55%] justify-self-end dark:text-accent-foreground pt-5">We continually adapt our work practices to help our staff maintain a healthy work-life balance, which we believe benefits everyone.</div>
                        </div>
                    </div>
                </section>
                <section>{<Connect />}</section>
            </div>
        </>
    )
}


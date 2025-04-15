import { useForm } from "react-hook-form";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm();

	const isTermsChecked = watch("terms", false); // The watch function from react-hook-form allows you to monitor the value of the checkbox and conditionally enable or disable the submit button.

	const onSubmit = () => {
		alert("Form is submitted");
	};

	return (
		<div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
			<div className="flex min-h-[40vh] flex-col sm:flex-row sm:items-end sm:justify-between px-[4%] py-3">
				<div className="flex flex-col gap-4 md:max-w-[60%]">
					<Badge title={"Contact Us"} />
					<h1 className="text-5xl text-wrap sm:text-6xl font-bold leading-20">
						Start your AI transformation today!
					</h1>
				</div>
				<div className="md:max-w-[30%]">
					<p className="text-[1rem] opacity-70">
						Build a reliable, scalable, and secure solution that
						transforms interactions into opportunities for growth.
					</p>
				</div>
			</div>

			<hr className="my-8" />

			<div className="flex flex-col md:flex-row gap-6 w-full px-[4%] mt-8">
				<div className="md:max-w-[60%] w-full">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className=" flex flex-col bg-white rounded-lg p-8 gap-4"
					>
						<h1 className="text-2xl mb-4 dark:text-black">
							Let's Talk
						</h1>
						<div className="flex flex-col sm:flex-row sm:items-center gap-4 dark:text-black">
							{/* Name */}
							<label className="w-full">
								<p>Name</p>
								<input
									type="text"
									{...register("name", {required : "Please provide name"})}
									placeholder="Enter your name"
									className="border-gray-400 w-full focus:border-blue-600 text-sm border-b outline-none px-2 py-4"
								/>
								{errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
							</label>
							{/* Email */}
							<label className="w-full">
								<p>Email</p>
								<input
									type="email"
									{...register("email", {required : "Please provide email"})}
									placeholder="Enter your email"
									className="border-gray-400 w-full focus:border-blue-600 text-sm border-b outline-none px-2 py-4"
								/>
								{errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
							</label>
						</div>
						<div className="flex flex-col sm:flex-row sm:items-center items-center gap-4 dark:text-black">
							{/* Phone */}
							<label className="w-full">
								<p>Phone</p>
								<input
									type="text"
									{...register("phone", {required : "Please provide your contact number"})}
									placeholder="Enter your Phone no"
									className="border-gray-400 w-full focus:border-blue-600 text-sm border-b outline-none px-2 py-4"
								/>
								{errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
							</label>
							{/* Company */}
							<label className="w-full">
								<p>Company</p>
								<input
									type="text"
									{...register("company", {required : "Please provide company name"})}
									placeholder="Enter your company name"
									className="border-gray-400 w-full focus:border-blue-600 text-sm border-b outline-none px-2 py-4"
								/>
								{errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}
							</label>
						</div>
						{/* Source */}
						<div className="dark:text-black w-full my-2">
							<label className="w-full">
								<p className="mb-3">Where did you hear about us ?</p>
								<select 
									className="w-full text-sm border-b border-gray-400 outline-none"
									{...register("source", {required : "Please provide source"})}
								>
									<option value="#">Select One</option>
									<option value="google">Google</option>
									<option value="linkedin">Linkedin</option>
									<option value="referral">Referral</option>
									<option value="event">Events</option>
									<option value="other">Other</option>
								</select>
								{errors.source && <p className="text-red-500 text-sm">{errors.source.message}</p>}
							</label>
						</div>
						{/* Message */}
						<div className="dark:text-black w-full my-2">
							<label className="w-full">
								<p className="mb-3">Message</p>
                				<textarea 
									className="w-full border-b border-gray-400 focus:border-blue-600 outline-none"
									{...register("message")}
								/>
							</label>
						</div>

						{/* Permission Checkbox */}
						<label className="flex items-center">
							<input 
								type="checkbox" 
								{...register("terms", {required : "You must agree to the terms to submit the form"})}
								className="w-4 h-4 border-gray-400 focus:ring-blue-600 rounded-md"
							
							/>									
							<span className="text-gray-600 ml-2 text-sm">I allow TEN AI to contact me for scheduling and marketing.</span>
							{errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p> }
						</label>

						<button className={`text-white mx-auto mt-3 px-4 py-2 text-sm bg-blue-700 w-fit rounded-full ${!isTermsChecked ? "opacity-70" : "cursor-pointer"}`}disabled={!isTermsChecked}>Submit</button>
					</form>
				</div>

				<Separator
					orientation="vertical"
					className={"hidden md:block dark:bg-gray-400 h-inherit"}
				/>
				
				<div className="md:max-w-[40%] w-full">
					<div className="bg-[#01194c] text-white min-h-100 rounded-lg flex flex-col gap-10 px-10 py-16">
						<h1 className="text-3xl font-semibold">Contact Info</h1>
						<div className="flex flex-col gap-3">
							<span className="w-fit rounded-full text-black bg-[#d6f549] text-xs px-2 py-1">Location</span>
							<a 
								href="https://www.google.com/maps/place/Delhi/@28.6442857,76.7628787,10z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902!16zL20vMDlmMDc?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
								className="text-2xl hover:underline"
							>
								Delhi
							</a>
						</div>
						<div className="flex flex-col gap-3">
							<span className="w-fit rounded-full text-black bg-[#d6f549] text-xs px-2 py-1">Sales Inquiries</span>
							<a 
								href="mailto:tenai@gmail.com"
								className="text-2xl hover:underline"
							>
								tenai@gmail.com
							</a>
						</div>
						<div className="flex flex-col gap-3">
							<span className="w-fit rounded-full text-black bg-[#d6f549] text-xs px-2 py-1">Partners</span>
							<a 
								href="mailto:partners@tenai.com"
								className="text-2xl hover:underline"
							>
								partners@tenai.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;

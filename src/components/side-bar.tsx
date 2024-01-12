import { LinkedinIcon, MailIcon, MapPinIcon } from "lucide-react";

const SideBar: React.FC = () => {
	return (
		<aside className=" w-52 h-80 flex flex-col justify-center items-center bg-[#1E1E1F] rounded-xl border-2 border-[#282828]">
			<div className="w-full flex flex-col items-center gap-y-5">
				<img
					src="https://github.com/1uri-silva.png"
					alt="logo"
					width={110}
					height={110}
				/>
				<span className="rounded uppercase text-white">Iuri Silva</span>
			</div>

			<div className="w-full inline-flex justify-center my-10 gap-2">
				<a
					href="http://linkedin.com/in/iuri-rodrigues"
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedinIcon color="#ffffff" />
				</a>
				<a
					href="mailto:iurirodrigues2200@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<MailIcon color="#ffffff" />
				</a>
				<div className="group flex flex-col justify-center items-center">
					<MapPinIcon color="#fff" />
					<span className="text-white hidden group-hover:block">Brasilia-Df</span>
				</div>
			</div>
		</aside>
	);
};
export { SideBar };

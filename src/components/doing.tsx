import {
	FileDigitIcon,
	MonitorCheckIcon,
	GalleryHorizontalIcon,
} from "lucide-react";

const Doing: React.FC = () => {
	return (
		<ul className="grid grid-cols-2 gap-3 mt-3">
			<li className="h-32 flex flex-row justify-center items-center mx-3 bg-[#212123] rounded-lg border-2 border-[#2C2C2C]">
				<FileDigitIcon size={30} color="#998148" />
				<div className="flex flex-col ml-3 w-64 h-24">
					<strong className="text-base text-[#D5D5D6]">
						Backend Developer
					</strong>
					<span className="text-sm text-[#68686b]">
						Entusiasta e apaixonado pelo desenvolviamnto Backend.
					</span>
				</div>
			</li>
			<li className="h-32 flex flex-row justify-center items-center mx-3 bg-[#212123] rounded-lg border-2 border-[#2C2C2C]">
				<MonitorCheckIcon size={30} color="#998148" />
				<div className="flex flex-col ml-3 w-64 h-24">
					<strong className="text-base text-[#D5D5D6]">
						Frontend Developer
					</strong>
					<span className="text-sm text-[#68686b]">
						Experiência na area de web e mobile frontend.
					</span>
				</div>
			</li>
			<li className="h-32 flex flex-row justify-center items-center mx-3 bg-[#212123] rounded-lg border-2 border-[#2C2C2C]">
				<GalleryHorizontalIcon size={30} color="#998148" />
				<div className="flex flex-col ml-3 w-64 h-24">
					<strong className="text-base text-[#D5D5D6]">Mobile Developer</strong>
					<span className="text-sm text-[#68686b]">
						Experiência na area, desenvolvimento react native (expo), aplicativo
						publicado na Play Store.
					</span>
				</div>
			</li>
		</ul>
	);
};

export { Doing };

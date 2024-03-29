import { FileJsonIcon } from "lucide-react";

const Experience: React.FC = () => {
	return (
		<section>
			<div className="flex flex-row gap-2 items-center">
				<FileJsonIcon color="#7E6C40" />
				<h2 className="text-start font-bold text-xl text-[#FAFAFA]">
					Experience
				</h2>
			</div>

			<ul className="flex flex-col gap-3 my-5">
				<li className="flex flex-col gap-2">
					<strong className="text-start font-bold text-lg text-[#fffafa]">
						Freelance - Octupus
					</strong>
					<span className="text-start font-bold text-sm text-[#625538]">
						jul/2021 - ago/2021
					</span>
					<p className="text-start font-bold text-sm text-[#68686b]">
						Desenvolvimento de app para busca de prestadores de serviços próximo ao local da pessoa que fez a solicitação de serviço.
					</p>
				</li>
				<li className="flex flex-col gap-2">
					<strong className="text-start font-bold text-lg text-[#fffafa]">
						Developer frontend - BKPi
					</strong>
					<span className="text-start font-bold text-sm text-[#625538]">
						oct/2021 - abr/2022
					</span>
					<p className="text-start font-bold text-sm text-[#68686b]">
						Desenvolvimento de app para negociação de insumos agrícolas com base na Bolsa de valores Agrícolas.
					</p>
				</li>
			</ul>
		</section>
	);
};

export { Experience };

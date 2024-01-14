import { Doing } from "../components/doing";
import { Header } from "../components/header";
import { SideBar } from "../components/side-bar";

export default function Home() {
	return (
		<div className="flex flex-1 flex-col justify-center items-center max-w-full min-h-full bg-[#121212] py-8 tablet:flex-row tablet:items-start">
			<SideBar />

			<main className="w-[25rem] bg-[#1E1E1F] rounded-xl mx-8 pl-5 border-2 border-[#282828] mt-8 tablet:w-[45rem] tablet:mb-8 tablet:mt-0">
				<Header />

				<p className="text-[#8F8F8F] text-sm text-start">
					Sou Iuri, um entusiasta de tecnologia e desenvolvedor full-stack com
					uma paixão particular por backend. Atualmente estou cursando Análise e
					Desenvolvimento de Software, onde aprofundo meus conhecimentos e
					aprimoro minhas habilidades no vasto mundo da programação. Meu coração
					bate mais forte quando aceito os desafios do desenvolvimento de
					software e construindo soluções eficientes e robustas. Embora aprecio
					a elegância do código frontend, encontro verdadeira satisfação nos
					detalhes intrincados do backend, onde a mágica acontece. Fora do mundo
					digital, sou apaixonado por atividades ao ar livre. Quando o asfalto
					chama, surfei sobre quatro rodas e explorando o mundo do skate. Às
					vezes troco bits e bytes por notas musicais quando toco violão para
					relaxar e expressar minha criatividade. Meu tempo livre é dedicado à
					aventura e à descoberta. Gosto de explorar novos lugares. Seja
					viajando pela natureza ou apenas descobrindo os cantos escondidos da
					minha cidade. A sede de conhecimento é infinita. Sempre encontro tempo
					para pesquisar novas tecnologias e tendências e aprimorar minhas
					habilidades. Quer você compartilhe sua paixão pelo desenvolvimento de
					software, sua inclinação por atividades ao ar livre ou apenas
					desfrutar de uma boa conversa sobre as tecnologias mais recentes,
					estou sempre aberto a novas conexões e experiências. Vamos criar algo
					incrível juntos! 🚀 🎸 🛹
				</p>

				<section className="my-5">
					<strong className="text-center font-bold text-xl text-[#FAFAFA]">
						O que eu faço
					</strong>

					<Doing />
				</section>
			</main>
		</div>
	);
}

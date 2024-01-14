import { useEffect, useState } from "react";
import { Education } from "../../components/education";
import { Experience } from "../../components/experience";
import { Header } from "../../components/header";
import { Repos } from "../../components/repos";
import { SideBar } from "../../components/side-bar";

interface ReposResponse {
	forks: number;
	name: string;
	html_url: string;
	watchers_count: number;
	stargazers_count: number;
}

export default function Portfolio() {
	const [repos, setRepos] = useState<ReposResponse[]>([]);

	useEffect(() => {
		fetch("https://api.github.com/users/1uri-silva/repos?per_page=6&page=1", {
			method: "GET",
		}).then(async (res) => setRepos(await res.json()));
	}, []);

	return (
		<div className="flex flex-1 flex-col justify-center items-center max-w-full min-h-full bg-[#121212] py-8 tablet:flex-row tablet:items-start">
			<SideBar />

			<main className="w-[25rem] bg-[#1E1E1F] rounded-xl mx-8 pl-5 border-2 border-[#282828] mt-8 tablet:w-[45rem] tablet:mb-8 tablet:mt-0">
				<Header />

				<section className="mt-5 my-9">
					<Education />
					<Experience />
					<div className="grid grid-rows-1 gap-3 mt-3 tablet:grid-cols-2">
						{repos.map((rep) => (
							<Repos {...rep} />
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

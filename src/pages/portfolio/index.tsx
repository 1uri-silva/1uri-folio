import { useEffect, useState } from "react";
import { Education } from "../../components/education";
import { Experience } from "../../components/experience";
import { Header } from "../../components/header";
import { Repos } from "../../components/repos";
import { SideBar } from "../../components/side-bar";

interface ReposResponse {
	forks: number
	name: string
	html_url: string
	watchers_count: number
	stargazers_count: number
}

export default function Portfolio() {
	const [repos, setRepos] = useState<ReposResponse[]>([]);

	useEffect(() => {
		fetch('https://api.github.com/users/1uri-silva/repos?per_page=6&page=1', {
			method: "GET",
		})
			.then(
				async res =>
					setRepos(await res.json())
			);
	}, [])

	return (
		<div className='flex flex-row justify-center max-w-full max-h-full bg-[#121212] py-8'>
			<SideBar />

			<main className='bg-[#1E1E1F] w-[45rem] rounded-xl mx-8 pl-5 border-2 border-[#282828]'>
				<Header />

				<section className='mt-5 my-9'>
					<Education />
					<Experience />
					<div className='grid grid-cols-2 gap-3 mt-3'>
						{repos.map(rep => <Repos {...rep} />)}
					</div>
				</section>
			</main>
		</div >
	)
}
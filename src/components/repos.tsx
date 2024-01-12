interface ReposProps {
  name: string
  forks: number
  html_url: string
  watchers_count: number
  stargazers_count: number
}

const Repos: React.FC<ReposProps> = (props) => {
  return (
    <a href={props.html_url} rel="noreferrer" target="_blank" className='h-32 flex flex-col justify-center items-start p-5 mx-3 bg-[#212123] rounded-lg border-2 border-[#2C2C2C]'>
      <strong className='text-base text-[#D5D5D6]'>{props.name}</strong>
      <span className='text-sm text-[#68686b]'>Stars {props.stargazers_count}</span>
      <span className='text-sm text-[#68686b]'>Watchers {props.watchers_count}</span>
    </a>
  )
}

export { Repos }


const Header: React.FC = () => {
  function getPath() {

    const paths = ['/', '/portfolio']
    const pathname = window.location.pathname

    if (!paths.includes(pathname)) {
      return null
    }

    if (pathname === '/') {
      return 'About me'.toUpperCase()
    }

    return pathname.replace('/', '').toUpperCase()

  }

  return (
    <div className='flex flex-row justify-between'>
      <div className='my-5'>
        <strong className='text-center font-bold text-xl text-[#FAFAFA]'>{getPath()}</strong>
        <div className='w-12 h-1 bg-[#FFC361] my-3 rounded' />
      </div>
      <ul className='inline-flex flex-wrap justify-center items-center gap-x-8 bg-[#282829] text-[#FAFAFA] text-center text-sm w-64 h-12 rounded-bl-lg border-2 border-[#2C2C2C]'>
        <li>
          <a href="/">
            About
          </a>
        </li>
        <li>
          <a href="/portfolio">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  )
}

export { Header }

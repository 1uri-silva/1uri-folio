import { BookMarked } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section>
      <div className='flex flex-row gap-2 items-center'>
        <BookMarked color='#7E6C40' />
        <h2 className='text-start font-bold text-xl text-[#FAFAFA]'>
        Education
        </h2>
      </div>

      <ul className="flex flex-col gap-3 my-5">
        <li className="flex flex-col gap-2">
          <strong className="text-start font-bold text-lg text-[#fffafa]">Análise e desenvolvimento de sistemas - UNIASSELVI</strong>
          <span className="text-start font-bold text-sm text-[#625538]">2023 - Present</span>
        </li>
      </ul>
    </section>
  )
}

export { Education };


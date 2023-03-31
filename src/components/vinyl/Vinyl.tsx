import { SelectedPage } from '@/utils/types';

type Props = {
    artist: string;
    image: JSX.Element,
    title: string;
    description: string;
    price: string,
    setSelectedPage: (value: SelectedPage) => void;
}

const Vinyl = ({artist, title, image, description, price, setSelectedPage}: Props) => {
  return (
    <div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
        <div className='mb-4 felx justify-center'>
            <div className='rounded border-2 border-grey-100 bg-primary-100'>
                {image}
            </div>

        </div>
        
    </div>
  )
}

export default Vinyl
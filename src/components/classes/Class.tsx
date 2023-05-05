
type Props = {
    name: string;
    description: string;
    image: string;
}


const Class = ({ name, description, image }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <ul className='relative mx-5 inulne-block h-[380px] w-[480px]'>
        <div className={overlayStyles}>
            <li className="text-2xl">{name}</li>
            <li  className="mt-5">{description}</li>
            <img src={image} alt={`${image}`} />
        </div>
    </ul>
  )
}

export default Class
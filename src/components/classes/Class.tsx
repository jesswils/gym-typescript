type Props = {
    name: string;
    description: string;
    image: string;
}


const Class = ({ name, description, image }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] whitespace-normal bg-tiffany-blue
    text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li>
        <div className={overlayStyles}>
            <p className="text-2xl text-center ">{name}</p>
            <p className="mt-5">{description}</p>
        </div>
        <img src={image} alt={`${image}`} className=' w-80 rounded'/>
    </li>
  )
}

export default Class
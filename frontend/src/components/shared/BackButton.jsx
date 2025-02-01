import { IoArrowBackOutline } from "react-icons/io5";

const BackButton = () => {
  return (
    <button onClick={() => navigator(-1)} className="bg-[#025cca] p-3 text-xl rounded-full font-bold text-white ">
        <IoArrowBackOutline />
    </button>
  )
}

export default BackButton
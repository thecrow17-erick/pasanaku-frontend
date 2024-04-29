
interface props {
  name : string;
  value: string | number;
}

export const InfoGame = ({name,value}: props) => {
  return (
    <p
      className="text-custom-blue-900 text-lg my-5 font-medium"
    >
      {name}:  
      <span
        className="text-base font-semibold ml-2"
      >
        {value}
      </span>
    </p>
  )
}

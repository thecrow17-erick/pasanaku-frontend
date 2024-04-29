

interface props{
  name : string;
}
export const CardPlayer = ({name}:props) => {
  return (
    <div
      className="bg-custom-blue-700 p-2 my-2 rounded-md"
    >
      <p
        className="text-white font-medium text-sm"
      >
        {name}
      </p>
    </div>
  )
}

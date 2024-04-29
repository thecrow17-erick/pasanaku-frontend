'use client'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";

interface props{
  numberOfPlayers:    number; 
  maxOfPlayers:       number;
  startTime:          string;  
}

export const StartTime = ({maxOfPlayers,numberOfPlayers,startTime}:props) => {
  return (
    <div className="flex flex-row items-center">
      <div>
        <p className="text-sm font-medium text-custom-blue-700">
          Participantes: 
          <span className="text-custom-blue-900 font-semibold ml-1">
            {numberOfPlayers}/{maxOfPlayers}
          </span>
        </p>
      </div>
      <div className="ml-5 flex flex-row items-center">
        <p
          className="text-sm font-medium text-custom-blue-700"
        >
          Inicia el: 
        </p>
        <Popover 
          onOpenChange={e => console.log(e)}
        >
          <PopoverTrigger
            className="bg-custom-blue-900 text-white p-1 rounded-sm ml-2"
          >
            {startTime}
          </PopoverTrigger>
          <PopoverContent>
            Place content for the popover here.
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

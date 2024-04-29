'use client'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { UpdatedStartTime } from "./Form/UpdatedStartTime";
import { useState } from "react";

interface props{
  numberOfPlayers:    number; 
  maxOfPlayers:       number;
  startTime:          string;  
}

export const StartTime = ({maxOfPlayers,numberOfPlayers,startTime}:props) => {
  const [open, setOpen] = useState(false)

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
          onOpenChange={setOpen}
          open={open}
        >
          <PopoverTrigger
            className="bg-custom-blue-900 text-white p-1 rounded-sm ml-2"
          >
            {startTime}
          </PopoverTrigger>
          <PopoverContent
            className="w-[350px]"
          >
            <UpdatedStartTime
              setOpen={(b)=>setOpen(b)}
            />
            
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

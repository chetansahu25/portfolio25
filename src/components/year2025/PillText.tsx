import type React from "react"

interface PillTextProps {
  index: React.Key,
  item: string

}

const PillText = ({index, item}:PillTextProps) => {
  return (
    <p key={index} className="border-1 border-transparent font-poppins text-white/20 text-xs bg-white/5 py-1  my-1 px-5 rounded-full"> {item}</p>
  )
}

export default PillText
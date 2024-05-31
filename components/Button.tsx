import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit',
    tittle: string,
    icon?: string,
    variant: string,
    full?: boolean,
    className?: string
}

const Button = ({type, tittle, icon, variant, full, className}: ButtonProps) => {
  return (
    <button className={`flexCenter gap-1 rounded-full border ${variant} ${full && 'w-full'} ${className}`} type={type}>
      {icon && <Image src={icon} alt={tittle} width={24} height={24}></Image>}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{tittle}</label>
    </button>
  )
}

export default Button


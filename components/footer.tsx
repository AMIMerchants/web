import Image from "next/image"

const Footer = () => {
    return (
        <div className="w-full min-h-[300px] flex justify-between items-center p-5 bg-slate-800 ">
            <Image 
                src={'./logos/whiteDots.svg'}
                alt={"AMI"}
                height={100}
                width={200}
            />
        </div>
    )
}

export {Footer}
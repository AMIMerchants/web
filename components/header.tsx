import Image from "next/image"

const Header = () => {
    return (
        <div className="w-full flex justify-between items-center px-5 py-2 bg-white shadow-md" >
            <Image 
                src={'./logos/blueDots.svg'}
                alt={"AMI"}
                height={100}
                width={200}
            />
        </div>
    )
}

export {Header}
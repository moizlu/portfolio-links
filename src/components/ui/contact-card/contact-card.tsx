import Image from "next/image";

interface Props {
    iconPath   : string;
    serviceName: string;
    userName   : React.ReactNode;
    url?       : string;
    className? : string;
}

const ContactCard = ({ iconPath, serviceName, userName, url="#", className="" }: Props) => {
    return (
        <a href={url} title={serviceName} target="_blank" className={(url === "#") ? "pointer-events-none" : ""}>
            <div className={`${className}
                            h-17 w-65 m-2 px-3 py-2 rounded-2xl
                            transition duration-300
                            flex items-center justify-start
                            bg-gray-800 hover:bg-gray-600
                            shadow-md shadow-gray-600 hover:shadow-gray-950
                            `}>
                <Image src={iconPath} width={40} height={40} alt="サービスの画像"/>
                <div className="flex flex-col items-start m-2">
                    <p className="font-bold">{serviceName}</p>
                    <p className="text-lg">{userName}</p>
                </div>
            </div>
        </a>
    );
};

export default ContactCard;

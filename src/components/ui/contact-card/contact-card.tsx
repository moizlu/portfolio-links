"use client";

import Image from "next/image";
import CopyButton from "../copy-button";

interface Props {
    iconPath   : string;
    serviceName: string;
    userName   : React.ReactNode;
    url?: string;
    isMailAddress?: boolean;
    className? : string;
}

const ContactCard = ({ iconPath, serviceName, userName, url = "#", isMailAddress = false, className = "" }: Props) => {
    return (
        <div className="flex items-center justify-center">
            <a href={url} title={serviceName} target="_blank" className={`${(url === "#") ? "pointer-events-none" : ""}`}>
                <div className={`${className}
                                h-15 w-55 m-1.5 px-5 py-2 rounded-2xl
                                transition duration-300
                                flex items-center justify-start
                                bg-gray-800 hover:bg-gray-600
                                shadow-md shadow-gray-600 hover:shadow-gray-950
                                `}>
                    <Image src={iconPath} width={25} height={25} alt="サービスの画像"/>
                    <div className="flex flex-col items-start m-5">
                        <p className="text-2xl font-bold">{serviceName}</p>
                        <p className="text-[11px]">{(isMailAddress) ? "右のボタンを押してください" : userName}</p>
                    </div>
                </div>
            </a>
            <CopyButton userName={userName} url={url} isMailAddress={isMailAddress}/>
        </div>
    );
};

export default ContactCard;

"use client";

import Image from "next/image";

interface Props {
    userName: React.ReactNode;
    url: string;
    isMailAddress: boolean;
}

const CopyButton = ({ userName, url, isMailAddress }: Props) => {
    const handleCopy = () => {
        try {
            let copyText = (url === "#") ? userName?.toString() ?? "" : url;

            if (isMailAddress) {
                copyText = copyText.replace(",[object Object],", "@");
                copyText = copyText.replace(",[object Object],", ".");
            }

            navigator.clipboard.writeText(copyText);
        } catch {
            alert("コピーに失敗しました。やり直してみてください。");
        }

    }

    return (
        <div className="h-10 w-10 rounded-full
                        transition-all duration-300
                        flex items-center justify-center
                        bg-gray-800
                        drop-shadow-lg active:drop-shadow-none
                        active:bg-gray-500"
            >
            <button type="button" title="コピー" className="">
                <Image src="/icons/copy.svg" width={20} height={20} alt="コピー" onClick={handleCopy} className="m-2"/>
            </button>
        </div>
    );
}

export default CopyButton;

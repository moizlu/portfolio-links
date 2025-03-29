import ContactCard from "@/components/ui/contact-card";
import CopyButton from "@/components/ui/copy-button";
import Image from "next/image";

const generateMailAddress = (userName: string, sld: string, tld: string) => {
        return (
            <>{userName}<span className="after:content-['@']" />{sld}<span className="after:content-['.']" />{tld}</>
        );
}

const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex justify-center items-center">
                <Image src="/logo/moizlu.svg" width={100} height={100} alt="ロゴ" className="drop-shadow-lg ml-12" />
                <CopyButton userName="moizlu" url="https://moiz.lu" isMailAddress={false} className="m-2"/>
            </div>
            <p className="text-3xl m-3 drop-shadow-md">もいずる(moizlu)</p>

            <ContactCard iconPath="/logo/moizlu-white.svg" serviceName="Portfolio" userName="制作中" url="https://moizlu.com" />
            <ContactCard iconPath="/logo/mail.svg" serviceName="Mail" userName={generateMailAddress("contact", "moizlu", "com")} isMailAddress={true} />
            <ContactCard iconPath="/logo/discord.svg" serviceName="Discord" userName="moizlu"/>
            <ContactCard iconPath="/logo/github.svg" serviceName="GitHub" userName="moizlu" url="https://github.com/moizlu" />
            <ContactCard iconPath="/logo/pixiv.svg" serviceName="pixiv" userName="moizlu" url="https://pixiv.me/moizlu" />
            <ContactCard iconPath="/logo/x.svg" serviceName="X(Twitter)" userName="@moizlu" url="https://x.com/moizlu" />
            <ContactCard iconPath="/logo/youtube.svg" serviceName="YouTube" userName="@moizlu" url="https://www.youtube.com/@moizlu" />
            <ContactCard iconPath="/logo/instagram.svg" serviceName="Instagram" userName="moizlu" url="https://www.instagram.com/moizlu" />
            <ContactCard iconPath="/logo/steam.svg" serviceName="Steam" userName="moizlu" url="https://steamcommunity.com/id/moizlu"/>
        </div>
    );
}

export default Page;

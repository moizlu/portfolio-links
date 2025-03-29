import ContactCard from "@/components/ui/contact-card";
import Image from "next/image";

const generateMailAddress = (userName: string, sld: string, tld: string) => {
        return (
            <>{userName}<span className="after:content-['@']" />{sld}<span className="after:content-['.']" />{tld}</>
        );
}

const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Image src="/logo/moizlu.svg" width={100} height={100} alt="サービスの画像" className="drop-shadow-lg"/>
            <p className="text-3xl m-3 drop-shadow-md">もいずる(moizlu)</p>

            <ContactCard iconPath="/logo/moizlu-white.svg" serviceName="Portfolio" userName="制作中" url="https://moizlu.com" />
            <ContactCard iconPath="/logo/youtube.svg" serviceName="YouTube" userName="@moizlu" url="https://www.youtube.com/@moizlu" />
            <ContactCard iconPath="/logo/x.svg" serviceName="X(Twitter)" userName="@moizlu" url="https://x.com/moizlu"/>
            <ContactCard iconPath="/logo/instagram.svg" serviceName="Instagram" userName="@moizlu" url="https://www.instagram.com/moizlu"/>
            <ContactCard iconPath="/logo/github.svg" serviceName="GitHub" userName="@moizlu" url="https://github.com/moizlu"/>
            <ContactCard iconPath="/logo/discord.svg" serviceName="Discord" userName="@moizlu"/>
            <ContactCard iconPath="/logo/steam.svg" serviceName="Steam" userName="moizlu" url="https://steamcommunity.com/id/moizlu"/>
            <ContactCard iconPath="/logo/mail.svg" serviceName="Mail" userName={generateMailAddress("contact", "moizlu", "com")} />
        </div>
    );
}

export default Page;

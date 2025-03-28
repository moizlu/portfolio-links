import type { Metadata } from "next";
import { M_PLUS_1_Code } from "next/font/google";
import "../globals.css";

const mPlus = M_PLUS_1_Code({
    variable: "--font-m-plus-1-code",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "もいずる | リンク集",
    description: "リンク集",

    openGraph: {
        title: "もいずる | リンク集",
        description: "リンク集",
        url: "https://moiz.lu",
        siteName: "もいずる",

        images: [{
            url: "https://moiz.lu/logo/moizlu.svg",
            width: 1000,
            height: 1000,
            alt: "もいずる"
        }],
        type: "website"
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
return (
    <html lang="ja">
        <body className={`${mPlus.variable} antialiased text-gray-300 text-xl`}>
            {children}
        </body>
    </html>
);
}

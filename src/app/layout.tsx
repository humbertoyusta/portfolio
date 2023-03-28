import "./globals.css";

export const metadata = {
    title: "Humberto Yusta's Portfolio",
    description: "Humberto Yusta's Portfolio Website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

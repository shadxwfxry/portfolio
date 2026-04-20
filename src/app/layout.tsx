import type { Metadata } from "next";
import "./globals.css";

// Вот здесь живут все метаданные твоего сайта
export const metadata: Metadata = {
  title: "Artem Zhosan | Systems Engineer", // Текст на вкладке браузера
  description: "Portfolio of Artem Zhosan. Full-Stack Web Developer & Systems Engineer.", // Описание для Google
  icons: {
    // В Next.js можно использовать эмодзи как фавиконку! Это выглядит стильно.
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>",
  },
  openGraph: {
    title: "Artem Zhosan | Portfolio",
    description: "Full-Stack Web Developer & Systems Engineer",
    url: "https://твой-будущий-домен.vercel.app", // Заглушка под ссылку
    siteName: "Artem Zhosan",
    images: [
      {
        // Заглушка под картинку. Когда задеплоим, сделаешь скриншот сайта и вставишь сюда ссылку на него
        url: "https://твой-будущий-домен.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Сюда тоже добавим фон, чтобы при перезагрузке не моргало белым */}
      <body className="bg-[#0c1118] text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
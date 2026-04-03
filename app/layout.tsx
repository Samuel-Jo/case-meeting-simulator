import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '교육청 학생맞춤통합회의 시뮬레이터',
  description: '교육청 학생맞춤통합지원 사례 회의 AI 시뮬레이터',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

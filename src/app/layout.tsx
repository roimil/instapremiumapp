import '../styles/globals.css';
import SecurityProtection from './components/SecurityProtection';
import CodeProtection from './components/CodeProtection';

export const metadata = {
  title: 'InstaPremium',
  description: 'Avalie influenciadores e ganhe recompensas!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body>
        <SecurityProtection />
        <CodeProtection />
        {children}
      </body>
    </html>
  );
}

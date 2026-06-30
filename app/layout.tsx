import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>Leigh's Awesome Pedal Gallery</title>
      </head>
      <body
        className="antialiased font-sans p-6"
      >
        <h1 className="flex text-3xl">Leigh's Awesome Pedal Gallery</h1>
        {children}
      </body>
    </html>
  );
}

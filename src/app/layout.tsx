import type { Metadata } from "next";
import { RealtimeSync } from "@/components/realtime-sync";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rinconcito del Sabor",
  description: "Sistema integral de gestión del restaurante"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><RealtimeSync />{children}</body></html>;
}

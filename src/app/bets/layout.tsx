import ProtectedProvider from "@/components/ProtectedProvider";
import { BetsFooter } from "./BetsFooter";
import { BetsHeader } from "./BetsHeader";

export default function BetsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedProvider>
      <BetsHeader />
      {children}
      <BetsFooter />
    </ProtectedProvider>
  );
}

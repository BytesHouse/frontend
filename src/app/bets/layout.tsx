
import { BetsFooter } from "./BetsFooter";
import { BetsHeader } from "./BetsHeader";

export default function BetsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <div>
      <BetsHeader/>
    {children}
        <BetsFooter/>
  </div>
    
  );
}

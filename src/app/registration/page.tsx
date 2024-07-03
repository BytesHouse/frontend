import { Footer, Header } from "@/components";
import Link from "next/link";
const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
<Header/>
      <form className="flex flex-col gap-3 w-[85%] lg:w-[30%]">
        <label htmlFor="">New Login</label>
        <input
          autoComplete="off"
          className="rounded-md px-5 py-3 bg-transparent focus:bg-transparent focus:outline-none border border-[#526685] focus:border-white"
          placeholder="Type your Email or phone"
          type="text"
        />
        <label htmlFor="">New Password</label>
        <input
          className="rounded-md px-5 py-3 bg-transparent focus:bg-transparent focus:outline-none border border-[#526685] focus:border-white"
          placeholder="Type password "
          type="password"
      
        />
        <label htmlFor="">Re-new Password</label>
         <input
          className="rounded-md px-5 py-3 bg-transparent focus:bg-transparent focus:outline-none border border-[#526685] focus:border-white"
          placeholder="Retype password "
          type="password"
      
        />
        <Link href="/">Have an account ??</Link>
        <div className="flex flex-col gap-3">
          <input
            className="border py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-400 border-transparent"
            type="submit"
            value="Registration"
          />
        </div>
      </form>
   <Footer/>
    </main>
  );
};
export default Page;

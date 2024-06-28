import Image from "next/image";
import logo from "@/assets/images/Logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <Image src={logo} alt="logo" />
      <form className="flex flex-col gap-3 w-[85%] lg:w-[30%]">
        <label htmlFor="">Login</label>
        <input
          autoComplete="off"
          className="rounded-md px-5 py-3 bg-transparent focus:bg-transparent focus:outline-none border border-[#526685] focus:border-white"
          placeholder="Enter Email or phone"
          type="text"
        />
        <label htmlFor="">Password</label>
        <input
          className="rounded-md px-5 py-3 bg-transparent focus:bg-transparent focus:outline-none border border-[#526685] focus:border-white"
          placeholder="Enter password "
          type="password"
        />
        <Link href="/">Forgot password?</Link>
        <div className="flex flex-col gap-3">
          <input
            className="border py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-400 border-transparent"
            type="submit"
            value="Enter"
          />
          <Link
            className="text-center border py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 border-transparent"
            href="/registration"
          >
            Registration
          </Link>
        </div>
      </form>
      <p className="h-6"></p>
      <p className="fixed bottom-3">© Created by S Terra Soft</p>
    </main>
  );
}

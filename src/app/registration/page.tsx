"use client";
import { Footer, Header } from "@/components";
import Link from "next/link";
import { useState } from "react";

import axios from "axios";

// interface RegisterData {
//     username: string;
//     password: string;
// }

const Page = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    // const registerUser = async (userData: RegisterData) => {
    //     try {
    //         const response = await axios.post(
    //             `${baseUrl}/auth/signup`,
    //             userData
    //         );
    //         return response.data;
    //     } catch (error: any) {
    //         // throw new Error(error.response.data.message);
    //     }
    // };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${baseUrl}/auth/signup`,
                formData
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // const registerUser = async (userData: {
    //     username: string;
    //     password: string;
    // }) => {
    //     try {
    //         const response = await fetch(`${baseUrl}/auth/signup`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(userData),
    //         });

    //         if (!response.ok) {
    //             throw new Error("Failed to register user");
    //         }

    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         console.error(error);
    //         return null;
    //     }
    // };

    // const handleRegister = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     const userData = { username, password };
    //     const response = await registerUser(userData);
    //     console.log(userData);
    // };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();

    //     try {
    //         await registerUser({ username, password });
    //         console.log({ username, password });
    //     } catch (error: any) {
    //         // console.error("Error registering user:", error.message);
    //     }
    // };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-12">
            <Header />
            <form
                className="flex flex-col gap-3 w-[85%] lg:w-[30%]"
                onSubmit={handleSubmit}
            >
                <label htmlFor="">New Login</label>
                <input
                    id="username"
                    name="username"
                    autoComplete="off"
                    className="rounded-md px-5 py-3 bg-transparent focus:bg-transparent focus:outline-none border border-[#526685] focus:border-white"
                    placeholder="Type your Email or phone"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                />
                <label htmlFor="">New Password</label>
                <input
                    id="password"
                    name="password"
                    className="rounded-md px-5 py-3 bg-transparent focus:bg-transparent focus:outline-none border border-[#526685] focus:border-white"
                    placeholder="Type password "
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <label htmlFor="">Re-new Password</label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    className="rounded-md px-5 py-3 bg-transparent focus:bg-transparent focus:outline-none border border-[#526685] focus:border-white"
                    placeholder="Retype password "
                    type="password"
                />
                <Link href="/">Have an account ??</Link>
                <div className="flex flex-col gap-3">
                    <input
                        className="border py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-400 border-transparent cursor-pointer"
                        type="submit"
                        value="Registration"
                    />
                    {/* <button
                        className="border py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-400 border-transparent"
                        onClick={handleRegister}
                    >
                        Registration
                    </button> */}
                </div>
            </form>
            <Footer />
        </main>
    );
};
export default Page;

"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Suspense } from 'react';

function RegisterForm() {
    const searchParams = useSearchParams();
    const defaultRole = searchParams.get("role") || "User";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(defaultRole);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, role }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "নিবন্ধন ব্যর্থ হয়েছে");
            }

            router.push("/login");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-200">
                <form className="space-y-6" onSubmit={handleRegister}>
                    {error && (
                        <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm font-medium border border-red-100">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-slate-700">পুরো নাম</label>
                        <div className="mt-1">
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700">ইমেল ঠিকানা</label>
                        <div className="mt-1">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700">পাসওয়ার্ড</label>
                        <div className="mt-1">
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700">ভূমিকা নির্বাচন করুন</label>
                        <div className="mt-1">
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="block w-full px-3 py-2 border border-slate-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm text-slate-900"
                            >
                                <option value="User">নাগরিক</option>
                                <option value="Kazi">কাজী</option>
                                <option value="Jela">জেলা রেজিস্ট্রি অফিস</option>
                                <option value="Admin">অ্যাডমিন</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 transition"
                        >
                            {loading ? "নিবন্ধন করা হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center text-emerald-600">
                    <ShieldCheck className="w-12 h-12" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
                    একটি অ্যাকাউন্ট তৈরি করুন
                </h2>
                <p className="mt-2 text-center text-sm text-slate-600">
                    অথবা{" "}
                    <Link href="/login" className="font-medium text-emerald-600 hover:text-emerald-500">
                        আপনার বিদ্যমান অ্যাকাউন্টে লগইন করুন
                    </Link>
                </p>
            </div>

            <Suspense fallback={<div className="text-center py-10">ফর্ম লোড হচ্ছে...</div>}>
                <RegisterForm />
            </Suspense>
        </div>
    );
}

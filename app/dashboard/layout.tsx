import Sidebar from '@/components/Sidebar';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
        redirect('/login');
    }

    const payload = verifyToken(token);
    if (!payload) {
        redirect('/login');
    }

    return (
        <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
            <Sidebar role={payload.role} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 shadow-sm z-10 justify-between">
                    <h1 className="font-semibold text-slate-800 text-lg">
                        {payload.role} ড্যাশবোর্ড
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                            {payload.role.charAt(0)}
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50/50 p-8">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

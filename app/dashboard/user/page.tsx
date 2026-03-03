import { FileText, PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function UserDashboard() {
    return (
        <div>
            <div className="mb-8 flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Citizen Dashboard</h2>
                    <p className="text-slate-500">Track and manage your marriage registration.</p>
                </div>
                <Link href="/dashboard/user/apply" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium transition flex items-center gap-2 shadow-sm">
                    <PlusCircle className="w-5 h-5" />
                    New Application
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">No Active Applications</h3>
                <p className="text-slate-500 max-w-sm mx-auto mb-6">You have not submitted any marriage applications yet. Click below to start the process.</p>
                <Link href="/dashboard/user/apply" className="text-emerald-600 font-semibold hover:underline">Start Application &rarr;</Link>
            </div>
        </div>
    );
}

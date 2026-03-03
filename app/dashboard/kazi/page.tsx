import { FileCheck, Activity } from 'lucide-react';

export default function KaziDashboard() {
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Kazi Dashboard</h2>
                <p className="text-slate-500">Manage incoming marriage applications.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-slate-500">Pending Applications</div>
                        <div className="text-2xl font-bold text-slate-800">5</div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                        <FileCheck className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-slate-500">Completed Registrations</div>
                        <div className="text-2xl font-bold text-slate-800">128</div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Applications</h3>

                <div className="space-y-4">
                    {/* Application Card */}
                    <div className="border border-slate-200 rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <div className="font-bold text-slate-800">Hasan Ali & Fatima Begum</div>
                            <div className="text-sm text-slate-500 mb-1">Date Submitted: Oct 24, 2026</div>
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold uppercase">Pending Review</span>
                        </div>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition">
                            Process
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

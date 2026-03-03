import { Users, FileText } from 'lucide-react';

export default function JelaDashboard() {
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Jela Registry Office</h2>
                <p className="text-slate-500">District Kazi Manager.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-slate-500">Pending Kazis (District)</div>
                        <div className="text-2xl font-bold text-slate-800">12</div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-slate-500">Approved Kazis</div>
                        <div className="text-2xl font-bold text-slate-800">145</div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Pending Licensing Applications</h3>
                <p className="text-slate-500 text-sm mb-4">Kazis in your district awaiting document verification.</p>

                <div className="border border-slate-200 rounded-lg p-4 flex justify-between items-center hover:border-emerald-500 transition cursor-pointer">
                    <div>
                        <div className="font-bold text-slate-800">Kazi Sirajul Islam</div>
                        <div className="text-sm text-slate-500 mb-2">Location: Dhaka North</div>
                        <div className="text-xs font-semibold text-emerald-600">3 Documents Uploaded</div>
                    </div>
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition">
                        Review Documents
                    </button>
                </div>
            </div>
        </div>
    );
}

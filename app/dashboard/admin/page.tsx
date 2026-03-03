import { Building2, Users, FileCheck } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Admin Overview</h2>
                <p className="text-slate-500">System analytics and management.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-slate-500">Jela Offices</div>
                        <div className="text-2xl font-bold text-slate-800">64</div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-slate-500">Registered Kazis</div>
                        <div className="text-2xl font-bold text-slate-800">1,248</div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                        <FileCheck className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-slate-500">Total Applications</div>
                        <div className="text-2xl font-bold text-slate-800">45.2K</div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-800">Recent Accounts</h3>
                    <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                                <th className="p-4 font-semibold">Name</th>
                                <th className="p-4 font-semibold">Role</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100 hover:bg-slate-50">
                                <td className="p-4 text-slate-800 font-medium">Abdur Rahman</td>
                                <td className="p-4 text-slate-500">Kazi</td>
                                <td className="p-4">
                                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold uppercase">Pending</span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="text-emerald-600 hover:underline text-sm font-medium">Review</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                                <td className="p-4 text-slate-800 font-medium">Aminul Islam</td>
                                <td className="p-4 text-slate-500">Jela Office</td>
                                <td className="p-4">
                                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold uppercase">Approved</span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="text-emerald-600 hover:underline text-sm font-medium">Manage</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

import Link from 'next/link';
import { Home, Users, FileText, Settings, LogOut } from 'lucide-react';

export default function Sidebar({ role }: { role: string }) {
    const getLinks = () => {
        switch (role) {
            case 'Admin':
                return [
                    { name: 'Dashboard', href: '/dashboard/admin', icon: Home },
                    { name: 'Jela Offices', href: '/dashboard/admin/jela', icon: Users },
                    { name: 'Kazis', href: '/dashboard/admin/kazis', icon: Users },
                    { name: 'Settings', href: '/dashboard/admin/settings', icon: Settings },
                ];
            case 'Jela':
                return [
                    { name: 'Dashboard', href: '/dashboard/jela', icon: Home },
                    { name: 'Pending Kazis', href: '/dashboard/jela/kazis', icon: Users },
                ];
            case 'Kazi':
                return [
                    { name: 'Dashboard', href: '/dashboard/kazi', icon: Home },
                    { name: 'Applications', href: '/dashboard/kazi/applications', icon: FileText },
                ];
            case 'User':
            default:
                return [
                    { name: 'Dashboard', href: '/dashboard/user', icon: Home },
                    { name: 'Apply Now', href: '/dashboard/user/apply', icon: FileText },
                ];
        }
    };

    const links = getLinks();

    return (
        <div className="w-64 bg-slate-900 text-slate-300 flex flex-col h-full border-r border-slate-800">
            <div className="h-16 flex items-center px-6 bg-slate-950 text-white font-bold text-lg shadow-sm">
                <span className="text-emerald-500 mr-2">MH</span> BD Portal
            </div>
            <div className="flex-1 py-6 px-4 space-y-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">Menu</div>
                {links.map((link) => {
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition group"
                        >
                            <Icon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400" />
                            {link.name}
                        </Link>
                    );
                })}
            </div>
            <div className="p-4 bg-slate-950 border-t border-slate-800">
                <button className="flex items-center gap-3 px-3 py-2 w-full rounded-md hover:bg-red-900/30 text-slate-400 hover:text-red-400 transition">
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </div>
    );
}

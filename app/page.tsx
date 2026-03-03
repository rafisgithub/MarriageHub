import Link from 'next/link';
import { ShieldCheck, FileCheck, Eye, Zap, Building2, Users, FileText } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-emerald-600" />
            <span className="font-bold text-xl text-slate-800 tracking-tight">MarriageHub <span className="text-emerald-600">BD</span></span>
          </div>
          <nav className="hidden md:flex gap-6 font-medium text-slate-600">
            <Link href="#features" className="hover:text-emerald-600 transition">Features</Link>
            <Link href="#how-it-works" className="hover:text-emerald-600 transition">How it Works</Link>
            <Link href="#statistics" className="hover:text-emerald-600 transition">Statistics</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-slate-600 hover:text-slate-900 font-medium">Login</Link>
            <Link href="/register" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md font-medium transition shadow-sm">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold tracking-wide uppercase">
          Government of Bangladesh Initiative
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Digital Marriage <br className="hidden md:block" /> Registration System
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          A secure, verified, and transparent platform for marriage registration. Streamlining the process for citizens, Kazis, and Registry Offices across the nation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register?role=User" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition shadow-md flex items-center justify-center gap-2">
            Apply Now
            <FileText className="w-5 h-5" />
          </Link>
          <Link href="/register?role=Kazi" className="bg-white border-2 border-slate-200 hover:border-emerald-600 hover:text-emerald-600 text-slate-700 px-8 py-3 rounded-lg text-lg font-semibold transition flex items-center justify-center gap-2">
            Kazi Registration
            <Users className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose the Digital System?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Modernizing marriage records for a safer and more reliable future.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard icon={<ShieldCheck className="w-8 h-8 text-emerald-600" />} title="Secure" description="End-to-end encryption and robust role-based access control protecting citizen data." />
            <FeatureCard icon={<FileCheck className="w-8 h-8 text-emerald-600" />} title="Verified" description="Multi-tier verification process involving Kazis and Jela Registry Offices." />
            <FeatureCard icon={<Eye className="w-8 h-8 text-emerald-600" />} title="Transparent" description="Track application status in real-time. No hidden processes or delays." />
            <FeatureCard icon={<Zap className="w-8 h-8 text-emerald-600" />} title="Fast" description="Digital document uploads and automated routing drastically reduce processing time." />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A simple 4-step process to complete your registration.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <StepCard number="1" title="Register Account" description="Create an account as a citizen and log into your dashboard." />
            <StepCard number="2" title="Submit Details" description="Fill out the marriage application form and upload required ID documents." />
            <StepCard number="3" title="Kazi Verification" description="Your selected Kazi reviews and verifies the marriage details." />
            <StepCard number="4" title="Final Approval" description="Jela Registry Office provides the final seal of approval." />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard icon={<Building2 className="w-10 h-10 mx-auto mb-4 text-emerald-400" />} number="64" label="Total Districts Covered" />
            <StatCard icon={<Users className="w-10 h-10 mx-auto mb-4 text-emerald-400" />} number="4,500+" label="Registered Kazis" />
            <StatCard icon={<FileCheck className="w-10 h-10 mx-auto mb-4 text-emerald-400" />} number="120K+" label="Completed Registrations" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-2 mb-6 text-white">
            <ShieldCheck className="w-6 h-6 text-emerald-500" />
            <span className="font-bold text-xl tracking-tight">MarriageHub <span className="text-emerald-500">BD</span></span>
          </div>
          <p className="mb-4">Digitalizing the marriage registration process across Bangladesh.</p>
          <div className="flex justify-center gap-6 mb-8 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact Support</a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Government of Bangladesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition duration-300">
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="relative p-6 bg-white rounded-xl shadow-sm border border-slate-100 text-center">
      <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-sm">
        {number}
      </div>
      <h3 className="text-lg font-bold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) {
  return (
    <div className="p-6">
      {icon}
      <div className="text-5xl font-extrabold mb-2">{number}</div>
      <div className="text-emerald-200 font-medium tracking-wide uppercase">{label}</div>
    </div>
  );
}

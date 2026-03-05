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
            <span className="font-bold text-xl text-slate-800 tracking-tight">ম্যারিজহাব <span className="text-emerald-600">বিডি</span></span>
          </div>
          <nav className="hidden md:flex gap-6 font-medium text-slate-600">
            <Link href="#features" className="hover:text-emerald-600 transition">বৈশিষ্ট্য</Link>
            <Link href="#how-it-works" className="hover:text-emerald-600 transition">কিভাবে কাজ করে</Link>
            <Link href="#statistics" className="hover:text-emerald-600 transition">পরিসংখ্যান</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-slate-600 hover:text-slate-900 font-medium">লগইন</Link>
            <Link href="/register" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md font-medium transition shadow-sm">শুরু করুন</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold tracking-wide uppercase">
          বাংলাদেশ সরকারের একটি উদ্যোগ
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          ডিজিটাল বিবাহ <br className="hidden md:block" /> নিবন্ধন সিস্টেম
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          বিবাহ নিবন্ধনের জন্য একটি নিরাপদ, যাচাইকৃত এবং স্বচ্ছ প্ল্যাটফর্ম। নাগরিক, কাজী এবং রেজিস্ট্রি অফিসগুলির জন্য প্রক্রিয়াটি সহজতর করা হচ্ছে।
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register?role=User" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition shadow-md flex items-center justify-center gap-2">
            আবেদন করুন
            <FileText className="w-5 h-5" />
          </Link>
          <Link href="/register?role=Kazi" className="bg-white border-2 border-slate-200 hover:border-emerald-600 hover:text-emerald-600 text-slate-700 px-8 py-3 rounded-lg text-lg font-semibold transition flex items-center justify-center gap-2">
            কাজী নিবন্ধন
            <Users className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ডিজিটাল সিস্টেম কেন বেছে নেবেন?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">একটি নিরাপদ এবং নির্ভরযোগ্য ভবিষ্যতের জন্য বিবাহ রেকর্ড আধুনিকীকরণ করা হচ্ছে।</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard icon={<ShieldCheck className="w-8 h-8 text-emerald-600" />} title="নিরাপদ" description="এন্ড-টু-এন্ড এনক্রিপশন এবং শক্তিশালী ভূমিকা-ভিত্তিক অ্যাক্সেস নিয়ন্ত্রণ নাগরিকের ডেটা সুরক্ষা করে।" />
            <FeatureCard icon={<FileCheck className="w-8 h-8 text-emerald-600" />} title="যাচাইকৃত" description="কাজী এবং জেলা রেজিস্ট্রি অফিসগুলির মাধ্যমে বহুমুখী যাচাইকরণ প্রক্রিয়া।" />
            <FeatureCard icon={<Eye className="w-8 h-8 text-emerald-600" />} title="স্বচ্ছ" description="রিয়েল-টাইমে আবেদনের স্থিতি ট্র্যাক করুন। কোনো লুকানো প্রক্রিয়া বা বিলম্ব নেই।" />
            <FeatureCard icon={<Zap className="w-8 h-8 text-emerald-600" />} title="দ্রুত" description="ডিজিটাল ডকুমেন্ট আপলোড এবং স্বয়ংক্রিয় রাউটিং প্রক্রিয়াকরণের সময় উল্লেখযোগ্যভাবে হ্রাস করে।" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">কিভাবে কাজ করে</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">আপনার নিবন্ধন সম্পূর্ণ করার জন্য একটি সহজ ৪-ধাপ প্রক্রিয়া।</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <StepCard number="1" title="অ্যাকাউন্ট নিবন্ধন" description="নাগরিক হিসেবে একটি অ্যাকাউন্ট তৈরি করুন এবং আপনার ড্যাশবোর্ডে লগইন করুন।" />
            <StepCard number="2" title="তথ্য জমা দিন" description="বিবাহের আবেদনপত্র পূরণ করুন এবং প্রয়োজনীয় ডকুমেন্ট আপলোড করুন।" />
            <StepCard number="3" title="কাজী যাচাইকরণ" description="আপনার নির্বাচিত কাজী বিবাহের বিবরণ পর্যালোচনা এবং যাচাই করেন।" />
            <StepCard number="4" title="চূড়ান্ত অনুমোদন" description="জেলা রেজিস্ট্রি অফিস চূড়ান্ত অনুমোদন প্রদান করে।" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard icon={<Building2 className="w-10 h-10 mx-auto mb-4 text-emerald-400" />} number="৬৪" label="অন্তর্ভুক্ত জেলাসমূহ" />
            <StatCard icon={<Users className="w-10 h-10 mx-auto mb-4 text-emerald-400" />} number="৪,৫০০+" label="নিবন্ধিত কাজী" />
            <StatCard icon={<FileCheck className="w-10 h-10 mx-auto mb-4 text-emerald-400" />} number="১ লাখ+" label="সম্পন্ন নিবন্ধন" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-2 mb-6 text-white">
            <ShieldCheck className="w-6 h-6 text-emerald-500" />
            <span className="font-bold text-xl tracking-tight">ম্যারিজহাব <span className="text-emerald-500">বিডি</span></span>
          </div>
          <p className="mb-4">পুরো বাংলাদেশ জুড়ে বিবাহ নিবন্ধন প্রক্রিয়া ডিজিটালাইজ করা হচ্ছে।</p>
          <div className="flex justify-center gap-6 mb-8 text-sm">
            <a href="#" className="hover:text-white transition">গোপনীয়তা নীতি</a>
            <a href="#" className="hover:text-white transition">পরিষেবার শর্তাবলী</a>
            <a href="#" className="hover:text-white transition">সহায়তা কেন্দ্রে যোগাযোগ</a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} বাংলাদেশ সরকার। সর্বস্বত্ব সংরক্ষিত।</p>
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

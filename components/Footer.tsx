import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#111] text-white pt-20 pb-10 overflow-hidden relative">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20 text-sm">
                    {/* Products Column */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 font-bold text-2xl mb-6">
                            <Image
                                src="/logo.png"
                                alt="AIdeo Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8 rounded-lg"
                            />
                            AIdeo
                        </div>
                        <p className="text-gray-400 mb-6 max-w-xs">
                            The simple way to create stunning AI videos, add subtitles and grow your audience.
                        </p>
                        <div className="flex gap-4 text-xs text-gray-500">
                            <span>&copy; {new Date().getFullYear()} AIdeo</span>
                            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Video Editor</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Screen Recorder</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Subtitles & Transcription</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Voice Overs</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Video Compressor</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Use Cases</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Social Media</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Education</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Marketing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Training</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Webinars</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Brand Assets</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Big Typography */}
                <div className="w-full flex justify-center mt-10 pointer-events-none select-none">
                    <h1 className="text-[12vw] sm:text-[15vw] font-black leading-none text-white tracking-tighter opacity-100">
                        AIDEO
                    </h1>
                </div>
            </div>
        </footer>
    );
}

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
                            <span className="hover:text-white transition-colors cursor-default">Privacy</span>
                            <span className="hover:text-white transition-colors cursor-default">Terms</span>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><span className="hover:text-white transition-colors cursor-default">Video Editor</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Screen Recorder</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Subtitles & Transcription</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Voice Overs</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Video Compressor</span></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Use Cases</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><span className="hover:text-white transition-colors cursor-default">Social Media</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Education</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Marketing</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Training</span></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><span className="hover:text-white transition-colors cursor-default">Blog</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Help Center</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Webinars</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Community</span></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><span className="hover:text-white transition-colors cursor-default">About</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Careers</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Brand Assets</span></li>
                            <li><span className="hover:text-white transition-colors cursor-default">Contact</span></li>
                        </ul>
                    </div>
                </div>

                {/* Big Typography */}
                <div className="w-full flex justify-center mt-10 pointer-events-none select-none">
                    <div className="text-[12vw] sm:text-[15vw] font-black leading-none text-white tracking-tighter opacity-100" aria-hidden="true">
                        AIDEO
                    </div>
                </div>
            </div>
        </footer>
    );
}

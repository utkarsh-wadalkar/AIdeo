import Link from "next/link";


export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold">AIdeo</h3>
                        <p className="text-sm text-muted-foreground">
                            Supercharge your social media growth with AI-generated shorts and auto-scheduling.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Product</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="#features" className="hover:text-[#0160C9] transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="hover:text-[#0160C9] transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#0160C9] transition-colors">
                                    Showcase
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-[#0160C9] transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#0160C9] transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} AIdeo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

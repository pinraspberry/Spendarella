// import React from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, PencilLine } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import appearance from "@clerk/nextjs/dist/esm/appearance";

const Header = () => {
    return (
        <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b shadow-md">
            <nav className="container mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo on the left */}
                <Link href='/' className="flex items-center">
                    <Image src="/logo.png"
                        alt="spendarella logo"
                        width={48}
                        height={48}
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Nav items on the right */}
                <div className="flex items-center gap-4">
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button variant="outline" className="flex items-center gap-2">
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>
                        </Link>
                        <Link href="/transaction/create">
                            <Button variant="default" className="flex items-center gap-2">
                                <PencilLine size={18} />
                                <span className="hidden md:inline">Add Transaction</span>
                            </Button>
                        </Link>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "h-16 w-16",
                                    avatarImage: "h-16 w-16", // Add this line!
                                },
                            }} 
                        />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton forcedRedirectUrl="/dashboard">
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                        <SignUpButton forcedRedirectUrl="/">
                            <Button variant="outline">Signup</Button>
                        </SignUpButton>
                    </SignedOut>
                </div>
            </nav>
        </div>
    );
}

export default Header;
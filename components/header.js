// import React from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Header = () => {
    return (

        <div className="fixed top-0 w-full bg- backdrop-blur-md z-50 border-b shadow-md flex items-center justify-between px-4 py-2">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* <link href='/'>
                <Image src="/logo.png"
                alt="spendarella logo" 
                width={100} 
                height={100}
                className="h-12 w-auto object-contain"
                />
                </link> */}

                <div>
                    <SignedIn>
                        <link href="/dashboard">
                        <Button variant="outline">
                            <LayoutDashboard size={`10`}/>
                            <span className="hidden md:inline">Dashboard</span>"
                        </Button>
                        </link>
                    </SignedIn>
                <SignedOut>
                    <SignInButton forcedRedirectUrl="/dashboard">
                        <Button variant="outline">Login</Button>
                    </SignInButton>
                    <SignUpButton forcedRedirectUrl="/">
                        <Button variant="outline">Signup</Button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                </div>
            </nav>
        </div>

    );
}

export default Header;
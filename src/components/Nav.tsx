import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

function Nav() {
  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl" prefetch={false}>
          Dev Jobs
        </Link>
        <div>
          <SignedOut>
            <ul className="flex items-center gap-4 ">
              <li className={cn(buttonVariants({ variant: "outline" }))}>
                <SignInButton />
              </li>
              <li className={cn(buttonVariants())}>
                <SignUpButton />
              </li>
            </ul>
          </SignedOut>
          <SignedIn>
            <div className="ml-auto">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

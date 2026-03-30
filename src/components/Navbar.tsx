import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu, Zap } from "lucide-react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#philosophy",
    label: "Philosophy",
  },
  {
    href: "#verticals",
    label: "Verticals",
  },
  {
    href: "#advantage",
    label: "Advantage",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              href="/"
              className="font-bold text-xl flex items-center gap-2 tracking-tighter"
            >
              <div className="w-8 h-8 bg-brand-blue rounded-sm flex items-center justify-center">
                 <Zap size={20} className="text-brand-dark fill-brand-dark" />
              </div>
              <span className="hidden sm:inline">Alturis <span className="text-brand-blue">Innovations</span></span>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="h-6 w-6 text-brand-silver"
                  onClick={() => setIsOpen(true)}
                />
              </SheetTrigger>

              <SheetContent side={"left"} className="bg-brand-dark border-r border-white/5 text-white">
                <SheetHeader>
                  <SheetTitle className="font-extrabold text-xl text-white tracking-tighter">
                    Alturis <span className="text-brand-blue">Innovations</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-4 mt-8">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-brand-silver hover:text-brand-blue transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href="mailto:inquiries@alturis-innovations.com"
                    className={`mt-4 w-full ${buttonVariants({
                      variant: "default",
                    })} bg-brand-blue text-brand-dark font-bold rounded-full`}
                  >
                    Contact Us
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-8 items-center">
            {routeList.map((route: RouteProps, i) => (
              <a
                href={route.href}
                key={i}
                className="text-sm font-bold text-brand-silver hover:text-brand-blue transition-colors uppercase tracking-widest"
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-4 items-center">
            <a
              href="mailto:inquiries@alturis-innovations.com"
              className={`${buttonVariants({ variant: "outline" })} border-brand-blue/30 text-brand-blue hover:bg-brand-blue/10 rounded-full font-bold px-6`}
            >
              Partner With Us
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

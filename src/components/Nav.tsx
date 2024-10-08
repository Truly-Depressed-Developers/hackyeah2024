"use client";

import * as React from "react";
import { Menu, Plus, Search } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Nav() {
  return (
    <div>
      <DesktopMenu />
      <MobileMenu />
    </div>
  );
}

export default Nav;

const DesktopMenu = () => {
  return (
    <div className="hidden h-16 justify-end text-lg md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href="/search"
              className="flex items-center"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Search size={16} className="mr-2" />
                Search NGOs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/new"
              className="flex items-center"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Plus size={16} className="mr-2" />
                Create an NGO
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/profile/1" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "flex items-center hover:bg-transparent focus:bg-transparent",
                )}
              >
                <Avatar>
                  <AvatarImage src={"/image.png"} />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu size={36} className="absolute right-2 top-2 z-50" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex min-h-screen flex-col items-center justify-center space-y-4 text-xl">
            <div>
              <SheetClose asChild>
                <Link href="/profile/1">Profile</Link>
              </SheetClose>
            </div>
            <div>
              <SheetClose asChild>
                <Link href="/search">Search NGOs</Link>
              </SheetClose>
            </div>
            <div>
              <SheetClose asChild>
                <Link href="/new">Create an NGO</Link>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

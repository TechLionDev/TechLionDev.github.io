"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Code, Contact, GraduationCap, Home, List, Send } from "lucide-react";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      href: "/",
      icon: <Home />,
    },
    { name: "Skills", href: "/#skills", icon: <List /> },
    { name: "Education", href: "/#education", icon: <GraduationCap /> },
    { name: "Projects", href: "/projects", icon: <Code /> },
  ];

  const contact = () => {
    window.open("mailto:jeremiahis@techlion.dev?subject=Hi%20there!&body=Hello%20Jeremiah%2C%0D%0AI%20was%20perusing%20your%20portfolio%20and%20wanted%20to...");
  };

  return (
    <>
      <div className="hidden md:flex">
        <div className="fixed top-0 z-[100] w-full drop-shadow-lg">
          <div className="mx-4 my-2 flex items-center justify-between rounded-lg bg-secondary p-6">
            <div className="flex">
              <h1 className="text-2xl font-bold">Jeremiah S.</h1>
            </div>
            <div className="flex">
              {links.map((link, idx) => {
                return (
                  <Button key={idx} variant={"link"} asChild={true}>
                    <Link className="flex gap-2" href={link.href}>
                      {link.icon}
                      {link.name}
                    </Link>
                  </Button>
                );
              })}
            </div>
            <div className="flex">
              <Button variant={"accent"} onClick={contact}>
                <div className="flex items-center gap-2 font-bold">
                  <Send /> Contact
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="fixed bottom-0 z-[100] w-full drop-shadow-lg">
          <div className="flex items-center justify-between rounded-t-lg bg-secondary p-6">
            <div className="flex">
              <h1 className="text-2xl font-bold">J. S.</h1>
            </div>
            <div className="">
              {links.map((link, idx) => {
                return (
                  <Button key={idx} variant={"link"} asChild={true}>
                    <Link href={link.href}>{link.icon}</Link>
                  </Button>
                );
              })}
            </div>
            <div className="flex">
              <Button onClick={contact} variant={"accent"}>
                <Send />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

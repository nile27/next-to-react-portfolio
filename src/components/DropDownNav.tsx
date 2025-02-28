import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import { projectData } from "../lib/dummyData";
import NavBtn from "./NavBtn";
import { useRecoilValue } from "recoil";
import { contentRefsState } from "../state/ContentRefs";
import { isDarkAtom } from "../state/isDarkAtom";
import { Button, Background, MenuIcon } from "./ui/StyledBtn";
import { useState, useEffect, useRef } from "react";

export default function DropDownNav() {
  const navText = [
    { text: "Skill" },
    { text: "Project", length: `${projectData.length}` },
    { text: "Experience" },
    { text: "Price", length: "3" },
  ];
  const contentRefs = useRecoilValue<(HTMLElement | null)[]>(contentRefsState);
  const isDark = useRecoilValue(isDarkAtom);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function scrollFunc(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ): void {
    const name: string = text;
    const menu: { [key: string]: number } = {
      Skill: 0,
      Project: 1,
      Experience: 2,
      Price: 3,
    };

    const targetIndex = menu[name];
    if (typeof targetIndex === "number" && contentRefs[targetIndex]) {
      const targetElement = contentRefs[targetIndex];
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  const handleResize = () => {
    if (window.innerWidth > 700) {
      setIsOpen(false);
    }
  };
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("ddj03104@gmail.com");
      alert("이메일이 복사되었습니다.");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResize);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);
  return (
    <section className="  tablet900:flex hidden w-[50px]   flex-col tablet900:left-[90%]  tablet900:top-[10px] relative table900:flex h-auto  ">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button onClick={() => setIsOpen(!isOpen)}>
            <Background
              $isactive={isOpen ? "true" : "false"}
              $isdark={isDark ? "true" : "false"}
            >
              <MenuIcon
                $isactive={isOpen ? "true" : "false"}
                $isdark={isDark ? "true" : "false"}
              >
                <span></span>
                <span></span>
                <span></span>
              </MenuIcon>
            </Background>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`"w-auto ${isDark ? "bg-DSecondBg" : "bg-LSecondBg"}`}
          ref={dropdownRef}
        >
          <DropdownMenuSeparator />

          {navText.map((item, idx) => (
            <DropdownMenuItem key={idx} className="bg-transparent">
              <NavBtn
                text={item.text}
                length={item.length}
                isActive={false}
                onClick={(e) => {
                  scrollFunc(e, item.text);
                  setIsOpen(false);
                }}
              />
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem className="bg-transparent">
            <NavBtn
              text={"contact"}
              isActive={false}
              onClick={() => {
                copyToClipboard();
                setIsOpen(false);
              }}
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}

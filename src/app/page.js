import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl font-semibold m-3 text-center mt-10">
        Hi Next.js & Shadcn.ui
      </h1>

      <Accordion type="single" collapsible className="w-[700px] mx-auto my-20">
        <AccordionItem value="item-1">
          <AccordionTrigger>What us shadcn/ui ?</AccordionTrigger>
          <AccordionContent>
            It&apos;s a collection of re-usable components built using Radix UI and
            Tailwind CSS that you can copy and paste into your apps to make your
            ideas into reality.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it easy to use?</AccordionTrigger>
          <AccordionContent>
            Yes. It very easy to use you just need to initialize the component
            which you want in your application and after that you can use it
            anywhere in your application and can customize accordingly
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I use this in my project?</AccordionTrigger>
          <AccordionContent>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
            <br />
            <br />
            But hey, let me know if you do. I&apos;d love to see what you build.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mx-auto w-fit my-4">
        <Button variant="default" size="lg">
          <Link
            href="https://ui.shadcn.com"
            className="flex flex-row gap-2 items-center"
          >
            Click Here to explore more <ExternalLinkIcon size={20} />{" "}
          </Link>
        </Button>
      </div>
    </main>
  );
}

import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
function FAQ() {
  return (
    <section className="models bg-neutral-300 w-full min-h-[70vh] flex items-center">
			
    <div className="w-[90%] md:w-2/3 flex flex-col items-center py-[10vh] mx-auto">
        <h2 className="cat text-2xl border-t border-amber-400 font-semibold text-right my-8">שאלות של אהבלים  </h2>
        <Accordion type="single" collapsible className="w-full">
<AccordionItem value="item-1">
<AccordionTrigger>  שאלה של עגל 1</AccordionTrigger>
<AccordionContent>
Yes. It adheres to the WAI-ARIA design pattern.
</AccordionContent>
</AccordionItem>
<AccordionItem value="item-2">
<AccordionTrigger>  שאלה של עגל 2</AccordionTrigger>
<AccordionContent>
Yes. It comes with default styles that matches the other
components&apos; aesthetic.
</AccordionContent>
</AccordionItem>
<AccordionItem value="item-3">
<AccordionTrigger>  שאלה של עגל 3</AccordionTrigger>
<AccordionContent>
Yes. It&apos;s animated by default, but you can disable it if you
prefer.
</AccordionContent>
</AccordionItem>
</Accordion>
    </div>
    </section>




  )
}

export default FAQ



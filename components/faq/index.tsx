import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const FAQ = ({ faqs }: { faqs: FAQ[] }) => {
  return (
    <Accordion
      type="single"
      defaultValue="item-0"
      className="accordian space-y-3 "
    >
      {faqs?.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-none accordion-item "
        >
          <AccordionTrigger className=" text-black bg-primary-dark/10 group rounded-md data-[state=open]:text-white [&[data-state=open]>]:mt-20 data-[state=open]:bg-primary-dark px-5 py-5 hover:no-underline">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex h-full items-center gap-2 flex-1 pr-5 text-base lg:text-lg font-bold capitalize text-left">
                {item.question}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className=" text-gray-300">
            <p
              dangerouslySetInnerHTML={{ __html: item.answer }}
              className="faq-answer text-sm lg:prose-base px-6 py-4 bg-primary-dark/10 text-gray-text2"
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;


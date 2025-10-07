import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Product } from "@/data/products";

interface ProductAccordionProps {
  product: Product;
}

export function ProductAccordion({ product }: ProductAccordionProps) {
  return (
    <div id="product-info-bottom" className="space-y-4">
      <Accordion type="single" collapsible className="w-full">
        {/* Materials & Care */}
        <AccordionItem value="materials">
          <AccordionTrigger className="text-base font-semibold">Materials & Care</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 text-sm text-gray-700">
              {product.materials.map((material, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>{material}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Product Description */}
        <AccordionItem value="description">
          <AccordionTrigger className="text-base font-semibold">Product Description</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
          </AccordionContent>
        </AccordionItem>

        {/* Fit & Style */}
        <AccordionItem value="fit-style">
          <AccordionTrigger className="text-base font-semibold">Fit & Style</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 text-sm text-gray-700">
              {product.fitStyle.map((style, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>{style}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

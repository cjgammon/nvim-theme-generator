import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // Assuming a Button component is available
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import themeStructure from "../../models/theme/themeStructure";
import GroupComponent from "./groupComponent";

const ThemePanel = () => {
  const [filter, setFilter] = useState(""); // State to hold the input value

  return (
    <Card className="w-80 overflow-scroll max-h-50%">
      <CardHeader>
        <CardTitle>Theme Editor</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          className="my-3"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        ></Input>
        <Accordion type="single" collapsible>
          {Object.entries(themeStructure.groups)
            .filter(([key, value]) =>
              Object.entries(value.groups).some(
                ([itemKey]) =>
                  itemKey.toLowerCase().includes(filter.toLowerCase()) // Check if any inner item matches the filter
              )
            )
            .map(([key, value], index) => {
              const section = key;
              return (
                <AccordionItem value={key + index} key={key + index}>
                  <AccordionTrigger>{key}</AccordionTrigger>
                  <AccordionContent className="p-3">
                    <Accordion type="single" collapsible>
                      {Object.entries(value.groups)
                        .filter(([itemKey]) =>
                          itemKey.toLowerCase().includes(filter.toLowerCase())
                        ) // Filter items based on input
                        .map(([key, value], index) => {
                          const item = key;
                          return (
                            <AccordionItem
                              value={"test" + index}
                              key={key + index}
                            >
                              <AccordionTrigger>{key}</AccordionTrigger>
                              <AccordionContent>
                                <div>{value.description}</div>
                                <GroupComponent
                                  section={section}
                                  item={item}
                                  options={value.options}
                                ></GroupComponent>
                              </AccordionContent>
                            </AccordionItem>
                          );
                        })}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ThemePanel;

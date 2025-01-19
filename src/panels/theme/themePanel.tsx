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
  return (
    <Card className="w-80 overflow-scroll max-h-50%">
      <CardHeader>
        <CardTitle>Theme Editor</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          {Object.entries(themeStructure.groups).map(([key, value], index) => {
            const group = key;
            return (
              <AccordionItem value={key + index} key={key + index}>
                <AccordionTrigger>{key}</AccordionTrigger>
                <AccordionContent className="p-3">
                  <Accordion type="single" collapsible>
                    {Object.entries(value.groups).map(([key, value], index) => {
                      const propKey = key;
                      return (
                        <AccordionItem value={"test" + index} key={key + index}>
                          <AccordionTrigger>{key}</AccordionTrigger>
                          <AccordionContent>
                            <div>{value.description}</div>
                            <GroupComponent
                              group={group}
                              propKey={propKey}
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

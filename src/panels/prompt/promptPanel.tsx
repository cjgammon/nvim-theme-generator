import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import openaiModel from "../../models/openai/openaiModel";
import themeModel from "../../models/theme/themeModel";
import { useToast } from "@/hooks/use-toast";

const PromptPanel = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!prompt) return;

    if (!openaiModel.apiKey || openaiModel.apiKey == "") {
      toast({
        variant: "destructive",
        title: "No API Key",
        description: "You must add an API Key in Config.",
      });
      return;
    }

    setLoading(true);
    try {
      let exampleSchema = JSON.stringify(themeModel.colors).replace(
        /(#[0-9a-zA-Z])\w+/g,
        "#000000"
      );

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiModel.apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            response_format: { type: "json_object" },
            temperature: 1.5,
            messages: [
              {
                role: "system",
                content: `you are a nvim theme generator.
                the format should be in JSON format.
                ignore the color names, these are just to specify how they are used in the theme.
                the theme should take priority.
                
                ensure contrast between the bg color and fg colors.
                the json should resemble: 
                ${exampleSchema}
                
                do not use these colors, be sure to replace them all.
                the new colors should make sense with the theme.
                please check the contrast after generating the colors and adjust any that would be hard to read.
                `,
              },
              {
                role: "user",
                content: `create a color theme for: "${prompt}"`,
              },
            ],
          }),
        }
      );

      console.log(response);

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        const newColors = JSON.parse(data.choices[0].message.content);
        console.log(newColors);
        themeModel.setColors(newColors);
      }
    } catch (error) {
      console.error("Error fetching colors from OpenAI:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="my-3">
      <CardContent className="flex p-3 gap-3">
        <Input
          value={prompt}
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.keyCode === 13) {
              handleSubmit();
            }
          }}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt for a theme"
        />
        <Button onClick={handleSubmit} disabled={loading || prompt.length < 1}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PromptPanel;

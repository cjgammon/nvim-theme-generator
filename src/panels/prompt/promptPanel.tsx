import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import openaiModel from "../../models/openai/openaiModel";
import themeModel from "../../models/theme/themeModel";

const PromptPanel = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt) return;

    setLoading(true);
    try {
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
            messages: [
              {
                role: "system",
                content: `you are a nvim theme generator.
                the format should be in JSON format.
                the json should resemble: 
                ${JSON.stringify(themeModel.colors)}`,
              },
              { role: "user", content: `${prompt}` },
            ],
          }),
        }
      );

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        const newColors = JSON.parse(data.choices[0].message.content);
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
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt for a theme"
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PromptPanel;

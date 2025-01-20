import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const ConfigPanel = () => {
  const [openAIKey, setOpenAIKey] = useState("");

  useEffect(() => {
    const savedKey = Cookies.get("openAIKey");
    if (savedKey) {
      setOpenAIKey(savedKey);
    }
  }, []);

  const handleSave = () => {
    Cookies.set("openAIKey", openAIKey);
  };

  return (
    <div className="py-3">
      <div className="flex gap-3">
        <label>OpenAI Key</label>
        <Input
          value={openAIKey}
          onChange={(e) => setOpenAIKey(e.target.value)}
        />
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

export default ConfigPanel;

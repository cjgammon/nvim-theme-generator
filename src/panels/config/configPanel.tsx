import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import openaiModel from "../../models/openai/openaiModel";
import { observer } from "mobx-react";

const ConfigPanel = () => {
  const { apiKey, setApiKey, clearApiKey } = openaiModel;

  const handleSave = () => {
    setApiKey(apiKey);
  };

  const handleClear = () => {
    clearApiKey();
  };

  return (
    <div className="py-3">
      <div className="flex gap-3">
        <label>OpenAI</label>
        <Input value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
        <Button onClick={handleClear}>Clear</Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

export default observer(ConfigPanel);

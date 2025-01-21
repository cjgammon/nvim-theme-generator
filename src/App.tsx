import ColorPanel from "./panels/color/colorPanel";
import ThemePanel from "./panels/theme/themePanel";
import ExportPanel from "./panels/exportPanel";
import PreviewPanel from "./panels/preview/previewPanel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ConfigPanel from "./panels/config/configPanel";
import PromptPanel from "./panels/prompt/promptPanel";
import { Toaster } from "@/components/ui/toaster";

const NvimThemeEditor = () => {
  return (
    <div className="flex flex-col p-4 h-screen w-screen">
      <div className="flex gap-3 py-2 justify-between">
        <h3 className="font-bold uppercase">theme maker</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Config</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Configuration</DialogTitle>
              <DialogDescription>
                <ConfigPanel />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex gap-4 h-5/6">
        <PreviewPanel />

        <ThemePanel />
        <div className="flex flex-col gap-3 w-80">
          <ColorPanel />
          <ExportPanel />
        </div>
      </div>
      <div>
        <PromptPanel />
      </div>
      <Toaster />
    </div>
  );
};

export default NvimThemeEditor;

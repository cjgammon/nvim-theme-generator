import ColorPanel from "./panels/color/colorPanel";
import ThemePanel from "./panels/theme/themePanel";
import ExportPanel from "./panels/exportPanel";
import PreviewPanel from "./panels/preview/previewPanel";

const NvimThemeEditor = () => {
  return (
    <div className="flex gap-4 p-4 h-screen w-screen">
      <PreviewPanel />

      <div className="flex flex-col gap-3 w-80">
        <ColorPanel />
        <ThemePanel />
        <ExportPanel />
      </div>
    </div>
  );
};

export default NvimThemeEditor;

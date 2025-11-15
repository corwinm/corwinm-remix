import { Button } from "./ui/button";

export function PrintButton() {
  return (
    <div className="print:hidden text-center mt-8 pt-4 border-t">
      <Button onClick={() => window.print()} variant="gradient">
        Print Resume
      </Button>
      <p className="text-sm text-gray-500 mt-2">
        Use your browser's print function to save as PDF. Enable background
        graphics for best results.
      </p>
    </div>
  );
}

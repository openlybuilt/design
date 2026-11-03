import { Popover, PopoverContent, PopoverTrigger } from "@/vendor/arc/popover/popover";
import { Button } from "@/vendor/arc/button/button";

export function ShareMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild><Button variant="secondary">Share</Button></PopoverTrigger>
      <PopoverContent>
        <p>Anyone with the link can view.</p>
      </PopoverContent>
    </Popover>
  );
}

import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/vendor/arc/dialog/dialog";
import { Button } from "@/vendor/arc/button/button";

export function RenameProject() {
  return (
    <Dialog>
      <DialogTrigger asChild><Button>Rename</Button></DialogTrigger>
      <DialogContent title="Rename project" description="This changes the URL too.">
        <input defaultValue="Arc" aria-label="Project name" />
        <DialogClose asChild><Button>Save</Button></DialogClose>
      </DialogContent>
    </Dialog>
  );
}

import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/vendor/arc/drawer/drawer";
import { Button } from "@/vendor/arc/button/button";

export function FiltersDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild><Button variant="secondary">Filters</Button></DrawerTrigger>
      <DrawerContent title="Filters" description="Narrow the list of projects.">
        <p>Choose your filters.</p>
        <DrawerClose asChild><Button>Apply</Button></DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}

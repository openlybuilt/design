import { AvatarGroup } from "@/vendor/arc/avatar-group/avatar-group";

const team = [
  { name: "Maya Chen", status: "online" as const },
  { name: "Leo Park" },
  { name: "Sara Ruiz" },
  { name: "Tom Hale" },
  { name: "Ines Ma" },
];

export function Collaborators() {
  return <AvatarGroup members={team} max={3} label="Editors" />;
}

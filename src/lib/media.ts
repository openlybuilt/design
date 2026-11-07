/**
 * Shared demo media. Files live in `public/media/`, credits in `public/media/CREDITS.md`.
 * People are seeded gradient avatars from `npm run avatars` (400 px squares);
 * photos are 1600 px on the long side.
 */

export interface MediaPerson {
  id: string;
  name: string;
  role?: string;
  src: string;
}

export interface MediaPhoto {
  id: string;
  alt: string;
  src: string;
  width: number;
  height: number;
}

export const people = [
  { id: "emma-collins", name: "Emma Collins", role: "Product designer", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "marcus-johnson", name: "Marcus Johnson", role: "Frontend engineer", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "jasmine-brooks", name: "Jasmine Brooks", role: "Design lead", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "olivia-bennett", name: "Olivia Bennett", role: "Platform engineer", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "sofia-ramirez", name: "Sofia Ramirez", role: "Operations lead", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "ryan-sullivan", name: "Ryan Sullivan", role: "Account executive", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "hannah-walsh", name: "Hannah Walsh", role: "Customer success", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "chloe-nguyen", name: "Chloe Nguyen", role: "Data analyst", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "ava-mitchell", name: "Ava Mitchell", role: "Marketing manager", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "daniel-kim", name: "Daniel Kim", role: "Backend engineer", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "jordan-reyes", name: "Jordan Reyes", role: "Support specialist", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "mateo-alvarez", name: "Mateo Alvarez", role: "Mobile engineer", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "tyler-hayes", name: "Tyler Hayes", role: "Sales lead", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "andre-williams", name: "Andre Williams", role: "Finance partner", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "nathan-cole", name: "Nathan Cole", role: "Engineering manager", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
  { id: "diane-foster", name: "Diane Foster", role: "Chief operating officer", src: `${import.meta.env.BASE_URL}assets/preview-person.svg` },
] as const satisfies readonly MediaPerson[];

export const photos = [
  { id: "lounge-chair", alt: "A woven oak lounge chair with a sheepskin and linen cushion on a concrete floor", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1280, height: 1600 },
  { id: "table-lamp", alt: "A white mushroom table lamp glowing beside books and a small vase", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 900 },
  { id: "linen-throw", alt: "Folded natural linen throws with fringed edges in soft window light", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1067, height: 1600 },
  { id: "glass-carafe", alt: "A hand pouring water from a ribbed glass carafe into tumblers", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1280, height: 1600 },
  { id: "stoneware-cups", alt: "Two speckled stoneware cups with a lid on a pale table", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1067, height: 1600 },
  { id: "stacked-bowls", alt: "Two stacked speckled ceramic bowls against a dark wall", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 1067 },
  { id: "ceramic-lamp", alt: "A sculptural ceramic lamp with a linen shade on a walnut sideboard", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1067, height: 1600 },
  { id: "living-room", alt: "A bright living room with timber beams, arched windows, and cream sofas", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1200, height: 1600 },
  { id: "sunroom", alt: "A sunroom with a round dining table, plants, and windows on three sides", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 1067 },
  { id: "home-office", alt: "A home office with a wooden desk and deep green walls", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 1200 },
  { id: "reading-chair", alt: "A grey armchair and ottoman with a knit throw in a dark green room", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 900 },
  { id: "bedroom", alt: "A made bed with striped linen pillows against an oak headboard", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1067, height: 1600 },
  { id: "restaurant", alt: "A warm restaurant dining room with woven pendant lights and a tree", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1067, height: 1600 },
  { id: "wine-bar", alt: "A glass carafe of red wine on a bar table in low evening light", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 1067 },
  { id: "concert-hall", alt: "Curved stainless steel panels of the Walt Disney Concert Hall against a blue sky", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 1143 },
  { id: "curved-facade", alt: "A white tiled building facade with curved balconies", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 1067 },
  { id: "pool-house", alt: "A modern glass house beside a long pool under a clear sky", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 900 },
  { id: "terracotta-waves", alt: "Wavy terracotta walls rising toward a blue sky", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1067, height: 1600 },
  { id: "mountain-ridges", alt: "Layered mountain ridges under a warm evening sky", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 1068 },
  { id: "alpine-lake", alt: "A calm alpine lake reflecting a rocky peak at golden hour", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1067, height: 1600 },
  { id: "coastline", alt: "A long coastline with waves rolling onto a beach below green cliffs", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1200, height: 1600 },
  { id: "sea-at-dusk", alt: "A calm sea at dusk with a low island on the horizon", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1067, height: 1600 },
  { id: "lisbon-tram", alt: "A yellow tram on a street lined with historic buildings in Lisbon", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 1064 },
  { id: "lisbon-bridge", alt: "The 25 de Abril Bridge crossing the Tagus in Lisbon", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 1166 },
  { id: "lisbon-rooftops", alt: "Terracotta rooftops of Lisbon running down to the river", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1280, height: 1600 },
  { id: "salmon-dinner", alt: "Seared salmon with a bright herb salsa and a glass of red wine", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1067, height: 1600 },
  { id: "chef-plating", alt: "A chef spooning sauce onto a plated dish in a dark kitchen", src: `${import.meta.env.BASE_URL}assets/preview-landscape.svg`, width: 1600, height: 1600 },
] as const satisfies readonly MediaPhoto[];

export type PersonId = (typeof people)[number]["id"];
export type PhotoId = (typeof photos)[number]["id"];

/** Looks up a person by id. */
export function person(id: PersonId): MediaPerson {
  return people.find(entry => entry.id === id)!;
}

/** Looks up a photo by id. */
export function photo(id: PhotoId): MediaPhoto {
  return photos.find(entry => entry.id === id)!;
}

/** Square 400 px avatar path for a person id, for `src` props. */
export const avatar = (id: PersonId) => person(id).src;

/** 800 × 1000 portrait of the same avatar, for image-led layouts. */
export const portrait = (id: PersonId) => `${import.meta.env.BASE_URL}assets/preview-person.svg`;

/** The first `count` people, for avatar stacks and lists. */
export const peopleSample = (count: number) => people.slice(0, count);

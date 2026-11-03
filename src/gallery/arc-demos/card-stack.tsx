import { CardStack } from "@/vendor/arc/card-stack/card-stack";

const cities = [{ id: "lis", name: "Lisbon", image: "/media/photos/lisbon-rooftops.jpg" }, { id: "lake", name: "Alpine lake", image: "/media/photos/alpine-lake.jpg" }, { id: "coast", name: "Coastline", image: "/media/photos/coastline.jpg" }];

export function Shortlist() {
  return (
    <CardStack
      items={cities}
      getKey={city => city.id}
      getLabel={city => city.name}
      renderCard={city => <div className="card-stack-sample"><img src={city.image} alt=""/><h3>{city.name}</h3></div>}
      labels={{ left: "Skip", right: "Shortlist" }}
      onDecide={() => {}}
    />
  );
}

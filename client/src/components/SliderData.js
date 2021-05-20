export const SliderData = [
  {
    image: "/api/property/propertyphotoprimary/",
  },
  {
    image: "/api/property/propertyphotosecondary/",
  },
  {
    image: "/api/property/propertyphototetiary/",
  },
];

export const propertyImages = (property_id) => [
  {
    id: "propertyphotoprimary",
    url: `/api/property/propertyphotoprimary/${property_id}`,
  },
  {
    id: "propertyphotosecondary",
    url: `/api/property/propertyphotosecondary/${property_id}`,
  },
  {
    id: "propertyphototetiary",
    url: `/api/property/propertyphototetiary/${property_id}`,
  },
];

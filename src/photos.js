// Free photos from Unsplash and Pexels (both free for commercial use), loaded from their image CDNs. Two per service: banner/card, then side photo.
const U = id => "https://images.unsplash.com/photo-" + id;
module.exports = {
  "home": [{ url: "https://images.pexels.com/photos/6720550/pexels-photo-6720550.jpeg", alt: "Mechanic and customer shaking hands in a garage" }],
  "car-detailing": [{ url: U("1633014041037-f5446fb4ce99"), alt: "Grey car covered in soap suds during a professional wash" }, { url: U("1708805282706-f44730b7e527"), alt: "Man waxing a car in a garage" }],
  "pressure-washing": [{ url: U("1707897283727-31befe824066"), alt: "Man pressure washing a driveway" }, { url: U("1677956787377-a0f32c0974af"), alt: "Worker in a yellow jacket using a pressure washer" }],
  "window-cleaning": [{ url: U("1763026227930-ec2c91d4e7f2"), alt: "Man cleaning a window with a squeegee" }, { url: U("1524803504179-6d7ae4d283f7"), alt: "Three men cleaning windows" }],
  "gutter-cleaning": [{ url: U("1744044155829-610dded4cead"), alt: "Dirty gutters along a roof against a blue sky" }, { url: U("1654531015087-8cc3d04d1b2d"), alt: "Rain gutter on the side of a house" }],
  "house-cleaning": [{ url: U("1758273705627-937374bfa978"), alt: "Woman vacuuming a bright living room" }, { url: U("1758273238415-01ec03d9ef27"), alt: "Woman mopping a living room floor" }],
  "lawn-mowing": [{ url: U("1734303023491-db8037a21f09"), alt: "Man mowing a lawn" }, { url: U("1690068023694-053da714f95f"), alt: "Person mowing grass with a push mower" }],
  "trash-can-cleaning": [{ url: U("1789950098952-53376645ba54"), alt: "Wheelie bins on a grassy curb beside a suburban street" }, { url: U("1683516435482-f3cea544ee95"), alt: "Two blue trash cans side by side" }],
  "christmas-light-installation": [{ url: U("1664289342468-fa99588e60b8"), alt: "House exterior lit with Christmas lights" }, { url: U("1642184665676-636ffd0c3afe"), alt: "House covered in Christmas lights" }],
  "mobile-mechanic": [{ url: U("1615906655593-ad0386982a0f"), alt: "Mechanic working on a car engine" }, { url: U("1645445522156-9ac06bc7a767"), alt: "Man working on a tire in a garage" }],
  "drain-cleaning": [{ url: U("1749532125405-70950966b0e5"), alt: "Plumber working on plumbing in a bathroom" }, { url: U("1676210133055-eab6ef033ce3"), alt: "Man working on pipes under a sink" }],
  "handyman": [{ url: U("1505798577917-a65157d3320a"), alt: "Man cutting wood with a miter saw" }, { url: U("1615974679600-665fb9468c4f"), alt: "Person holding a tape measure" }],
  "junk-removal": [{ url: U("1722927621756-6030e4191867"), alt: "Pile of junk in front of a garage" }, { url: U("1709831917664-804b57448953"), alt: "Garage filled with clutter and old tools" }],
  "carpet-cleaning": [{ url: U("1742483359033-13315b247c74"), alt: "Person in a protective suit cleaning a carpet" }, { url: U("1527515637462-cff94eecc1ac"), alt: "Person vacuuming a carpet" }],
  "interior-painting": [{ url: U("1688372199140-cade7ae820fe"), alt: "Man painting a wall with yellow paint" }, { url: U("1562259949-e8e7689d7828"), alt: "Paint roller applying blue paint to a white wall" }],
  "tree-trimming": [{ url: U("1754322449185-31f56117ed87"), alt: "Arborist cutting a tree branch" }, { url: U("1754321902809-5c21cbc67228"), alt: "Arborist pruning a tree's branches" }]
};

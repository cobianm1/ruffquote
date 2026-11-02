// Weekly batch, 2026-11-02: fence pressure washing, basement cleanout,
// painting a living room and detailing a car before selling. Same shape as guides.js.
// Prose never states dollar amounts. The computed table on each page shows them.

module.exports = [
  // ---------------- Pressure washing ----------------
  {
    slug: "fence-pressure-washing-cost",
    service: "pressure-washing",
    job: "fence pressure washing",
    title: "Fence Pressure Washing Cost: Wood and Vinyl Fences",
    description: "What it costs to pressure wash a wood or vinyl fence, how to measure your fence, and what to ask before staining or sealing afterward.",
    intro: "Fences are priced by the square feet of boards being cleaned. To estimate it, multiply the length of the fence by its height, and double it if you want both sides done. Wood fences need a lower pressure and more care so the boards don't splinter. Vinyl fences clean up fast with a soft wash.",
    rows: [
      { label: "One side, 100 ft of 6 ft fence (600 sq ft)", v: { surface: 2, sqft: 600 } },
      { label: "Both sides, 100 ft of 6 ft fence (1,200 sq ft)", v: { surface: 2, sqft: 1200 } },
      { label: "Both sides, 200 ft of 6 ft fence (2,400 sq ft)", v: { surface: 2, sqft: 2400 } }
    ],
    calc: { surface: 2, sqft: 1200 },
    included: [
      "Plants and nearby surfaces wet down or covered",
      "Cleaner applied to lift mildew, algae and dirt",
      "Boards washed at a pressure safe for the material",
      "A final rinse of the fence and the area around it"
    ],
    factors: [
      "Size. Length times height, and both sides if you want them.",
      "Material. Wood needs lower pressure and more time than vinyl.",
      "Condition. Heavy mildew and gray, weathered wood take longer.",
      "Access. Fences behind plants or along slopes slow the work.",
      "Staining. Sealing or staining afterward is priced separately."
    ],
    diy: "A rented or home pressure washer works well on a fence if you go easy. Use a wide fan tip, keep the wand a foot or more from the wood, and move with the grain. Too much pressure leaves fuzzy, splintered boards. On vinyl, a garden-hose sprayer with fence cleaner is often enough.",
    tips: [
      "Measure the fence length and height before you call.",
      "Ask whether the price covers one side or both.",
      "If you plan to stain, ask how long to wait after washing. Wood needs to dry first."
    ],
    faq: [
      ["Will pressure washing damage my wood fence?", "It can if the pressure is too high. A good pro uses a low setting and a cleaner to do most of the work."],
      ["Should I stain after washing?", "Washing is the best prep for stain. Let the wood dry for a couple of days first."],
      ["Do I need both sides cleaned?", "Not always. Many people clean only their side. If the other side faces a neighbor, ask them first."]
    ]
  },

  // ---------------- Junk removal ----------------
  {
    slug: "basement-cleanout-cost",
    service: "junk-removal",
    job: "a basement cleanout",
    title: "Basement Cleanout Cost: Junk Removal Prices",
    description: "What a basement cleanout costs by truck load, why stairs add to the price, and how to sort what goes before the crew arrives.",
    intro: "Junk removal companies price by how much of their truck your stuff fills. Basements cost more than garages because everything has to be carried up the stairs. Heavy items like old appliances, exercise machines and furniture add to the price. Sorting what you want to keep before the crew arrives saves time and money.",
    rows: [
      { label: "Light cleanout, about 1/4 truck", v: { load: 1, heavy: 0, access: 2 } },
      { label: "Medium cleanout, about 1/2 truck", v: { load: 2, heavy: 1, access: 2 } },
      { label: "Full basement, full truck", v: { load: 4, heavy: 2, access: 2 } }
    ],
    calc: { load: 2, heavy: 1, access: 2 },
    included: [
      "A crew to carry everything up the stairs and out",
      "Loading and hauling to the dump, donation or recycling",
      "A sweep of the cleared area",
      "Pricing confirmed on site before work starts"
    ],
    factors: [
      "Volume. The share of the truck your stuff fills sets the base price.",
      "Stairs. Narrow or steep basement stairs add labor.",
      "Heavy items. Appliances, pianos and gym equipment cost extra.",
      "Special items. Paint, tires and mattresses may carry disposal fees.",
      "Water damage. Wet or moldy items may need extra handling."
    ],
    diy: "If you have a truck and helpers, you can haul it yourself and pay only dump fees. Sort into keep, donate and toss piles first, and take donations to a thrift store. A rented dumpster is another option for a big cleanout, but someone still has to carry everything up the stairs.",
    tips: [
      "Sort and set aside what you are keeping before the crew arrives.",
      "Ask whether the price includes all disposal fees.",
      "Ask whether usable items are donated rather than dumped."
    ],
    faq: [
      ["Why does a basement cost more than a garage?", "Everything has to go up the stairs, which takes more time and care than rolling items out a garage door."],
      ["Can they take old paint and chemicals?", "Many companies can't take hazardous waste. Check with your local waste program for drop-off days."],
      ["How long does a basement cleanout take?", "It depends on how much there is and the stairs. Ask the crew for an estimate when they see the space."]
    ]
  },

  // ---------------- Interior painting ----------------
  {
    slug: "cost-to-paint-a-living-room",
    service: "interior-painting",
    job: "painting a living room",
    title: "Cost to Paint a Living Room",
    description: "What it costs to have a living room painted, with or without the ceiling and trim, and what changes the price for large or open rooms.",
    intro: "Living rooms are usually the biggest room in the house, so they take more paint and time than a bedroom. Open layouts that flow into a dining room or hallway can count as more than one room. A color change usually needs two coats. Painting the ceiling and trim at the same time costs less than doing them later.",
    rows: [
      { label: "Large living room (14x16), walls only, new color", v: { rooms: 1, size: 2, ceiling: 0, trim: 0, cond: 1 } },
      { label: "Large living room, walls, ceiling and trim", v: { rooms: 1, size: 2, ceiling: 1, trim: 1, cond: 1 } },
      { label: "Very large or open living room (20x20), walls only, new color", v: { rooms: 1, size: 3, ceiling: 0, trim: 0, cond: 1 } }
    ],
    calc: { rooms: 1, size: 2, ceiling: 0, trim: 0, cond: 1 },
    included: [
      "Furniture moved to the center and covered",
      "Floors covered and edges taped",
      "Nail holes and small dings filled and sanded",
      "Primer where needed and two coats on the walls",
      "Cleanup and furniture put back"
    ],
    factors: [
      "Room size. Large and open rooms take more paint and time.",
      "Ceiling height. Vaulted ceilings need taller ladders or scaffolding.",
      "Color change. Big color changes need more coats or primer.",
      "Ceiling and trim. Each adds time, but costs less done at the same time.",
      "Wall repairs. Cracks and patches add prep time."
    ],
    diy: "A living room is a good weekend DIY project if the ceiling isn't vaulted. Spend most of your time on prep: move furniture, fill holes, tape edges and cut in with a brush before rolling. Buy enough paint for two coats so the color matches.",
    tips: [
      "Get the price for walls only and for walls, ceiling and trim to compare.",
      "Ask how many coats are included and which paint brand they use.",
      "Mention vaulted ceilings and open layouts when you ask for a quote."
    ],
    faq: [
      ["How long does it take to paint a living room?", "Often one to two days, depending on size, prep and whether the ceiling and trim are included."],
      ["Does an open floor plan cost more?", "Usually, because the painter has more wall area and has to decide where one color ends and the next begins."],
      ["Should the ceiling be painted too?", "If the ceiling is stained or yellowed, doing it at the same time costs less than a second visit."]
    ]
  },

  // ---------------- Car detailing ----------------
  {
    slug: "car-detailing-before-selling-cost",
    service: "car-detailing",
    job: "detailing a car before you sell it",
    title: "Cost to Detail a Car Before Selling It",
    description: "What a full detail costs before you sell or trade in your car, what it includes, and why a clean car often sells faster.",
    intro: "A clean car photographs better and makes a better first impression on buyers. Before a sale, most people book a full detail: the outside washed, clayed and waxed, and the inside vacuumed, shampooed and wiped down. Pet hair and smoke odor take extra work. For a trade-in, an interior detail alone may be enough.",
    rows: [
      { label: "Full detail, sedan", v: { vehicle: 0, pkg: 2, dirty: 0 } },
      { label: "Full detail, SUV", v: { vehicle: 1, pkg: 2, dirty: 0 } },
      { label: "Full detail, SUV with pet hair or heavy dirt", v: { vehicle: 1, pkg: 2, dirty: 1 } },
      { label: "Interior detail only, sedan", v: { vehicle: 0, pkg: 1, dirty: 0 } }
    ],
    calc: { vehicle: 0, pkg: 2, dirty: 0 },
    included: [
      "Hand wash, wheels and tires cleaned",
      "Clay bar and a coat of wax or sealant",
      "Full vacuum, including trunk and under the seats",
      "Seats and carpets shampooed or leather cleaned",
      "Dash, doors, glass and vents wiped down"
    ],
    factors: [
      "Vehicle size. SUVs, trucks and vans take longer.",
      "Condition. Pet hair, stains and smoke odor add time.",
      "Package. A full detail costs more than inside or outside alone.",
      "Extras. Engine bay cleaning and headlight restoration cost more."
    ],
    diy: "You can do a lot yourself in an afternoon: vacuum, wipe every surface, clean the glass inside and out, and wash and wax the outside. Clear out personal items and the glove box. Cloudy headlights clean up well with a restoration kit, which helps photos.",
    tips: [
      "Book the detail a day or two before you take listing photos.",
      "Ask about headlight restoration if your lights look yellow.",
      "Ask for odor treatment if anyone smoked in the car."
    ],
    faq: [
      ["Is detailing worth it before selling?", "Often, yes. A clean car makes a better first impression and stands out in photos."],
      ["Should I detail before a trade-in?", "A quick interior clean is usually enough. Dealers recondition cars themselves."],
      ["How long does a full detail take?", "Usually a few hours, more for large or very dirty vehicles. The calculator above shows an estimate."]
    ]
  }
];

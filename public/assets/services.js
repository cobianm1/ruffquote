// Service definitions shared by the browser calculator and the static page builder.
// Each estimate() returns typical labor hours and supply cost for one job.
// Customer ranges price that job at lowRate (newer pro) and highRate (experienced pro who travels).

const SERVICES = [
  {
    slug: "car-detailing",
    name: "Car Detailing",
    noun: "car detailing",
    pro: "detailer",
    lowRate: 25, highRate: 50, minCharge: 0,
    fields: [
      { id: "vehicle", label: "Vehicle", type: "chips", default: 0,
        options: ["Sedan", "SUV", "Truck or van"] },
      { id: "pkg", label: "Service", type: "chips", default: 2,
        options: ["Exterior wash", "Interior detail", "Full detail"] },
      { id: "dirty", label: "Condition", type: "chips", default: 0,
        options: ["Normal", "Pet hair or very dirty"] }
    ],
    estimate(v) {
      const hrs = [[1, 1.25, 1.5], [1.5, 2, 2.25], [3, 3.75, 4.25]][v.pkg][v.vehicle];
      const sup = [6, 8, 18][v.pkg] * [1, 1.2, 1.35][v.vehicle];
      const k = v.dirty ? 1.3 : 1;
      return { hours: hrs * k, supplies: sup * k };
    },
    includes: v => ["Hand wash, wheels, tires and windows", "Vacuum, wipe-down, glass and mats", "Inside and out, plus wax"][v.pkg],
    presets: [
      ["Exterior wash", "Sedan", { vehicle: 0, pkg: 0, dirty: 0 }],
      ["Exterior wash", "SUV", { vehicle: 1, pkg: 0, dirty: 0 }],
      ["Exterior wash", "Truck or van", { vehicle: 2, pkg: 0, dirty: 0 }],
      ["Interior detail", "Sedan", { vehicle: 0, pkg: 1, dirty: 0 }],
      ["Interior detail", "SUV", { vehicle: 1, pkg: 1, dirty: 0 }],
      ["Interior detail", "Truck or van", { vehicle: 2, pkg: 1, dirty: 0 }],
      ["Full detail", "Sedan", { vehicle: 0, pkg: 2, dirty: 0 }],
      ["Full detail", "SUV", { vehicle: 1, pkg: 2, dirty: 0 }],
      ["Full detail", "Truck or van", { vehicle: 2, pkg: 2, dirty: 0 }]
    ],
    factors: [
      "Vehicle size. SUVs and trucks take 20 to 40 percent longer than a sedan.",
      "Package. A full detail takes about three times as long as a wash.",
      "Condition. Pet hair, sand and stains can add an hour or more.",
      "Mobile service. Detailers who come to you add their driving time and gas."
    ],
    faq: [
      ["How often should I get my car detailed?", "Most people get a full detail two to four times a year and a wash or interior clean in between."],
      ["Why do quotes vary so much?", "Prices depend on the detailer's experience, products, and whether they come to you. A much lower quote often means a faster, lighter job."]
    ]
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    noun: "pressure washing",
    pro: "pressure washer",
    lowRate: 40, highRate: 75, minCharge: 100,
    fields: [
      { id: "surface", label: "What needs washing", type: "chips", default: 0,
        options: ["Driveway", "House siding", "Deck or fence", "Patio"] },
      { id: "sqft", label: "Size", type: "number", unit: "sq ft", default: 800, min: 50, max: 10000, step: 50,
        help: "A two-car driveway is about 600 to 800 sq ft. A typical house is 1,500 to 2,500 sq ft of siding." }
    ],
    estimate(v) {
      const perHour = [900, 650, 300, 700][v.surface];
      const perSqft = [0.03, 0.04, 0.05, 0.03][v.surface];
      return { hours: 0.5 + v.sqft / perHour, supplies: 10 + v.sqft * perSqft };
    },
    includes: v => ["Surface cleaning of concrete, with pre-treat for oil spots", "Soft wash of siding with cleaner, rinse from top down", "Low-pressure wash of wood or vinyl, with cleaner", "Surface cleaning of pavers or concrete"][v.surface],
    presets: [
      ["Driveway", "600 sq ft", { surface: 0, sqft: 600 }],
      ["Driveway", "1,000 sq ft", { surface: 0, sqft: 1000 }],
      ["House siding", "1,500 sq ft", { surface: 1, sqft: 1500 }],
      ["House siding", "2,500 sq ft", { surface: 1, sqft: 2500 }],
      ["Deck or fence", "300 sq ft", { surface: 2, sqft: 300 }],
      ["Patio", "400 sq ft", { surface: 3, sqft: 400 }]
    ],
    factors: [
      "Square footage. Most pros price by the square foot with a minimum charge.",
      "Surface. Wood and siding need low pressure and more care than concrete.",
      "Stains. Oil, rust and heavy mildew need extra chemicals and time.",
      "Access and height. Second stories need extension wands or ladders."
    ],
    faq: [
      ["Is there a minimum charge?", "Most pressure washers charge at least $100 to $150 per visit to cover setup and travel."],
      ["Should I bundle surfaces?", "Yes. Doing the driveway, patio and siding in one visit usually costs less than separate trips."]
    ]
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    noun: "window cleaning",
    pro: "window cleaner",
    lowRate: 30, highRate: 60, minCharge: 100,
    fields: [
      { id: "windows", label: "Number of windows", type: "number", unit: "windows", default: 20, min: 1, max: 150, step: 1,
        help: "Count each pane you can see from outside. Doors with glass count as one." },
      { id: "stories", label: "Home height", type: "chips", default: 0,
        options: ["1 story", "2 stories", "3 stories"] },
      { id: "sides", label: "Sides", type: "chips", default: 1,
        options: ["Outside only", "Inside and outside"] }
    ],
    estimate(v) {
      const min = (v.sides ? 9 : 5) * [1, 1.25, 1.55][v.stories];
      return { hours: 0.25 + v.windows * min / 60, supplies: 5 + v.windows * 0.25 };
    },
    includes: v => v.sides ? "Glass inside and out, frames and sills wiped" : "Exterior glass, frames and sills",
    presets: [
      ["15 windows", "1 story, outside", { windows: 15, stories: 0, sides: 0 }],
      ["15 windows", "1 story, inside and out", { windows: 15, stories: 0, sides: 1 }],
      ["25 windows", "2 stories, outside", { windows: 25, stories: 1, sides: 0 }],
      ["25 windows", "2 stories, inside and out", { windows: 25, stories: 1, sides: 1 }],
      ["40 windows", "2 stories, inside and out", { windows: 40, stories: 1, sides: 1 }]
    ],
    factors: [
      "Number of windows. Most pros price per window or per pane.",
      "Height. Second and third stories need ladders or water-fed poles.",
      "Inside and out. Cleaning both sides nearly doubles the time.",
      "Extras. Screens, tracks and hard water stains usually cost extra."
    ],
    faq: [
      ["How often should windows be cleaned?", "Twice a year is common. Homes near the coast, trees or busy roads may need it more often."],
      ["Are screens included?", "Often not. Many window cleaners charge a few dollars extra per screen."]
    ]
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    noun: "gutter cleaning",
    pro: "gutter cleaner",
    lowRate: 35, highRate: 70, minCharge: 100,
    fields: [
      { id: "feet", label: "Length of gutters", type: "number", unit: "feet", default: 150, min: 20, max: 600, step: 10,
        help: "Roughly the distance around your roofline. A typical single-family home has 120 to 200 feet." },
      { id: "stories", label: "Home height", type: "chips", default: 0,
        options: ["1 story", "2 stories", "3 stories"] },
      { id: "flush", label: "Downspouts", type: "chips", default: 1,
        options: ["Gutters only", "Also flush downspouts"] }
    ],
    estimate(v) {
      const perHour = [150, 100, 70][v.stories];
      return { hours: 0.5 + v.feet / perHour + (v.flush ? 0.5 : 0), supplies: 8 };
    },
    includes: v => "Debris removed and bagged, gutters rinsed" + (v.flush ? ", downspouts flushed and checked" : ""),
    presets: [
      ["120 feet", "1 story", { feet: 120, stories: 0, flush: 1 }],
      ["180 feet", "1 story", { feet: 180, stories: 0, flush: 1 }],
      ["150 feet", "2 stories", { feet: 150, stories: 1, flush: 1 }],
      ["220 feet", "2 stories", { feet: 220, stories: 1, flush: 1 }],
      ["200 feet", "3 stories", { feet: 200, stories: 2, flush: 1 }]
    ],
    factors: [
      "Length. Most pros price by the linear foot of gutter.",
      "Height. Two- and three-story homes take longer and carry more risk.",
      "How full they are. Gutters skipped for years can take twice as long.",
      "Roof pitch and gutter guards. Steep roofs and guards slow the job down."
    ],
    faq: [
      ["How often should gutters be cleaned?", "Twice a year, in late spring and late fall. Homes under big trees may need it more."],
      ["Is it worth paying for?", "For two-story homes, usually yes. Ladder falls are a common cause of injuries at home."]
    ]
  },
  {
    slug: "house-cleaning",
    name: "House Cleaning",
    noun: "house cleaning",
    pro: "house cleaner",
    lowRate: 25, highRate: 50, minCharge: 90,
    fields: [
      { id: "beds", label: "Bedrooms", type: "number", unit: "bedrooms", default: 3, min: 0, max: 8, step: 1 },
      { id: "baths", label: "Bathrooms", type: "number", unit: "bathrooms", default: 2, min: 1, max: 6, step: 0.5 },
      { id: "type", label: "Type of cleaning", type: "chips", default: 0,
        options: ["Standard clean", "Deep clean", "Move-out clean"] }
    ],
    estimate(v) {
      const base = 1 + v.beds * 0.5 + v.baths * 0.75;
      const k = [1, 1.6, 2][v.type];
      return { hours: base * k, supplies: 10 + 5 * [0, 1, 2][v.type] };
    },
    includes: v => ["Kitchen, bathrooms, dusting, floors and trash", "Standard clean plus baseboards, inside microwave, light fixtures and buildup", "Deep clean plus inside cabinets, fridge, oven and closets"][v.type],
    presets: [
      ["Standard clean", "2 bed, 1 bath", { beds: 2, baths: 1, type: 0 }],
      ["Standard clean", "3 bed, 2 bath", { beds: 3, baths: 2, type: 0 }],
      ["Standard clean", "4 bed, 3 bath", { beds: 4, baths: 3, type: 0 }],
      ["Deep clean", "3 bed, 2 bath", { beds: 3, baths: 2, type: 1 }],
      ["Move-out clean", "3 bed, 2 bath", { beds: 3, baths: 2, type: 2 }]
    ],
    factors: [
      "Home size. Bedrooms and especially bathrooms drive the time.",
      "Type of clean. A first-time or deep clean takes 50 to 100 percent longer.",
      "Frequency. Weekly or biweekly clients often get 10 to 20 percent off.",
      "Pets and clutter. Pet hair and lots of items to move add time."
    ],
    faq: [
      ["Why is the first clean more expensive?", "The first visit usually needs a deep clean. Regular visits after that are faster."],
      ["Should I tip my house cleaner?", "For one-time cleans, 15 to 20 percent is common. For regular cleaners, many people tip at the holidays."]
    ]
  },
  {
    slug: "lawn-mowing",
    name: "Lawn Mowing",
    noun: "lawn mowing",
    pro: "lawn care pro",
    lowRate: 35, highRate: 65, minCharge: 35,
    fields: [
      { id: "size", label: "Yard size", type: "chips", default: 1,
        options: ["Small (1/8 acre)", "Medium (1/4 acre)", "Large (1/2 acre)", "Very large (1 acre)"] },
      { id: "freq", label: "How often", type: "chips", default: 0,
        options: ["Weekly or every 2 weeks", "One-time or overgrown"] }
    ],
    estimate(v) {
      const hrs = [0.5, 0.75, 1.25, 2][v.size] * (v.freq ? 1.5 : 1);
      return { hours: hrs, supplies: [2, 3, 5, 8][v.size] };
    },
    includes: () => "Mow, edge along walks and driveway, trim, and blow off hard surfaces",
    presets: [
      ["Small yard", "1/8 acre, recurring", { size: 0, freq: 0 }],
      ["Medium yard", "1/4 acre, recurring", { size: 1, freq: 0 }],
      ["Large yard", "1/2 acre, recurring", { size: 2, freq: 0 }],
      ["Very large yard", "1 acre, recurring", { size: 3, freq: 0 }],
      ["Medium yard", "1/4 acre, one-time", { size: 1, freq: 1 }]
    ],
    factors: [
      "Yard size. Most pros price per visit based on the lot.",
      "Frequency. Regular weekly or biweekly service costs less per visit.",
      "Obstacles. Trees, beds, slopes and fences mean more trimming.",
      "Overgrowth. Tall grass may need two passes or a bagging fee."
    ],
    faq: [
      ["Is bagging clippings included?", "Usually not. Most pros mulch clippings and charge extra to bag and haul them."],
      ["Do lawn services charge in winter?", "Some offer year-round plans with leaf cleanup and winter visits. Others pause service."]
    ]
  },
  {
    slug: "trash-can-cleaning",
    name: "Trash Can Cleaning",
    noun: "trash can cleaning",
    pro: "bin cleaner",
    lowRate: 30, highRate: 60, minCharge: 25,
    fields: [
      { id: "bins", label: "Number of bins", type: "number", unit: "bins", default: 2, min: 1, max: 8, step: 1,
        help: "Trash, recycling and yard waste bins each count as one." },
      { id: "plan", label: "How often", type: "chips", default: 1,
        options: ["One-time clean", "Monthly", "Every 3 months"] }
    ],
    estimate(v) {
      const setup = [0.5, 0.1, 0.2][v.plan];
      const k = [1.3, 1, 1.15][v.plan];
      return { hours: setup + v.bins * 0.12 * k, supplies: 2 + v.bins * 1.5 * k };
    },
    includes: v => (v.plan === 0 ? "Deep clean of heavy buildup, " : "") + "Hot-water pressure wash inside and out, deodorized, and returned to the curb",
    presets: [
      ["One-time clean", "1 bin", { bins: 1, plan: 0 }],
      ["One-time clean", "2 bins", { bins: 2, plan: 0 }],
      ["One-time clean", "3 bins", { bins: 3, plan: 0 }],
      ["Monthly plan", "2 bins, per visit", { bins: 2, plan: 1 }],
      ["Every 3 months", "2 bins, per visit", { bins: 2, plan: 2 }]
    ],
    factors: [
      "Number of bins. Most companies charge for the first bin and less for each extra one.",
      "Plan. Monthly plans cost less per visit because the cleaner is already on your street.",
      "First clean. Bins that have never been cleaned take longer and may cost more the first time.",
      "Route density. Neighborhoods with many customers on cleaning day get the best prices."
    ],
    faq: [
      ["When do bins get cleaned?", "Usually on your trash day, right after the truck empties them. You leave them at the curb."],
      ["Is it worth it?", "It stops smells, maggots and pests, especially in summer. Many people find a quarterly plan is enough."]
    ]
  },
  {
    slug: "christmas-light-installation",
    name: "Christmas Light Installation",
    noun: "Christmas light installation",
    pro: "light installer",
    lowRate: 35, highRate: 70, minCharge: 250,
    fields: [
      { id: "feet", label: "Length of roofline to light", type: "number", unit: "feet", default: 150, min: 20, max: 800, step: 10,
        help: "Measure the gutters and peaks you want lit. A typical front roofline is 80 to 200 feet." },
      { id: "stories", label: "Home height", type: "chips", default: 0,
        options: ["1 story", "2 stories", "3 stories"] },
      { id: "takedown", label: "Takedown", type: "chips", default: 1,
        options: ["Install only", "Install and takedown"] }
    ],
    estimate(v) {
      const perHour = [60, 40, 28][v.stories];
      const install = 0.5 + v.feet / perHour;
      return { hours: install * (v.takedown ? 1.4 : 1), supplies: v.feet * 2 };
    },
    includes: v => "Commercial-grade LED lights and clips supplied, roofline installed and tested" + (v.takedown ? ", taken down and stored after the season" : ""),
    presets: [
      ["100 feet", "1 story, with takedown", { feet: 100, stories: 0, takedown: 1 }],
      ["150 feet", "1 story, with takedown", { feet: 150, stories: 0, takedown: 1 }],
      ["150 feet", "2 stories, with takedown", { feet: 150, stories: 1, takedown: 1 }],
      ["250 feet", "2 stories, with takedown", { feet: 250, stories: 1, takedown: 1 }],
      ["200 feet", "3 stories, with takedown", { feet: 200, stories: 2, takedown: 1 }]
    ],
    factors: [
      "Length. Most installers price by the foot of roofline, with lights included.",
      "Height and roof pitch. Second stories and steep roofs need more time and safety gear.",
      "Lights. Pros usually supply commercial-grade LEDs. Using your own lights may lower the price.",
      "Extras. Trees, bushes, wreaths and pathway lights are priced on top of the roofline."
    ],
    faq: [
      ["When should I book?", "Book in September or October. Installers fill up fast, and November slots go first."],
      ["Do I keep the lights?", "Usually not. Most installers lease the lights, take them down after the holidays, and store them for next year."]
    ]
  }
];

if (typeof module !== "undefined") module.exports = SERVICES;

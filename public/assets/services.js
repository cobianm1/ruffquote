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
  },
  {
    slug: "mobile-mechanic",
    name: "Mobile Mechanic",
    noun: "a mobile mechanic", work: "mobile mechanic work",
    pro: "mobile mechanic",
    lowRate: 50, highRate: 95, minCharge: 50,
    fields: [
      { id: "job", label: "Job", type: "chips", default: 0,
        options: ["Oil change", "Tire rotation", "Brake pads (one axle)", "Battery replacement"] },
      { id: "vehicle", label: "Vehicle", type: "chips", default: 0,
        options: ["Car", "SUV, truck or van"] }
    ],
    estimate(v) {
      const big = v.vehicle === 1;
      const hrs = [0.75, 0.5, 1.5, 0.5][v.job] * (big ? 1.15 : 1);
      const parts = [40, 0, 70, 170][v.job] * (big ? [1.3, 1, 1.25, 1.15][v.job] : 1);
      return { hours: hrs, supplies: parts };
    },
    includes: v => ["Synthetic-blend oil and filter, fluid top-off, old oil disposed", "All four tires rotated and set to the right pressure", "New brake pads on one axle, rotors checked, test drive", "New battery installed and tested, old battery recycled"][v.job] + ", done in your driveway",
    presets: [
      ["Oil change", "Car", { job: 0, vehicle: 0 }],
      ["Oil change", "SUV, truck or van", { job: 0, vehicle: 1 }],
      ["Tire rotation", "Any vehicle", { job: 1, vehicle: 0 }],
      ["Brake pads, one axle", "Car", { job: 2, vehicle: 0 }],
      ["Brake pads, one axle", "SUV, truck or van", { job: 2, vehicle: 1 }],
      ["Battery replacement", "Car", { job: 3, vehicle: 0 }]
    ],
    factors: [
      "Parts. Oil type, brake pad quality and battery size can change the price by $50 or more.",
      "Vehicle. Trucks and SUVs need more oil, bigger pads and heavier batteries.",
      "Convenience. Mobile mechanics come to you, which often costs a little more than a shop.",
      "Add-ons. Rotors, wiper blades and filters are usually extra."
    ],
    faq: [
      ["Is a mobile mechanic more expensive than a shop?", "Often about the same for simple jobs. You save the trip and the wait, and many mobile mechanics have lower overhead."],
      ["Can I supply my own parts?", "Some mechanics allow it and charge labor only, but they usually won't warranty parts they didn't provide."]
    ]
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    noun: "drain cleaning",
    pro: "plumber",
    lowRate: 70, highRate: 130, minCharge: 125,
    fields: [
      { id: "job", label: "What's clogged", type: "chips", default: 0,
        options: ["Sink or tub drain", "Toilet", "Main sewer line"] },
      { id: "access", label: "Clean-out access", type: "chips", default: 0,
        options: ["Easy to reach", "Hard to reach or no clean-out"] },
      { id: "when", label: "Timing", type: "chips", default: 0,
        options: ["Regular hours", "Evening, weekend or emergency"] }
    ],
    estimate(v) {
      const hrs = ([1, 0.75, 2][v.job] + (v.access ? [0.5, 0.25, 1][v.job] : 0)) * (v.when ? 1.5 : 1);
      return { hours: hrs, supplies: [10, 10, 40][v.job] + (v.when ? 75 : 0) };
    },
    includes: v => ["Drain snaked with a hand or drum auger, flow tested", "Toilet augered, or pulled and reset if needed", "Main line cabled from the clean-out, flow tested"][v.job],
    presets: [
      ["Sink or tub drain", "Regular hours", { job: 0, access: 0, when: 0 }],
      ["Toilet clog", "Regular hours", { job: 1, access: 0, when: 0 }],
      ["Main sewer line clean-out", "Easy access", { job: 2, access: 0, when: 0 }],
      ["Main sewer line clean-out", "No clean-out", { job: 2, access: 1, when: 0 }],
      ["Sink or tub drain", "Emergency or weekend", { job: 0, access: 0, when: 1 }]
    ],
    factors: [
      "Which drain. A sink snake is quick. A main sewer line needs bigger equipment and more time.",
      "Access. A clean-out port makes the job faster. Without one, the plumber may pull a toilet or go through the roof vent.",
      "Timing. Nights, weekends and emergencies often cost 1.5 to 2 times more.",
      "Extras. Camera inspections and hydro jetting are usually priced separately."
    ],
    faq: [
      ["When should I call a plumber instead of using a plunger?", "If more than one drain is slow, water backs up in the tub when you flush, or the clog keeps coming back, it's likely deeper in the line."],
      ["Is a camera inspection worth it?", "For repeat main line clogs, yes. It shows roots or broken pipe so you fix the cause instead of paying for clean-outs again."]
    ]
  },
  {
    slug: "handyman",
    name: "Handyman",
    noun: "a handyman", work: "handyman work",
    pro: "handyman",
    lowRate: 45, highRate: 85, minCharge: 75,
    fields: [
      { id: "job", label: "Job", type: "chips", default: 0,
        options: ["Install a dishwasher", "Replace a light fixture", "Change high-ceiling bulbs", "Mount a TV", "Replace a ceiling fan", "Replace a faucet", "Hang shelves or pictures", "Assemble furniture"] },
      { id: "qty", label: "How many", type: "number", unit: "items", default: 1, min: 1, max: 20, step: 1,
        help: "For example, 3 light fixtures or 6 pictures. Customer usually supplies the item being installed." }
    ],
    estimate(v) {
      const each = [2, 1, 0.15, 1, 1.5, 1.25, 0.3, 1.25][v.job];
      const sup = [15, 5, 0, 10, 5, 10, 2, 0][v.job];
      return { hours: 0.25 + each * v.qty, supplies: sup * v.qty };
    },
    includes: v => ["Old unit removed, new dishwasher connected to water, drain and power, and leveled", "Old fixture removed, new one wired and mounted", "Bulbs swapped on tall ceilings or fixtures, using the right ladder", "TV mount anchored to studs, TV hung and cables tidied", "Old fan removed, new fan assembled, wired and balanced", "Old faucet removed, new one installed with new supply lines", "Items leveled and anchored into studs or wall anchors", "Furniture unpacked, assembled and set in place, boxes broken down"][v.job] + ". Labor only, item not included",
    presets: [
      ["Install a dishwasher", "1 unit", { job: 0, qty: 1 }],
      ["Replace a light fixture", "1 fixture", { job: 1, qty: 1 }],
      ["Change high-ceiling bulbs", "Up to 6 bulbs", { job: 2, qty: 6 }],
      ["Mount a TV", "1 TV", { job: 3, qty: 1 }],
      ["Replace a ceiling fan", "1 fan", { job: 4, qty: 1 }],
      ["Replace a faucet", "1 faucet", { job: 5, qty: 1 }],
      ["Hang shelves or pictures", "Up to 5 items", { job: 6, qty: 5 }],
      ["Assemble furniture", "1 large piece", { job: 7, qty: 1 }]
    ],
    factors: [
      "The job. Simple swaps take under an hour. Appliances and fans take longer.",
      "How many. Bundling several small jobs into one visit is the best value.",
      "Surprises. Old wiring, rusted shutoff valves or missing studs can add time.",
      "Minimum charge. Most handymen charge a minimum or a one-hour minimum per visit."
    ],
    faq: [
      ["Should I hire a handyman or a licensed pro?", "Simple swaps are fine for a handyman. New wiring, gas lines or moving plumbing usually need a licensed electrician or plumber, depending on your state."],
      ["How do I save money?", "Make a list and book one visit for several small jobs. You pay the minimum once instead of each time."]
    ]
  },
  {
    slug: "junk-removal",
    name: "Junk Removal",
    noun: "junk removal",
    pro: "junk hauler",
    // Rates are for a two-person crew with a truck, combined per hour.
    lowRate: 70, highRate: 130, minCharge: 100,
    fields: [
      { id: "load", label: "How much junk", type: "chips", default: 2,
        options: ["A few items", "1/4 truck", "1/2 truck", "3/4 truck", "Full truck"] },
      { id: "heavy", label: "Heavy or special items", type: "number", unit: "items", default: 0, min: 0, max: 10, step: 1,
        help: "Appliances, mattresses, TVs, tires or pianos. These often carry extra disposal fees." },
      { id: "access", label: "Where it is", type: "chips", default: 1,
        options: ["Curb or driveway", "Garage or ground floor", "Upstairs, basement or long carry"] }
    ],
    estimate(v) {
      const hrs = [0.75, 1.1, 1.6, 2.2, 2.75][v.load] * [0.85, 1, 1.35][v.access] + v.heavy * 0.2;
      const fees = [35, 65, 105, 150, 190][v.load] + v.heavy * 25;
      return { hours: hrs, supplies: fees };
    },
    includes: v => "Loading by a two-person crew, hauling, and dump or recycling fees" + (v.heavy ? ", plus disposal of heavy or special items" : ""),
    presets: [
      ["A few items", "Ground floor", { load: 0, heavy: 0, access: 1 }],
      ["Single appliance", "Ground floor", { load: 0, heavy: 1, access: 1 }],
      ["1/4 truck", "Ground floor", { load: 1, heavy: 0, access: 1 }],
      ["1/2 truck", "Ground floor", { load: 2, heavy: 0, access: 1 }],
      ["3/4 truck", "Ground floor", { load: 3, heavy: 0, access: 1 }],
      ["Full truck", "Ground floor", { load: 4, heavy: 0, access: 1 }],
      ["Full truck", "Basement or upstairs", { load: 4, heavy: 0, access: 2 }]
    ],
    factors: [
      "Volume. Most haulers price by how much of the truck your junk fills.",
      "Dump fees. Landfill and transfer station fees vary a lot by city and are built into the price.",
      "Special items. Fridges, mattresses, tires and TVs often cost extra to recycle.",
      "Access. Stairs, basements and long carries take more time and effort."
    ],
    faq: [
      ["How do I know how full the truck will be?", "A full truck is roughly a one-car garage stacked waist high. Many haulers will look at photos or your pile and quote on site before loading."],
      ["Is junk removal cheaper if I put things at the curb?", "Usually yes. Curbside pickups load faster, and some haulers offer a lower price for them."]
    ]
  },
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    noun: "carpet cleaning",
    pro: "carpet cleaner",
    lowRate: 45, highRate: 85, minCharge: 120,
    fields: [
      { id: "rooms", label: "Rooms", type: "number", unit: "rooms", default: 3, min: 1, max: 15, step: 1,
        help: "Count each carpeted room. A hallway or large open area of about 200 sq ft counts as one room." },
      { id: "stairs", label: "Staircases", type: "number", unit: "flights", default: 0, min: 0, max: 4, step: 1,
        help: "A flight is about 12 to 14 carpeted steps." },
      { id: "treat", label: "Stains", type: "chips", default: 0,
        options: ["Normal soil", "Some spots and stains", "Pet urine or odor"] }
    ],
    estimate(v) {
      const k = [1, 1.2, 1.45][v.treat];
      const hrs = 0.5 + (v.rooms * 0.45 + v.stairs * 0.5) * k;
      const sup = 10 + v.rooms * 4 + v.stairs * 3 + v.rooms * [0, 4, 12][v.treat];
      return { hours: hrs, supplies: sup };
    },
    includes: v => "Pre-treat, hot water extraction and grooming of the carpet" + ["", ", with spot treatment on stains", ", with enzyme treatment for pet urine and odor"][v.treat] + (v.stairs ? ", stairs cleaned by hand tool" : ""),
    presets: [
      ["1 room", "Normal soil", { rooms: 1, stairs: 0, treat: 0 }],
      ["3 rooms", "Normal soil", { rooms: 3, stairs: 0, treat: 0 }],
      ["3 rooms and stairs", "Normal soil", { rooms: 3, stairs: 1, treat: 0 }],
      ["5 rooms", "Normal soil", { rooms: 5, stairs: 0, treat: 0 }],
      ["5 rooms and stairs", "Some stains", { rooms: 5, stairs: 1, treat: 1 }],
      ["3 rooms", "Pet urine or odor", { rooms: 3, stairs: 0, treat: 2 }]
    ],
    factors: [
      "Number of rooms. Most companies price per room, with a minimum for small jobs.",
      "Stairs. Steps are cleaned with a hand tool and are usually priced per step or per flight.",
      "Stains and pets. Pet urine needs enzyme treatment and sometimes subfloor work.",
      "Moving furniture. Many cleaners charge extra to move beds, sofas and heavy pieces."
    ],
    faq: [
      ["How long does carpet take to dry?", "Usually 6 to 12 hours after hot water extraction. Running fans and the AC speeds it up."],
      ["Steam cleaning or dry cleaning?", "Hot water extraction, often called steam cleaning, is what most carpet makers recommend. Low-moisture methods dry faster but clean less deeply."]
    ]
  },
  {
    slug: "interior-painting",
    name: "Interior Painting",
    noun: "interior painting",
    pro: "painter",
    lowRate: 40, highRate: 75, minCharge: 250,
    fields: [
      { id: "rooms", label: "Rooms", type: "number", unit: "rooms", default: 1, min: 1, max: 15, step: 1 },
      { id: "size", label: "Room size", type: "chips", default: 1,
        options: ["Small (10x10)", "Medium (12x12)", "Large (14x16)", "Very large (20x20)"] },
      { id: "ceiling", label: "Ceilings", type: "chips", default: 0,
        options: ["Walls only", "Walls and ceiling"] },
      { id: "trim", label: "Trim and doors", type: "chips", default: 0,
        options: ["No trim", "Baseboards and window trim", "Trim and doors"] },
      { id: "cond", label: "Walls and color", type: "chips", default: 0,
        options: ["Same color, good walls", "Color change", "Color change and wall repairs"] }
    ],
    estimate(v) {
      const s = v.size;
      const k = [1, 1.25, 1.45][v.cond];
      const perRoom = [4.5, 5.5, 7, 9.5][s] * k
        + (v.ceiling ? [1.5, 2, 2.75, 4][s] : 0)
        + [0, [1.5, 2, 2.5, 3.25][s], [2.5, 3, 3.5, 4.25][s]][v.trim];
      const gallons = [1.5, 2, 2.5, 3.5][s] * (v.cond ? 1.5 : 1)
        + (v.ceiling ? [0.75, 1, 1.25, 2][s] : 0)
        + (v.trim ? [0.25, 0.25, 0.5, 0.5][s] * v.trim : 0);
      const sup = v.rooms * (gallons * 45 + 20 + (v.cond === 2 ? 15 : 0)) + 10;
      return { hours: 0.5 + v.rooms * perRoom, supplies: sup };
    },
    includes: v => "Furniture moved and covered, prep, and two coats on the walls" + (v.ceiling ? ", ceiling painted" : "") + ["", ", baseboards and window trim painted", ", trim and doors painted"][v.trim] + ", with mid-grade paint included",
    presets: [
      ["1 small room", "Walls only", { rooms: 1, size: 0, ceiling: 0, trim: 0, cond: 0 }],
      ["1 medium room", "Walls only", { rooms: 1, size: 1, ceiling: 0, trim: 0, cond: 0 }],
      ["1 medium room", "Walls, ceiling and trim", { rooms: 1, size: 1, ceiling: 1, trim: 1, cond: 0 }],
      ["1 large room", "Walls, color change", { rooms: 1, size: 2, ceiling: 0, trim: 0, cond: 1 }],
      ["3 medium rooms", "Walls only", { rooms: 3, size: 1, ceiling: 0, trim: 0, cond: 0 }],
      ["3 medium rooms", "Walls, ceiling and trim", { rooms: 3, size: 1, ceiling: 1, trim: 1, cond: 0 }]
    ],
    factors: [
      "Wall area. Bigger rooms and tall ceilings take more paint and time.",
      "Prep. Patching holes, sanding and caulking can take as long as painting.",
      "Color change. Going from dark to light, or light to dark, often needs primer or a third coat.",
      "Trim, doors and ceilings. Detail work with a brush is slower than rolling walls."
    ],
    faq: [
      ["Is paint included in the price?", "Most painters include mid-grade paint and supplies. Premium paint or many colors in one room can add to the cost."],
      ["How long does it take to paint a room?", "A pro can usually paint the walls of an average bedroom in one day, including prep and two coats."]
    ]
  },
  {
    slug: "tree-trimming",
    name: "Tree Trimming",
    noun: "tree trimming",
    pro: "tree trimmer",
    // Rates are for a two- or three-person crew with a chipper, combined per hour.
    lowRate: 75, highRate: 140, minCharge: 150,
    fields: [
      { id: "trees", label: "Number of trees", type: "number", unit: "trees", default: 1, min: 1, max: 20, step: 1 },
      { id: "height", label: "Tree height", type: "chips", default: 1,
        options: ["Small (under 15 ft)", "Medium (15 to 30 ft)", "Large (30 to 60 ft)", "Very large (60 ft or more)"] },
      { id: "near", label: "Location", type: "chips", default: 0,
        options: ["Open yard", "Over the house or roof", "Near power lines"] },
      { id: "haul", label: "Debris", type: "chips", default: 0,
        options: ["Chip and haul away", "Leave it cut and stacked"] }
    ],
    estimate(v) {
      const h = v.height;
      const each = [0.75, 2, 4, 7][h] * [1, 1.3, 1.5][v.near] * (v.haul ? 1 : 1.15);
      const sup = v.trees * ([10, 25, 50, 100][h] + (v.haul ? 0 : [15, 35, 70, 120][h]));
      return { hours: 0.5 + v.trees * each, supplies: sup };
    },
    includes: v => "Dead, broken and crossing branches pruned, with clearance cut from the house and walkways" + (v.haul ? ", branches left cut and stacked" : ", branches chipped and hauled away"),
    presets: [
      ["1 small tree", "Open yard", { trees: 1, height: 0, near: 0, haul: 0 }],
      ["1 medium tree", "Open yard", { trees: 1, height: 1, near: 0, haul: 0 }],
      ["1 medium tree", "Over the house", { trees: 1, height: 1, near: 1, haul: 0 }],
      ["1 large tree", "Open yard", { trees: 1, height: 2, near: 0, haul: 0 }],
      ["1 very large tree", "Open yard", { trees: 1, height: 3, near: 0, haul: 0 }],
      ["3 medium trees", "Open yard", { trees: 3, height: 1, near: 0, haul: 0 }]
    ],
    factors: [
      "Height. Taller trees need climbing gear or a bucket truck and take much longer.",
      "Location. Limbs over a roof or near power lines must be roped down piece by piece.",
      "Cleanup. Chipping and hauling debris adds time, fuel and dump fees.",
      "Tree health. Dead or storm-damaged trees can be riskier and slower to work on."
    ],
    faq: [
      ["When is the best time to trim trees?", "Late winter, while trees are dormant, is best for most species. Dead or hazardous limbs can be removed any time."],
      ["Who trims branches near power lines?", "Lines running pole to pole are usually the utility's job, often for free. The line from the pole to your house is often the homeowner's. Call your utility first."]
    ]
  }
];

if (typeof module !== "undefined") module.exports = SERVICES;

// Weekly batch, 2026-11-16: HVAC tune-up (from the 2026-11-04 Search Console export),
// cleaning a 3-bedroom house, fuel delivery and spare tire changes. Same shape as guides.js.
// Prose never states dollar amounts. The computed table on each page shows them.

module.exports = [
  // ---------------- HVAC ----------------
  {
    slug: "hvac-tune-up-cost",
    service: "hvac",
    job: "an HVAC tune-up",
    title: "HVAC Tune-Up Cost: Heating and Cooling Maintenance",
    description: "What an HVAC tune-up costs for your AC and furnace, what a technician checks, and whether a yearly maintenance plan is worth it.",
    intro: "An HVAC tune-up is a yearly checkup for your heating and cooling. Most techs suggest an AC tune-up in spring and a furnace tune-up in fall, priced as separate visits. Bigger homes and homes with two systems cost more. Many companies sell a maintenance plan that bundles both visits, often with a small discount on repairs.",
    rows: [
      { label: "AC tune-up, home under 1,500 sq ft", v: { job: 0, size: 0, when: 0 } },
      { label: "Furnace tune-up, home under 1,500 sq ft", v: { job: 1, size: 0, when: 0 } },
      { label: "AC tune-up, 1,500 to 2,500 sq ft", v: { job: 0, size: 1, when: 0 } },
      { label: "Furnace tune-up, 1,500 to 2,500 sq ft", v: { job: 1, size: 1, when: 0 } },
      { label: "AC tune-up, over 2,500 sq ft or 2 systems", v: { job: 0, size: 2, when: 0 } }
    ],
    calc: { job: 0, size: 1, when: 0 },
    included: [
      "Thermostat checked for correct readings",
      "Air filter checked and replaced if you supply one",
      "Electrical connections tightened and capacitors tested",
      "Coils, drain line and burners inspected and cleaned as needed",
      "A safety check of the furnace's gas and exhaust",
      "A written list of anything that needs repair"
    ],
    factors: [
      "Which system. AC and furnace tune-ups are usually separate visits.",
      "Home size. Larger homes and multiple systems take longer.",
      "Timing. Booking before the busy season is easier and sometimes cheaper.",
      "Plans. Yearly maintenance plans bundle both visits.",
      "Findings. Repairs and parts found during the visit cost extra."
    ],
    diy: "Between visits, you can change the air filter every one to three months, keep the outdoor unit clear of leaves and plants, and pour a cup of vinegar down the AC drain line each season to stop clogs. Leave electrical tests, refrigerant and gas work to a licensed tech.",
    tips: [
      "Book the AC in early spring and the furnace in early fall, before the rush.",
      "Ask what the checklist includes, so you can compare companies.",
      "Get any repair quote in writing before agreeing to it."
    ],
    faq: [
      ["How often should HVAC be serviced?", "Once a year for each system is common: the AC in spring and the furnace in fall."],
      ["Is an HVAC maintenance plan worth it?", "It can be if you'd book both tune-ups anyway. Compare the plan price with two separate visits and check what repair discounts it adds."],
      ["Can a tune-up lower my energy bill?", "A clean, well-adjusted system runs more efficiently, and a tune-up can catch small problems before they turn into big repairs."]
    ]
  },

  // ---------------- House cleaning ----------------
  {
    slug: "cost-to-clean-a-3-bedroom-house",
    service: "house-cleaning",
    job: "cleaning a 3-bedroom house",
    title: "Cost to Clean a 3-Bedroom House",
    description: "What house cleaners charge for a 3-bedroom home, from a regular clean to a deep clean or move-out clean, and what changes the price.",
    intro: "A 3-bedroom home is one of the most common jobs for house cleaners. Most price by the number of bedrooms and bathrooms and the type of clean. A regular clean keeps a tidy home in shape. A deep clean takes much longer because it reaches baseboards, inside appliances and built-up grime. A move-out clean covers empty rooms top to bottom.",
    rows: [
      { label: "3 bed, 2 bath, standard clean", v: { beds: 3, baths: 2, type: 0 } },
      { label: "3 bed, 2 bath, deep clean", v: { beds: 3, baths: 2, type: 1 } },
      { label: "3 bed, 2 bath, move-out clean", v: { beds: 3, baths: 2, type: 2 } },
      { label: "3 bed, 3 bath, standard clean", v: { beds: 3, baths: 3, type: 0 } }
    ],
    calc: { beds: 3, baths: 2, type: 0 },
    included: [
      "Kitchen counters, sink, stovetop and appliance fronts cleaned",
      "Bathrooms scrubbed, including toilets, tubs, showers and mirrors",
      "Floors vacuumed and mopped",
      "Dusting of reachable surfaces",
      "Trash emptied",
      "Deep and move-out cleans add baseboards, cabinets and inside appliances"
    ],
    factors: [
      "Bathrooms. Each bathroom adds a lot of the time.",
      "Type of clean. Deep and move-out cleans take much longer.",
      "Condition. Pets, clutter and built-up grime add time.",
      "Frequency. Weekly or biweekly service costs less per visit.",
      "Extras. Inside the oven and fridge, windows and laundry cost more."
    ],
    diy: "Cleaning a 3-bedroom house yourself goes faster room by room, top to bottom: dust first, then wipe surfaces, then floors. A good microfiber cloth set, a bathroom cleaner and a mop cover most of it. Many people clean regularly themselves and book a deep clean once or twice a year.",
    tips: [
      "Ask whether the price is flat or hourly, and what happens if it takes longer.",
      "Ask for a list of what each type of clean includes.",
      "Book a deep clean first if the house hasn't been professionally cleaned in a while. Regular visits after that cost less."
    ],
    faq: [
      ["How long does it take to clean a 3-bedroom house?", "It depends on the number of bathrooms and the type of clean. The calculator above shows an estimate of cleaner hours."],
      ["Should I tip my house cleaner?", "Tipping is common for one-time and deep cleans, and at the holidays for regular cleaners. It's optional."],
      ["Do I need to be home?", "Not usually. Many people leave a key or door code for regular cleaners."]
    ]
  },

  // ---------------- Towing / roadside ----------------
  {
    slug: "fuel-delivery-cost",
    service: "towing",
    job: "roadside fuel delivery",
    title: "Fuel Delivery Cost: What It Costs When You Run Out of Gas",
    description: "What roadside fuel delivery costs when you run out of gas, whether the fuel is included, and how to check if your insurance or auto club covers it.",
    intro: "If you run out of gas, a roadside service can bring a few gallons to get you to the nearest station. You usually pay a flat call-out fee, plus the fuel itself at or above pump prices. Nights and weekends cost more. Many insurance policies and auto clubs include fuel delivery, though some still charge for the fuel.",
    rows: [
      { label: "Fuel delivery, regular hours", v: { job: 2, miles: 10, when: 0 } },
      { label: "Fuel delivery, night or weekend", v: { job: 2, miles: 10, when: 1 } }
    ],
    calc: { job: 2, miles: 10, when: 0 },
    included: [
      "A service truck sent to your car",
      "Enough fuel to reach a nearby station, usually a few gallons",
      "Help getting the car started again"
    ],
    factors: [
      "Timing. Nights, weekends and holidays often cost more.",
      "Location. Remote areas and highways can add a travel fee.",
      "Fuel. The gas is often charged on top of the service fee.",
      "Fuel type. Diesel may cost more or need a different truck.",
      "Coverage. Insurance and auto clubs often cover the call-out."
    ],
    diy: "If you're near a station and it's safe to walk, a small approved gas can is the cheapest fix. Keep the can empty and stored safely in the trunk only when you need it. Don't carry a full can of gas in the cabin. Most cars need a few gallons to restart reliably after running dry.",
    tips: [
      "Check your insurance, auto club and credit card benefits before you pay.",
      "Ask whether the fuel is included in the price or charged separately.",
      "Pull fully off the road and turn on your hazard lights while you wait."
    ],
    faq: [
      ["How much fuel do they bring?", "Usually a few gallons, enough to reach a gas station. Ask when you call."],
      ["Will my car start after running out of gas?", "Most do after a few gallons, though some cars need several tries to pull fuel back through the lines."],
      ["Can they deliver diesel?", "Many services can. Tell the dispatcher your fuel type when you call."]
    ]
  },

  // ---------------- Mobile tire service ----------------
  {
    slug: "spare-tire-change-cost",
    service: "mobile-tire-service",
    job: "a spare tire change",
    title: "Spare Tire Change Cost: Roadside Flat Tire Help",
    description: "What a mobile tire tech or roadside service charges to put on your spare, what's included, and when a plug or patch on the spot may be the better fix.",
    intro: "If you have a flat and a usable spare, a mobile tire tech or roadside service can come to you and swap it on. It's a quick job, usually priced as a flat call-out. Larger trucks and SUVs, and wheels 20 inches and up, may cost more. A temporary spare is meant for short distances, so plan to repair or replace the flat soon.",
    rows: [
      { label: "Spare tire swap, car", v: { job: 1, tires: 1, vehicle: 0 } },
      { label: "Spare tire swap, SUV or light truck", v: { job: 1, tires: 1, vehicle: 1 } },
      { label: "Spare tire swap, large wheels (20 inch and up)", v: { job: 1, tires: 1, vehicle: 2 } },
      { label: "Flat repair on the spot instead, car, for comparison", v: { job: 0, tires: 1, vehicle: 0 } }
    ],
    calc: { job: 1, tires: 1, vehicle: 0 },
    included: [
      "A tech sent to your car",
      "The car jacked up safely and the flat removed",
      "Your spare checked for air and mounted",
      "Lug nuts tightened and the flat stored in your trunk"
    ],
    factors: [
      "Vehicle. SUVs, trucks and large wheels take more time and equipment.",
      "Location. Highways and remote areas can add a travel fee.",
      "Spare condition. A low or flat spare needs air first.",
      "Locking lug nuts. A missing lug key slows the job down.",
      "Coverage. Insurance and auto clubs often cover a spare swap."
    ],
    diy: "Changing to your spare yourself takes the jack and lug wrench that came with your car. Park on flat, solid ground away from traffic, loosen the lug nuts before lifting, and tighten them in a star pattern. Check the spare's air pressure every few months so it's ready when you need it.",
    tips: [
      "Check your insurance and auto club before you pay. Many cover spare swaps.",
      "Keep your locking lug nut key in the glove box.",
      "Ask whether the tech can patch the flat on the spot instead, if the damage is in the tread."
    ],
    faq: [
      ["How far can I drive on a temporary spare?", "Most compact spares are meant for short distances at lower speeds. Check the label on the spare or your owner's manual."],
      ["Can they fix my flat instead?", "Many mobile tire techs can plug and patch a puncture in the tread on the spot, so you don't need the spare at all."],
      ["What if my car has no spare?", "Many newer cars come with a repair kit instead. A mobile tire tech can repair the tire or bring a replacement."]
    ]
  }
];

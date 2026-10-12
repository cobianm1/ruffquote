// Weekly batch, 2026-10-12: two-story window cleaning, lawn mowing per acre,
// jump start service and TPMS sensor replacement. Same shape as guides.js.
// Prose never states dollar amounts. The computed table on each page shows them.

module.exports = [
  // ---------------- Window cleaning ----------------
  {
    slug: "window-cleaning-cost-two-story",
    service: "window-cleaning",
    job: "window cleaning on a two-story house",
    title: "Window Cleaning Cost for a Two-Story House",
    description: "What window cleaning costs on a two-story home, outside only or inside and out, what changes the price, and what a good window cleaner includes.",
    intro: "Second-story windows take longer than ground-floor ones. The cleaner needs ladders or a water-fed pole, and moving them around the house adds time. Most two-story homes have 20 to 35 windows. Cleaning the inside too nearly doubles the work, so many people do the outside twice a year and the inside once.",
    rows: [
      { label: "20 windows, outside only", v: { windows: 20, stories: 1, sides: 0 } },
      { label: "25 windows, inside and outside", v: { windows: 25, stories: 1, sides: 1 } },
      { label: "35 windows, inside and outside", v: { windows: 35, stories: 1, sides: 1 } }
    ],
    calc: { windows: 25, stories: 1, sides: 1 },
    included: [
      "Glass washed and squeegeed on every window you booked",
      "Frames and sills wiped down",
      "Ladders or a water-fed pole for the upper floor",
      "Drop cloths or towels used inside to protect floors"
    ],
    factors: [
      "Number of windows. Most pros price per window or per pane.",
      "Access. Windows over roofs, decks or steep slopes take extra setup.",
      "Inside and out. Cleaning both sides nearly doubles the time.",
      "Extras. Screens, tracks and hard water stains usually cost extra.",
      "Divided panes. French-style windows with many small panes take longer."
    ],
    diy: "Ground-floor windows are an easy weekend job with a squeegee, a scrubber and a bucket. Upper-floor outside glass is where most people hire out, because ladder work on a second story is risky. A water-fed pole with a filter lets you reach some upper windows from the ground, but it costs more up front.",
    tips: [
      "Count your windows before you call, so quotes are easy to compare.",
      "Ask whether screens and tracks are included or extra.",
      "Ask whether the company carries liability insurance for ladder work."
    ],
    faq: [
      ["Why does a second story cost more?", "The cleaner has to move ladders or poles around the house, and the work takes more care. Expect a higher price per window than on a one-story home."],
      ["How often should I clean the windows on a two-story house?", "Outside twice a year and inside once a year is common. Homes near trees, roads or the coast may need it more often."],
      ["Can they reach windows over a roof?", "Usually, yes. Some cleaners work from the roof and others use a long pole. Mention them when you ask for a quote."]
    ]
  },

  // ---------------- Lawn mowing ----------------
  {
    slug: "lawn-mowing-cost-per-acre",
    service: "lawn-mowing",
    job: "mowing a large lawn",
    title: "Lawn Mowing Cost Per Acre: Large Yard Prices",
    description: "What it costs to mow a half-acre or one-acre lawn, how often it pays to schedule service, and what changes the price for big yards.",
    intro: "Big lawns are usually mowed with a riding or zero-turn mower, so the price per acre drops as the yard gets bigger. Trees, beds and fences still need trimming by hand, and that is where most of the time goes. A regular weekly or biweekly visit costs less per cut than a one-time mow of tall grass.",
    rows: [
      { label: "Half acre, regular service", v: { size: 2, freq: 0 } },
      { label: "One acre, regular service", v: { size: 3, freq: 0 } },
      { label: "One acre, one-time or overgrown", v: { size: 3, freq: 1 } }
    ],
    calc: { size: 3, freq: 0 },
    included: [
      "Grass mowed with a riding or zero-turn mower",
      "Trimming around trees, beds, fences and the house",
      "Edging along driveways and walkways",
      "Clippings blown off hard surfaces"
    ],
    factors: [
      "Yard size. Bigger lots cost more per visit but less per acre.",
      "Frequency. Weekly or biweekly service costs less per cut.",
      "Obstacles. Trees, beds and fences add hand trimming.",
      "Slopes and ditches. Steep ground needs a push mower or string trimmer.",
      "Overgrowth. Tall grass may need two passes or a bagging fee."
    ],
    diy: "If you plan to mow an acre yourself, a riding mower or zero-turn mower makes it a one- or two-hour job instead of an afternoon. The mower is the big cost, so compare it with a full season of mowing service. Keep the blade sharp and change your mowing direction each time for a cleaner cut.",
    tips: [
      "Ask for a price per visit and a season price. Many pros give a discount for a full season.",
      "Walk the yard with the pro so they see slopes, ditches and gates before quoting.",
      "Ask whether trimming and edging are included in the per-visit price."
    ],
    faq: [
      ["Is mowing an acre priced by the hour or by the visit?", "Most pros quote a flat price per visit after seeing the yard. Some charge by the hour for very large or rough properties."],
      ["How long does it take to mow an acre?", "With a commercial zero-turn mower, often under an hour of mowing, plus time for trimming and edging."],
      ["Does a big yard need weekly mowing?", "In peak growing season, weekly or every two weeks keeps the grass healthy and the price per cut lower."]
    ]
  },

  // ---------------- Towing / roadside ----------------
  {
    slug: "jump-start-cost",
    service: "towing",
    job: "a roadside jump start",
    title: "Jump Start Service Cost: What a Roadside Jump Costs",
    description: "How much a roadside jump start costs, how nights and weekends change the price, and how to check whether your insurance or auto club already covers it.",
    intro: "A dead battery is one of the most common roadside calls. A tow company or roadside service sends a truck with a jump pack, starts your car and checks that it keeps running. You pay a flat call-out fee, which is usually higher at night and on weekends. Many drivers already have free jump starts through insurance or an auto club.",
    rows: [
      { label: "Jump start, regular hours", v: { job: 0, miles: 10, when: 0 } },
      { label: "Jump start, night or weekend", v: { job: 0, miles: 10, when: 1 } }
    ],
    calc: { job: 0, miles: 10, when: 0 },
    included: [
      "A service truck sent to your car",
      "Your battery jumped with a jump pack or cables",
      "A quick check that the car starts and stays running",
      "Advice on whether the battery or alternator needs a test"
    ],
    factors: [
      "Timing. Nights, weekends and holidays often cost more.",
      "Location. Remote areas and highways can add a travel fee.",
      "Access. Cars in tight garages may need longer cables or extra time.",
      "Coverage. Insurance, auto clubs and some credit cards include jump starts."
    ],
    diy: "A portable lithium jump starter is the easiest way to skip the service call. It fits in a glove box, needs no second car and can jump most cars on one charge. Jumper cables also work if someone can help. If your car keeps dying, have the battery and alternator tested, because a jump only gets you going.",
    tips: [
      "Check your car insurance, auto club, new-car warranty and credit card benefits before you pay.",
      "Ask for the total price before the truck is sent.",
      "If the car dies again soon after, get the battery tested. Many parts stores test it for free."
    ],
    faq: [
      ["How long does a jump start take?", "Once the truck arrives, usually just a few minutes. The wait for the truck is often the longest part."],
      ["Can they jump an electric or hybrid car?", "Many hybrids and electric cars have a small 12-volt battery that can be jumped. Tell the dispatcher your make and model."],
      ["What if the car won't start after a jump?", "The battery may be dead for good, or the problem may be the starter or alternator. Some roadside services can replace a battery on the spot. Otherwise you may need a tow."]
    ]
  },

  // ---------------- Mobile tire service ----------------
  {
    slug: "tpms-sensor-replacement-cost",
    service: "mobile-tire-service",
    job: "TPMS sensor replacement",
    title: "TPMS Sensor Replacement Cost: Fixing a Tire Pressure Light",
    description: "What it costs to replace a tire pressure (TPMS) sensor, why the light comes on, how many sensors you may need and what a mobile tire tech includes.",
    intro: "Each wheel on most newer cars has a small sensor that reports tire pressure. Their batteries last around 5 to 10 years and can't be replaced, so old sensors fail one at a time. A flashing or steady light that stays on after you fill the tires often means a bad sensor. The tire comes off the wheel to swap the sensor, then the new one is programmed to your car.",
    rows: [
      { label: "1 sensor, car", v: { job: 3, tires: 1, vehicle: 0 } },
      { label: "2 sensors, SUV or light truck", v: { job: 3, tires: 2, vehicle: 1 } },
      { label: "All 4 sensors, car", v: { job: 3, tires: 4, vehicle: 0 } }
    ],
    calc: { job: 3, tires: 1, vehicle: 0 },
    included: [
      "A scan to find which sensor has failed",
      "Tire taken off the wheel and the old sensor removed",
      "New sensor installed with a new valve stem seal",
      "Tire remounted, balanced and filled to the right pressure",
      "Sensor programmed so the warning light goes off"
    ],
    factors: [
      "Number of sensors. Each sensor means dismounting one tire.",
      "Sensor type. Factory sensors cost more than programmable aftermarket ones.",
      "Wheel size. Large and low-profile tires take longer to dismount.",
      "Programming. Some cars need a scan tool or a drive cycle to learn new sensors."
    ],
    diy: "Replacing a sensor yourself means taking the tire off the wheel, which needs a tire machine for most people. What you can do at home is rule out low pressure. Check every tire, including the spare if your car monitors it, and fill them to the pressure on the door sticker. If the light stays on after a short drive, a sensor has likely failed.",
    tips: [
      "Check and fill all tires first. Cold weather alone can turn the light on.",
      "If your sensors are over 7 years old, replacing them all at once can save repeat visits.",
      "Ask whether the price includes programming and balancing."
    ],
    faq: [
      ["How do I know if it's the sensor and not low pressure?", "A light that flashes for about a minute and then stays on usually means a sensor problem. A steady light right away usually means low pressure."],
      ["Do I need to replace all four sensors?", "Not always. But sensors are often the same age, so when one fails the others may follow soon."],
      ["Is it safe to drive with the light on?", "You can drive, but you lose the warning if a tire goes low. Check your pressures by hand until it's fixed."]
    ]
  }
];

// Extra cost guides (batch A): car detailing, mobile mechanic, pressure washing,
// window cleaning, gutter cleaning, lawn mowing and trash can cleaning.
// Same schema as guides.js. Prose never states dollar amounts; the build prices the table.

module.exports = [
  // ---------------- Car detailing ----------------
  {
    slug: "exterior-car-wash-cost",
    service: "car-detailing",
    job: "an exterior car wash",
    title: "Exterior Car Wash Cost: Hand Wash Prices by Vehicle Size",
    description: "What a professional exterior hand wash costs for a sedan, SUV or truck, what the detailer actually does, and how it compares to an automatic wash.",
    intro: "An exterior hand wash is the quickest and cheapest service a detailer offers. The price mostly depends on the size of your vehicle and how dirty it is. Many mobile detailers will do it right in your driveway.",
    rows: [
      { label: "Exterior wash, sedan", v: { vehicle: 0, pkg: 0, dirty: 0 } },
      { label: "Exterior wash, SUV", v: { vehicle: 1, pkg: 0, dirty: 0 } },
      { label: "Exterior wash, truck or van", v: { vehicle: 2, pkg: 0, dirty: 0 } }
    ],
    calc: { vehicle: 0, pkg: 0, dirty: 0 },
    included: [
      "Pre-rinse to loosen dirt and grit",
      "Hand wash with a pH-balanced car soap",
      "Wheels, tires and wheel wells cleaned",
      "Windows cleaned on the outside",
      "Hand dried with microfiber towels",
      "Tire shine applied"
    ],
    factors: [
      "Vehicle size. SUVs, trucks and vans have more paint and glass to cover.",
      "How dirty it is. Mud, road salt and bug splatter take extra time and products.",
      "Add-ons. Wax, clay bar treatment and engine bay cleaning are usually extra.",
      "Mobile service. Some detailers add a small charge if they bring their own water and power."
    ],
    diy: "Washing your own car is easy and cheap if you have a hose, two buckets, car soap and a few microfiber towels. Skip dish soap, which strips wax, and avoid washing in direct sun so soap does not dry on the paint. A pro wash makes more sense when you are short on time or your building does not allow car washing.",
    tips: [
      "Ask about a monthly wash plan. Many detailers charge less per visit for regular customers.",
      "Add a spray wax every few washes instead of paying for a full wax each time.",
      "Book a wash right after a road trip or a snowstorm so salt and bugs do not sit on the paint."
    ],
    faq: [
      ["Is a hand wash better than an automatic car wash?", "A careful hand wash is gentler on paint than brushes, which can leave fine swirl marks. Touchless automatic washes are gentler but may not remove all the grime."],
      ["How often should I wash my car?", "Every two weeks is a common habit. Wash more often in winter if your roads are salted, or if birds and trees leave droppings and sap on the paint."],
      ["Does an exterior wash include the inside?", "No. Vacuuming and wiping down the interior is part of an interior or full detail."]
    ]
  },
  {
    slug: "pet-hair-removal-car-detailing-cost",
    service: "car-detailing",
    job: "pet hair removal car detailing",
    title: "Pet Hair Removal Car Detailing Cost: What to Expect",
    description: "What a detailer charges to remove dog or cat hair from your car, why pet hair adds time, and simple ways to keep it from building up again.",
    intro: "Pet hair weaves itself into carpet and cloth seats, so a normal vacuum barely touches it. Detailers use rubber brushes, special tools and a lot of patience to pull it out. That extra time is why most charge more when there is a lot of pet hair.",
    rows: [
      { label: "Interior detail with pet hair, sedan", v: { vehicle: 0, pkg: 1, dirty: 1 } },
      { label: "Interior detail with pet hair, SUV", v: { vehicle: 1, pkg: 1, dirty: 1 } },
      { label: "Full detail with pet hair, SUV", v: { vehicle: 1, pkg: 2, dirty: 1 } }
    ],
    calc: { vehicle: 1, pkg: 1, dirty: 1 },
    included: [
      "Pet hair loosened with rubber brushes or stones and vacuumed out",
      "Seats, carpets and cargo area vacuumed in detail",
      "Floor mats cleaned",
      "Hard surfaces wiped down",
      "Interior glass cleaned, including nose prints"
    ],
    factors: [
      "Amount of hair. A light dusting is quick, while a car that carries a shedding dog every day can take hours.",
      "Type of hair. Short, stiff hair from some breeds sticks into fabric harder than long, soft hair.",
      "Upholstery. Cloth seats and carpet hold hair much more than leather.",
      "Odor and stains. Smell removal and shampooing are often separate add-ons."
    ],
    diy: "You can get a lot of pet hair out yourself with a rubber pet brush, a damp rubber glove or a pumice-style detailing stone, followed by a good vacuum. It is slow, tiring work in a heavily furred car. If you have tried and it keeps coming back, a pro detail followed by a seat cover is a good combination.",
    tips: [
      "Use a washable seat cover or cargo liner for your pet so the next cleaning is quicker.",
      "Brush your pet before car trips, especially in shedding season.",
      "Tell the detailer about pet hair when you book so the quote is accurate and there is no surprise charge."
    ],
    faq: [
      ["Why do detailers charge extra for pet hair?", "Pet hair can double the time it takes to vacuum an interior. The extra charge covers that labor."],
      ["Can all pet hair be removed?", "Most of it can. A few stray hairs deep in seams may remain in heavily furred cars, so ask what result to expect."],
      ["Does pet hair removal include odor removal?", "Not always. Odor treatment or an ozone treatment is often priced separately."]
    ]
  },

  // ---------------- Mobile mechanic ----------------
  {
    slug: "truck-brake-pad-replacement-cost",
    service: "mobile-mechanic",
    job: "truck brake pad replacement",
    title: "Truck and SUV Brake Pad Replacement Cost Per Axle",
    description: "Brake pad replacement cost for trucks, SUVs and vans, per axle, done by a mobile mechanic. Why bigger vehicles cost more and when rotors are needed too.",
    intro: "Trucks and SUVs use larger, heavier brake pads than a car, and the wheels take more effort to remove. That makes a brake job a little pricier. Pads are usually done one axle at a time, front or rear.",
    rows: [
      { label: "Brake pads, one axle, truck, SUV or van", v: { job: 2, vehicle: 1 } },
      { label: "Brake pads, one axle, car, for comparison", v: { job: 2, vehicle: 0 } },
      { label: "Oil change, truck, SUV or van", v: { job: 0, vehicle: 1 } }
    ],
    calc: { job: 2, vehicle: 1 },
    included: [
      "Wheels removed and old pads taken off",
      "Caliper slides cleaned and lubricated",
      "New pads and hardware installed on one axle",
      "Rotors measured and inspected",
      "Brake fluid level checked",
      "Short test drive to bed in the new pads"
    ],
    factors: [
      "Rotors. Heavy vehicles are hard on rotors, and worn rotors add parts and labor.",
      "Towing and hauling. Trucks that tow often may need heavy-duty pads, which cost more.",
      "Rust. Stuck caliper bolts and seized slides are common on older trucks in snowy areas.",
      "Heavy-duty models. Three-quarter and one-ton trucks use bigger parts than half-ton trucks."
    ],
    diy: "Replacing truck brake pads is similar to a car, just with heavier wheels and bigger parts. You need a good floor jack, jack stands rated for the weight and a torque wrench. Since brakes keep you safe, leave it to a pro if you are unsure or if the calipers or rotors look damaged.",
    tips: [
      "Replace pads before they grind. Metal-on-metal contact ruins rotors fast on a heavy vehicle.",
      "If you tow, ask for pads rated for towing. They cost a bit more but hold up better.",
      "Have both axles checked in one visit so you only pay one trip charge if both need work."
    ],
    faq: [
      ["Why do truck brakes cost more than car brakes?", "The pads are bigger, the parts cost more and the wheels are heavier to handle, so both parts and labor go up."],
      ["Do front brakes wear faster than rear brakes?", "Usually yes. The front brakes do most of the stopping, so they tend to need pads more often."],
      ["Can a mobile mechanic do truck brakes in my driveway?", "Yes, as long as there is flat, solid ground to jack up the truck safely."]
    ]
  },

  // ---------------- Pressure washing ----------------
  {
    slug: "deck-pressure-washing-cost",
    service: "pressure-washing",
    job: "deck or fence pressure washing",
    title: "Deck and Fence Pressure Washing Cost by Size",
    description: "What it costs to pressure wash a wood or composite deck or a fence, by square footage. What is included, what raises the price and when to stain.",
    intro: "Washing a deck or fence takes more care than a driveway. Wood can splinter or gouge under high pressure, so pros use lower pressure and a cleaner. That slower approach is why decks and fences cost more per square foot than concrete.",
    rows: [
      { label: "Small deck, 200 sq ft", v: { surface: 2, sqft: 200 } },
      { label: "Medium deck, 400 sq ft", v: { surface: 2, sqft: 400 } },
      { label: "Fence, about 600 sq ft of boards", v: { surface: 2, sqft: 600 } }
    ],
    calc: { surface: 2, sqft: 400 },
    included: [
      "Furniture and grills moved off the deck",
      "Wood or composite cleaner applied to lift dirt and mildew",
      "Low-pressure rinse following the grain of the boards",
      "Railings and steps cleaned",
      "Nearby plants rinsed before and after"
    ],
    factors: [
      "Square footage. Count both sides of a fence if you want both washed.",
      "Material. Soft woods like cedar need extra care, while composite usually washes faster.",
      "Mildew and algae. Shady decks with green or black growth need more cleaner and time.",
      "Railings and stairs. Spindles and steps take far longer than flat decking."
    ],
    diy: "You can wash a deck yourself with a rented pressure washer, but it is easy to raise the grain or carve marks into the wood if you hold the tip too close. Use a wide fan tip, low pressure and a deck cleaner. If you are not confident, a pro wash is cheaper than repairing damaged boards.",
    tips: [
      "Wash and stain in the same season. A clean, dry deck is the right time to seal it.",
      "Bundle the deck with your driveway or patio to spread the minimum charge across more work.",
      "Clear the deck of furniture and planters yourself before the crew arrives."
    ],
    faq: [
      ["Will pressure washing damage my deck?", "It can if done with too much pressure. A good pro uses low pressure and cleaner, and works with the grain."],
      ["How long should I wait to stain after washing?", "Most stain makers say to let the wood dry for at least a day or two. Check the label on your stain."],
      ["Can composite decks be pressure washed?", "Many can, at low pressure. Check your decking maker's care guide first, since some limit pressure or nozzle type."]
    ]
  },
  {
    slug: "patio-cleaning-cost",
    service: "pressure-washing",
    job: "patio cleaning",
    title: "Patio Cleaning Cost: Pressure Washing Pavers and Concrete",
    description: "Patio pressure washing cost for concrete, pavers and stone by size. See what is included, why stains and sealing add to the price, and how to save.",
    intro: "A patio is usually a quick job for a pressure washer. Most pros use a surface cleaner that leaves an even finish without stripes. Small patios often fall under the minimum charge, so it pays to add another surface to the same visit.",
    rows: [
      { label: "Small patio, 200 sq ft", v: { surface: 3, sqft: 200 } },
      { label: "Medium patio, 400 sq ft", v: { surface: 3, sqft: 400 } },
      { label: "Large patio, 800 sq ft", v: { surface: 3, sqft: 800 } }
    ],
    calc: { surface: 3, sqft: 400 },
    included: [
      "Patio furniture and planters moved aside",
      "Pre-treatment for mildew and light stains",
      "Surface cleaner pass for an even, streak-free finish",
      "Edges and corners detailed with a wand",
      "Final rinse of the patio and nearby walls"
    ],
    factors: [
      "Size. Most pros price by the square foot with a minimum per visit.",
      "Surface type. Pavers can lose joint sand during washing, which may need refilling.",
      "Stains. Grease from grills, rust and leaf stains need special treatment.",
      "Sealing. Sealing pavers or concrete after cleaning is a separate service."
    ],
    diy: "Washing a patio is one of the easier pressure washing jobs to do yourself, especially on plain concrete. A surface cleaner attachment helps avoid stripes. On pavers, keep the pressure moderate so you do not blast out the joint sand, and plan to sweep in new sand afterward.",
    tips: [
      "Combine the patio with the driveway or walkways so you are not paying a minimum charge for a small job.",
      "Ask whether re-sanding paver joints is included if you have pavers.",
      "Clean in spring so the patio looks fresh for the outdoor season."
    ],
    faq: [
      ["How often should a patio be pressure washed?", "Once a year is enough for most patios. Shady or damp patios may need it more often."],
      ["Will pressure washing remove grease stains?", "Light grease often comes out with a degreaser. Old, deep stains may fade but not fully disappear."],
      ["Should I seal my pavers after cleaning?", "Sealing can help pavers resist stains and weeds. It is optional, and it should be done only after the pavers are fully dry."]
    ]
  },

  // ---------------- Window cleaning ----------------
  {
    slug: "window-cleaning-cost-one-story",
    service: "window-cleaning",
    job: "window cleaning for a one-story house",
    title: "Window Cleaning Cost for a One-Story House",
    description: "How much professional window cleaning costs for a one-story home, outside only or inside and out. What is included and how to keep the price down.",
    intro: "A one-story home is the easiest and cheapest house to get windows cleaned on. The cleaner can reach most glass from the ground or a short ladder. The price mostly comes down to how many windows you have and whether you want the inside done too.",
    rows: [
      { label: "15 windows, outside only", v: { windows: 15, stories: 0, sides: 0 } },
      { label: "20 windows, outside only", v: { windows: 20, stories: 0, sides: 0 } },
      { label: "20 windows, inside and outside", v: { windows: 20, stories: 0, sides: 1 } }
    ],
    calc: { windows: 20, stories: 0, sides: 0 },
    included: [
      "Exterior glass washed and squeegeed dry",
      "Frames and sills wiped",
      "Glass doors cleaned",
      "Interior glass cleaned when inside service is booked"
    ],
    factors: [
      "Number of windows. Most cleaners price per window or per pane.",
      "Inside and out. Adding the inside nearly doubles the time.",
      "Window style. Divided-light windows with many small panes take longer than large single panes.",
      "Extras. Screens, tracks and hard water stains are usually extra."
    ],
    diy: "One-story windows are a good DIY job. A squeegee, a scrubber, a bucket and a little dish soap in water will handle most glass. A pro is still worth it if you have lots of windows, hard water spots, or just do not want to spend a weekend on it.",
    tips: [
      "Count your windows before you call so you can compare quotes on the same number.",
      "Get the outside done more often than the inside. Exterior glass gets dirty much faster.",
      "Remove screens yourself and rinse them with a hose if the cleaner charges extra for screens."
    ],
    faq: [
      ["How do I count windows for a quote?", "Count each window you can see from outside. Ask the cleaner whether they count a double-hung window as one or two."],
      ["Do I need to be home?", "Not for outside-only cleaning, as long as gates are unlocked. For inside cleaning, someone needs to let the cleaner in."],
      ["How often should windows be cleaned?", "Twice a year is a common schedule for the outside, and once a year for the inside."]
    ]
  },
  {
    slug: "inside-and-outside-window-cleaning-cost",
    service: "window-cleaning",
    job: "inside and outside window cleaning",
    title: "Inside and Outside Window Cleaning Cost",
    description: "What it costs to have windows cleaned on both sides, for one- and two-story homes. What is included, why it takes longer and how to save.",
    intro: "Cleaning windows inside and out takes close to twice as long as outside only. The cleaner has to move through your home, protect floors and work around furniture. Taller homes add more time because upper windows need ladders or poles.",
    rows: [
      { label: "15 windows, 1 story, inside and out", v: { windows: 15, stories: 0, sides: 1 } },
      { label: "25 windows, 2 stories, inside and out", v: { windows: 25, stories: 1, sides: 1 } },
      { label: "40 windows, 2 stories, inside and out", v: { windows: 40, stories: 1, sides: 1 } }
    ],
    calc: { windows: 25, stories: 1, sides: 1 },
    included: [
      "Interior and exterior glass washed and squeegeed",
      "Frames and sills wiped on both sides",
      "Glass doors cleaned inside and out",
      "Drop cloths or towels used under interior windows",
      "Upper-floor windows reached by ladder or water-fed pole"
    ],
    factors: [
      "Number of windows. More glass means more time on both sides.",
      "Height. Second and third story windows take longer and need more equipment.",
      "Access inside. Furniture, blinds and window decor in the way slow things down.",
      "Extras. Screens, tracks and hard water stain removal usually cost more."
    ],
    diy: "You can clean inside glass yourself easily with a spray cleaner and a microfiber cloth or squeegee. The outside of upper-story windows is the hard and risky part. Some homeowners clean the inside themselves and hire a pro for the outside only.",
    tips: [
      "Move furniture away from windows and open blinds before the cleaner arrives.",
      "Ask about a twice-a-year plan where only one visit includes the inside.",
      "Book in spring or early fall, when the weather is mild and schedules are more open."
    ],
    faq: [
      ["Why does inside cleaning cost so much more?", "Each window gets cleaned twice, and indoor work is slower because the cleaner must protect your floors and work around furniture."],
      ["Do window cleaners clean blinds?", "Usually not. Blind cleaning is often a separate service or not offered."],
      ["Are window tracks included?", "Often not. Many cleaners charge extra to vacuum and wipe tracks."]
    ]
  },

  // ---------------- Gutter cleaning ----------------
  {
    slug: "gutter-cleaning-cost-one-story",
    service: "gutter-cleaning",
    job: "one-story gutter cleaning",
    title: "Gutter Cleaning Cost for a One-Story House",
    description: "Gutter cleaning cost for a single-story home by length of gutter, with or without downspout flushing. What is included and how to save.",
    intro: "Cleaning gutters on a one-story house is the most affordable gutter job. The roofline is low, ladders are short and the work goes quickly. Most pros price by the length of gutter, with a minimum charge per visit.",
    rows: [
      { label: "120 ft, one-story, gutters only", v: { feet: 120, stories: 0, flush: 0 } },
      { label: "150 ft, one-story, with downspouts", v: { feet: 150, stories: 0, flush: 1 } },
      { label: "200 ft, one-story, with downspouts", v: { feet: 200, stories: 0, flush: 1 } }
    ],
    calc: { feet: 150, stories: 0, flush: 1 },
    included: [
      "Leaves and debris removed by hand and bagged",
      "Gutters rinsed to check flow",
      "Downspouts flushed when included",
      "Debris cleaned up from the roof edge and ground",
      "Loose hangers or leaks pointed out"
    ],
    factors: [
      "Length. More feet of gutter means more time on the ladder.",
      "How full they are. Gutters skipped for a few years can be packed with heavy, wet debris.",
      "Gutter guards. Guards must be lifted or removed to clean underneath.",
      "Roof pitch. Some pros work from the roof, and steep roofs slow them down."
    ],
    diy: "Many homeowners clean one-story gutters themselves with a sturdy ladder, gloves, a scoop and a hose. Keep the ladder on firm, level ground and do not lean out to reach. If you have a bad back, poor balance or no helper to steady the ladder, hiring a pro is a small cost.",
    tips: [
      "Schedule cleaning in late fall after leaves drop, plus once in spring if you have trees.",
      "Ask a neighbor to book the same day. Some pros give a discount for nearby homes.",
      "Trim tree branches back from the roof to slow down how fast gutters fill."
    ],
    faq: [
      ["How long does it take to clean one-story gutters?", "For a typical home, a pro usually finishes in an hour or two."],
      ["Do I need to be home for gutter cleaning?", "Usually not, as long as the pro can reach every side of the house and get to a hose."],
      ["What happens if I never clean my gutters?", "Water can spill over and soak the foundation, rot fascia boards and damage landscaping."]
    ]
  },
  {
    slug: "downspout-cleaning-cost",
    service: "gutter-cleaning",
    job: "downspout flushing",
    title: "Downspout Cleaning Cost: Flushing Clogged Downspouts",
    description: "What it costs to have downspouts flushed and cleared along with a gutter cleaning. Signs of a clog, what pros do and how to prevent it.",
    intro: "A clean gutter does not help much if the downspout is clogged. Pros usually flush downspouts during a gutter cleaning, and it adds a modest amount to the job. The table compares gutter cleaning with and without downspout flushing.",
    rows: [
      { label: "150 ft, one-story, gutters only", v: { feet: 150, stories: 0, flush: 0 } },
      { label: "150 ft, one-story, with downspouts flushed", v: { feet: 150, stories: 0, flush: 1 } },
      { label: "150 ft, two-story, with downspouts flushed", v: { feet: 150, stories: 1, flush: 1 } }
    ],
    calc: { feet: 150, stories: 0, flush: 1 },
    included: [
      "Gutters cleaned so water can reach the downspouts",
      "Each downspout flushed with a hose from the top",
      "Stubborn clogs cleared with a plumbing snake or by taking apart elbows",
      "Water flow checked at the bottom of each downspout"
    ],
    factors: [
      "Number of downspouts. More downspouts mean more to flush and check.",
      "Severity of clogs. Packed leaves, nests or tennis balls may need the downspout taken apart.",
      "Underground drains. Downspouts that run into buried pipes may need a drain snake or a plumber.",
      "Height. Downspouts on second-story gutters take longer to reach and flush."
    ],
    diy: "You can often clear a downspout yourself by running a hose down from the top or snaking it from the bottom. A clog in an elbow may mean removing a few screws to take it apart. Underground drain lines are harder, and a pro or plumber is the better choice if water backs up below ground.",
    tips: [
      "Ask for downspout flushing at the same visit as gutter cleaning instead of a separate trip.",
      "Add leaf strainers at the top of each downspout to catch debris before it enters.",
      "Watch your gutters during heavy rain. Water spilling over near a downspout is a sign of a clog."
    ],
    faq: [
      ["How do I know if a downspout is clogged?", "Common signs are water overflowing the gutter near the downspout, little or no water coming out the bottom, or a gurgling sound."],
      ["Is downspout flushing included in gutter cleaning?", "Some pros include it and others charge a little extra. Ask when you get the quote."],
      ["Can a clogged downspout damage my house?", "Yes. Overflowing water can soak the foundation, cause basement leaks and rot wood trim."]
    ]
  },

  // ---------------- Lawn mowing ----------------
  {
    slug: "lawn-mowing-cost-per-cut",
    service: "lawn-mowing",
    job: "lawn mowing per cut",
    title: "Lawn Mowing Cost Per Cut by Yard Size",
    description: "How much lawn mowing costs per visit for small, medium, large and very large yards on a regular schedule. What is included and how to pay less.",
    intro: "Most lawn care pros charge a flat price per visit based on the size of your yard. Regular weekly or every-other-week service is the cheapest way to buy mowing, because the grass stays short and the crew works fast.",
    rows: [
      { label: "Small yard, 1/8 acre, recurring", v: { size: 0, freq: 0 } },
      { label: "Medium yard, 1/4 acre, recurring", v: { size: 1, freq: 0 } },
      { label: "Large yard, 1/2 acre, recurring", v: { size: 2, freq: 0 } }
    ],
    calc: { size: 1, freq: 0 },
    included: [
      "Front and back lawn mowed",
      "Edging along sidewalks and the driveway",
      "String trimming around trees, beds and fences",
      "Clippings blown off walks, patios and the driveway"
    ],
    factors: [
      "Yard size. Bigger lots take longer and may need a larger mower.",
      "How often. Weekly or biweekly service costs less per cut than a one-time visit.",
      "Obstacles. Trees, flower beds, play sets and fences mean more trimming.",
      "Slopes and access. Steep hills and narrow gates slow the crew down.",
      "Bagging. Bagging and hauling clippings is usually extra."
    ],
    diy: "Mowing your own lawn is very doable with a push mower and a string trimmer. The real costs are the equipment, upkeep and your time every week in the growing season. Hiring out makes the most sense when you have a large yard, a busy schedule or no place to store a mower.",
    tips: [
      "Sign up for a season plan. Recurring customers usually pay less per cut.",
      "Pick up toys, hoses and dog waste before the crew comes so they do not have to work around them.",
      "Ask if mulching clippings is an option. It is often included, while bagging costs extra."
    ],
    faq: [
      ["Is weekly or every-other-week mowing better?", "Weekly is best during fast spring growth. Many yards do fine every other week in the slower summer heat."],
      ["Do I have to sign a contract?", "Some companies offer pay-per-cut. Others want a season agreement. Ask what happens if you need to pause or cancel."],
      ["Does lawn mowing include weeding?", "Usually not. Weeding beds and treating weeds in the lawn are separate services."]
    ]
  },
  {
    slug: "overgrown-lawn-mowing-cost",
    service: "lawn-mowing",
    job: "overgrown lawn mowing",
    title: "Overgrown Lawn Mowing Cost: One-Time Cut Prices",
    description: "What it costs to mow an overgrown or neglected lawn one time, by yard size. Why tall grass costs more and what to expect from a first cut.",
    intro: "Tall, overgrown grass takes much longer to cut than a lawn on a regular schedule. Crews often mow twice at different heights and clear thick clumps of clippings. That is why a one-time or catch-up cut costs more than a routine visit.",
    rows: [
      { label: "Small yard, 1/8 acre, overgrown", v: { size: 0, freq: 1 } },
      { label: "Medium yard, 1/4 acre, overgrown", v: { size: 1, freq: 1 } },
      { label: "Large yard, 1/2 acre, overgrown", v: { size: 2, freq: 1 } }
    ],
    calc: { size: 1, freq: 1 },
    included: [
      "Lawn cut down in one or more passes",
      "Edging along walks and the driveway",
      "Trimming around trees, beds and fences",
      "Hard surfaces blown clean"
    ],
    factors: [
      "Grass height. Knee-high grass may need a heavy-duty mower or brush cutter.",
      "Yard size. The extra time for tall grass adds up fast on larger lots.",
      "Clippings. Thick clippings may need to be raked or bagged, which often costs more.",
      "Hidden debris. Rocks, branches and trash in tall grass must be cleared before mowing."
    ],
    diy: "You can tackle an overgrown lawn yourself by raising the mower deck to its highest setting and lowering it over a few cuts. Very tall grass can stall a home mower or clog it. If the grass is knee-high or full of weeds and brush, a crew with commercial equipment will be faster.",
    tips: [
      "Ask whether signing up for regular service after the first cut lowers the price.",
      "Walk the yard first and remove sticks, rocks and debris.",
      "Get the cut done before the grass goes to seed or gets even taller."
    ],
    faq: [
      ["Why does an overgrown lawn cost more to mow?", "Tall grass takes extra passes, slows the mower and leaves heavy clippings to clean up. All of that adds time."],
      ["Will the lawn look good after one cut?", "Very tall grass can look pale or patchy right after a big cut. It usually greens up within a week or two of regular mowing."],
      ["Who uses overgrown lawn mowing?", "It is common for people returning from a long trip, selling a home, managing a rental or dealing with an HOA notice."]
    ]
  },

  // ---------------- Trash can cleaning ----------------
  {
    slug: "trash-can-cleaning-cost",
    service: "trash-can-cleaning",
    job: "trash can cleaning",
    title: "Trash Can Cleaning Cost: One-Time and Monthly Prices",
    description: "How much trash can cleaning costs for a one-time clean or a recurring plan. What bin cleaners do, how many bins to include and how to save.",
    intro: "Bin cleaning companies come by on trash day, right after the garbage truck empties your cans. They wash, sanitize and deodorize each bin, then leave it at the curb or by your house. Recurring plans cost less per visit than a one-time clean.",
    rows: [
      { label: "One-time clean, 2 bins", v: { bins: 2, plan: 0 } },
      { label: "Monthly plan, 2 bins, per visit", v: { bins: 2, plan: 1 } },
      { label: "Every 3 months, 2 bins, per visit", v: { bins: 2, plan: 2 } }
    ],
    calc: { bins: 2, plan: 0 },
    included: [
      "Hot-water pressure wash inside and outside each bin",
      "Lids and handles cleaned",
      "Bins sanitized and deodorized",
      "Dirty water collected instead of running into the street",
      "Bins returned to the curb or your usual spot"
    ],
    factors: [
      "Number of bins. Trash, recycling and yard waste bins each count.",
      "Plan. Monthly and quarterly plans cost less per visit than a one-time clean.",
      "Buildup. Bins that have never been cleaned take longer the first time.",
      "Location. Prices are often better in neighborhoods where the company already has many customers."
    ],
    diy: "You can clean a bin yourself with a hose, a long brush, some dish soap and a disinfectant. It is a smelly, messy job, and the dirty water has to go somewhere other than the storm drain. A service handles the mess and the wastewater, which many people find worth it in the summer.",
    tips: [
      "Ask neighbors to sign up too. Many companies discount when several homes on a street join.",
      "A quarterly plan is often enough if you bag your trash and rinse food containers.",
      "Bag food scraps tightly and keep the lid closed to cut down on smells between cleanings."
    ],
    faq: [
      ["Do I need to be home for trash can cleaning?", "No. Just leave the bins at the curb after pickup on your cleaning day."],
      ["Is trash can cleaning worth it?", "It helps with odors, flies and maggots, especially in hot weather. Many people use it in summer and pause in winter."],
      ["Does it clean recycling and yard waste bins too?", "Yes. Most companies clean any wheeled bin and charge for each one."]
    ]
  }
];

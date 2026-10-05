// Cost guide pages: one specific job each, priced by the build from `v` using services.js.
// Prose never states dollar amounts. The computed table on each page shows them.

const GUIDES = [
  // ---------------- Mobile mechanic ----------------
  {
    slug: "oil-change-cost",
    service: "mobile-mechanic",
    job: "oil change",
    title: "Oil Change Cost: What You Should Pay (Mobile Mechanic Prices)",
    description: "What an oil change costs when a mobile mechanic does it in your driveway, how cars and trucks differ, what is included, and simple ways to pay less.",
    intro: "An oil change is one of the cheapest and most common car services. The price mostly comes down to how much oil your engine holds and which oil it needs. A mobile mechanic charges about the same as many shops, and you skip the waiting room.",
    rows: [
      { label: "Oil change, car", v: { job: 0, vehicle: 0 } },
      { label: "Oil change, SUV, truck or van", v: { job: 0, vehicle: 1 } },
      { label: "Tire rotation, often done at the same visit", v: { job: 1, vehicle: 0 } }
    ],
    calc: { job: 0, vehicle: 0 },
    included: [
      "Old oil drained and the drain plug resealed",
      "New oil filter installed",
      "Fresh synthetic-blend oil filled to the correct level",
      "Washer fluid and other fluids checked and topped off",
      "Used oil and filter taken away for recycling"
    ],
    factors: [
      "Oil capacity. Most cars take around five quarts, while many trucks and V8 engines take more.",
      "Oil type. Full synthetic costs more per quart than a synthetic blend or conventional oil.",
      "Filter location. Some engines hide the filter behind covers or skid plates, which adds time.",
      "Specialty specs. Some European and diesel engines require oil that meets a specific maker approval."
    ],
    diy: "Changing your own oil is a classic beginner job if you have ramps or jack stands, a drain pan and a filter wrench. The savings are real but small, and you still have to take the old oil to a recycling drop-off. If you lack a safe way to get under the car, paying a pro is the better call.",
    tips: [
      "Check your owner's manual for the real oil change interval. Many newer cars go well past the old 3,000-mile rule.",
      "Ask the mechanic to rotate your tires during the same visit so you pay one trip charge.",
      "If your car does not require full synthetic, a synthetic blend usually costs less and works fine."
    ],
    faq: [
      ["How often do I need an oil change?", "Follow the interval in your owner's manual or the car's oil life monitor. For many modern cars it falls somewhere between 5,000 and 10,000 miles."],
      ["Is synthetic oil worth the extra cost?", "If your manual calls for synthetic, use it. If not, a synthetic blend is a reasonable middle ground for most daily drivers."],
      ["Can a mobile mechanic change oil in an apartment parking lot?", "Often yes, but some complexes ban car repairs on site. Check your lease or ask the property manager first."]
    ]
  },
  {
    slug: "tire-rotation-cost",
    service: "mobile-mechanic",
    job: "tire rotation",
    title: "Tire Rotation Cost: Typical Price and What's Included",
    description: "How much a tire rotation costs from a mobile mechanic, why it is one of the cheapest car services, how often to do it, and when it might be free for you.",
    intro: "A tire rotation is a short job, so the price is mostly labor and the mechanic's minimum charge. There are no parts to buy. Larger vehicles take a little longer because the wheels are heavier.",
    rows: [
      { label: "Tire rotation, car", v: { job: 1, vehicle: 0 } },
      { label: "Tire rotation, SUV, truck or van", v: { job: 1, vehicle: 1 } },
      { label: "Oil change, car, for comparison", v: { job: 0, vehicle: 0 } }
    ],
    calc: { job: 1, vehicle: 0 },
    included: [
      "Vehicle lifted and all four wheels removed",
      "Tires moved to new positions in the pattern your car needs",
      "Lug nuts tightened to the correct torque",
      "Tire pressure set to the number on the door sticker"
    ],
    factors: [
      "Wheel weight. Big truck and SUV wheels take more effort to lift and swap.",
      "Locking lug nuts. A missing lock key or a stuck lug nut can slow things down.",
      "Directional or staggered tires. Some setups can only move front to back, or not at all.",
      "Balancing. Spin balancing is a separate service and needs shop equipment."
    ],
    diy: "You can rotate tires yourself with a floor jack, jack stands and a torque wrench. It takes most people under an hour. The main risk is not tightening the lug nuts properly, so use a torque wrench and recheck them after a short drive.",
    tips: [
      "Pair the rotation with an oil change. Many people do both every other oil change.",
      "If you bought your tires from a tire store, check your receipt. Free rotations are often part of the deal.",
      "Keep your locking lug nut key in the glove box so the mechanic does not lose time hunting for it."
    ],
    faq: [
      ["How often should tires be rotated?", "A common guideline is every 5,000 to 7,500 miles, but your owner's manual has the exact interval for your car."],
      ["Do I need a rotation if my tires look fine?", "Yes. Front and rear tires wear differently, and rotating them evens out wear so the whole set lasts longer."],
      ["Is a tire rotation the same as an alignment?", "No. A rotation moves the tires around. An alignment adjusts suspension angles and needs a shop alignment rack."]
    ]
  },
  {
    slug: "brake-pad-replacement-cost",
    service: "mobile-mechanic",
    job: "brake pad replacement",
    title: "Brake Pad Replacement Cost Per Axle (Mobile Mechanic)",
    description: "Brake pad replacement cost for one axle, with parts and labor, for cars and trucks. See what changes the price, when rotors are needed, and how to save.",
    intro: "Brake pads are usually replaced one axle at a time, either the front pair or the rear pair. The price covers a set of pads plus about an hour or two of labor. If your rotors are worn too, expect the bill to go up.",
    rows: [
      { label: "Brake pads, one axle, car", v: { job: 2, vehicle: 0 } },
      { label: "Brake pads, one axle, SUV, truck or van", v: { job: 2, vehicle: 1 } },
      { label: "Oil change, car, for comparison", v: { job: 0, vehicle: 0 } }
    ],
    calc: { job: 2, vehicle: 0 },
    included: [
      "Wheels removed and old pads taken off",
      "Caliper slides cleaned and lubricated",
      "New pads and hardware installed on one axle",
      "Rotors measured and checked for damage",
      "Brakes bedded in on a short test drive"
    ],
    factors: [
      "Rotors. Grooved, warped or too-thin rotors need replacing, which adds parts and time.",
      "Pad quality. Ceramic pads cost more than basic semi-metallic pads but are quieter and make less dust.",
      "Rear electronic parking brakes. Some cars need a scan tool to retract the rear calipers.",
      "Seized parts. Rusted caliper bolts or stuck slides are common in snowy, salted regions."
    ],
    diy: "Brake pads are a manageable DIY job for someone with basic tools and some experience. Because brakes are a safety system, mistakes matter more than on most jobs. If you have never done it, or your car has an electronic parking brake, a pro is worth it.",
    tips: [
      "Do not wait for grinding. Replacing pads early can save the rotors and avoid a bigger bill.",
      "Ask whether your rotors can stay. Many rotors only need replacing every second or third pad change.",
      "Get one quote for both axles if both are worn. Doing them in one visit saves a trip charge."
    ],
    faq: [
      ["How do I know my brake pads need replacing?", "Common signs are a high-pitched squeal, a grinding noise, a longer stopping distance or a brake warning light on the dash."],
      ["How long do brake pads last?", "It varies a lot with driving style. City drivers and heavy vehicles wear pads faster than highway commuters."],
      ["Should I replace rotors with pads?", "Only if they are below the minimum thickness, warped or deeply grooved. A good mechanic will measure and tell you."]
    ]
  },
  {
    slug: "car-battery-replacement-cost",
    service: "mobile-mechanic",
    job: "car battery replacement",
    title: "Car Battery Replacement Cost (Installed at Home)",
    description: "What car battery replacement costs installed in your driveway, why the battery is most of the price, and how to tell if you need a new one or just a jump.",
    intro: "Most of the cost of a battery replacement is the battery itself. The labor is short on most cars. A mobile mechanic is handy here because a car with a dead battery can't drive itself to the shop.",
    rows: [
      { label: "Battery replacement, car", v: { job: 3, vehicle: 0 } },
      { label: "Battery replacement, SUV, truck or van", v: { job: 3, vehicle: 1 } },
      { label: "Tire rotation, car, for comparison", v: { job: 1, vehicle: 0 } }
    ],
    calc: { job: 3, vehicle: 0 },
    included: [
      "Old battery tested to confirm it is the problem",
      "New battery of the correct size and rating installed",
      "Terminals cleaned and secured",
      "Charging system checked after install",
      "Old battery taken for recycling"
    ],
    factors: [
      "Battery type. AGM batteries, common in cars with start-stop systems, cost more than standard flooded batteries.",
      "Battery location. Some batteries sit under a seat, in the trunk or behind the bumper.",
      "Battery registration. Some newer vehicles need the new battery coded to the car with a scan tool.",
      "Size and cold cranking amps. Trucks and cold climates call for bigger, pricier batteries."
    ],
    diy: "On many older cars, swapping a battery takes basic hand tools and a few minutes. Newer cars can be harder, with hidden batteries or a computer that needs the new battery registered. If your car has start-stop or the battery is not under the hood, consider a pro.",
    tips: [
      "Have the battery tested before buying. A loose terminal or bad alternator can look like a dead battery.",
      "Check the warranty on your current battery. If it is still covered, you may get a free or discounted replacement.",
      "Buy the same type your car came with. Putting a standard battery in a car built for AGM can shorten its life."
    ],
    faq: [
      ["How long does a car battery last?", "Many last three to five years. Heat tends to shorten battery life more than cold, even though cold is when they usually fail."],
      ["What are signs of a dying battery?", "Slow cranking, dim headlights at startup, a battery warning light or needing jump starts are all common signs."],
      ["Is there a core charge?", "Many stores add a core charge that you get back when you return the old battery. A mechanic who recycles it for you handles this."]
    ]
  },

  // ---------------- Handyman ----------------
  {
    slug: "dishwasher-installation-cost",
    service: "handyman",
    job: "dishwasher installation",
    title: "Dishwasher Installation Cost: Labor to Swap a Dishwasher",
    description: "Dishwasher installation cost for replacing an old unit with a new one. See what labor covers, what adds to the bill, and whether to use the store's installer.",
    intro: "Replacing a dishwasher where one already exists is a common handyman job that takes a couple of hours. The price below is for labor and small parts like a new supply line. The dishwasher itself is not included.",
    rows: [
      { label: "Replace 1 dishwasher", v: { job: 0, qty: 1 } },
      { label: "Replace 2 dishwashers, same visit", v: { job: 0, qty: 2 } },
      { label: "Replace a kitchen faucet, for comparison", v: { job: 5, qty: 1 } }
    ],
    calc: { job: 0, qty: 1 },
    included: [
      "Water shut off and old dishwasher disconnected and pulled out",
      "New water supply line and drain hose connected",
      "Power connected with a cord or hardwired junction box",
      "Unit leveled and secured under the countertop",
      "Test cycle run and checked for leaks"
    ],
    factors: [
      "Shutoff valve. An old or stuck valve under the sink may need replacing before the swap.",
      "Power type. Switching from hardwired to a plug-in cord, or the reverse, adds a little time.",
      "Opening size. Flooring or tile installed after the old unit can make the new one hard to fit.",
      "New install versus swap. Adding a dishwasher where none existed needs new plumbing and wiring, which is a bigger job."
    ],
    diy: "A straight swap is doable if you are comfortable shutting off water and power and working in a tight space. The usual problems are leaks at the fittings and a unit that sits crooked. If you need a new circuit or new plumbing, hire a licensed electrician or plumber.",
    tips: [
      "Buy the parts kit the manufacturer recommends, or confirm the installer brings a new supply line and elbow.",
      "Ask the appliance store if haul-away of the old unit is included with delivery.",
      "Bundle the swap with another small kitchen job, like a faucet or disposal, so you pay the minimum once."
    ],
    faq: [
      ["How long does it take to install a dishwasher?", "A straight replacement usually takes one to three hours, depending on how the old one was hooked up."],
      ["Do I need a plumber to install a dishwasher?", "For a swap with existing connections, a handyman is usually fine. New water or drain lines may need a plumber depending on local rules."],
      ["Should I use the store's installation service?", "It can be convenient, but some store installs skip things like replacing the shutoff valve. Ask exactly what is covered."]
    ]
  },
  {
    slug: "tv-mounting-cost",
    service: "handyman",
    job: "TV mounting",
    title: "TV Mounting Cost: What a Handyman Charges to Mount a TV",
    description: "TV mounting cost for one or more TVs on drywall. See what the labor covers, what makes it pricier, like hiding wires or masonry walls, and how to save.",
    intro: "Mounting a TV on a standard drywall wall usually takes about an hour. The price below covers labor and basic hardware, but not the TV or the mount. Hiding wires inside the wall or mounting on brick costs more.",
    rows: [
      { label: "Mount 1 TV", v: { job: 3, qty: 1 } },
      { label: "Mount 2 TVs, same visit", v: { job: 3, qty: 2 } },
      { label: "Mount 3 TVs, same visit", v: { job: 3, qty: 3 } }
    ],
    calc: { job: 3, qty: 1 },
    included: [
      "Wall studs located and marked",
      "Mount leveled and lagged into studs",
      "TV lifted and secured to the mount",
      "Visible cables bundled and tidied",
      "Packaging cleaned up"
    ],
    factors: [
      "Wall type. Brick, stone and plaster take special anchors and drill bits.",
      "Hidden wires. Running cables inside the wall needs a recessed box and a code-rated kit.",
      "Over a fireplace. High mounts and masonry chimneys add time and risk.",
      "TV size. Very large screens may need two people to lift safely."
    ],
    diy: "If you can find studs and use a level, you can mount a TV yourself with a stud finder, a drill and a helper. The main risk is missing the studs or using drywall anchors that can't hold the weight. For brick, fireplaces or in-wall wiring, a pro is worth it.",
    tips: [
      "Buy the mount ahead of time and check that its VESA pattern and weight rating match your TV.",
      "Have all your TVs mounted in one visit. The second and third go faster than the first.",
      "Use a cord cover on the wall surface if you don't need wires hidden inside the wall."
    ],
    faq: [
      ["Can a TV be mounted without studs?", "Some lighter TVs can use heavy-duty drywall anchors, but studs are safer. Steel studs and masonry need their own hardware."],
      ["Is it safe to hide TV wires in the wall?", "Only with in-wall rated cables and a proper kit. Running a regular power cord inside the wall is not up to code."],
      ["How high should a TV be mounted?", "A common rule is to put the center of the screen near eye level when you are seated, which is lower than many people expect."]
    ]
  },
  {
    slug: "ceiling-fan-installation-cost",
    service: "handyman",
    job: "ceiling fan installation",
    title: "Ceiling Fan Installation Cost: Replacing a Fan or Light",
    description: "Ceiling fan installation cost when replacing an existing fan or light fixture. See what labor covers, extra costs to watch for, and when to call an electrician.",
    intro: "Swapping an old fan or light for a new ceiling fan takes a handyman about an hour and a half per fan. That assumes power and a fan-rated box are already in the ceiling. The price below is labor only, so the fan is extra.",
    rows: [
      { label: "Replace 1 ceiling fan", v: { job: 4, qty: 1 } },
      { label: "Replace 2 ceiling fans", v: { job: 4, qty: 2 } },
      { label: "Replace 3 ceiling fans", v: { job: 4, qty: 3 } },
      { label: "Swap a light fixture instead, for comparison", v: { job: 1, qty: 1 } }
    ],
    calc: { job: 4, qty: 1 },
    included: [
      "Power shut off and old fan or fixture removed",
      "Electrical box checked for a fan rating",
      "New fan assembled, wired and hung",
      "Blades balanced so the fan does not wobble",
      "Fan, light and remote tested"
    ],
    factors: [
      "Fan-rated box. A light fixture box may not hold a fan and need replacing with a braced box.",
      "Ceiling height. Vaulted ceilings need a downrod and a taller ladder.",
      "Wall controls. Separate switches for the fan and light may need extra wiring.",
      "No existing wiring. Adding a fan where there is no ceiling box is electrician work."
    ],
    diy: "Replacing a fan on an existing fan-rated box is a common DIY job if you are comfortable with basic wiring and lifting overhead. Shut off the breaker, not just the switch. If you need a new box, a new circuit or a new switch, hire a licensed electrician.",
    tips: [
      "Check that the box is fan-rated before buying the fan, so the installer is not surprised.",
      "Assemble the blades yourself the night before if the installer agrees, and ask if it lowers the time.",
      "Do several fans in one visit. Each extra fan costs less than a separate trip."
    ],
    faq: [
      ["Can I put a ceiling fan where a light was?", "Usually yes, if the box is fan-rated and securely fastened. Many light boxes are not, so the box may need replacing."],
      ["Do I need an electrician to install a ceiling fan?", "For a like-for-like swap, many handymen can do it. New wiring or circuits usually require a licensed electrician, depending on your state."],
      ["Why does my new fan wobble?", "Loose blades, an unbalanced blade set or a loose box are the usual causes. A balancing kit often fixes it."]
    ]
  },
  {
    slug: "light-fixture-installation-cost",
    service: "handyman",
    job: "light fixture installation",
    title: "Light Fixture Installation Cost: Swap an Old Light",
    description: "Light fixture installation cost to replace an existing ceiling or wall light. Price for one or several, what is included, and when you need an electrician.",
    intro: "Replacing an existing light fixture is one of the quickest handyman jobs, usually about an hour. Because it is short, the minimum charge often sets the price for a single fixture. Doing several in one visit brings the cost per fixture down.",
    rows: [
      { label: "Replace 1 light fixture", v: { job: 1, qty: 1 } },
      { label: "Replace 3 light fixtures", v: { job: 1, qty: 3 } },
      { label: "Replace 5 light fixtures", v: { job: 1, qty: 5 } }
    ],
    calc: { job: 1, qty: 1 },
    included: [
      "Breaker turned off and power tested",
      "Old fixture removed and wires inspected",
      "New mounting bracket installed if needed",
      "New fixture wired, mounted and tested"
    ],
    factors: [
      "Fixture weight. Heavy chandeliers need a stronger box and a second person.",
      "Height. Stairwells and two-story foyers need tall ladders or scaffolding.",
      "Old wiring. Brittle insulation or no ground wire may need extra work.",
      "Fixture assembly. Fixtures with many arms, crystals or shades take longer to put together."
    ],
    diy: "A simple ceiling light swap is a reasonable DIY job if you turn off the breaker and match the wires correctly. Use a non-contact voltage tester before touching anything. Old homes with cloth-wrapped wiring, or anything involving new circuits, are better left to an electrician.",
    tips: [
      "Replace all the dated fixtures at once. A single fixture often costs the full minimum charge.",
      "Have the fixtures unboxed and the parts checked before the handyman arrives.",
      "Choose fixtures that use a standard mounting bracket to avoid extra hardware."
    ],
    faq: [
      ["How long does it take to replace a light fixture?", "Most simple swaps take under an hour. Chandeliers and fixtures with lots of assembly take longer."],
      ["Can a handyman replace a light fixture?", "In many states a handyman can swap a fixture on an existing circuit. New wiring usually requires a licensed electrician."],
      ["What if there is no ground wire?", "Many older homes lack one. The installer may connect to a grounded metal box or recommend an electrician for an upgrade."]
    ]
  },
  {
    slug: "faucet-replacement-cost",
    service: "handyman",
    job: "faucet replacement",
    title: "Faucet Replacement Cost: Kitchen or Bathroom Faucet",
    description: "Faucet replacement cost for a kitchen or bathroom sink, labor plus new supply lines. See what is included, what slows the job, and whether to call a plumber.",
    intro: "Replacing a kitchen or bathroom faucet usually takes a handyman about an hour or so. The price below includes labor and new supply lines, but not the faucet itself. Rusted nuts and tight cabinets are what usually make it run long.",
    rows: [
      { label: "Replace 1 faucet", v: { job: 5, qty: 1 } },
      { label: "Replace 2 faucets", v: { job: 5, qty: 2 } },
      { label: "Replace 3 faucets", v: { job: 5, qty: 3 } }
    ],
    calc: { job: 5, qty: 1 },
    included: [
      "Water shut off at the valves under the sink",
      "Old faucet removed and the sink deck cleaned",
      "New faucet mounted and sealed",
      "New braided supply lines connected",
      "Water turned back on and checked for leaks"
    ],
    factors: [
      "Stuck mounting nuts. Old faucets are often corroded in place and need to be cut off.",
      "Shutoff valves. Valves that won't close or that leak should be replaced first.",
      "Number of holes. A new faucet that doesn't match the sink holes may need a deck plate.",
      "Pull-down sprayers and drains. Some faucets also come with a new pop-up drain to install."
    ],
    diy: "Many people replace a faucet themselves with a basin wrench and some patience. The hard part is working on your back under the sink. If the shutoff valves are old, or you are changing the sink or the plumbing layout, a plumber is a safer bet.",
    tips: [
      "Buy a faucet that matches your sink's number of holes so no extra parts are needed.",
      "Clear out the cabinet under the sink before the visit to save time.",
      "Replace the kitchen and bathroom faucets on the same day to share the minimum charge."
    ],
    faq: [
      ["How long does a faucet replacement take?", "About an hour for an easy one. Corroded parts or a tight cabinet can double that."],
      ["Should I hire a plumber or a handyman for a faucet?", "A handyman can usually handle a straight swap. If valves or drain pipes need work, a plumber may be the better choice."],
      ["Do I need new supply lines?", "It is a good idea. New braided lines cost a few dollars and are less likely to leak than old ones."]
    ]
  },
  {
    slug: "furniture-assembly-cost",
    service: "handyman",
    job: "furniture assembly",
    title: "Furniture Assembly Cost: What to Pay for Flat-Pack Help",
    description: "Furniture assembly cost for flat-pack dressers, beds, desks and shelves. See how many pieces change the price, what is included, and how to make it go faster.",
    intro: "Assembling a large flat-pack piece like a dresser or bed frame takes a handyman roughly an hour or more. Small items like nightstands go much faster. Most people save the most by having several pieces built in one visit.",
    rows: [
      { label: "1 large piece", v: { job: 7, qty: 1 } },
      { label: "3 large pieces", v: { job: 7, qty: 3 } },
      { label: "6 large pieces", v: { job: 7, qty: 6 } }
    ],
    calc: { job: 7, qty: 1 },
    included: [
      "Boxes unpacked and parts checked against the instructions",
      "Furniture assembled and tightened",
      "Tall pieces anchored to the wall with the included kit",
      "Furniture placed where you want it",
      "Cardboard broken down for recycling"
    ],
    factors: [
      "Piece size. A wardrobe or bunk bed takes far longer than a bookshelf or side table.",
      "Moving parts. Drawers, sliding doors and hinges take extra adjustment.",
      "Missing or broken parts. These can stall the job until replacements arrive.",
      "Stairs and tight rooms. Some pieces need to be built in the room where they will stay."
    ],
    diy: "Most flat-pack furniture is designed for people to build at home with the included tools and a drill. It mainly costs you time and patience. Paying a pro makes sense for large wardrobes, beds that need two people, or a whole room of pieces at once.",
    tips: [
      "Bring the boxes into the right room before the visit so no time goes to hauling.",
      "Check that no parts are missing before booking, so you are not paying for an unfinished job.",
      "Group your furniture into one visit. Each piece adds time, but you only pay the minimum once."
    ],
    faq: [
      ["How long does it take to assemble a dresser?", "A typical six-drawer flat-pack dresser takes an experienced assembler an hour or two. A first-timer may need much longer."],
      ["Should tall furniture be anchored to the wall?", "Yes. Dressers and bookcases can tip over, so most come with an anti-tip kit that should be used, especially with kids at home."],
      ["Do assemblers take away the boxes?", "Many will break them down for your recycling bin. Hauling them away is sometimes extra, so ask."]
    ]
  },

  // ---------------- Drain cleaning ----------------
  {
    slug: "main-sewer-line-cleaning-cost",
    service: "drain-cleaning",
    job: "main sewer line cleaning",
    title: "Main Sewer Line Cleaning Cost: Clean-Out and Snaking",
    description: "Main sewer line cleaning cost with and without an easy clean-out, and during regular hours or an emergency. Learn the signs of a main line clog and how to save.",
    intro: "Clearing a clogged main sewer line takes bigger equipment than a sink snake, so it costs more than a single drain. The price drops a lot when there is an accessible clean-out. Calling at night or on a weekend pushes it higher.",
    rows: [
      { label: "Easy clean-out, regular hours", v: { job: 2, access: 0, when: 0 } },
      { label: "No clean-out or hard to reach, regular hours", v: { job: 2, access: 1, when: 0 } },
      { label: "Easy clean-out, emergency or weekend", v: { job: 2, access: 0, when: 1 } },
      { label: "No clean-out, emergency or weekend", v: { job: 2, access: 1, when: 1 } }
    ],
    calc: { job: 2, access: 0, when: 0 },
    included: [
      "Clean-out located and opened",
      "Main line cabled with a motorized drum machine",
      "Blockage cleared and flow tested with running water",
      "Work area cleaned up afterward"
    ],
    factors: [
      "Tree roots. Roots in the line take longer to cut and tend to grow back.",
      "Line length. Long runs from the house to the street need more cable.",
      "Pipe condition. Old clay or cast iron pipe may be cracked or sagging, which keeps clogs coming back.",
      "Camera and jetting. A camera inspection or hydro jetting is usually quoted on top of cabling."
    ],
    diy: "You can rent a drum machine, but main line cabling is heavy, messy work and the cable can kink or get stuck if you do not know the tool. Sewage backups are also a health hazard. For a true main line clog, most people are better off calling a plumber.",
    tips: [
      "Find your clean-out before you need it. Knowing where it is speeds up the visit.",
      "Call during regular hours if the house can wait, for example by not running water until morning.",
      "If roots keep coming back, ask about a camera inspection so you pay to fix the cause once."
    ],
    faq: [
      ["What are signs of a main sewer line clog?", "Several drains backing up at once, gurgling toilets, or water rising in a tub or floor drain when you flush are classic signs."],
      ["How often should a main sewer line be cleaned?", "Most homes only need it when there is a problem. Homes with known root issues sometimes schedule it every year or two."],
      ["Does homeowners insurance cover sewer line clogs?", "Routine clogs usually are not covered. Some policies offer a separate sewer backup add-on for damage, so check yours."]
    ]
  },
  {
    slug: "clogged-toilet-cost",
    service: "drain-cleaning",
    job: "toilet unclogging",
    title: "Plumber Cost to Unclog a Toilet",
    description: "What a plumber charges to unclog a toilet, including weekend and emergency calls and toilets that must be pulled. Plus what to try first before you call.",
    intro: "Most clogged toilets are cleared with a toilet auger in well under an hour, so the plumber's service call minimum is often the biggest part of the bill. If the toilet has to be pulled, or it is a night or weekend call, the price goes up.",
    rows: [
      { label: "Toilet clog, regular hours", v: { job: 1, access: 0, when: 0 } },
      { label: "Toilet pulled and reset, regular hours", v: { job: 1, access: 1, when: 0 } },
      { label: "Toilet clog, evening or weekend", v: { job: 1, access: 0, when: 1 } },
      { label: "Toilet pulled and reset, evening or weekend", v: { job: 1, access: 1, when: 1 } }
    ],
    calc: { job: 1, access: 0, when: 0 },
    included: [
      "Toilet bowl augered to clear the blockage",
      "Toilet pulled and the drain cleared from below if needed",
      "New wax ring installed when the toilet is reset",
      "Several test flushes to confirm the clog is gone"
    ],
    factors: [
      "What caused it. Toys, wipes and other solid objects may require pulling the toilet.",
      "Clog location. A clog past the toilet, in the branch line, takes more work.",
      "Timing. After-hours calls cost more.",
      "Repeat clogs. A toilet that clogs often may have a low-flow or venting issue, not just a blockage."
    ],
    diy: "A flange plunger, the kind with an extra cup on the bottom, clears most toilet clogs. A toilet auger from a hardware store handles many of the rest without scratching the bowl. Call a plumber if water backs up into other drains, or if you suspect something solid is stuck.",
    tips: [
      "Try a flange plunger and a toilet auger before calling. They are cheap and solve most clogs.",
      "If you have a second toilet, wait until regular hours to avoid emergency rates.",
      "Do not pour drain chemicals into a toilet. They rarely work and make the plumber's job riskier."
    ],
    faq: [
      ["Why does my toilet keep clogging?", "Wipes, too much paper, an older low-flow toilet or a partial blockage further down the line are common causes."],
      ["Can a clogged toilet fix itself?", "Sometimes a paper clog softens and clears after a few hours. Solid objects and wipes will not dissolve."],
      ["Are flushable wipes safe?", "Plumbers often see them in clogs. They do not break down like toilet paper, so it is safest to throw them in the trash."]
    ]
  },
  {
    slug: "sink-drain-cleaning-cost",
    service: "drain-cleaning",
    job: "sink drain cleaning",
    title: "Sink Drain Cleaning Cost: Kitchen and Bathroom Clogs",
    description: "Sink drain cleaning cost for kitchen and bathroom clogs, during regular hours or after hours. What a plumber does, what causes clogs, and what to try first.",
    intro: "Snaking a clogged kitchen or bathroom sink is a quick job for a plumber, usually about an hour. Most of the cost is the service call itself. Hard-to-reach drains and after-hours visits add to it.",
    rows: [
      { label: "Sink drain, regular hours", v: { job: 0, access: 0, when: 0 } },
      { label: "Hard-to-reach sink drain, regular hours", v: { job: 0, access: 1, when: 0 } },
      { label: "Sink drain, evening or weekend", v: { job: 0, access: 0, when: 1 } }
    ],
    calc: { job: 0, access: 0, when: 0 },
    included: [
      "Trap removed and cleaned if needed",
      "Drain snaked with a hand or drum auger",
      "Trap reinstalled and checked for leaks",
      "Hot water run to confirm the drain flows freely"
    ],
    factors: [
      "Kitchen or bath. Kitchen clogs are usually grease and food, which can sit deep in the line.",
      "Disposal. A jammed garbage disposal is a separate fix from a clogged drain line.",
      "Double sinks. Clogs past the point where two sinks join take longer to reach.",
      "Old pipes. Corroded galvanized drains may need repair rather than just cleaning."
    ],
    diy: "Bathroom sink clogs are often just hair at the stopper, which you can pull out with a cheap plastic drain tool. Kitchen sinks can often be cleared by removing the trap or using a small hand snake. Call a plumber if the clog is past the wall or keeps coming back.",
    tips: [
      "Pull the stopper and clean it first. Many bathroom clogs are right there.",
      "Keep grease out of the kitchen sink. Wipe pans and toss the grease in the trash.",
      "If several drains are slow at once, say so on the call. It may be a main line issue instead."
    ],
    faq: [
      ["Do drain cleaning chemicals work?", "They can help with small clogs, but they are harsh on pipes and dangerous for the plumber if they don't work. A snake is usually better."],
      ["Why does my kitchen sink keep clogging?", "Grease, coffee grounds and starchy food build up in the line over time. Repeat clogs may need the line cleaned further back."],
      ["How long does sink drain cleaning take?", "Usually under an hour for a simple clog at the trap or just past it."]
    ]
  },

  // ---------------- House cleaning ----------------
  {
    slug: "deep-cleaning-cost",
    service: "house-cleaning",
    job: "deep cleaning",
    title: "Deep Cleaning Cost: House Prices by Bedrooms and Baths",
    description: "How much a deep house cleaning costs by home size, what a deep clean covers that a regular clean does not, and how to keep the final price down.",
    intro: "A deep clean takes much longer than a regular visit because it covers the buildup that routine cleaning skips. The price depends mostly on how many bedrooms and bathrooms you have. It is often the first visit before regular service starts.",
    rows: [
      { label: "1 bed, 1 bath", v: { beds: 1, baths: 1, type: 1 } },
      { label: "2 bed, 1 bath", v: { beds: 2, baths: 1, type: 1 } },
      { label: "3 bed, 2 bath", v: { beds: 3, baths: 2, type: 1 } },
      { label: "4 bed, 2.5 bath", v: { beds: 4, baths: 2.5, type: 1 } },
      { label: "5 bed, 3.5 bath", v: { beds: 5, baths: 3.5, type: 1 } }
    ],
    calc: { beds: 3, baths: 2, type: 1 },
    included: [
      "Everything in a standard clean, plus detail work",
      "Baseboards, door frames and light switches wiped",
      "Soap scum and hard water scrubbed off showers and tubs",
      "Inside the microwave and the outside of appliances",
      "Ceiling fans and light fixtures dusted"
    ],
    factors: [
      "Bathrooms. Each bathroom with built-up grime adds real time.",
      "Last clean. A home that has not been cleaned in months takes longer than one cleaned recently.",
      "Add-ons. Inside the oven, inside the fridge and interior windows are often extra.",
      "Clutter. Cleaners need clear surfaces, so lots of items to move slows them down."
    ],
    diy: "You can deep clean yourself with good supplies and a free weekend. The work is mostly scrubbing and detail dusting, which is tiring but not hard. Hiring out makes sense when you are short on time or want a clean start before regular service.",
    tips: [
      "Ask if the deep clean price drops when you sign up for recurring service after it.",
      "Declutter counters and floors before the cleaners arrive so they spend time cleaning, not moving things.",
      "Only add extras like inside the oven if you need them. Each one adds time."
    ],
    faq: [
      ["What is the difference between a deep clean and a regular clean?", "A regular clean keeps up surfaces, floors and bathrooms. A deep clean adds baseboards, buildup, fixtures and other spots that get skipped week to week."],
      ["How often do I need a deep clean?", "Many people do one or two a year, often in spring or before the holidays, with regular cleans in between."],
      ["How long does a deep clean take?", "For an average three-bedroom home it often takes a single cleaner most of a day, or a team a few hours."]
    ]
  },
  {
    slug: "move-out-cleaning-cost",
    service: "house-cleaning",
    job: "move-out cleaning",
    title: "Move-Out Cleaning Cost: What to Expect by Home Size",
    description: "Move-out cleaning cost by bedrooms and bathrooms, what is included for an empty home, and simple tips to help you get your security deposit back.",
    intro: "A move-out clean is the most thorough type of house cleaning. It covers inside cabinets, closets and appliances in an empty home. The price depends on home size and how much buildup there is.",
    rows: [
      { label: "Studio or 1 bed, 1 bath", v: { beds: 1, baths: 1, type: 2 } },
      { label: "2 bed, 2 bath", v: { beds: 2, baths: 2, type: 2 } },
      { label: "3 bed, 2 bath", v: { beds: 3, baths: 2, type: 2 } },
      { label: "4 bed, 3 bath", v: { beds: 4, baths: 3, type: 2 } }
    ],
    calc: { beds: 3, baths: 2, type: 2 },
    included: [
      "Inside all kitchen cabinets and drawers",
      "Inside the fridge and oven",
      "Closets, shelves and window sills wiped",
      "Bathrooms scrubbed top to bottom",
      "Floors vacuumed and mopped in every room"
    ],
    factors: [
      "Empty or not. Cleaners work much faster once the furniture and boxes are gone.",
      "Oven and fridge condition. Baked-on grease and old spills can take an hour each.",
      "Wall spots. Scuff removal is often included, but repainting is not.",
      "Carpets. Carpet shampooing is usually a separate service."
    ],
    diy: "Many renters do their own move-out clean, but it lands at the most stressful time of a move. The tricky parts are the oven, the fridge and bathroom buildup. If your deposit depends on it and you are short on time, a pro clean can pay for itself.",
    tips: [
      "Book the clean for after the movers leave so the cleaners can reach everything.",
      "Read your lease or move-out checklist and give it to the cleaners so they focus on what the landlord checks.",
      "Clean out the fridge and remove food yourself before they arrive."
    ],
    faq: [
      ["Is a move-out clean worth it for getting my deposit back?", "Often, yes. Landlords can deduct cleaning costs, and a professional clean can avoid that. Take photos when it is done."],
      ["What is the difference between move-out and deep cleaning?", "A move-out clean includes everything in a deep clean plus inside cabinets, closets and appliances, since the home is empty."],
      ["Does move-out cleaning include carpets?", "Usually just vacuuming. Steam or shampoo cleaning is typically a separate service."]
    ]
  },

  // ---------------- Car detailing ----------------
  {
    slug: "interior-car-detailing-cost",
    service: "car-detailing",
    job: "interior car detailing",
    title: "Interior Car Detailing Cost by Vehicle Size",
    description: "Interior car detailing cost for sedans, SUVs and trucks, plus what pet hair and heavy dirt add. See what an interior detail includes and how to save.",
    intro: "An interior detail cleans the inside of your car well past a quick vacuum. The price depends on the size of the vehicle and how dirty it is. Pet hair and stains are the most common reasons a quote goes up.",
    rows: [
      { label: "Sedan", v: { vehicle: 0, pkg: 1, dirty: 0 } },
      { label: "SUV", v: { vehicle: 1, pkg: 1, dirty: 0 } },
      { label: "Truck or van", v: { vehicle: 2, pkg: 1, dirty: 0 } },
      { label: "SUV with pet hair or heavy dirt", v: { vehicle: 1, pkg: 1, dirty: 1 } }
    ],
    calc: { vehicle: 0, pkg: 1, dirty: 0 },
    included: [
      "Full vacuum of seats, carpets, mats and trunk",
      "Dash, console, door panels and cup holders wiped and dressed",
      "Interior glass cleaned",
      "Floor mats washed",
      "Vents and seams cleaned with brushes"
    ],
    factors: [
      "Pet hair. It weaves into carpet and fabric and takes extra tools and time to pull out.",
      "Seat type. Shampooing cloth seats takes longer than wiping and conditioning leather.",
      "Third rows. Minivans and large SUVs have more seats and carpet to clean.",
      "Odors and stains. Smoke, spills and mildew may need extra treatment."
    ],
    diy: "You can do a solid interior clean with a shop vac, brushes and an interior cleaner. What pros add is steam cleaning, extraction for stains and a lot of patience in the small gaps. For pet hair or set-in stains, a pro usually gets a better result.",
    tips: [
      "Remove trash and personal items before the detailer arrives.",
      "Vacuum out loose pet hair yourself first if your car is very furry. It can shorten the job.",
      "Use seat covers and rubber mats afterward to make the next clean easier."
    ],
    faq: [
      ["How long does an interior detail take?", "Usually two to three hours for a typical car, and longer for large or very dirty vehicles."],
      ["Can detailing remove smoke smell?", "It can reduce it a lot. Strong smoke odor often needs an ozone or enzyme treatment, which may cost extra."],
      ["Does an interior detail include shampooing seats?", "Many do for cloth seats, but some only include it in higher packages. Ask before booking."]
    ]
  },
  {
    slug: "full-car-detail-cost",
    service: "car-detailing",
    job: "full car detail",
    title: "Full Car Detail Cost: Inside and Out, by Vehicle",
    description: "Full car detail cost for a sedan, SUV or truck, inside and out with wax. What a full detail includes, what raises the price, and how often you need one.",
    intro: "A full detail covers both the interior and exterior, usually with a coat of wax. It takes several hours, so it costs a lot more than a wash. Vehicle size and condition set most of the price.",
    rows: [
      { label: "Sedan", v: { vehicle: 0, pkg: 2, dirty: 0 } },
      { label: "SUV", v: { vehicle: 1, pkg: 2, dirty: 0 } },
      { label: "Truck or van", v: { vehicle: 2, pkg: 2, dirty: 0 } },
      { label: "SUV, very dirty or pet hair", v: { vehicle: 1, pkg: 2, dirty: 1 } }
    ],
    calc: { vehicle: 1, pkg: 2, dirty: 0 },
    included: [
      "Hand wash and dry, including wheels and tires",
      "Wax or sealant applied to the paint",
      "Full interior vacuum and wipe-down",
      "Windows cleaned inside and out",
      "Tires dressed and floor mats cleaned"
    ],
    factors: [
      "Paint correction. Polishing out swirls and scratches is a separate, longer service.",
      "Ceramic coating. Coatings cost much more than wax and are priced on their own.",
      "Engine bay. Engine cleaning is often an add-on.",
      "Water access. Mobile detailers without a hookup may need to bring their own tank."
    ],
    diy: "A careful home wash, wax and interior clean gets you much of the way there. It takes most of a day and the right products. Pros are faster and better at the hard parts, like stain removal and even wax coverage.",
    tips: [
      "Get a full detail a couple of times a year and do simple washes in between.",
      "Skip paint correction unless your paint has visible swirls you want gone.",
      "Ask a mobile detailer if they offer a discount for two cars at the same address."
    ],
    faq: [
      ["How long does a full detail take?", "Most take three to five hours, depending on the vehicle and how dirty it is."],
      ["Is a full detail worth it before selling a car?", "It often helps. A clean car photographs better and makes a stronger first impression on buyers."],
      ["What is the difference between wax and ceramic coating?", "Wax is a quick protective layer that lasts weeks to months. Ceramic coatings last much longer but cost more and take more prep."]
    ]
  },

  // ---------------- Pressure washing ----------------
  {
    slug: "driveway-pressure-washing-cost",
    service: "pressure-washing",
    job: "driveway pressure washing",
    title: "Driveway Pressure Washing Cost by Size",
    description: "Driveway pressure washing cost for one-car, two-car and long driveways. See what the job includes, how oil stains affect price, and how to save on a visit.",
    intro: "Pressure washing a driveway is mostly priced by size, with a minimum charge for small jobs. A typical two-car driveway is a quick job for a pro with a surface cleaner. Oil and rust stains can add time and chemicals.",
    rows: [
      { label: "One-car driveway, about 400 sq ft", v: { surface: 0, sqft: 400 } },
      { label: "Two-car driveway, about 600 sq ft", v: { surface: 0, sqft: 600 } },
      { label: "Large two-car driveway, about 800 sq ft", v: { surface: 0, sqft: 800 } },
      { label: "Long or three-car driveway, about 1,200 sq ft", v: { surface: 0, sqft: 1200 } }
    ],
    calc: { surface: 0, sqft: 600 },
    included: [
      "Debris blown off and the surface pre-rinsed",
      "Oil and grease spots pre-treated",
      "Flat surface cleaned with a rotary surface cleaner",
      "Edges and expansion joints washed",
      "Final rinse of the driveway and nearby walkways"
    ],
    factors: [
      "Oil and rust. Deep stains may lighten but not fully disappear.",
      "Concrete versus pavers. Pavers may need re-sanding after washing.",
      "Sealing. Applying a sealer afterward is a separate job.",
      "Water access. The pro needs an outdoor spigot that works."
    ],
    diy: "You can rent or buy a pressure washer and clean a driveway yourself in an afternoon. A surface cleaner attachment helps avoid streaks. Be careful with pressure near edges, because a narrow tip can etch concrete.",
    tips: [
      "Bundle the driveway with the sidewalk, patio or house wash to get past the minimum charge.",
      "Move cars and clear the driveway before the pro arrives.",
      "Treat fresh oil spots early with absorbent so they don't set into the concrete."
    ],
    faq: [
      ["How often should a driveway be pressure washed?", "Once a year is plenty for most homes. Shady or humid areas may grow mildew faster."],
      ["Can pressure washing damage concrete?", "Too much pressure or a narrow tip held close can etch the surface. Pros use surface cleaners to avoid this."],
      ["Will pressure washing remove oil stains?", "It lightens most of them. Old, deep stains often need a degreaser and may not come out completely."]
    ]
  },
  {
    slug: "house-washing-cost",
    service: "pressure-washing",
    job: "house washing",
    title: "House Washing Cost: Soft Washing Siding by Home Size",
    description: "House washing cost for vinyl and other siding by home size. Learn what soft washing is, what is included, and when to wash your house versus repainting.",
    intro: "House washing usually means soft washing: cleaner applied at low pressure, then rinsed off. The price depends on how much siding you have. Height and heavy mildew can make the job take longer.",
    rows: [
      { label: "Small home, about 1,200 sq ft of siding", v: { surface: 1, sqft: 1200 } },
      { label: "Average home, about 1,800 sq ft of siding", v: { surface: 1, sqft: 1800 } },
      { label: "Larger home, about 2,500 sq ft of siding", v: { surface: 1, sqft: 2500 } },
      { label: "Large two-story home, about 3,500 sq ft of siding", v: { surface: 1, sqft: 3500 } }
    ],
    calc: { surface: 1, sqft: 1800 },
    included: [
      "Plants and fixtures pre-wet or covered",
      "Siding treated with a cleaning solution",
      "Algae, mildew and dirt loosened and rinsed off",
      "Rinse from the top down at low pressure",
      "Plants rinsed again afterward"
    ],
    factors: [
      "Siding type. Vinyl washes easily, while stucco and painted wood need extra care.",
      "Height. Second and third stories need long reach equipment.",
      "Mildew and algae. North-facing walls often have heavy green growth.",
      "Extras. Gutters, windows and soffits may be priced as add-ons."
    ],
    diy: "Many homeowners wash a one-story house with a garden hose, a soft brush and a siding cleaner. Using a strong pressure washer on siding is risky because it can force water behind the panels or strip paint. For two stories or heavy mildew, a pro is safer.",
    tips: [
      "Ask for a soft wash rather than high pressure, which is gentler on siding.",
      "Add the driveway or patio to the same visit to share the setup cost.",
      "Trim back bushes touching the house so the crew can reach the siding."
    ],
    faq: [
      ["What is soft washing?", "It uses cleaning solutions and low pressure to kill mildew and algae, instead of blasting dirt off with high pressure."],
      ["How often should I wash my house?", "Once a year works for most homes. Humid or shady areas may need it more often."],
      ["Is house washing safe for plants?", "Pros wet plants before and rinse them after to dilute any cleaner. Ask how they protect your landscaping."]
    ]
  },

  // ---------------- Gutter cleaning ----------------
  {
    slug: "gutter-cleaning-cost-two-story",
    service: "gutter-cleaning",
    job: "two-story gutter cleaning",
    title: "Gutter Cleaning Cost for a Two-Story House",
    description: "Gutter cleaning cost for a two-story house by length of gutter, with or without downspout flushing. Why height adds to the price and when to hire it out.",
    intro: "Cleaning gutters on a two-story house costs more than a single story because the work is slower and riskier. Most pros price by the length of gutter. Flushing the downspouts adds a bit more.",
    rows: [
      { label: "150 ft, two-story, gutters only", v: { feet: 150, stories: 1, flush: 0 } },
      { label: "150 ft, two-story, with downspouts", v: { feet: 150, stories: 1, flush: 1 } },
      { label: "200 ft, two-story, with downspouts", v: { feet: 200, stories: 1, flush: 1 } },
      { label: "250 ft, two-story, with downspouts", v: { feet: 250, stories: 1, flush: 1 } }
    ],
    calc: { feet: 150, stories: 1, flush: 1 },
    included: [
      "Leaves and debris scooped out by hand and bagged",
      "Gutters rinsed to check that water flows to the downspouts",
      "Downspouts flushed and cleared when included",
      "Loose hangers or leaks pointed out"
    ],
    factors: [
      "Ladder setup. Pros move a tall extension ladder many times around a two-story home.",
      "Lower roofs. Porches and garage roofs add short gutter runs at different heights.",
      "Ground conditions. Slopes, decks and landscaping make safe ladder placement harder.",
      "Gutter guards. Guards must be lifted or removed to clean underneath."
    ],
    diy: "Some homeowners clean two-story gutters themselves, but it means working on a tall extension ladder. Ladder falls cause many serious injuries every year. If you are not comfortable and experienced at that height, hiring a pro is the safer choice.",
    tips: [
      "Book in late fall after most leaves are down, so one cleaning covers the season.",
      "Ask neighbors to book the same day. Some pros discount when they can do several homes on one street.",
      "Trim branches hanging over the roof to cut down on debris."
    ],
    faq: [
      ["Why does gutter cleaning cost more for a two-story house?", "The pro needs taller ladders, moves them more often, and works more slowly for safety."],
      ["How often should two-story gutters be cleaned?", "Twice a year is common, in spring and fall. More often if tall trees hang over the roof."],
      ["Do gutter guards mean I never need cleaning?", "No. Guards reduce clogs but still need checking, and fine debris can build up on top or underneath."]
    ]
  },

  // ---------------- Junk removal ----------------
  {
    slug: "junk-removal-cost",
    service: "junk-removal",
    job: "junk removal",
    title: "Junk Removal Cost by Truck Load: What You Should Pay",
    description: "Junk removal cost from a single item to a full truck load. See what is included, why dump fees and stairs change the price, and how to get a lower quote.",
    intro: "Most junk haulers price by how much space your stuff takes up in their truck. The price covers a two-person crew, the truck, and the dump or recycling fees. Heavy items and hard-to-reach spots push it higher.",
    rows: [
      { label: "A few items, ground floor", v: { load: 0, heavy: 0, access: 1 } },
      { label: "1/4 truck load", v: { load: 1, heavy: 0, access: 1 } },
      { label: "1/2 truck load", v: { load: 2, heavy: 0, access: 1 } },
      { label: "3/4 truck load", v: { load: 3, heavy: 0, access: 1 } },
      { label: "Full truck load", v: { load: 4, heavy: 0, access: 1 } }
    ],
    calc: { load: 2, heavy: 0, access: 1 },
    included: [
      "Two-person crew to lift and carry everything",
      "Loading into the truck from where the items sit",
      "Hauling to a landfill, transfer station or recycler",
      "Dump and recycling fees for normal household junk",
      "A quick sweep of the area after loading"
    ],
    factors: [
      "Volume. The more of the truck your items fill, the more you pay.",
      "Weight. Concrete, dirt and shingles are heavy and can cost more than bulky but light junk.",
      "Special items. Fridges, freezers, tires, mattresses and TVs often carry their own fees.",
      "Access. Basements, attics and stairs take longer than a pile in the driveway."
    ],
    diy: "If you have a pickup truck and some free time, you can haul junk to the local dump yourself and pay only the gate fee. Many cities also offer free bulk pickup days. Hiring a crew makes sense for heavy items, big cleanouts, or when you have no truck.",
    tips: [
      "Sell or donate anything in good shape first. Less volume means a lower price.",
      "Pile everything in the garage or driveway before the crew arrives to save loading time.",
      "Ask for a price on site before loading. Most haulers quote after seeing the pile."
    ],
    faq: [
      ["How much junk fits in a full truck?", "A typical junk truck holds about 12 to 15 cubic yards, roughly the contents of a one-car garage packed waist high."],
      ["Do junk haulers donate usable items?", "Many do. Ask when booking if you want furniture or appliances in good shape donated instead of dumped."],
      ["What will a junk hauler not take?", "Most will not take paint, chemicals, propane tanks, asbestos or other hazardous waste. Your city usually runs drop-off days for those."]
    ]
  },
  {
    slug: "appliance-removal-cost",
    service: "junk-removal",
    job: "appliance removal",
    title: "Appliance Removal Cost: Fridge, Washer and Stove Haul Away",
    description: "Appliance removal cost for a fridge, washer, dryer or stove, from one item to several. Learn why recycling fees apply and when the store will take it free.",
    intro: "Hauling away an old appliance is a quick job for a junk crew, but appliances carry recycling fees that a bag of trash does not. Fridges and freezers cost the most because the refrigerant must be removed safely. Basements and stairs add labor.",
    rows: [
      { label: "1 appliance, garage or ground floor", v: { load: 0, heavy: 1, access: 1 } },
      { label: "1 appliance, basement or upstairs", v: { load: 0, heavy: 1, access: 2 } },
      { label: "2 appliances, ground floor", v: { load: 0, heavy: 2, access: 1 } },
      { label: "3 appliances, ground floor", v: { load: 1, heavy: 3, access: 1 } }
    ],
    calc: { load: 0, heavy: 1, access: 1 },
    included: [
      "Appliance disconnected from power and moved out by two people",
      "Floors and door frames protected on the way out",
      "Loading and hauling to an appliance recycler",
      "Recycling and disposal fees"
    ],
    factors: [
      "Refrigerant. Fridges, freezers and AC units need refrigerant recovered before recycling.",
      "Hookups. Gas stoves and water lines should be shut off and capped first, sometimes by a plumber.",
      "Stairs. Moving a washer or fridge out of a basement is slow and heavy work.",
      "Scrap value. Some haulers charge less for metal appliances they can sell for scrap."
    ],
    diy: "Two people with an appliance dolly and a pickup can haul most appliances to a scrap yard or recycler. Some scrap yards even pay a little for metal. Disconnect gas lines with care, or have a pro cap them, and never cut refrigerant lines yourself.",
    tips: [
      "Buying a new appliance? Ask the store to haul away the old one when they deliver.",
      "Check if your utility runs a fridge recycling program. Some pay you to take old units.",
      "Bundle the appliance with other junk to make better use of one truck visit."
    ],
    faq: [
      ["Why does fridge removal cost more?", "Fridges and freezers contain refrigerant that must be recovered by a certified tech before the metal can be recycled."],
      ["Will the store take my old appliance?", "Many big stores will remove the old one when they deliver a new one, often for a small fee or free with purchase."],
      ["Do I need to disconnect the appliance first?", "Electric units just need unplugging. Gas stoves, dryers and anything with a water line should be shut off and capped before pickup."]
    ]
  },

  // ---------------- Carpet cleaning ----------------
  {
    slug: "carpet-cleaning-cost-per-room",
    service: "carpet-cleaning",
    job: "carpet cleaning",
    title: "Carpet Cleaning Cost Per Room: Prices for 1 to 5 Rooms",
    description: "Carpet cleaning cost per room for 1 to 5 rooms with hot water extraction. See what is included, how stairs and stains change the price, and how to save.",
    intro: "Carpet cleaners usually price by the room, with a minimum charge for small jobs. The per-room price drops as you add rooms, because setup and travel are spread out. Stairs, stains and pet odors add to the total.",
    rows: [
      { label: "1 room", v: { rooms: 1, stairs: 0, treat: 0 } },
      { label: "2 rooms", v: { rooms: 2, stairs: 0, treat: 0 } },
      { label: "3 rooms", v: { rooms: 3, stairs: 0, treat: 0 } },
      { label: "4 rooms", v: { rooms: 4, stairs: 0, treat: 0 } },
      { label: "5 rooms", v: { rooms: 5, stairs: 0, treat: 0 } }
    ],
    calc: { rooms: 3, stairs: 0, treat: 0 },
    included: [
      "Pre-vacuum of open areas",
      "Pre-treatment of traffic lanes and normal spots",
      "Hot water extraction of each room",
      "Carpet groomed so it dries evenly",
      "Corners protected so hoses do not scuff walls"
    ],
    factors: [
      "Room size. Most companies count a room as up to about 200 to 250 sq ft. Bigger spaces count as more.",
      "Stairs. Each step is cleaned by hand, so a flight of stairs adds real time.",
      "Stains. Wine, coffee and pet stains need extra treatment and may not fully come out.",
      "Furniture. Moving beds, sofas and dressers is often extra."
    ],
    diy: "You can rent a carpet cleaning machine from a hardware or grocery store and do a few rooms in an afternoon. Rental machines are weaker than truck-mounted units, so carpets stay wetter longer and deep soil may stay behind. For a yearly deep clean, a pro usually does better.",
    tips: [
      "Vacuum well and clear small items off the floor before the cleaner arrives.",
      "Book more rooms in one visit. The cost per room usually drops as the job gets bigger.",
      "Ask whether the price is per room or per square foot, and how big a room can be."
    ],
    faq: [
      ["How often should carpets be cleaned?", "Most carpet makers recommend a professional cleaning every 12 to 18 months, more often with kids or pets."],
      ["What counts as a room?", "Usually a space up to about 200 to 250 sq ft. Large living rooms or open areas may count as two."],
      ["Can I walk on the carpet after cleaning?", "Yes, in clean socks or shoe covers. Wait until it is dry before putting furniture back or walking in shoes."]
    ]
  },
  {
    slug: "pet-stain-carpet-cleaning-cost",
    service: "carpet-cleaning",
    job: "pet stain carpet cleaning",
    title: "Pet Stain and Odor Carpet Cleaning Cost",
    description: "Pet stain carpet cleaning cost for urine and odor, by number of rooms. How enzyme treatment works, what changes the price, and when carpet is too far gone.",
    intro: "Pet urine soaks below the carpet fibers into the pad, so a normal clean often leaves the smell behind. Cleaners treat it with enzymes or special rinses that break down the urine. That takes more product and time than a standard clean.",
    rows: [
      { label: "1 room, pet urine or odor", v: { rooms: 1, stairs: 0, treat: 2 } },
      { label: "3 rooms, pet urine or odor", v: { rooms: 3, stairs: 0, treat: 2 } },
      { label: "5 rooms, pet urine or odor", v: { rooms: 5, stairs: 0, treat: 2 } },
      { label: "3 rooms, normal clean, for comparison", v: { rooms: 3, stairs: 0, treat: 0 } }
    ],
    calc: { rooms: 3, stairs: 0, treat: 2 },
    included: [
      "Urine spots found with a UV light or moisture meter",
      "Enzyme or odor treatment soaked into each spot",
      "Hot water extraction of the whole room",
      "Extra rinse passes on treated areas",
      "Carpet groomed and set to dry"
    ],
    factors: [
      "How deep it goes. Urine that reached the pad or subfloor may need a sub-surface extraction tool.",
      "How old it is. Old stains can leave permanent color changes even after the smell is gone.",
      "Number of spots. A few spots cost less than a room with many accidents.",
      "Pad replacement. If the pad is soaked, the only full fix may be replacing it, which is a separate job."
    ],
    diy: "Fresh accidents respond well to blotting, a rinse with water, and an enzyme cleaner from the pet store. Older, repeated spots are harder because the urine is in the pad. A pro with a sub-surface tool has a better chance, but no one can promise every stain will vanish.",
    tips: [
      "Treat fresh accidents right away with an enzyme cleaner. Avoid ammonia cleaners, which can draw pets back.",
      "Point out every spot you know about when the cleaner arrives.",
      "Ask whether the price covers the whole room or only the treated spots."
    ],
    faq: [
      ["Will professional cleaning remove pet urine smell?", "Usually it removes most or all of it. Spots that soaked deep into the pad or subfloor can come back on humid days."],
      ["Why do stains come back after cleaning?", "Urine left in the pad wicks back up to the surface as the carpet dries. That is why pet treatments use extra rinsing."],
      ["Is it cheaper to replace the carpet?", "For a few rooms, cleaning is almost always cheaper. Replacing makes sense only when the pad and subfloor are badly soaked."]
    ]
  },

  // ---------------- Interior painting ----------------
  {
    slug: "cost-to-paint-a-room",
    service: "interior-painting",
    job: "painting a room",
    title: "Cost to Paint a Room: Prices by Room Size",
    description: "Cost to paint a room by size, walls only or with ceiling and trim, with paint included. See what changes the price and when painting it yourself makes sense.",
    intro: "Painting one room is mostly labor. Prep, cutting in along the edges, and two coats on the walls take most of a day for an average bedroom. Paint and supplies are a smaller part of the bill.",
    rows: [
      { label: "Small room (10x10), walls only", v: { rooms: 1, size: 0, ceiling: 0, trim: 0, cond: 0 } },
      { label: "Medium room (12x12), walls only", v: { rooms: 1, size: 1, ceiling: 0, trim: 0, cond: 0 } },
      { label: "Large room (14x16), walls only", v: { rooms: 1, size: 2, ceiling: 0, trim: 0, cond: 0 } },
      { label: "Medium room, color change", v: { rooms: 1, size: 1, ceiling: 0, trim: 0, cond: 1 } },
      { label: "Medium room, walls, ceiling and trim", v: { rooms: 1, size: 1, ceiling: 1, trim: 1, cond: 0 } }
    ],
    calc: { rooms: 1, size: 1, ceiling: 0, trim: 0, cond: 0 },
    included: [
      "Furniture moved to the center and covered",
      "Floors protected with drop cloths",
      "Nail holes filled and rough spots sanded",
      "Edges cut in by brush along ceiling and trim",
      "Two coats of mid-grade paint on the walls"
    ],
    factors: [
      "Room size. Larger rooms and ceilings over 8 feet need more paint and time.",
      "Color change. Dark to light colors often need primer or a third coat.",
      "Wall repairs. Cracks, dents and large holes need patching and drying time.",
      "Trim and ceilings. Brush work on trim is slow, and ceilings are tiring to roll."
    ],
    diy: "Painting a room is one of the easiest home projects to do yourself. Good tape, a quality roller cover and patience with cutting in make the biggest difference. Hire a pro for tall ceilings, stairwells, big color changes or when you want it done in one day.",
    tips: [
      "Move small items and take down wall decor yourself to save the painter time.",
      "Stick with the same color or a similar shade to avoid paying for extra coats.",
      "Paint several rooms in one booking. The per-room price is usually lower."
    ],
    faq: [
      ["How much paint does a room need?", "An average 12 by 12 bedroom takes about two gallons for two coats on the walls, and about one more for the ceiling."],
      ["Does the price include paint?", "Most painters include mid-grade paint. Premium lines or many colors in one room may cost extra."],
      ["How long does it take a pro to paint a room?", "Walls in an average bedroom usually take one day. Add ceiling, trim and doors and it may stretch into a second day."]
    ]
  },
  {
    slug: "cost-to-paint-house-interior",
    service: "interior-painting",
    job: "painting a house interior",
    title: "Cost to Paint a House Interior: Prices by Number of Rooms",
    description: "Cost to paint a house interior by number of rooms, walls only or with ceilings and trim. What drives the price and how to save on a whole-house paint job.",
    intro: "Painting a whole interior is priced like many single rooms, with a lower cost per room because setup is shared. The biggest choice is whether ceilings and trim are included. Those details can nearly double the time.",
    rows: [
      { label: "4 medium rooms, walls only", v: { rooms: 4, size: 1, ceiling: 0, trim: 0, cond: 0 } },
      { label: "6 medium rooms, walls only", v: { rooms: 6, size: 1, ceiling: 0, trim: 0, cond: 0 } },
      { label: "6 medium rooms, walls, ceilings and trim", v: { rooms: 6, size: 1, ceiling: 1, trim: 1, cond: 0 } },
      { label: "8 medium rooms, walls only", v: { rooms: 8, size: 1, ceiling: 0, trim: 0, cond: 0 } },
      { label: "8 medium rooms, walls, ceilings, trim and doors", v: { rooms: 8, size: 1, ceiling: 1, trim: 2, cond: 0 } }
    ],
    calc: { rooms: 6, size: 1, ceiling: 0, trim: 0, cond: 0 },
    included: [
      "Furniture moved and floors covered room by room",
      "Holes and cracks patched and sanded",
      "Two coats of mid-grade paint on all walls",
      "Ceilings, trim and doors when included",
      "Daily cleanup and a final walk-through"
    ],
    factors: [
      "Number of rooms. Bedrooms, halls and living areas each add time and paint.",
      "Ceilings and trim. These take careful brush work and add a lot of hours.",
      "Stairwells and tall walls. Two-story foyers need scaffolding or tall ladders.",
      "Empty versus furnished. An empty house is faster because nothing needs moving."
    ],
    diy: "Painting a whole house yourself can save a lot, but expect several weekends of work. Most people do fine on walls and get tired on trim and ceilings. A common middle path is to paint bedrooms yourself and hire a pro for stairwells, high ceilings and trim.",
    tips: [
      "Paint before you move in, when rooms are empty and the job goes faster.",
      "Use one wall color for most rooms. Fewer colors mean less cutting in and less wasted paint.",
      "Get at least three written quotes that list rooms, coats and paint brand."
    ],
    faq: [
      ["How long does it take to paint a house interior?", "A crew of two or three can paint an average three-bedroom home in about three to six days, depending on ceilings and trim."],
      ["Is it cheaper to paint walls only?", "Yes. Leaving ceilings and trim out can cut the cost by a third or more if they are still in good shape."],
      ["Should I paint before or after new floors?", "Before is usually better. Drips on old floors do not matter, and installers can touch up baseboards after."]
    ]
  },

  // ---------------- Tree trimming ----------------
  {
    slug: "tree-trimming-cost",
    service: "tree-trimming",
    job: "tree trimming",
    title: "Tree Trimming Cost by Tree Height",
    description: "Tree trimming cost for small, medium, large and very large trees, with cleanup. See what changes the price, when to trim, and when to call the power company.",
    intro: "Tree trimming is priced mostly by how tall the tree is. A short tree can be pruned from the ground or a ladder in under an hour. Large trees need climbing gear or a bucket truck and a crew working most of a day.",
    rows: [
      { label: "Small tree, under 15 ft", v: { trees: 1, height: 0, near: 0, haul: 0 } },
      { label: "Medium tree, 15 to 30 ft", v: { trees: 1, height: 1, near: 0, haul: 0 } },
      { label: "Large tree, 30 to 60 ft", v: { trees: 1, height: 2, near: 0, haul: 0 } },
      { label: "Very large tree, over 60 ft", v: { trees: 1, height: 3, near: 0, haul: 0 } },
      { label: "3 medium trees", v: { trees: 3, height: 1, near: 0, haul: 0 } }
    ],
    calc: { trees: 1, height: 1, near: 0, haul: 0 },
    included: [
      "Dead, broken and crossing branches removed",
      "Limbs cut back from the roof, siding and walkways",
      "Cuts made at the branch collar so the tree heals well",
      "Branches chipped and hauled away",
      "Yard raked and cleaned up"
    ],
    factors: [
      "Height. Each step up in height means more climbing, more rigging and more time.",
      "Location. Limbs over a house, fence or power line must be lowered with ropes.",
      "Tree type and health. Dead wood breaks unpredictably and is slower to work on.",
      "Access. Backyards a truck cannot reach mean dragging every branch to the chipper."
    ],
    diy: "Small trees and low branches are easy to prune yourself with loppers, a pruning saw or a pole saw. Anything that needs a ladder and a chainsaw at the same time is a job for a pro. Tree work is one of the more dangerous home tasks, so be honest about your limits.",
    tips: [
      "Trim in late winter when trees are dormant and many crews have more openings.",
      "Have several trees done in one visit to share the setup and chipper cost.",
      "Ask if the company is insured and if an arborist will be on the job."
    ],
    faq: [
      ["How often should trees be trimmed?", "Most mature shade trees need pruning every three to five years. Young and fruit trees benefit from lighter yearly pruning."],
      ["Is trimming cheaper than removal?", "Yes, usually much cheaper. Removing a whole tree takes longer and may add stump grinding."],
      ["Should I hire a certified arborist?", "For large, valuable or sick trees, yes. An arborist knows how much to cut without harming the tree."]
    ]
  },
  {
    slug: "cost-to-trim-a-large-tree",
    service: "tree-trimming",
    job: "trimming a large tree",
    title: "Cost to Trim a Large Tree: 30 to 60 Feet and Taller",
    description: "Cost to trim a large tree from 30 to 60 feet or more, in an open yard or over a house. What adds to the price, from power lines to cleanup, and how to save.",
    intro: "Large trees take a crew, climbing gear or a bucket truck, and careful rigging. Branches over a roof or near lines have to be lowered piece by piece. Most of the price is crew time, with cleanup and disposal on top.",
    rows: [
      { label: "Large tree, open yard", v: { trees: 1, height: 2, near: 0, haul: 0 } },
      { label: "Large tree, over the house", v: { trees: 1, height: 2, near: 1, haul: 0 } },
      { label: "Large tree, near power lines", v: { trees: 1, height: 2, near: 2, haul: 0 } },
      { label: "Large tree, debris left cut and stacked", v: { trees: 1, height: 2, near: 0, haul: 1 } },
      { label: "Very large tree over 60 ft, open yard", v: { trees: 1, height: 3, near: 0, haul: 0 } }
    ],
    calc: { trees: 1, height: 2, near: 0, haul: 0 },
    included: [
      "Climber or bucket truck to reach the upper canopy",
      "Dead and hazardous limbs removed",
      "Crown thinned and cleared from the roof",
      "Heavy limbs lowered with ropes when needed",
      "Chipping, hauling and yard cleanup"
    ],
    factors: [
      "Rigging. Limbs that cannot just drop must be tied off and lowered, which is slow.",
      "Power lines. Only line-clearance trained crews should work near lines.",
      "Equipment access. A bucket truck is faster, but only if it can reach the tree.",
      "Wood volume. Big trees produce a lot of debris to chip and haul."
    ],
    diy: "Trimming a large tree is not a DIY job. It means working at height with a chainsaw while heavy limbs fall, often near a house or lines. You can save by stacking the wood yourself or keeping it for firewood, but leave the cutting to an insured crew.",
    tips: [
      "Ask the crew to leave the wood cut to firewood length if you can use it.",
      "Call your utility before hiring anyone for limbs near the main lines. They may do it free.",
      "Get quotes in writing that say how much of the canopy will be removed."
    ],
    faq: [
      ["Why does a large tree cost so much more to trim?", "It takes a skilled climber or a bucket truck, more crew time, and more cleanup than a small tree."],
      ["How much of a tree can be trimmed at once?", "Most arborists remove no more than about a quarter of the canopy in a year to keep the tree healthy."],
      ["Will my insurance pay for tree trimming?", "Usually not for routine trimming. Insurance may cover removing a tree that falls on your house in a storm."]
    ]
  },

  // ---------------- Christmas light installation ----------------
  {
    slug: "christmas-light-installation-cost",
    service: "christmas-light-installation",
    job: "Christmas light installation",
    title: "Christmas Light Installation Cost: Prices With Takedown",
    description: "Christmas light installation cost by length of roofline, with lights, takedown and storage. See what is included, what adds to the price, and when to book.",
    intro: "Professional Christmas light installers usually price by the foot of roofline, with commercial LED lights included. Most packages also cover taking the lights down after the season. Height and roof pitch set the rest of the price.",
    rows: [
      { label: "100 ft, 1 story, install and takedown", v: { feet: 100, stories: 0, takedown: 1 } },
      { label: "150 ft, 1 story, install only", v: { feet: 150, stories: 0, takedown: 0 } },
      { label: "150 ft, 1 story, install and takedown", v: { feet: 150, stories: 0, takedown: 1 } },
      { label: "200 ft, 1 story, install and takedown", v: { feet: 200, stories: 0, takedown: 1 } }
    ],
    calc: { feet: 150, stories: 0, takedown: 1 },
    included: [
      "Roofline measured and a lighting plan agreed",
      "Commercial-grade LED lights cut to fit",
      "Clips attached to gutters or shingles with no nails",
      "Lights plugged in, tested and set on a timer",
      "Takedown and storage after the holidays when included"
    ],
    factors: [
      "Roofline length. Most installers price per foot of lit roofline.",
      "Height and pitch. Steep or tall roofs need more time and safety gear.",
      "Lights. Lease or buy, and LED color choices, change the price.",
      "Extras. Trees, bushes, wreaths and walkway lights are priced separately."
    ],
    diy: "Many people hang their own lights on a one-story home with clips and a sturdy ladder. It takes a weekend and some care on the roof edge. Pros add speed, custom-cut lights and takedown, which many people value more than the install itself.",
    tips: [
      "Book in September or October for the best choice of dates.",
      "Ask if the price drops for a second year with the same lights and plan.",
      "Measure your roofline yourself so you can compare quotes per foot."
    ],
    faq: [
      ["When do installers put lights up?", "Most start in early November and finish by mid-December. Takedown usually runs through January."],
      ["Do I need an outdoor outlet?", "Yes, at least one working outdoor outlet near the display. Installers can tell you if you need more."],
      ["Are the lights mine to keep?", "It depends. Many installers lease and store the lights for you. Some sell them outright for a higher first-year price."]
    ]
  },
  {
    slug: "two-story-christmas-light-installation-cost",
    service: "christmas-light-installation",
    job: "two-story Christmas light installation",
    title: "Two-Story Christmas Light Installation Cost",
    description: "Christmas light installation cost for a two-story house by length of roofline. Why height adds to the price, what is included, and how to keep the cost down.",
    intro: "Lighting a two-story home costs more than a ranch house because the crew works from tall ladders or on a steeper, higher roof. The lights cost about the same per foot. The extra is mostly time and safety setup.",
    rows: [
      { label: "150 ft, 2 stories, install and takedown", v: { feet: 150, stories: 1, takedown: 1 } },
      { label: "200 ft, 2 stories, install and takedown", v: { feet: 200, stories: 1, takedown: 1 } },
      { label: "250 ft, 2 stories, install and takedown", v: { feet: 250, stories: 1, takedown: 1 } },
      { label: "200 ft, 2 stories, install only", v: { feet: 200, stories: 1, takedown: 0 } },
      { label: "200 ft, 1 story, for comparison", v: { feet: 200, stories: 0, takedown: 1 } }
    ],
    calc: { feet: 200, stories: 1, takedown: 1 },
    included: [
      "Tall ladders or roof anchors set up for safe work",
      "Commercial LED lights cut to the roofline",
      "Upper and lower rooflines clipped and lit",
      "Lights tested and set on a timer",
      "Takedown and storage when included"
    ],
    factors: [
      "Height. Second-story gutters and peaks need longer ladders and more moves.",
      "Roof pitch. Steep roofs may need harnesses and anchors.",
      "Peaks and dormers. Lighting every gable takes more lights and more time than a straight gutter run.",
      "Lower rooflines. Porches and garages add short runs at different heights."
    ],
    diy: "Hanging lights on a second story means working on a tall ladder or a steep roof, often in cold or wet weather. Falls from that height cause serious injuries. Many people light the first-floor rooflines and bushes themselves and hire out the upper roof.",
    tips: [
      "Light only the front-facing rooflines. That is what most people see from the street.",
      "Skip the takedown package only if you are comfortable on the roof in January.",
      "Ask neighbors to book the same crew. Some installers discount several homes on one street."
    ],
    faq: [
      ["Why does a two-story house cost more?", "The crew needs taller ladders, moves them more often and works more slowly for safety."],
      ["Can lights stay up all year?", "Clips and lights left up wear out faster and can damage gutters. Most installers take them down and store them."],
      ["What if it snows before takedown?", "Installers usually wait for a safe, dry day. Takedown windows often run into late January."]
    ]
  },
  {
    slug: "roofline-christmas-lights-cost",
    service: "christmas-light-installation",
    job: "lighting a roofline for Christmas",
    title: "Roofline Christmas Lights Cost: Pricing by the Foot",
    description: "What it costs to light a roofline for Christmas, from a small front gutter run to a large home. How installers measure, price by the foot, and what adds to it.",
    intro: "Roofline lighting is the core of most professional holiday displays. Installers measure the gutters and peaks you want lit and price the job by the foot. Longer rooflines cost more in total but often less per foot.",
    rows: [
      { label: "80 ft, front of a small home", v: { feet: 80, stories: 0, takedown: 1 } },
      { label: "150 ft, typical front roofline", v: { feet: 150, stories: 0, takedown: 1 } },
      { label: "250 ft, front and sides", v: { feet: 250, stories: 0, takedown: 1 } },
      { label: "400 ft, whole house", v: { feet: 400, stories: 0, takedown: 1 } }
    ],
    calc: { feet: 150, stories: 0, takedown: 1 },
    included: [
      "Gutters and peaks measured on site",
      "LED C9 or C7 bulbs on wire cut to length",
      "Clips on gutters and shingles with no holes",
      "Clean, even bulb spacing along every line",
      "Takedown and storage after the season"
    ],
    factors: [
      "Total feet. More roofline means more lights, clips and ladder moves.",
      "Peaks. Gables and dormers take longer than straight gutter runs.",
      "Height. Second stories cost more per foot than a single story.",
      "Power. Long runs may need extra outlets or extension cords hidden along the house."
    ],
    diy: "A straight single-story roofline is a manageable weekend project with gutter clips and a good ladder. Getting the bulbs evenly spaced and the cords hidden takes patience. For peaks, steep roofs and long runs, a pro will be faster and safer.",
    tips: [
      "Measure the rooflines you want lit and compare quotes on the same number of feet.",
      "Light the front of the house first. Sides and back add cost but are seen less.",
      "Ask whether warm white or multicolor bulbs cost the same."
    ],
    faq: [
      ["How do I measure my roofline?", "Walk the gutters with a measuring wheel or tape, and add the slope length of each peak you want lit."],
      ["What bulbs do installers use?", "Most use LED C9 or C7 bulbs on commercial wire. They are bright, sturdy and use little power."],
      ["Is it cheaper per foot for a long roofline?", "Often yes. Setup and travel are spread over more feet, so the per-foot cost usually drops on bigger jobs."]
    ]
  }
];

if (typeof module !== "undefined") module.exports = GUIDES;

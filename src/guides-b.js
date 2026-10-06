// Cost guide batch B: house cleaning, carpet cleaning, interior painting, junk removal,
// drain cleaning, handyman and tree trimming. Same schema as guides.js.
// Prose never states dollar amounts. The computed table on each page shows them.

const GUIDES_B = [
  // ---------------- House cleaning ----------------
  {
    slug: "regular-house-cleaning-cost",
    service: "house-cleaning",
    job: "regular house cleaning",
    title: "Regular House Cleaning Cost: Weekly or Biweekly Cleaning Prices",
    description: "What a regular house cleaning visit costs by number of bedrooms and bathrooms, what a standard clean covers, and how to keep recurring cleaning affordable.",
    intro: "A regular house cleaning is the standard visit most people book every week, every other week or once a month. The price mostly depends on how many bedrooms and bathrooms you have, since bathrooms take the longest. Homes that are kept up between visits are quicker to clean.",
    rows: [
      { label: "2 bedrooms, 1 bathroom, standard clean", v: { beds: 2, baths: 1, type: 0 } },
      { label: "3 bedrooms, 2 bathrooms, standard clean", v: { beds: 3, baths: 2, type: 0 } },
      { label: "4 bedrooms, 2.5 bathrooms, standard clean", v: { beds: 4, baths: 2.5, type: 0 } }
    ],
    calc: { beds: 3, baths: 2, type: 0 },
    included: [
      "Kitchen counters, sink, stovetop and appliance fronts wiped down",
      "Bathrooms cleaned, including toilets, tubs, showers and mirrors",
      "Dusting of reachable surfaces and furniture",
      "Floors vacuumed and mopped",
      "Trash emptied throughout the home"
    ],
    factors: [
      "Bathrooms. Each bathroom adds more time than a bedroom because of scrubbing and fixtures.",
      "How often you book. A home cleaned every week or two stays easier to clean than one cleaned monthly.",
      "Clutter. Cleaners work faster when counters and floors are clear before they arrive.",
      "Pets. Pet hair on floors and furniture adds vacuuming time.",
      "First visit. Many cleaners start with a deep clean before switching to regular visits."
    ],
    diy: "Regular cleaning is something most people can do themselves with basic supplies. What you are really paying for is time back in your week. If you only want help with the hardest parts, some people clean on their own and book a pro just for bathrooms and kitchens now and then.",
    tips: [
      "Ask whether the cleaner offers a lower rate for weekly or biweekly visits. Many do for recurring customers.",
      "Pick up clutter before the visit so the cleaner spends their time actually cleaning.",
      "Agree on a checklist up front so both of you know what a standard visit covers."
    ],
    faq: [
      ["How often should I schedule a house cleaning?", "Every two weeks is a common choice for busy households. Weekly works well with kids or pets, and monthly works for smaller, tidy homes."],
      ["Should I tip my house cleaner?", "Tipping is common but not required. Many people tip for a recurring cleaner around the holidays or after an especially tough visit."],
      ["Do I need to provide cleaning supplies?", "Most cleaners bring their own supplies and equipment. If you want specific products used, ask ahead and leave them out."]
    ]
  },
  {
    slug: "apartment-cleaning-cost",
    service: "house-cleaning",
    job: "apartment cleaning",
    title: "Apartment Cleaning Cost: Studio, 1 and 2 Bedroom Prices",
    description: "How much apartment cleaning costs for a studio, one bedroom or two bedroom unit, what a standard clean includes, and when a deep clean makes more sense.",
    intro: "Apartments are usually quick to clean because there are fewer rooms and often just one bathroom. Because the job is short, many cleaners have a minimum charge, so a studio may not cost much less than a one bedroom. The table shows standard cleaning prices for common apartment sizes.",
    rows: [
      { label: "Studio, 1 bathroom, standard clean", v: { beds: 0, baths: 1, type: 0 } },
      { label: "1 bedroom, 1 bathroom, standard clean", v: { beds: 1, baths: 1, type: 0 } },
      { label: "2 bedrooms, 1 bathroom, standard clean", v: { beds: 2, baths: 1, type: 0 } }
    ],
    calc: { beds: 1, baths: 1, type: 0 },
    included: [
      "Kitchen counters, sink and appliance fronts cleaned",
      "Bathroom toilet, tub or shower, sink and mirror cleaned",
      "Dusting of furniture, shelves and window sills",
      "Floors vacuumed and mopped",
      "Trash taken out"
    ],
    factors: [
      "Minimum charge. Small units often hit the cleaner's minimum, so price per room is higher than for a house.",
      "Type of clean. A deep clean or move-out clean takes much longer than a standard visit.",
      "Parking and access. Paid parking, long walks from the lot or no elevator can add to the cost.",
      "Condition. A unit that has gone a long time without cleaning may need a deep clean first."
    ],
    diy: "A standard apartment clean is very doable on your own in an afternoon. Hiring out makes the most sense for a deep clean, a move-out clean you need for your deposit, or when your schedule is packed.",
    tips: [
      "Book a recurring visit if you can. Some cleaners lower the rate for repeat customers.",
      "Split a visit with a roommate so the minimum charge is easier to justify.",
      "Tell the cleaner about parking and building access ahead of time so they do not lose time on arrival."
    ],
    faq: [
      ["Is cleaning a studio much cheaper than a one bedroom?", "Usually only a little. Both are short jobs, and cleaners often have a minimum charge that covers travel and setup."],
      ["What is the difference between a standard and a deep apartment clean?", "A standard clean covers the visible surfaces. A deep clean adds baseboards, the inside of the microwave, light fixtures and built-up grime."],
      ["Will my landlord accept a regular cleaning at move-out?", "Often not. Landlords usually expect inside cabinets, the fridge and the oven to be cleaned, which is part of a move-out clean."]
    ]
  },

  // ---------------- Carpet cleaning ----------------
  {
    slug: "stair-carpet-cleaning-cost",
    service: "carpet-cleaning",
    job: "stair carpet cleaning",
    title: "Stair Carpet Cleaning Cost: Price Per Flight of Stairs",
    description: "What it costs to have carpeted stairs professionally cleaned, why stairs take longer than rooms, and how to save by pairing stairs with other rooms.",
    intro: "Carpeted stairs take more effort than a flat room because each step is cleaned by hand with a smaller tool. Most carpet cleaners also have a minimum charge, so stairs are usually booked along with a room or two. The table shows a flight of stairs paired with common room counts.",
    rows: [
      { label: "1 flight of stairs plus 1 room", v: { rooms: 1, stairs: 1, treat: 0 } },
      { label: "2 flights of stairs plus 1 room", v: { rooms: 1, stairs: 2, treat: 0 } },
      { label: "1 flight of stairs plus 3 rooms", v: { rooms: 3, stairs: 1, treat: 0 } }
    ],
    calc: { rooms: 1, stairs: 1, treat: 0 },
    included: [
      "Pre-treatment sprayed on the treads and risers",
      "Each step cleaned with a hand tool using hot water extraction",
      "Edges and corners along the wall worked by hand",
      "Carpet groomed and left to dry",
      "Rooms on the same visit cleaned with the main wand"
    ],
    factors: [
      "Number of steps. A flight is usually 12 to 14 steps, and landings add a little more.",
      "Stains. Heavy traffic lanes and spills on the steps need extra spot treatment.",
      "Pet urine. Odor treatment takes longer and uses enzyme products.",
      "Minimum charge. Stairs alone often fall under the minimum, so adding rooms can be better value."
    ],
    diy: "You can clean stairs with a rented or home carpet cleaner that has a hand tool attachment. It is slow, tiring work, and it is easy to leave carpet too wet. A pro has stronger suction, which pulls out more water and dirt and helps the carpet dry faster.",
    tips: [
      "Book stairs with the rest of your carpeted rooms so you pay one minimum and one trip.",
      "Vacuum the stairs well before the visit. Loose dirt makes extraction less effective.",
      "Stay off the steps until they are dry, or lay a clean towel down to avoid slipping and new marks."
    ],
    faq: [
      ["Why do stairs cost more than a room for the area cleaned?", "Each step is cleaned by hand on its top and front, so the work goes slower than running a wand across an open floor."],
      ["How long do carpeted stairs take to dry?", "Often a few hours, depending on airflow and humidity. Running fans or the air conditioning helps speed it up."],
      ["Can a carpet cleaner just do the stairs?", "Usually yes, but most charge a minimum. Adding a room or hallway often costs little more."]
    ]
  },

  // ---------------- Interior painting ----------------
  {
    slug: "cost-to-paint-a-bedroom",
    service: "interior-painting",
    job: "painting a bedroom",
    title: "Cost to Paint a Bedroom: Small, Medium and Primary Bedroom Prices",
    description: "How much it costs to have a bedroom painted by a pro, from a small kids' room to a large primary bedroom, plus what raises the price and how to save.",
    intro: "Painting one bedroom is one of the most common jobs for interior painters. The price depends on the size of the room and whether you are changing the color, since a new color often needs an extra coat. Walls in good shape are faster to prep than walls with dents and holes.",
    rows: [
      { label: "Small bedroom (10x10), same color, walls only", v: { rooms: 1, size: 0, ceiling: 0, trim: 0, cond: 0 } },
      { label: "Medium bedroom (12x12), new color, walls only", v: { rooms: 1, size: 1, ceiling: 0, trim: 0, cond: 1 } },
      { label: "Large primary bedroom (14x16), new color, walls only", v: { rooms: 1, size: 2, ceiling: 0, trim: 0, cond: 1 } }
    ],
    calc: { rooms: 1, size: 1, ceiling: 0, trim: 0, cond: 1 },
    included: [
      "Furniture moved to the center of the room and covered",
      "Floors protected with drop cloths",
      "Outlet covers removed and edges taped where needed",
      "Small nail holes filled and sanded",
      "Two coats of mid-grade paint on the walls",
      "Cleanup and furniture put back"
    ],
    factors: [
      "Room size. A large primary bedroom has much more wall area than a small kids' room.",
      "Color change. Going from dark to light, or light to bold, often needs an extra coat or primer.",
      "Wall repairs. Patching dents, cracks and anchors adds prep time before any paint goes on.",
      "Ceiling and trim. Adding them makes the job longer but is cheaper than a separate visit later.",
      "Paint quality. Premium paint costs more per gallon but can cover better."
    ],
    diy: "A bedroom is a good first painting project if you are patient with prep and cutting in along edges. Expect to spend a weekend once you count moving furniture, taping and two coats. A pro is usually faster and cleaner, especially with high walls, dark colors or lots of repairs.",
    tips: [
      "Clear out small items, decor and wall hangings before the painter arrives.",
      "Pick a color close to the current one if you can. It may save a coat.",
      "Paint more than one room in the same visit so setup and travel are shared."
    ],
    faq: [
      ["How long does it take to paint a bedroom?", "A pro can usually paint the walls of a typical bedroom in a day, including prep and two coats."],
      ["Does the price include paint?", "The estimates here include mid-grade paint and basic supplies. Ask any painter whether their quote includes paint or if you buy it."],
      ["Should I paint the ceiling at the same time?", "If the ceiling looks dingy or stained, yes. It is easier to paint the ceiling first, while the walls are being redone anyway."]
    ]
  },
  {
    slug: "cost-to-paint-walls-and-ceiling",
    service: "interior-painting",
    job: "painting a room's walls and ceiling",
    title: "Cost to Paint a Ceiling Along With a Room's Walls",
    description: "What it costs to add the ceiling when a painter does a room's walls, how much extra time ceilings take, and when repainting the ceiling is worth it.",
    intro: "Ceilings are slower to paint than walls because the painter works overhead and needs extra care around light fixtures and edges. Most people add the ceiling when they are already painting the walls, which is how the prices below are figured. A walls-only price is shown for comparison.",
    rows: [
      { label: "Medium room (12x12), walls and ceiling", v: { rooms: 1, size: 1, ceiling: 1, trim: 0, cond: 0 } },
      { label: "Large room (14x16), walls and ceiling", v: { rooms: 1, size: 2, ceiling: 1, trim: 0, cond: 0 } },
      { label: "Medium room (12x12), walls only, for comparison", v: { rooms: 1, size: 1, ceiling: 0, trim: 0, cond: 0 } }
    ],
    calc: { rooms: 1, size: 1, ceiling: 1, trim: 0, cond: 0 },
    included: [
      "Furniture moved and covered, floors protected",
      "Light fixtures and smoke detectors covered or loosened",
      "Ceiling painted first with flat ceiling paint",
      "Walls painted with two coats once the ceiling is done",
      "Cleanup when the job is finished"
    ],
    factors: [
      "Ceiling height. Vaulted or extra-tall ceilings need taller ladders or scaffolding.",
      "Texture. Popcorn and heavy textured ceilings soak up more paint and are slower to roll.",
      "Stains. Water or smoke stains usually need a stain-blocking primer first.",
      "Room size. A larger ceiling simply takes more time and paint."
    ],
    diy: "Painting a ceiling yourself is possible with an extension pole and a good roller, but it is messy and hard on your neck and shoulders. Stains often bleed through if they are not primed first. Many people who paint their own walls still hire out ceilings.",
    tips: [
      "Have the ceiling done at the same time as the walls so prep and cleanup happen only once.",
      "Fix any roof or plumbing leak before painting over a water stain, or it will come back.",
      "Stick with a flat white ceiling paint. It hides flaws better than shinier finishes."
    ],
    faq: [
      ["Can I hire a painter for just the ceiling?", "Yes, but many painters have a minimum charge, so a ceiling alone may cost close to a small room. The calculator prices ceilings along with walls."],
      ["Should ceilings be painted before walls?", "Yes. Painting the ceiling first means any drips or roller spatter on the walls get covered when the walls are painted."],
      ["Can you paint a popcorn ceiling?", "Yes, though it takes more paint and care. Popcorn texture in older homes can contain asbestos, so have it tested before scraping or sanding."]
    ]
  },

  // ---------------- Junk removal ----------------
  {
    slug: "couch-removal-cost",
    service: "junk-removal",
    job: "couch removal",
    title: "Couch Removal Cost: What Haulers Charge to Take a Sofa",
    description: "How much it costs to have an old couch or sectional hauled away, why stairs and sleeper sofas cost more, and cheaper options to try first.",
    intro: "Getting rid of a couch is one of the most common junk removal jobs. A single sofa is a small load, so the price is close to the hauler's minimum. Carrying it down stairs or out of a basement takes longer, and a big sectional or sleeper sofa fills more of the truck.",
    rows: [
      { label: "One couch, already at the curb or driveway", v: { load: 0, heavy: 0, access: 0 } },
      { label: "One couch, carried from the ground floor", v: { load: 0, heavy: 0, access: 1 } },
      { label: "Sectional or sleeper sofa, from upstairs or a basement", v: { load: 1, heavy: 1, access: 2 } }
    ],
    calc: { load: 0, heavy: 0, access: 1 },
    included: [
      "Two-person crew to lift and carry the couch",
      "Careful removal through doors and hallways",
      "Loading and hauling away in the truck",
      "Dump, donation or recycling drop-off",
      "Quick sweep of the spot where the couch sat"
    ],
    factors: [
      "Where it is. Stairs, tight turns and basements add carrying time.",
      "Size. Sectionals and sleeper sofas take more space in the truck and weigh more.",
      "Disposal fees. Some landfills and transfer stations charge extra for upholstered furniture.",
      "Other items. Adding a chair or mattress on the same trip usually costs less than a second visit."
    ],
    diy: "If you have a truck and a strong helper, you can haul a couch to the dump yourself and pay just the disposal fee. Some cities also offer bulky item pickup. A hauler makes more sense for heavy sleeper sofas, stairs, or when you have no way to move it.",
    tips: [
      "Check whether your city offers free or low-cost bulky item pickup before you book.",
      "If the couch is in good shape, try listing it for free or calling a local donation pickup.",
      "Bundle other unwanted items into the same trip to get more value from the minimum charge."
    ],
    faq: [
      ["Will a junk hauler donate my couch?", "Many haulers donate furniture that is clean and in good shape. Couches with stains, tears or pet damage usually go to the dump."],
      ["Do I need to move the couch outside first?", "No. The crew carries it out for you. Moving it to the curb yourself can lower the price a little."],
      ["Why does a sleeper sofa cost more?", "The metal fold-out frame makes it much heavier and harder to carry, especially on stairs."]
    ]
  },
  {
    slug: "garage-cleanout-cost",
    service: "junk-removal",
    job: "a garage cleanout",
    title: "Garage Cleanout Cost: Junk Removal Prices by Truckload",
    description: "What a garage cleanout costs from a junk removal crew, priced by how much of the truck you fill, plus what adds fees and how to keep the load smaller.",
    intro: "Junk haulers usually price a garage cleanout by how much space your stuff takes up in their truck. A garage is easy to reach, so most of the cost is the volume and the dump fees. Old appliances, tires and paint can add extra fees.",
    rows: [
      { label: "Light cleanout, about 1/4 truck", v: { load: 1, heavy: 0, access: 1 } },
      { label: "Medium cleanout, about 1/2 truck", v: { load: 2, heavy: 0, access: 1 } },
      { label: "Full garage, full truck with 2 heavy items", v: { load: 4, heavy: 2, access: 1 } }
    ],
    calc: { load: 2, heavy: 0, access: 1 },
    included: [
      "Two-person crew to sort, carry and load",
      "Loading of boxes, old furniture, tools and yard items",
      "Hauling away in the crew's truck",
      "Dump, recycling or donation fees for normal items",
      "Light sweep of the cleared floor"
    ],
    factors: [
      "Volume. The more of the truck you fill, the more labor and disposal fees you pay.",
      "Heavy or special items. Old fridges, freezers, tires and TVs often carry extra disposal fees.",
      "Hazardous waste. Most haulers will not take paint, chemicals or fuel. Those go to a household hazardous waste drop-off.",
      "Sorting. If you want the crew to help decide what stays, the job takes longer."
    ],
    diy: "You can clean out a garage yourself by renting a dumpster or making trips to the dump. That works well if you have time and a vehicle. A hauler is faster and does the heavy lifting, which matters most for big, awkward items.",
    tips: [
      "Sort before the crew arrives so they only load what is going. Mark keepers clearly.",
      "Sell or give away usable items first to shrink the load.",
      "Take paint, oil and chemicals to a household hazardous waste site yourself, since most haulers will not."
    ],
    faq: [
      ["How do junk haulers price a garage cleanout?", "Most price by how much of the truck the load fills, plus extra fees for certain items like appliances and tires."],
      ["What won't a junk hauler take?", "Most will not take paint, chemicals, fuel, propane tanks or other hazardous waste. Ask about anything you are unsure of."],
      ["How long does a garage cleanout take?", "A typical garage is often done in a few hours, depending on how much is there and how well it is sorted."]
    ]
  },

  // ---------------- Drain cleaning ----------------
  {
    slug: "emergency-drain-cleaning-cost",
    service: "drain-cleaning",
    job: "emergency drain cleaning",
    title: "Emergency Plumber Drain Cleaning Cost: After-Hours and Weekend Prices",
    description: "What an emergency plumber charges to clear a clogged drain at night or on a weekend, how it compares to regular hours, and when it is worth waiting.",
    intro: "A drain that backs up at night or on a weekend can't always wait. Plumbers charge more for after-hours calls, often with a higher hourly rate plus an emergency fee. The table shows evening, weekend or emergency prices for common clogs.",
    rows: [
      { label: "Sink or tub drain, after hours", v: { job: 0, access: 0, when: 1 } },
      { label: "Clogged toilet, after hours", v: { job: 1, access: 0, when: 1 } },
      { label: "Main sewer line, after hours", v: { job: 2, access: 0, when: 1 } }
    ],
    calc: { job: 0, access: 0, when: 1 },
    included: [
      "Plumber dispatched outside regular hours",
      "Clog located and cleared with a hand, drum or machine auger",
      "Main line cabled from the clean-out when needed",
      "Water run to confirm the drain flows freely",
      "Basic cleanup of the work area"
    ],
    factors: [
      "Timing. Late nights, weekends and holidays carry higher rates than weekday calls.",
      "Which drain. A main sewer line backup takes more time and equipment than a single sink.",
      "Access. A missing or buried clean-out can mean pulling a toilet or working through a roof vent.",
      "Repeat clogs. Roots or a broken pipe may need a camera inspection or repair later."
    ],
    diy: "Before calling at night, try a plunger or a small hand snake on a single sink, tub or toilet. If several drains are backing up at once, or sewage is coming up in a tub or floor drain, stop using water and call a plumber, since that points to the main line.",
    tips: [
      "If only one fixture is clogged and you have another bathroom, waiting for regular hours can save money.",
      "Ask for the emergency fee and hourly rate on the phone before the plumber heads out.",
      "Find your clean-out ahead of time. Easy access shortens the job."
    ],
    faq: [
      ["Is it worth paying for an emergency plumber?", "It is when sewage is backing up, water is overflowing, or you have no working toilet. A single slow sink can usually wait until morning."],
      ["How do I know if it is a main line clog?", "Clues include several drains backing up at once, gurgling toilets when the washer drains, or water coming up in a tub or floor drain."],
      ["Do plumbers charge a trip fee for emergencies?", "Many do, either as a separate fee or built into a higher first-hour rate. Ask before they come out."]
    ]
  },
  {
    slug: "bathtub-drain-clog-cost",
    service: "drain-cleaning",
    job: "unclogging a bathtub drain",
    title: "Bathtub Drain Clog Cost: What a Plumber Charges to Clear It",
    description: "How much a plumber charges to unclog a bathtub drain, why access and timing change the price, and simple steps to try before you call.",
    intro: "Most bathtub clogs are hair and soap scum caught just below the drain. A plumber can usually clear one with a hand or drum auger in about an hour. The price goes up if the clog is deeper in the line or you need someone after hours.",
    rows: [
      { label: "Bathtub drain, regular hours", v: { job: 0, access: 0, when: 0 } },
      { label: "Bathtub drain, hard to reach, regular hours", v: { job: 0, access: 1, when: 0 } },
      { label: "Bathtub drain, evening or weekend", v: { job: 0, access: 0, when: 1 } }
    ],
    calc: { job: 0, access: 0, when: 0 },
    included: [
      "Drain stopper or overflow plate removed",
      "Hair and buildup pulled from the trap area",
      "Line snaked with a hand or drum auger",
      "Stopper reinstalled and drain flow tested"
    ],
    factors: [
      "Depth of the clog. A clog past the trap takes longer to reach than one near the stopper.",
      "Access. Old or stuck stoppers and tight overflow openings slow the plumber down.",
      "Timing. Evening and weekend calls cost more.",
      "Other drains. If the sink and tub are both slow, the clog may be in a shared line."
    ],
    diy: "Many tub clogs can be cleared at home. Remove the stopper and pull out hair with a cheap plastic drain tool, or try a small hand snake. Avoid pouring harsh chemical cleaners, which can be hard on pipes and dangerous for a plumber who works on the drain later.",
    tips: [
      "Try a plastic hair removal tool first. It clears many tub clogs in a few minutes.",
      "Put a hair catcher over the drain to keep the clog from coming back.",
      "If the tub is slow but still drains, book a regular-hours visit instead of an emergency call."
    ],
    faq: [
      ["What usually clogs a bathtub drain?", "Hair mixed with soap scum is the most common cause. It builds up near the stopper and in the trap."],
      ["Are chemical drain cleaners safe to use?", "They can damage older pipes and splash on skin. Tell the plumber if you used one, since it may still be in the drain."],
      ["Why does my tub gurgle when the toilet flushes?", "That can point to a clog or venting issue further down the line. A plumber can check whether it is more than a tub clog."]
    ]
  },

  // ---------------- Handyman ----------------
  {
    slug: "shelf-and-picture-hanging-cost",
    service: "handyman",
    job: "hanging shelves and pictures",
    title: "Picture and Shelf Hanging Cost: Handyman Prices",
    description: "What a handyman charges to hang pictures, mirrors and floating shelves, why small jobs often hit a minimum charge, and how to get more done per visit.",
    intro: "Hanging pictures, mirrors and shelves is quick work for a handyman, so most of the cost is the visit itself. Each piece takes a few minutes to measure, level and anchor. The more items you group into one trip, the lower the price per item.",
    rows: [
      { label: "Hang 3 pictures or shelves", v: { job: 6, qty: 3 } },
      { label: "Hang 6 pictures or shelves", v: { job: 6, qty: 6 } },
      { label: "Hang 12 pictures or shelves", v: { job: 6, qty: 12 } }
    ],
    calc: { job: 6, qty: 6 },
    included: [
      "Placement measured and marked with you",
      "Studs located, or the right wall anchors used",
      "Each item leveled and secured",
      "Basic hardware like screws and anchors",
      "Dust and pencil marks cleaned up"
    ],
    factors: [
      "Wall type. Plaster, brick and tile take longer to drill than drywall.",
      "Weight. Heavy mirrors and loaded shelves need studs or heavy-duty anchors.",
      "Gallery walls. Lining up a group of frames takes extra measuring and planning.",
      "Minimum charge. A few small items often cost about the same as the handyman's minimum."
    ],
    diy: "Hanging a few light frames is an easy DIY job with a level, a stud finder and the right anchors. Heavy mirrors, shelves meant to hold books and anything over a bed or crib deserve extra care. If you are unsure about anchoring, a handyman can do it right.",
    tips: [
      "Make a list of everything you want hung so it all gets done in one visit.",
      "Mark where you want each item with painter's tape before the handyman arrives.",
      "Add other small tasks, like a towel bar or a curtain rod, to the same trip."
    ],
    faq: [
      ["Do handymen bring their own anchors and screws?", "Most bring standard screws and wall anchors. Special hardware for heavy mirrors or floating shelves may be extra or come with the item."],
      ["Can a handyman hang things on brick or tile?", "Usually yes, with masonry or tile bits. It takes longer and there is some risk of cracking tile, so ask first."],
      ["How much weight can a shelf hold?", "That depends on the shelf, the brackets and whether it is anchored into studs. Check the shelf's rating and ask the handyman to use studs for heavy loads."]
    ]
  },
  {
    slug: "high-ceiling-light-bulb-replacement-cost",
    service: "handyman",
    job: "changing high-ceiling light bulbs",
    title: "Cost to Change High-Ceiling Light Bulbs (Handyman Prices)",
    description: "What a handyman charges to change light bulbs on high or vaulted ceilings, why the price is mostly the minimum charge, and how to make one visit count.",
    intro: "Bulbs in tall foyers, stairwells and vaulted rooms are hard to reach without a big ladder. Swapping each one only takes a few minutes, so the price is mostly the handyman's minimum charge. You usually supply the bulbs.",
    rows: [
      { label: "Change 2 high-ceiling bulbs", v: { job: 2, qty: 2 } },
      { label: "Change 6 high-ceiling bulbs", v: { job: 2, qty: 6 } },
      { label: "Change 12 high-ceiling bulbs", v: { job: 2, qty: 12 } }
    ],
    calc: { job: 2, qty: 6 },
    included: [
      "Tall ladder brought and set up safely",
      "Old bulbs removed and fixtures wiped clean",
      "New bulbs installed and tested",
      "Glass globes or covers removed and replaced",
      "Labor only. Bulbs are not included"
    ],
    factors: [
      "Ceiling height. Two-story foyers and stairwells may need a larger ladder or extra setup.",
      "Fixture type. Chandeliers and fixtures with glass covers take longer than a simple can light.",
      "Number of bulbs. More bulbs spread the minimum charge across more work.",
      "Fixture problems. A flickering light with a new bulb may be a wiring issue that needs an electrician."
    ],
    diy: "If you own a sturdy ladder tall enough for the job and are comfortable on it, changing bulbs is simple. Falls from ladders are a real risk, especially over stairs. If you would need to borrow a big ladder or set it on steps, hiring a handyman is the safer choice.",
    tips: [
      "Switch to long-life LED bulbs so you need this service far less often.",
      "Have every hard-to-reach bulb in the house changed in one visit, even ones that still work.",
      "Buy the bulbs ahead of time and confirm the base type and wattage for each fixture."
    ],
    faq: [
      ["Do I need to buy the bulbs?", "Usually yes. Most handymen charge for labor, and you supply bulbs that match your fixtures."],
      ["Why does changing a few bulbs cost close to the minimum?", "The job is quick, but the handyman still has to travel, bring a tall ladder and set it up safely."],
      ["Can a handyman change bulbs in a two-story foyer?", "Many can with an extension ladder or a ladder made for stairs. For very tall ceilings, ask whether they have the right equipment."]
    ]
  },

  // ---------------- Tree trimming ----------------
  {
    slug: "tree-trimming-over-house-cost",
    service: "tree-trimming",
    job: "trimming a tree over the house",
    title: "Cost to Trim Tree Branches Over Your House or Near Power Lines",
    description: "What it costs to trim tree branches hanging over your roof or near power lines, why these jobs cost more than open-yard trimming, and who to call for utility lines.",
    intro: "Branches over a roof can't just be cut and dropped. The crew often lowers them with ropes so nothing hits the house, which takes more time than trimming in an open yard. Trees near power lines take even more care. The table shows trimming prices, not full tree removal.",
    rows: [
      { label: "Medium tree (15 to 30 ft) over the house", v: { trees: 1, height: 1, near: 1, haul: 0 } },
      { label: "Large tree (30 to 60 ft) over the house", v: { trees: 1, height: 2, near: 1, haul: 0 } },
      { label: "Large tree (30 to 60 ft) near power lines", v: { trees: 1, height: 2, near: 2, haul: 0 } }
    ],
    calc: { trees: 1, height: 2, near: 1, haul: 0 },
    included: [
      "Branches over the roof cut back to a safe clearance",
      "Heavy limbs lowered with ropes instead of dropped",
      "Dead, broken and crossing branches pruned",
      "Branches chipped and hauled away",
      "Roof and gutters checked for fallen debris"
    ],
    factors: [
      "Location. Work over a roof or near lines needs rigging and slower, careful cuts.",
      "Tree height. Taller trees need climbing gear or a bucket truck.",
      "Access. A crew that can't get equipment into the yard has to carry more by hand.",
      "Debris. Having the crew chip and haul costs more than leaving wood cut and stacked.",
      "Power lines. Lines running to your house may need the utility to disconnect power before work starts."
    ],
    diy: "Trimming branches over a roof or near power lines is not a DIY job. Falling limbs can damage the roof, and contact with a power line can be deadly, even through a pole saw. Hire a trained tree crew, and call your utility about branches touching their lines.",
    tips: [
      "Call your electric utility first about branches near their lines. Many utilities trim around their own lines.",
      "Trim before storm season so you are not paying for an urgent call after a limb comes down.",
      "Have other trees trimmed on the same visit to share the crew's setup and travel time."
    ],
    faq: [
      ["Who is responsible for trimming near power lines?", "Utilities usually handle the main lines on poles. The line running from the pole to your house is often the homeowner's responsibility. Call your utility to check."],
      ["How far should branches be from my roof?", "Many arborists suggest keeping branches several feet away from the roof to protect shingles and gutters and to keep animals off the roof."],
      ["Does this price include removing the whole tree?", "No. These prices are for trimming. Full tree removal is a bigger job and is priced separately."]
    ]
  }
];

if (typeof module !== "undefined") module.exports = GUIDES_B;

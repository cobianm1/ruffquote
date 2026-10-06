// Cost guides for HVAC tune-up and repair. Same shape as guides.js.
// Prose never states dollar amounts. The computed table on each page shows them.

module.exports = [
  {
    slug: "ac-tune-up-cost",
    service: "hvac",
    job: "AC tune-up",
    title: "AC Tune-Up Cost: What You Should Pay for Air Conditioner Maintenance",
    description: "What an air conditioner tune-up costs, what a good tech checks during the visit, how two systems or an after-hours call change the price, and how to save.",
    intro: "An AC tune-up is a yearly checkup for your central air. A tech cleans the outdoor coil, checks refrigerant pressures and electrical parts, and clears the drain line. It takes about an hour, so the price is mostly the visit and the tech's time. Booking in spring, before the first heat wave, is usually easiest.",
    rows: [
      { label: "AC tune-up, 1 system", v: { job: 0, size: 1, when: 0 } },
      { label: "AC tune-up, 2 systems", v: { job: 0, size: 2, when: 0 } },
      { label: "AC tune-up, evening or weekend", v: { job: 0, size: 1, when: 1 } }
    ],
    calc: { job: 0, size: 1, when: 0 },
    included: [
      "Outdoor condenser coil rinsed and the area around it checked for debris",
      "Refrigerant pressures and temperatures measured",
      "Capacitor, contactor and wiring checked for wear",
      "Condensate drain line flushed so it does not back up",
      "Air filter checked, and replaced if you have one on hand",
      "Thermostat tested to make sure the system starts and stops correctly"
    ],
    factors: [
      "Number of systems. Homes with an upstairs and downstairs unit need two tune-ups.",
      "Timing. Spring visits are easier to book. Peak summer and after-hours calls cost more.",
      "Condition. A very dirty coil or a clogged drain line takes extra time.",
      "Parts. A worn capacitor or contactor found during the visit is priced on top."
    ],
    diy: "You can do the basics yourself: change the filter, keep plants and leaves a couple of feet away from the outdoor unit, and gently hose off the coil with the power off. Checking refrigerant and testing electrical parts needs gauges, meters and training, so leave that part to a tech.",
    tips: [
      "Book in early spring, before the busy season, when schedules are open and some companies run specials.",
      "If you have two systems, ask for a price for both in one visit instead of booking them separately.",
      "Ask about a yearly maintenance plan that covers both the AC and furnace visits, then compare it to paying per visit."
    ],
    faq: [
      ["Is an AC tune-up really worth it?", "A yearly check can catch small problems, like a weak capacitor or a clogged drain line, before they cause a breakdown on a hot day. Many equipment warranties also require regular maintenance, so check yours."],
      ["How long does an AC tune-up take?", "Most take about an hour for one system. A very dirty unit or a problem found during the visit can make it longer."],
      ["Should a tune-up include adding refrigerant?", "No. A healthy system does not use up refrigerant. If the tech says it is low, there is a leak, and adding refrigerant is a separate charge."]
    ]
  },
  {
    slug: "furnace-tune-up-cost",
    service: "hvac",
    job: "furnace tune-up",
    title: "Furnace Tune-Up Cost: Typical Price for Heating Maintenance",
    description: "How much a furnace tune-up costs, what a safety check should cover, how the price changes for bigger homes or after-hours visits, and simple ways to save.",
    intro: "A furnace tune-up gets your heating ready before cold weather. A tech cleans and checks the burners, flame sensor and igniter, tests safety controls and looks at the venting. Like an AC tune-up, it takes about an hour, so most of the price is the visit itself.",
    rows: [
      { label: "Furnace tune-up, 1 system", v: { job: 1, size: 1, when: 0 } },
      { label: "Furnace tune-up, large home or 2 systems", v: { job: 1, size: 2, when: 0 } },
      { label: "AC tune-up, for comparison", v: { job: 0, size: 1, when: 0 } }
    ],
    calc: { job: 1, size: 1, when: 0 },
    included: [
      "Burners and flame sensor cleaned",
      "Igniter and gas pressure checked",
      "Safety limits and rollout switches tested",
      "Flue and venting checked for blockage, with a carbon monoxide check",
      "Blower motor and belt checked, and the filter looked at",
      "Thermostat tested through a full heating cycle"
    ],
    factors: [
      "Number of systems. Two furnaces mean two tune-ups.",
      "Furnace type. High-efficiency furnaces have extra parts, like a condensate drain and inducer motor, that take more time.",
      "Timing. Fall visits are easier to book. The first cold snap brings a rush, and after-hours calls cost more.",
      "Parts. A worn flame sensor, igniter or blower part found during the visit costs extra."
    ],
    diy: "Changing the filter and keeping the area around the furnace clear are easy jobs for anyone. Cleaning burners, testing safety switches and checking for carbon monoxide involve gas and combustion, so hire a qualified tech for the tune-up itself. Make sure you have working carbon monoxide alarms either way.",
    tips: [
      "Schedule in early fall, before the first cold week, when techs are less busy.",
      "Pair it with your spring AC tune-up under one maintenance plan if the plan costs less than two separate visits.",
      "Change your filter yourself on schedule so the tech does not have to sell you one."
    ],
    faq: [
      ["How often should a furnace be serviced?", "Once a year is the common guideline, usually in the fall. Check your furnace warranty, since some require yearly service."],
      ["Do electric furnaces need tune-ups too?", "They need less work since there is no gas burner, but a check of the heating elements, wiring and blower is still a good idea."],
      ["What if the tech says my heat exchanger is cracked?", "A cracked heat exchanger can be a real safety problem, but it is also a costly claim. Ask to see photos or the crack itself, and get a second opinion before replacing the furnace."]
    ]
  },
  {
    slug: "ac-refrigerant-recharge-cost",
    service: "hvac",
    job: "AC refrigerant recharge",
    title: "AC Refrigerant Recharge Cost: What You Should Pay to Recharge Freon",
    description: "What it costs to recharge home air conditioner refrigerant, why the price depends on how many pounds you need, and why a leak check matters more than a top-off.",
    intro: "If your AC runs but blows warm air, low refrigerant is one common cause. Refrigerant is sold by the pound, so the price depends on how much your system needs, plus the tech's time to check for leaks and set the charge. Remember that refrigerant does not get used up. If it is low, it leaked out somewhere.",
    rows: [
      { label: "Recharge, small system", v: { job: 2, size: 0, when: 0 } },
      { label: "Recharge, average home", v: { job: 2, size: 1, when: 0 } },
      { label: "Recharge, large system", v: { job: 2, size: 2, when: 0 } }
    ],
    calc: { job: 2, size: 1, when: 0 },
    included: [
      "Pressures and temperatures measured to confirm the system is low",
      "Basic leak check at common spots, like valves and fittings",
      "Refrigerant added to the correct charge for your system",
      "System run and tested after the recharge"
    ],
    factors: [
      "Pounds needed. A bigger system or a bigger leak takes more refrigerant.",
      "Refrigerant type. Older systems that use R-22 cost much more to recharge, because new R-22 is no longer made or imported in the U.S.",
      "Leak repair. Finding and fixing the leak is usually a separate job, and it is the part that keeps the problem from coming back.",
      "Timing. Emergency calls during a heat wave cost more."
    ],
    diy: "This is not a DIY job for central air. Federal rules require EPA Section 608 certification to buy most refrigerants and work on these systems, and adding the wrong amount can damage the compressor. Your part is to keep the filter clean and the outdoor unit clear, and to call a tech when the air stops feeling cold.",
    tips: [
      "Ask the tech how many pounds they added and what type, and get it written on the invoice.",
      "If you need a recharge every year, pay for a proper leak search and repair instead of more top-offs.",
      "If your system uses R-22 and needs a big recharge, get a quote on a new system too before you decide."
    ],
    faq: [
      ["How do I know if my AC is low on refrigerant?", "Common signs are warm air from the vents, ice on the copper line at the outdoor unit, a hissing sound, or a system that runs and runs without cooling the house. A tech can confirm it with gauges."],
      ["Is Freon the same as refrigerant?", "Freon is a brand name that people use for refrigerant in general. Older systems use R-22. Most systems from about 2010 on use R-410A, and many of the newest systems use R-454B or R-32."],
      ["Can I just recharge it every summer?", "You can, but you are paying for the same leak over and over. Leaks also tend to get worse, and running low on refrigerant is hard on the compressor."]
    ]
  },
  {
    slug: "thermostat-installation-cost",
    service: "hvac",
    job: "thermostat installation",
    title: "Thermostat Installation Cost: Price to Install a Smart Thermostat",
    description: "How much a pro charges to install a new or smart thermostat, what affects the labor price, when you need a C-wire, and whether to do it yourself.",
    intro: "Swapping a thermostat is a short job when the wiring is simple. Most of the price is the tech's visit and about an hour of work. The thermostat itself is usually extra, so you can buy the model you want and pay only for installation, or have the tech supply one.",
    rows: [
      { label: "Install 1 thermostat, labor", v: { job: 3, size: 1, when: 0 } },
      { label: "Install 2 thermostats, 2 systems", v: { job: 3, size: 2, when: 0 } },
      { label: "Install 1 thermostat, evening or weekend", v: { job: 3, size: 1, when: 1 } }
    ],
    calc: { job: 3, size: 1, when: 0 },
    included: [
      "Power to the HVAC system shut off and the old thermostat removed",
      "Wires labeled and connected to the new thermostat",
      "New thermostat mounted and leveled, with a wall plate if needed",
      "Heating, cooling and fan tested from the new thermostat",
      "Basic setup, like schedule and Wi-Fi, if it is a smart model"
    ],
    factors: [
      "Wiring. Many smart thermostats need a C-wire for steady power. If you do not have one, the tech may add a wire or an adapter.",
      "System type. Heat pumps, two-stage systems and dual-fuel setups have more wires and settings.",
      "Number of thermostats. Each zone or system needs its own.",
      "The thermostat. Basic programmable models cost far less than smart ones, and the unit is usually not included in the labor price."
    ],
    diy: "Many people install their own thermostat. Turn off power to the HVAC system first, take a photo of the old wiring, and check the new model's compatibility tool before you buy. Call a pro if you have no C-wire, thick high-voltage wires, a heat pump or more wires than the new thermostat has terminals.",
    tips: [
      "Check with your electric or gas utility. Some offer rebates on smart thermostats.",
      "Buy the thermostat yourself and ask for a labor-only price, or compare it to the tech's price for supplying one.",
      "Add the install to a tune-up visit so you pay for one trip instead of two."
    ],
    faq: [
      ["What is a C-wire and do I need one?", "The C-wire, or common wire, gives a thermostat steady power. Many smart thermostats need one. Look behind your current thermostat to see if a wire is connected to the C terminal."],
      ["Can a smart thermostat lower my bills?", "It can help if it keeps your home from heating or cooling while you are away or asleep. How much you save depends on your habits and climate."],
      ["Does a thermostat need to be installed by a licensed pro?", "Rules vary by state and city. Low-voltage thermostat swaps are often allowed for homeowners, but line-voltage thermostats for electric heat may require an electrician."]
    ]
  },
  {
    slug: "dryer-vent-cleaning-cost",
    service: "hvac",
    job: "dryer vent cleaning",
    title: "Dryer Vent Cleaning Cost: What You Should Pay and Why It Matters",
    description: "What dryer vent cleaning costs, what the job includes, how long or roof-mounted vents change the price, and how to tell your vent needs cleaning.",
    intro: "Lint that builds up in a dryer vent makes clothes take longer to dry and is a common cause of dryer fires. Cleaning the vent line from the dryer to the outside cap usually takes about an hour. Long runs, roof exits and crushed ducts take more time.",
    rows: [
      { label: "Dryer vent cleaning, short run", v: { job: 4, size: 0, when: 0 } },
      { label: "Dryer vent cleaning, typical home", v: { job: 4, size: 1, when: 0 } },
      { label: "Dryer vent cleaning, long run or roof vent", v: { job: 4, size: 2, when: 0 } }
    ],
    calc: { job: 4, size: 1, when: 0 },
    included: [
      "Dryer pulled out and disconnected from the vent",
      "Vent line cleaned with rotary brushes and a vacuum",
      "Outside vent cap cleared and the flap checked",
      "Dryer reconnected and airflow checked at the outside vent"
    ],
    factors: [
      "Vent length. Long runs with several bends take longer to clean.",
      "Where the vent exits. Roof vents need a ladder and more care than a wall vent.",
      "Duct condition. Crushed or plastic foil ducts may need to be replaced, which costs extra.",
      "Bird nests or heavy clogs. Big blockages take more time to clear."
    ],
    diy: "If your vent run is short and exits through a nearby wall, a dryer vent brush kit and a shop vacuum can do a good job. Clean the lint trap every load either way. For long runs, roof vents or a vent you cannot reach, hiring a pro is safer and usually more thorough.",
    tips: [
      "Clean the lint screen after every load. It is the cheapest way to keep the vent clear longer.",
      "Ask if the price includes the outside cap and a roof vent, if you have one.",
      "Book it at the same time as another HVAC visit if the company does both, so you pay one trip charge."
    ],
    faq: [
      ["How often should a dryer vent be cleaned?", "Once a year is a common guideline. Large families, long vent runs and frequent laundry may need it more often."],
      ["What are signs my dryer vent is clogged?", "Clothes take more than one cycle to dry, the dryer or laundry room gets very hot, you smell something burning, or little air comes out of the outside vent."],
      ["Is this the same as air duct cleaning?", "No. Dryer vent cleaning is one short duct from the dryer to the outside. Air duct cleaning covers the heating and cooling ducts throughout the house."]
    ]
  },
  {
    slug: "air-duct-cleaning-cost",
    service: "hvac",
    job: "air duct cleaning",
    title: "Air Duct Cleaning Cost: Fair Prices and When It's Worth It",
    description: "What whole-house air duct cleaning really costs, why very cheap offers are a red flag, what a proper job includes, and when duct cleaning is actually needed.",
    intro: "Air duct cleaning means cleaning the supply and return ducts of your heating and cooling system. A proper job uses strong vacuum equipment and brushes, and it takes most of a morning or longer. The price mostly depends on how big your home is and how many vents and systems you have.",
    rows: [
      { label: "Duct cleaning, smaller home", v: { job: 5, size: 0, when: 0 } },
      { label: "Duct cleaning, average home", v: { job: 5, size: 1, when: 0 } },
      { label: "Duct cleaning, large home or 2 systems", v: { job: 5, size: 2, when: 0 } }
    ],
    calc: { job: 5, size: 1, when: 0 },
    included: [
      "Supply and return ducts cleaned with a strong vacuum and brushes or air whips",
      "Vent covers and return grilles removed and washed",
      "Return plenum and accessible parts of the blower area cleaned",
      "Floors and furniture protected around each vent",
      "Before and after photos or a camera look inside the ducts, from many companies"
    ],
    factors: [
      "Home size and vent count. More vents and longer ducts take more time.",
      "Number of systems. Each system has its own ductwork to clean.",
      "Access. Ducts in tight attics or crawl spaces are slower to reach.",
      "Extras. Cleaning the blower and coil, sealing ducts, or treating mold are usually priced separately."
    ],
    diy: "You can vacuum the vent covers and the first foot or so of duct, and you should keep changing your filter. Cleaning the full duct system needs truck-mounted or portable negative air equipment that homeowners do not have. If there is mold, hire a pro and fix the moisture problem first.",
    tips: [
      "Be wary of very low whole-house prices. Some ads are built to get a crew in the door and then add charges.",
      "Ask for a written quote based on the number of vents and systems before work starts.",
      "Only pay for it when you need it. The EPA suggests duct cleaning when there is visible mold, pests, or heavy dust and debris coming from the vents."
    ],
    faq: [
      ["How often should air ducts be cleaned?", "There is no set schedule for most homes. It makes sense after a renovation, if there is visible mold or pests, or if dust blows out of the vents. Otherwise, regular filter changes do most of the work."],
      ["Does duct cleaning improve air quality or lower bills?", "The EPA says duct cleaning has not been shown to prevent health problems. It can help if the ducts are truly dirty, but it is not a fix for allergies or high bills on its own."],
      ["How do I find a good duct cleaning company?", "Look for a company that does a full system clean, not just the vents, and gives a written price ahead of time. Certification from NADCA, the duct cleaning trade group, is one sign they follow industry standards."]
    ]
  }
];

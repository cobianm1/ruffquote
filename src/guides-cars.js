// Cost guides for window tinting, ceramic coating, paintless dent repair,
// windshield repair, mobile tire service and towing. Same shape as guides.js.
// Prose never states dollar amounts. The computed table on each page shows them.

module.exports = [
  // ---------------- Window tinting ----------------
  {
    slug: "window-tint-cost",
    service: "window-tinting",
    job: "car window tinting",
    title: "Car Window Tint Cost: What You Should Pay to Tint Your Windows",
    description: "How much car window tinting costs for a sedan or SUV, what changes the price, what a good tint job includes, and how to stay within your state's tint laws.",
    intro: "Window tint cuts glare, keeps the cabin cooler and adds privacy. The price depends on how many windows you tint, how big your vehicle is and which film you pick. Dyed and carbon films are the budget choices. The prices below use carbon film, which most shops offer as their entry option.",
    rows: [
      { label: "Sides and back window, sedan", v: { job: 1, vehicle: 0, film: 0 } },
      { label: "Sides and back window, SUV or truck", v: { job: 1, vehicle: 1, film: 0 } },
      { label: "2 front side windows only", v: { job: 0, vehicle: 0, film: 0 } }
    ],
    calc: { job: 1, vehicle: 0, film: 0 },
    included: [
      "Glass cleaned inside and the door seals wiped down",
      "Film cut to the shape of each window, by hand or with a plotter",
      "Film heat-shrunk to fit curved back glass",
      "Film squeegeed flat with the edges sealed",
      "Care instructions and a warranty card for the film"
    ],
    factors: [
      "Number of windows. Doing only the front doors to match factory rear tint costs much less than a full car.",
      "Vehicle size. SUVs, vans and wagons have more glass, and some back windows are very curved.",
      "Film type. Ceramic and other heat-rejecting films cost several times more than carbon film.",
      "Old tint removal. Stripping faded film and scraping off its glue takes extra time.",
      "Shop and warranty. Name-brand film with a lifetime warranty usually costs more than off-brand film."
    ],
    diy: "Pre-cut tint kits make DIY possible, but getting film on without dust, bubbles or creases takes practice, and curved back windows are hard. If you want to try, start with a flat side window. For a clean look on the whole car, a pro is usually worth it, and they know the shade limits in your state.",
    tips: [
      "Get the shop to tell you the film brand and warranty in writing before they start.",
      "If your SUV or truck already has dark factory glass in the back, you may only need the two front doors done.",
      "Ask whether old tint removal is included before you agree to a price."
    ],
    faq: [
      ["Is window tint legal?", "Yes, within limits. Each state sets how much light the front side windows, back windows and windshield must let through. A good shop will know your state's rules and can meter your windows."],
      ["How long does window tint last?", "Quality carbon and ceramic films can last many years without turning purple or bubbling. Cheap dyed film tends to fade sooner."],
      ["Why is my new tint hazy or bubbly?", "Small water pockets are normal for a few days while the film dries. If haze or bubbles are still there after a couple of weeks, take it back to the shop."]
    ]
  },
  {
    slug: "ceramic-tint-cost",
    service: "window-tinting",
    job: "ceramic window tint",
    title: "Ceramic Window Tint Cost: Is the Upgrade Worth It?",
    description: "What ceramic window tint costs compared with carbon film, how much heat it blocks, what is included and when the upgrade is worth paying for.",
    intro: "Ceramic tint uses tiny ceramic particles to block heat without needing to be very dark. That makes it popular in hot, sunny places and with people who want a cooler car but a lighter shade. The labor is about the same as carbon film. The difference in price is mostly the film itself.",
    rows: [
      { label: "Ceramic, sides and back, sedan", v: { job: 1, vehicle: 0, film: 1 } },
      { label: "Ceramic, sides and back, SUV or truck", v: { job: 1, vehicle: 1, film: 1 } },
      { label: "Ceramic, sides, back and windshield strip, sedan", v: { job: 2, vehicle: 0, film: 1 } }
    ],
    calc: { job: 1, vehicle: 0, film: 1 },
    included: [
      "Glass cleaned and prepped",
      "Ceramic film cut to fit each window",
      "Back window film heat-shrunk to the glass curve",
      "Edges sealed and the film squeegeed flat",
      "Manufacturer warranty registered for the film"
    ],
    factors: [
      "Film line. Many brands sell more than one ceramic film, and the top lines block more heat.",
      "Coverage. Adding a windshield strip or a clear heat-blocking film on the windshield adds to the price.",
      "Vehicle size. More glass means more film and more time.",
      "Old film. Removing existing tint first adds labor."
    ],
    diy: "Ceramic film costs more per roll, so mistakes during a DIY install get expensive. The skills are the same as any tint job: a dust-free space, lots of slip solution and patience with curved glass. For most people, paying a shop with a good film warranty makes more sense for ceramic.",
    tips: [
      "Ask to see a heat lamp demo comparing the films the shop sells. It shows the difference better than a spec sheet.",
      "If you mainly want heat control, a lighter ceramic shade can feel cooler than a darker carbon film.",
      "Compare quotes using the same film brand and line, since ceramic films vary a lot."
    ],
    faq: [
      ["Is ceramic tint worth it over carbon?", "If you live somewhere hot or park in the sun a lot, many drivers feel the difference. If you mostly want privacy and looks, carbon film is a fine choice for less money."],
      ["Does ceramic tint block phone or GPS signals?", "No. Ceramic film has no metal in it, so it does not interfere with phones, GPS or radio the way some older metallic films could."],
      ["Can I get ceramic film on my windshield?", "Many states allow a clear or very light film on the full windshield and a darker strip across the top. Ask your installer what is legal where you live."]
    ]
  },

  // ---------------- Ceramic coating ----------------
  {
    slug: "ceramic-coating-cost",
    service: "ceramic-coating",
    job: "ceramic coating",
    title: "Ceramic Coating Cost: What You Should Pay for a Car Coating",
    description: "What a professional ceramic coating costs for a sedan or SUV, how it compares with a spray sealant, what the prep includes and how to save.",
    intro: "A ceramic coating is a hard, glossy layer that bonds to your paint. It makes washing easier and helps the finish resist water spots and fading. Most of what you pay for is the prep: a careful wash, decontamination and polishing so the coating goes on clean paint. The prices below are for a 2 to 3 year coating on paint in good shape.",
    rows: [
      { label: "1-year spray sealant, sedan, for comparison", v: { level: 0, vehicle: 0, paint: 0 } },
      { label: "2 to 3 year coating, sedan", v: { level: 1, vehicle: 0, paint: 0 } },
      { label: "2 to 3 year coating, SUV", v: { level: 1, vehicle: 1, paint: 0 } }
    ],
    calc: { level: 1, vehicle: 0, paint: 0 },
    included: [
      "Hand wash with a pH-neutral soap",
      "Iron remover and clay bar to pull bonded grime off the paint",
      "One-step machine polish to boost gloss and remove light marks",
      "Panel wipe to remove polishing oils",
      "Coating applied panel by panel and left to cure indoors"
    ],
    factors: [
      "Coating level. Longer-rated coatings cost more and often need more layers.",
      "Paint condition. Swirls and scratches need more polishing before coating.",
      "Vehicle size. SUVs and trucks have more paint to prep and coat.",
      "Add-ons. Wheels, glass, trim and interior coatings are usually extra."
    ],
    diy: "Consumer ceramic coatings and spray sealants are easy to find and can work well. The hard part is the prep. Coating over swirls locks them in, and high spots that are not wiped off in time can leave dark smudges. If your paint is in good shape and you have a garage, a DIY coating is a reasonable project.",
    tips: [
      "Ask exactly which coating and how many layers you are getting, and what the warranty requires you to do.",
      "If the car is new, coat it early before swirls build up, so less polishing is needed.",
      "A spray sealant every few months gives some of the same water beading for much less money."
    ],
    faq: [
      ["How long does a ceramic coating last?", "It depends on the product, how many layers go on and how you wash the car. Hand washing and avoiding harsh brushes help it last."],
      ["Do I still need to wash my car?", "Yes. A coating makes washing easier and dirt slides off faster, but it does not make the car self-cleaning."],
      ["Does a coating protect against rock chips?", "Not really. A coating is very thin. Paint protection film is the product made to stop rock chips."]
    ]
  },
  {
    slug: "paint-correction-and-ceramic-coating-cost",
    service: "ceramic-coating",
    job: "paint correction and ceramic coating",
    title: "Paint Correction and Ceramic Coating Cost: Typical Prices",
    description: "What paint correction plus a long-lasting ceramic coating costs, why it takes a day or more, how swirls and vehicle size change the price, and how to save.",
    intro: "Paint correction is machine polishing that removes swirls, haze and light scratches from the clear coat. Detailers often pair it with a long-lasting coating so the corrected finish is protected. This is the most labor-heavy coating package, and it usually takes a full day or longer.",
    rows: [
      { label: "Correction and 5-year coating, sedan, light swirls", v: { level: 2, vehicle: 0, paint: 1 } },
      { label: "Correction and 5-year coating, SUV, light swirls", v: { level: 2, vehicle: 1, paint: 1 } },
      { label: "Correction and 5-year coating, SUV, heavy swirls", v: { level: 2, vehicle: 1, paint: 2 } }
    ],
    calc: { level: 2, vehicle: 0, paint: 1 },
    included: [
      "Full wash, iron decontamination and clay bar",
      "Paint thickness checked before polishing",
      "Multi-step machine polish to remove swirls and haze",
      "Panel wipe and inspection under bright lights",
      "Long-lasting coating on paint, with wheels and trim often included"
    ],
    factors: [
      "Paint condition. Heavy swirls and scratches need more polishing steps.",
      "Paint type. Soft paint marks easily, and hard paint takes longer to cut.",
      "Vehicle size. Bigger vehicles have more panels to correct.",
      "Coating choice. Some top coatings are sold only through certified installers.",
      "Deep scratches. Anything that catches a fingernail may not polish out fully."
    ],
    diy: "Paint correction with a dual-action polisher is learnable, and many hobbyists do it. It takes a full weekend for a first-timer, plus the cost of a polisher, pads and compounds. Polishing too hard on edges can burn through the clear coat. If you want to learn, practice on a junkyard panel before touching your own car.",
    tips: [
      "Ask the detailer to do a test spot on one panel so you can see the result before you commit.",
      "A one-step polish plus a shorter coating can get most of the shine for less money.",
      "Learn a safe hand-wash method afterward so new swirls don't come back right away."
    ],
    faq: [
      ["Does paint correction remove all scratches?", "It removes swirls and light scratches in the clear coat. Deep scratches through to the color or primer need touch-up paint or a body shop."],
      ["How long does it take?", "Usually a full day for a car in fair shape, and two days or more for a large vehicle with heavy swirls."],
      ["Is it safe for my paint?", "In skilled hands, yes. A good detailer measures paint thickness and removes as little clear coat as needed."]
    ]
  },

  // ---------------- Paintless dent repair ----------------
  {
    slug: "paintless-dent-repair-cost",
    service: "paintless-dent-repair",
    job: "paintless dent repair",
    title: "Paintless Dent Repair Cost: Price for Door Dings and Small Dents",
    description: "What paintless dent repair costs for door dings and small dents, how size and number of dents change the price, and when PDR will and won't work.",
    intro: "Paintless dent repair, or PDR, fixes dents without sanding, filler or new paint. A technician works the metal back into shape from behind or pulls it out with glue tabs. It is usually faster and cheaper than a body shop, and your factory paint stays on. It works best on dents where the paint is not cracked.",
    rows: [
      { label: "1 small dent or door ding", v: { job: 0, dents: 1, size: 0 } },
      { label: "1 medium dent, up to golf ball size", v: { job: 0, dents: 1, size: 1 } },
      { label: "1 large dent, up to baseball size", v: { job: 0, dents: 1, size: 2 } }
    ],
    calc: { job: 0, dents: 1, size: 0 },
    included: [
      "Dent inspected under a reflection light",
      "Interior panels or trim removed as needed for access",
      "Dent pushed out with PDR rods or pulled with glue tabs",
      "High spots tapped down and the panel checked for a flat finish",
      "Trim and panels put back"
    ],
    factors: [
      "Dent size. Bigger and deeper dents take more time.",
      "Number of dents. Extra dents fixed on the same visit usually cost less each.",
      "Location. Body lines, panel edges and braced areas like roof rails are harder.",
      "Access. Some panels need trim or a tail light removed to reach the back of the dent.",
      "Paint. Cracked or chipped paint means PDR alone cannot give a perfect result."
    ],
    diy: "Glue puller kits can lift shallow, round dings on flat panels, and some people get good results. Pulling too hard can create high spots or lift paint, and creased dents rarely come out right with a kit. For anything bigger than a small ding, or on a newer car you care about, a trained dent tech is the safer call.",
    tips: [
      "Get every ding on the car done in one visit to spread out the trip charge.",
      "Send clear photos of the dent with a light reflecting across it for a quick quote.",
      "Fix dents before you sell or trade in a car. Clean panels can help resale."
    ],
    faq: [
      ["Will paintless dent repair work on my dent?", "It works best on dents with no cracked paint, away from panel edges. Very sharp creases and stretched metal may not come back fully."],
      ["How long does PDR take?", "A single door ding often takes under an hour. Larger dents can take a couple of hours."],
      ["Is PDR cheaper than a body shop?", "Usually, because there's no filler, sanding or paint to blend. It also keeps your factory finish."]
    ]
  },
  {
    slug: "hail-damage-repair-cost",
    service: "paintless-dent-repair",
    job: "hail damage repair",
    title: "Hail Damage Repair Cost: Paintless Dent Repair Prices for Hail",
    description: "What hail damage repair costs with paintless dent repair, from light to heavy hail, how insurance usually handles it, and what to watch for after a storm.",
    intro: "Hail can leave dozens or hundreds of small dents across the roof, hood and trunk. Paintless dent repair is the usual fix when the paint is not cracked. The price depends on how many dents there are on each panel and how big they are. Many hail repairs are paid through comprehensive insurance, minus your deductible.",
    rows: [
      { label: "Light hail, whole car", v: { job: 1, dents: 1, size: 0 } },
      { label: "Moderate hail, whole car", v: { job: 2, dents: 1, size: 1 } },
      { label: "Heavy hail, whole car", v: { job: 3, dents: 1, size: 1 } }
    ],
    calc: { job: 2, dents: 1, size: 1 },
    included: [
      "Every panel inspected and dents counted under a light",
      "Headliner, lights or trim removed where needed for access",
      "Dents worked out panel by panel with PDR tools",
      "Final check of every panel before the car goes back"
    ],
    factors: [
      "Dent count. Hail is often priced per panel by how many dents each one has.",
      "Dent size. Bigger hail leaves deeper dents that take longer.",
      "Aluminum panels. Aluminum hoods and roofs are harder to work and often cost more.",
      "Access. Roof dents usually need the headliner lowered.",
      "Paint damage. Cracked paint or broken glass means body shop work on top of PDR."
    ],
    diy: "Hail repair is not a realistic DIY job. There are too many dents and each one needs proper tools and light to get flat. The best DIY step is to take clear photos of every panel right after the storm and call your insurer to open a claim.",
    tips: [
      "Check your comprehensive deductible before you decide whether to file a claim.",
      "Get an estimate from a local PDR shop as well as your insurer's adjuster.",
      "Be careful with storm chasers who show up after a big hail storm. Check reviews and get the warranty in writing."
    ],
    faq: [
      ["Does car insurance cover hail damage?", "Usually, if you have comprehensive coverage. Liability-only policies do not cover hail. Your deductible applies."],
      ["How long does hail repair take?", "Light hail can be done in a day or two. Heavy hail on a whole car can take a week or more."],
      ["Can I just leave the hail dents?", "You can, but they may lower your trade-in value. If your insurer pays out and you don't fix the car, a later hail claim on the same panels may be reduced."]
    ]
  },

  // ---------------- Windshield repair and replacement ----------------
  {
    slug: "windshield-replacement-cost",
    service: "windshield-repair",
    job: "windshield replacement",
    title: "Windshield Replacement Cost: What You Should Pay for New Glass",
    description: "What a windshield replacement costs for a car or SUV, how camera recalibration changes the price, what is included and how insurance can help.",
    intro: "When a crack is too long or sits in the driver's view, the windshield needs to be replaced. The price is mostly the glass, which varies a lot by vehicle and features. Many newer cars have a camera behind the windshield for lane keeping or automatic braking, and that camera needs recalibration after new glass goes in.",
    rows: [
      { label: "Windshield replacement, car", v: { job: 2, vehicle: 0, adas: 0 } },
      { label: "Windshield replacement, SUV, truck or van", v: { job: 2, vehicle: 1, adas: 0 } },
      { label: "Windshield replacement, car, with camera recalibration", v: { job: 2, vehicle: 0, adas: 1 } }
    ],
    calc: { job: 2, vehicle: 0, adas: 0 },
    included: [
      "Wipers, cowl and moldings removed",
      "Old windshield cut out and the frame cleaned",
      "Primer and a fresh bead of urethane applied",
      "New glass set and new moldings installed",
      "Mirror, sensors and wipers reinstalled and glass cleaned"
    ],
    factors: [
      "Glass features. Rain sensors, heated glass, heads-up displays and acoustic glass add cost.",
      "Camera recalibration. Cars with driver-assist cameras need recalibration after replacement.",
      "Glass source. Carmaker glass usually costs more than aftermarket glass.",
      "Vehicle. Larger windshields and luxury models cost more.",
      "Insurance. Comprehensive coverage often pays for glass, sometimes with a separate glass deductible."
    ],
    diy: "Replacing a windshield yourself is not a good idea for most people. The glass is heavy and easy to crack, and a poor urethane seal can leak or fail in a crash. The windshield also helps support the roof and airbags. This is a job for a trained auto glass tech.",
    tips: [
      "Call your insurer first. Some policies pay for glass with a low or no deductible.",
      "Ask whether the quote includes camera recalibration if your car has lane-keeping or emergency braking.",
      "Fix small chips early so they don't spread into a crack that needs a full replacement."
    ],
    faq: [
      ["Do I need to recalibrate my camera after a new windshield?", "If your car has a forward camera on the windshield for lane keeping or automatic braking, carmakers generally call for recalibration after replacement. Ask your installer or check your owner's manual."],
      ["Should I use carmaker or aftermarket glass?", "Aftermarket glass from a reputable maker meets the same safety standards and is usually fine. Some newer cars with complex cameras work best with carmaker glass."],
      ["How long does windshield replacement take?", "The install itself usually takes one to two hours, plus time for the urethane to cure before you drive."]
    ]
  },
  {
    slug: "windshield-chip-repair-cost",
    service: "windshield-repair",
    job: "windshield chip repair",
    title: "Windshield Chip Repair Cost: Fix a Rock Chip Before It Spreads",
    description: "What windshield chip and small crack repair costs, how it works, when a repair is enough and when you need new glass, plus how insurance often helps.",
    intro: "A rock chip in the windshield can turn into a long crack with a cold morning or a bump in the road. A quick repair fills the chip with resin so it stops spreading and becomes harder to see. It takes less than an hour, and many techs will come to your home or work.",
    rows: [
      { label: "Chip repair", v: { job: 0, vehicle: 0, adas: 0 } },
      { label: "Crack repair, under 6 inches", v: { job: 1, vehicle: 0, adas: 0 } },
      { label: "Windshield replacement, car, for comparison", v: { job: 2, vehicle: 0, adas: 0 } }
    ],
    calc: { job: 0, vehicle: 0, adas: 0 },
    included: [
      "Chip cleaned out and dried",
      "Resin injected under pressure to fill the break",
      "Resin cured with a UV light",
      "Surface scraped and polished smooth"
    ],
    factors: [
      "Size and type. Small bullseye and star chips are easiest to repair.",
      "Location. Damage in the driver's view or near the edge often means replacement.",
      "Number of chips. Extra chips on the same visit usually cost less.",
      "Mobile service. Techs who come to you may charge a little more.",
      "Insurance. Many comprehensive policies cover chip repair."
    ],
    diy: "DIY chip repair kits are cheap and can work on small, clean chips. Results vary, and a poor repair can make it harder for a pro to fix later. If the chip is in your line of sight or bigger than a quarter, have a pro do it.",
    tips: [
      "Cover a fresh chip with clear tape to keep dirt and water out until it's repaired.",
      "Ask your insurer about chip repair coverage. Many policies cover it.",
      "Avoid blasting the defroster or hot water on a chipped windshield in cold weather."
    ],
    faq: [
      ["Will a repaired chip disappear?", "It usually becomes much less visible, but you may still see a small mark. The main goal is to stop it spreading."],
      ["Can any crack be repaired?", "Short cracks can often be repaired. Long cracks, cracks reaching the edge and damage in the driver's view usually need a new windshield."],
      ["Does a chip repair need camera recalibration?", "No. Recalibration is only needed when the glass is replaced."]
    ]
  },

  // ---------------- Mobile tire service ----------------
  {
    slug: "flat-tire-repair-cost",
    service: "mobile-tire-service",
    job: "flat tire repair",
    title: "Flat Tire Repair Cost: Plug, Patch or Spare Swap",
    description: "What a flat tire repair costs when a mobile tire tech comes to you, plug and patch vs a spare swap, what is included and when a tire can't be fixed.",
    intro: "Most flats come from a nail or screw in the tread. A proper repair takes the tire off the wheel and seals the hole with a plug and patch from the inside. A mobile tire tech can do it where your car is parked, or put your spare on so you can drive to a shop.",
    rows: [
      { label: "Flat repair, plug and patch, 1 tire", v: { job: 0, tires: 1, vehicle: 0 } },
      { label: "Spare tire swap", v: { job: 1, tires: 1, vehicle: 0 } },
      { label: "Flat repair, 2 tires", v: { job: 0, tires: 2, vehicle: 0 } }
    ],
    calc: { job: 0, tires: 1, vehicle: 0 },
    included: [
      "Tire checked to make sure the damage can be safely repaired",
      "Tire removed from the wheel",
      "Hole sealed with a plug and patch from the inside",
      "Tire remounted, balanced and set to the right pressure",
      "Lug nuts tightened to the right spec"
    ],
    factors: [
      "Repair or replace. Sidewall damage or a tire driven flat can't be fixed.",
      "Mobile service. Coming to you costs more than driving to a shop.",
      "Wheel size. Large or low-profile wheels take more care.",
      "Timing. After-hours roadside calls often cost more."
    ],
    diy: "Changing to your spare is a skill every driver should know, and a plug kit can get you home in a pinch. A plug alone is a temporary fix. A proper plug and patch needs the tire off the wheel, which takes shop tools. If you're on a busy road shoulder, call for help instead of working next to traffic.",
    tips: [
      "Check your roadside coverage. Car insurance, auto clubs and new-car warranties often include a spare swap.",
      "Don't drive far on a flat. It can ruin a tire that could have been patched.",
      "Check your spare's air pressure a few times a year so it's ready when you need it."
    ],
    faq: [
      ["Can every flat tire be repaired?", "No. Punctures in the main tread up to about a quarter inch can usually be repaired. Sidewall or shoulder damage means a new tire."],
      ["Is a plug alone safe?", "A plug from the outside is meant as a temporary fix. A plug and patch from the inside is the proper repair."],
      ["How far can I drive on a spare?", "Small temporary spares are meant for short distances at lower speeds. Check the limits printed on the spare or in your owner's manual."]
    ]
  },
  {
    slug: "tire-mounting-and-balancing-cost",
    service: "mobile-tire-service",
    job: "tire mounting and balancing",
    title: "Tire Mounting and Balancing Cost: Installing Tires You Bought",
    description: "What it costs to have tires you bought online mounted and balanced by a mobile tire tech, how wheel size changes the price, and what is included.",
    intro: "Buying tires online can save money, but they still need to be mounted on your wheels and balanced. A mobile tire tech brings a tire machine and balancer to your driveway. The price is per tire, with a trip charge built in, so doing all four at once is the best value. Tires themselves are not included.",
    rows: [
      { label: "Mount and balance 4 tires, car", v: { job: 2, tires: 4, vehicle: 0 } },
      { label: "Mount and balance 4 tires, SUV or light truck", v: { job: 2, tires: 4, vehicle: 1 } },
      { label: "Mount and balance 4 tires, 20 inch wheels and up", v: { job: 2, tires: 4, vehicle: 2 } }
    ],
    calc: { job: 2, tires: 4, vehicle: 0 },
    included: [
      "Wheels removed and old tires taken off",
      "New valve stems installed",
      "New tires mounted and inflated",
      "Each wheel balanced with weights",
      "Wheels reinstalled and lug nuts torqued"
    ],
    factors: [
      "Number of tires. A full set costs less per tire than one or two.",
      "Wheel size. Large and low-profile wheels take longer and need more care.",
      "Run-flat tires. Stiff sidewalls make them harder to mount.",
      "Sensors. Replacing TPMS sensors adds to the price.",
      "Disposal. Some techs charge a fee to take the old tires."
    ],
    diy: "Mounting tires at home without a tire machine is hard on the tire, the wheel and your back, and you still need a balancer. It's not worth it for most people. What you can do yourself is buy the tires and have them shipped to your home for a mobile tech to install.",
    tips: [
      "Ship the tires to your home and book the install for the day after they arrive.",
      "Ask whether the old tire disposal fee is included.",
      "Ask for an alignment check if your old tires wore unevenly."
    ],
    faq: [
      ["Do new tires need to be balanced?", "Yes. Balancing stops vibration at highway speed and helps the tires wear evenly."],
      ["Should I get an alignment with new tires?", "It's a good idea if your old tires wore unevenly or the car pulls to one side. Mobile tire techs usually can't do alignments, so plan a shop visit."],
      ["Do I need new TPMS sensors?", "Not always. Sensors have batteries that can wear out over time, so older ones may need replacing when you get new tires."]
    ]
  },

  // ---------------- Towing and roadside help ----------------
  {
    slug: "towing-cost",
    service: "towing",
    job: "towing",
    title: "Towing Cost: What You Should Pay for a Tow",
    description: "What a tow costs by distance, how nights and weekends change the price, what is included and how to check whether your insurance or auto club covers it.",
    intro: "Most tows are priced as a hookup fee plus a charge per mile. Short tows across town cost much less than a long haul to a dealer in the next city. Nights, weekends and tricky situations like a car in a ditch cost more. Before you pay, check whether your insurance, auto club or car warranty includes towing.",
    rows: [
      { label: "Tow, 10 miles", v: { job: 3, miles: 10, when: 0 } },
      { label: "Tow, 25 miles", v: { job: 3, miles: 25, when: 0 } },
      { label: "Tow, 50 miles", v: { job: 3, miles: 50, when: 0 } }
    ],
    calc: { job: 3, miles: 10, when: 0 },
    included: [
      "Tow truck sent to your car",
      "Car hooked up or loaded on a flatbed and secured",
      "Towed to the shop or address you choose",
      "Car unloaded and the keys left with the shop or you"
    ],
    factors: [
      "Distance. Most companies charge a hookup fee plus a rate per mile.",
      "Timing. Nights, weekends and holidays often cost more.",
      "Truck type. All-wheel-drive and low cars may need a flatbed.",
      "Situation. Winching out of a ditch or a tight garage takes extra time.",
      "Who called. Police-ordered tows and private property tows follow local rules and rates."
    ],
    diy: "Towing your own car isn't practical or safe for most people. Tow straps are made for pulling a car out of mud or snow, not for driving on public roads, and towing a car the wrong way can damage the transmission. The best DIY step is to check your coverage before you call.",
    tips: [
      "Check your car insurance, auto club, new-car warranty and credit card benefits. Many include towing.",
      "Ask for the total price before the truck is sent, including the hookup and per-mile rates.",
      "Have the car towed to the shop that will fix it, so you don't pay for two tows."
    ],
    faq: [
      ["How is towing priced?", "Usually a hookup fee plus a charge per mile. Some companies include a few miles in the hookup fee."],
      ["Do I need a flatbed?", "All-wheel-drive cars, many electric cars and low sports cars are usually safest on a flatbed. Tell the dispatcher your make and model."],
      ["Can I ride in the tow truck?", "Often, yes, but it depends on the company and the truck. Ask when you call."]
    ]
  },
  {
    slug: "car-lockout-service-cost",
    service: "towing",
    job: "car lockout service",
    title: "Car Lockout Service Cost: What You Should Pay to Get Back In",
    description: "What a car lockout service costs, how nights and weekends change the price, what the driver does and what to check before you call for help.",
    intro: "Locked your keys in the car? A roadside driver can usually get you back in within minutes using air wedges and a long-reach tool, without damaging the door or window. Lockout calls are a flat service charge, and they cost more at night and on weekends.",
    rows: [
      { label: "Lockout, regular hours", v: { job: 1, miles: 10, when: 0 } },
      { label: "Lockout, night or weekend", v: { job: 1, miles: 10, when: 1 } },
      { label: "Jump start, regular hours", v: { job: 0, miles: 10, when: 0 } }
    ],
    calc: { job: 1, miles: 10, when: 0 },
    included: [
      "Driver comes to where your car is parked",
      "ID and proof you own the car checked",
      "Door opened with an air wedge and long-reach tool",
      "Door and weatherstrip checked for damage"
    ],
    factors: [
      "Timing. Night and weekend calls often cost more.",
      "Location. Remote spots mean a longer drive for the operator.",
      "Car type. Some luxury cars with deadlocks or alarms take longer.",
      "Keys locked in the trunk. Some cars need extra steps to get into the trunk."
    ],
    diy: "Old tricks like a coat hanger rarely work on modern cars and can damage the weatherstrip, wiring or airbags in the door. A spare key is the real DIY fix. Many newer cars also let you unlock the doors from a phone app, so check that before you call anyone.",
    tips: [
      "Check your car's app. Many newer cars can unlock remotely.",
      "Check your roadside coverage. Lockouts are often included.",
      "Keep a spare key somewhere safe, like with a family member or at work."
    ],
    faq: [
      ["Will a lockout damage my car?", "A trained operator using air wedges and a long-reach tool rarely causes damage. Ask about this before they start."],
      ["What if my keys are lost, not locked inside?", "A lockout service only opens the door. You'll need a locksmith or dealer to make a new key."],
      ["Do I need to prove I own the car?", "Usually yes. Expect to show ID and the registration or insurance card once the car is open."]
    ]
  }
];

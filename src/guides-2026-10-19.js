// Weekly batch, 2026-10-19: windshield tint strip, truck ceramic coating,
// door ding repair and windshield camera calibration. Same shape as guides.js.
// Prose never states dollar amounts. The computed table on each page shows them.

module.exports = [
  // ---------------- Window tinting ----------------
  {
    slug: "windshield-tint-strip-cost",
    service: "window-tinting",
    job: "a windshield tint strip",
    title: "Windshield Tint Strip Cost: Sun Visor Strip Prices",
    description: "What a windshield tint strip (sun visor strip) costs, how it pairs with a full tint job, and how to stay within your state's rules for the top of the windshield.",
    intro: "A tint strip is a band of film across the top of the windshield. It cuts glare from the low sun without darkening the view through the glass. It is one of the quickest tint jobs, so many shops add it for little extra when you tint the rest of the car. Most states limit how far down the strip can go, often to a line marked on the glass called the AS-1 line.",
    rows: [
      { label: "Windshield strip only, sedan", v: { job: 3, vehicle: 0, film: 0 } },
      { label: "Windshield strip only, SUV or truck", v: { job: 3, vehicle: 1, film: 0 } },
      { label: "Sides, back and windshield strip, sedan", v: { job: 2, vehicle: 0, film: 0 } }
    ],
    calc: { job: 3, vehicle: 0, film: 0 },
    included: [
      "Windshield cleaned on the inside",
      "Film cut to stay above your state's legal line",
      "Film applied and squeegeed with no bubbles at the edges",
      "Care instructions for the first few days"
    ],
    factors: [
      "Add-on or stand-alone. A strip added to a full tint job costs less than a separate visit.",
      "Windshield size. Large and steeply raked windshields take more film and care.",
      "Film. Ceramic film costs more than dyed or carbon film.",
      "Shade. Some shops offer a gradient strip that fades out, which can cost more."
    ],
    diy: "Pre-cut strip kits and rolls of film are sold for home use, and a strip is the easiest tint job to try yourself. Work in a clean, dust-free garage, use plenty of slip solution and a hard card to squeegee. Measure from the top of the glass and keep the strip above your state's legal line.",
    tips: [
      "Check your state's windshield tint rule before booking. Many allow a strip only above the AS-1 line.",
      "Ask for the strip when you tint the side windows to save a second trip.",
      "Ask whether the shop guarantees against bubbling and peeling."
    ],
    faq: [
      ["Is a windshield tint strip legal?", "In most states, yes, as long as it stays above the AS-1 line or a set number of inches from the top. Rules vary, so check your state's tint law."],
      ["How long does it take?", "Usually well under an hour as a stand-alone job."],
      ["Can I tint the whole windshield?", "Most states don't allow dark film on the full windshield. Some allow a clear heat-blocking film. Ask the shop what is legal where you live."]
    ]
  },

  // ---------------- Ceramic coating ----------------
  {
    slug: "truck-ceramic-coating-cost",
    service: "ceramic-coating",
    job: "ceramic coating a truck or van",
    title: "Ceramic Coating Cost for a Truck or Van",
    description: "What ceramic coating costs on a pickup or van, how paint condition changes the price, and what a good coating job includes.",
    intro: "Trucks and vans have more paint to prep and coat than a sedan, so the price runs higher. Most of the time goes into washing, decontaminating and polishing the paint before the coating goes on. A truck with swirls and scratches needs more polishing first. Many owners also coat the bed rails, wheels and trim for easier cleaning.",
    rows: [
      { label: "2 to 3 year coating, truck, good paint", v: { level: 1, vehicle: 2, paint: 0 } },
      { label: "2 to 3 year coating, truck, light swirls", v: { level: 1, vehicle: 2, paint: 1 } },
      { label: "5-year+ coating with correction, truck, heavy swirls", v: { level: 2, vehicle: 2, paint: 2 } }
    ],
    calc: { level: 1, vehicle: 2, paint: 0 },
    included: [
      "Full hand wash and wheel cleaning",
      "Clay bar and iron remover to pull out bonded dirt",
      "Polishing to remove swirls, more for paint in rough shape",
      "Coating applied panel by panel and left to cure",
      "Care instructions and a recommended wash routine"
    ],
    factors: [
      "Size. Full-size trucks and vans have much more paint than a car.",
      "Paint condition. Swirls and scratches need more polishing first.",
      "Coating level. Longer-lasting coatings take more prep and product.",
      "Extras. Wheels, glass, trim and bed rails are often priced separately."
    ],
    diy: "Consumer ceramic sprays and kits work well on trucks if you put in the prep. Wash, clay and polish the paint first, then work one panel at a time in the shade. A step ladder helps you reach the roof evenly. A spray sealant every few months is the easy option if a full coating is too much work.",
    tips: [
      "Ask what prep is included. The polishing step makes the biggest difference in how it looks.",
      "Ask whether the warranty needs yearly check-ups and what those cost.",
      "Ask for a price with and without wheels, glass and trim."
    ],
    faq: [
      ["Why does a truck cost more than a car?", "There is more paint to wash, polish and coat, and the roof is harder to reach. Expect it to take longer."],
      ["Is it worth coating a work truck?", "For a truck that sees mud, road salt or job sites, a coating makes cleaning faster. For a beat-up work truck, a spray sealant may be enough."],
      ["Can they coat the bed?", "Bed liners usually aren't coated, but painted bed rails and tailgates often are."]
    ]
  },

  // ---------------- Paintless dent repair ----------------
  {
    slug: "door-ding-repair-cost",
    service: "paintless-dent-repair",
    job: "door ding repair",
    title: "Door Ding Repair Cost: Fixing Several Small Dents",
    description: "What it costs to fix door dings and small dents with paintless dent repair, how the price changes with more dents, and when PDR won't work.",
    intro: "Door dings from parking lots are the most common job for a paintless dent repair tech. When the paint isn't cracked, the tech pushes the metal back from behind the panel, so there is no sanding or repainting. The first dent costs the most. Each extra dent on the same visit usually costs less, so it pays to fix them all at once.",
    rows: [
      { label: "2 small door dings", v: { job: 0, dents: 2, size: 0 } },
      { label: "3 small door dings", v: { job: 0, dents: 3, size: 0 } },
      { label: "5 small dings around the car", v: { job: 0, dents: 5, size: 0 } }
    ],
    calc: { job: 0, dents: 3, size: 0 },
    included: [
      "Each ding checked under a light board to confirm PDR will work",
      "Door panels or trim removed when needed to reach behind the dent",
      "Metal massaged back into shape with rods and tabs",
      "Panels and trim put back and the area cleaned"
    ],
    factors: [
      "Number of dings. Extra dents on the same visit usually cost less each.",
      "Size. Larger and deeper dents take more time.",
      "Location. Dents on body lines or panel edges are harder to fix.",
      "Access. Some spots need trim or lights removed first."
    ],
    diy: "Glue-pull dent kits can improve shallow, round dings on flat panels. Practice on a junk panel first, and don't use them on cracked or chipped paint. Ding repair is a skill, and a bad pull can make a dent worse. For dings on body lines or edges, a pro is the safer choice.",
    tips: [
      "Ask for a price for all your dings at once instead of one at a time.",
      "Ask the tech whether each ding is a good fit for PDR before work starts.",
      "Many PDR techs are mobile and can fix dings at your home or work."
    ],
    faq: [
      ["Will paintless dent repair work on my ding?", "If the paint isn't cracked or chipped and the tech can reach the back of the panel, usually yes."],
      ["How long does it take?", "A few small dings often take under an hour total."],
      ["Will it show afterward?", "Most door dings can be fixed so they are hard to see. Very sharp creases may leave a faint mark."]
    ]
  },

  // ---------------- Windshield repair ----------------
  {
    slug: "windshield-camera-calibration-cost",
    service: "windshield-repair",
    job: "windshield camera calibration",
    title: "Windshield Camera Calibration Cost After Replacement",
    description: "Why many newer cars need their lane and braking camera recalibrated after a windshield replacement, what it adds to the price and what the job includes.",
    intro: "Many newer cars have a camera behind the windshield for lane keeping and automatic braking. When the windshield is replaced, the camera has to be recalibrated so it sees the road at the right angle. Some cars are calibrated with targets in a shop, others on a test drive, and some need both. Skipping it can leave safety features working poorly or not at all.",
    rows: [
      { label: "Replacement with calibration, car", v: { job: 2, vehicle: 0, adas: 1 } },
      { label: "Replacement with calibration, SUV, truck or van", v: { job: 2, vehicle: 1, adas: 1 } },
      { label: "Replacement with calibration, luxury car", v: { job: 2, vehicle: 2, adas: 1 } }
    ],
    calc: { job: 2, vehicle: 0, adas: 1 },
    included: [
      "Windshield replaced with glass that fits your camera mount",
      "Camera calibrated with targets, a road test or both",
      "A scan to confirm no warning lights or fault codes",
      "A printout or record showing the calibration passed"
    ],
    factors: [
      "Vehicle. Some makes need dealer-level equipment or software.",
      "Calibration type. Shop calibration with targets takes more setup than a road test.",
      "Glass. Factory glass costs more than aftermarket and some cameras need it.",
      "Location. Mobile installers may send the car to a shop for calibration."
    ],
    diy: "Windshield replacement and camera calibration aren't DIY jobs. They need special tools, targets and software. What you can do is make sure it gets done: ask whether your car needs calibration and get a record that it passed.",
    tips: [
      "Ask for the replacement and calibration price together before you book.",
      "Check your insurance. Many comprehensive policies cover glass and calibration.",
      "Ask for a calibration report so you have proof it was done."
    ],
    faq: [
      ["Does my car need calibration?", "If you have lane keeping, lane departure warning or automatic braking that uses a camera behind the mirror, it likely does."],
      ["What if it isn't calibrated?", "The camera may misjudge lanes and distances, so safety features may not work as they should. A warning light may also come on."],
      ["Does a chip repair need calibration?", "Usually not, because the glass stays in place."]
    ]
  }
];

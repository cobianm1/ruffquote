// Weekly batch, 2026-11-23: front window tint, minivan tint, window cleaning
// per window and three-story gutter cleaning. Same shape as guides.js.
// Prose never states dollar amounts. The computed table on each page shows them.

module.exports = [
  // ---------------- Window tinting ----------------
  {
    slug: "front-window-tint-cost",
    service: "window-tinting",
    job: "tinting the front side windows",
    title: "Front Window Tint Cost: Matching Your Factory Rear Glass",
    description: "What it costs to tint just the two front side windows, why many SUV and truck owners do it, and how to stay within your state's front window tint law.",
    intro: "Many SUVs, trucks and minivans come with dark privacy glass on the rear windows but clear glass up front. Tinting only the two front side windows makes the car look even and cuts glare and heat for the driver. It is one of the smallest tint jobs. Front windows have the strictest tint laws in most states, so the shade you pick matters.",
    rows: [
      { label: "2 front side windows, dyed or carbon film, sedan", v: { job: 0, vehicle: 0, film: 0 } },
      { label: "2 front side windows, dyed or carbon film, SUV or truck", v: { job: 0, vehicle: 1, film: 0 } },
      { label: "2 front side windows, ceramic film, SUV or truck", v: { job: 0, vehicle: 1, film: 1 } }
    ],
    calc: { job: 0, vehicle: 1, film: 0 },
    included: [
      "Glass cleaned inside and the door seals wiped down",
      "Film cut to fit each window",
      "Film applied and squeegeed with no bubbles at the edges",
      "Advice on legal shades for front windows in your state",
      "Care instructions for the first few days"
    ],
    factors: [
      "Film. Ceramic film costs more but blocks more heat.",
      "Vehicle. Larger windows on trucks and SUVs take more film.",
      "Old tint. Removing old, bubbling film adds time.",
      "Shade. Matching factory rear glass may need a specific shade."
    ],
    diy: "Pre-cut front window kits are sold for many models, and two windows is the most manageable tint job to try. Work in a clean, dust-free garage, use plenty of slip solution and squeegee from the center out. Roll the window down slightly to tuck the top edge. Check your state's legal shade before you buy.",
    tips: [
      "Check your state's front window tint law before choosing a shade.",
      "Ask the shop to match the look of your factory rear glass.",
      "Ask whether the warranty covers bubbling, peeling and fading."
    ],
    faq: [
      ["Why tint only the front windows?", "Many SUVs and trucks come with dark rear glass. Tinting the front makes the car look even and cuts glare and heat for the driver and passenger."],
      ["How dark can front windows be?", "It depends on your state. Front side windows usually have the strictest limit. A good shop will know the local law."],
      ["How long does it take?", "Two front windows is a quick job, often about an hour."]
    ]
  },
  {
    slug: "minivan-window-tint-cost",
    service: "window-tinting",
    job: "tinting a minivan or large SUV",
    title: "Minivan and Large SUV Window Tint Cost",
    description: "What window tint costs for a minivan or large SUV, why bigger vehicles cost more, and how ceramic film compares for a family hauler.",
    intro: "Minivans and large SUVs have more windows and more glass than a sedan, including big sliding-door windows and wide rear glass. That means more film and more labor, so the price runs higher. Many families choose tint to keep kids cooler and block sun in the back rows. Ceramic film costs more but blocks more heat without going darker.",
    rows: [
      { label: "All sides and back window, minivan or large SUV", v: { job: 1, vehicle: 2, film: 0 } },
      { label: "All sides and back, minivan or large SUV, ceramic film", v: { job: 1, vehicle: 2, film: 1 } },
      { label: "Sides, back and windshield strip, minivan or large SUV", v: { job: 2, vehicle: 2, film: 0 } },
      { label: "All sides and back window, sedan, for comparison", v: { job: 1, vehicle: 0, film: 0 } }
    ],
    calc: { job: 1, vehicle: 2, film: 0 },
    included: [
      "Glass cleaned inside and the door seals wiped down",
      "Film cut for each window, including sliding-door and quarter glass",
      "Film heat-shrunk to fit curved rear glass",
      "Film applied and squeegeed with no bubbles at the edges",
      "Care instructions for the first few days"
    ],
    factors: [
      "Number of windows. Minivans and large SUVs have more glass to cover.",
      "Film. Ceramic film costs more but blocks more heat.",
      "Rear glass. Large curved back windows take more skill.",
      "Old tint. Removing old film adds time.",
      "Factory glass. Dark factory rear glass may only need a light film or none."
    ],
    diy: "Tinting a whole minivan yourself is a big job, especially the large curved back glass. If you want to try, start with a pre-cut kit and the flat side windows. Many owners tint the side windows themselves and leave the back glass to a shop.",
    tips: [
      "Ask whether the price includes the small quarter windows.",
      "If your rear windows already have factory privacy glass, ask about tinting only the front windows.",
      "Compare carbon and ceramic film prices for your vehicle."
    ],
    faq: [
      ["Why does a minivan cost more to tint?", "There are more windows and more glass, including large sliding-door windows and a wide back window."],
      ["Is ceramic film worth it in a family car?", "It blocks more heat and UV without going darker, which many parents like for the back rows. It costs more than dyed or carbon film."],
      ["How long does it take?", "Usually a few hours for a full minivan. The calculator above shows an estimate."]
    ]
  },

  // ---------------- Window cleaning ----------------
  {
    slug: "window-cleaning-cost-per-window",
    service: "window-cleaning",
    job: "window cleaning by the window",
    title: "Window Cleaning Cost Per Window",
    description: "How window cleaners price per window, how to count your windows, and what changes the price for tall homes and inside-and-out cleaning.",
    intro: "Most window cleaners price per window or per pane, with a minimum charge for small jobs. Count every window you can see from outside, and count glass doors as one each. Ground-floor windows cost the least. Second and third stories need ladders or water-fed poles, and cleaning both sides nearly doubles the time.",
    rows: [
      { label: "10 windows, 1 story, outside only", v: { windows: 10, stories: 0, sides: 0 } },
      { label: "20 windows, 1 story, outside only", v: { windows: 20, stories: 0, sides: 0 } },
      { label: "30 windows, 1 story, outside only", v: { windows: 30, stories: 0, sides: 0 } },
      { label: "20 windows, 1 story, inside and outside", v: { windows: 20, stories: 0, sides: 1 } }
    ],
    calc: { windows: 20, stories: 0, sides: 0 },
    included: [
      "Glass washed and squeegeed on every window booked",
      "Frames and sills wiped down",
      "Ladders or a water-fed pole where needed",
      "Drop cloths or towels used inside to protect floors"
    ],
    factors: [
      "Number of windows. Most pros price per window or per pane.",
      "Height. Upper floors cost more per window.",
      "Inside and out. Cleaning both sides nearly doubles the time.",
      "Divided panes. French-style windows with many small panes take longer.",
      "Extras. Screens, tracks and hard water stains usually cost extra."
    ],
    diy: "Ground-floor windows are easy to clean yourself with a squeegee, a scrubber and a bucket of water with a little dish soap. Work top to bottom and wipe the squeegee blade after each pass. Pick a cloudy day so the glass doesn't dry with streaks.",
    tips: [
      "Count your windows before you call so quotes are easy to compare.",
      "Ask whether a large picture window counts as one window or more.",
      "Ask whether screens are included or extra."
    ],
    faq: [
      ["How do I count my windows?", "Count each window you can see from outside. Glass doors usually count as one. Large picture windows sometimes count as two."],
      ["Is there a minimum charge?", "Most window cleaners have one, so a few windows may cost about the same as a small house."],
      ["Are screens included?", "Often not. Many cleaners charge a little extra per screen."]
    ]
  },

  // ---------------- Gutter cleaning ----------------
  {
    slug: "gutter-cleaning-cost-three-story",
    service: "gutter-cleaning",
    job: "gutter cleaning on a three-story house",
    title: "Gutter Cleaning Cost for a Three-Story House",
    description: "What gutter cleaning costs on a three-story home, why tall homes cost more per foot, and what to ask about safety before you book.",
    intro: "Three-story gutters are the hardest to reach. Cleaners need tall extension ladders, roof work or a lift, and the job carries more risk, so the price per foot is higher than on a one- or two-story home. Most quotes include flushing the downspouts. Homes under big trees may need cleaning twice a year.",
    rows: [
      { label: "150 ft, three-story, with downspouts", v: { feet: 150, stories: 2, flush: 1 } },
      { label: "200 ft, three-story, with downspouts", v: { feet: 200, stories: 2, flush: 1 } },
      { label: "250 ft, three-story, with downspouts", v: { feet: 250, stories: 2, flush: 1 } },
      { label: "200 ft, two-story, for comparison", v: { feet: 200, stories: 1, flush: 1 } }
    ],
    calc: { feet: 200, stories: 2, flush: 1 },
    included: [
      "Leaves and debris scooped out of every gutter",
      "Downspouts checked and flushed",
      "Tall ladders, roof access or a lift for upper gutters",
      "Debris bagged or cleaned off the ground",
      "A quick look for loose hangers or leaks"
    ],
    factors: [
      "Height. Third-story gutters need more equipment and care.",
      "Length. The total feet of gutter sets the base price.",
      "Roof pitch. Steep roofs need harnesses and more time.",
      "How full they are. Packed gutters take longer.",
      "Gutter guards. Guards have to be lifted off and put back."
    ],
    diy: "Cleaning third-story gutters from a ladder is risky, and most people should hire it out. Ground-based gutter cleaning wands that attach to a leaf blower or hose can reach some upper gutters, but they don't work as well as hand cleaning. Gutter guards can cut down how often tall gutters need cleaning.",
    tips: [
      "Ask whether the company carries liability insurance for roof work.",
      "Ask whether downspout flushing and haul-away are included.",
      "Book fall cleaning after most leaves have dropped."
    ],
    faq: [
      ["Why does a three-story house cost more?", "The work is higher and slower, and it may need roof access or a lift. That adds time and risk."],
      ["How often should tall gutters be cleaned?", "Twice a year is common, in late spring and late fall. Homes under big trees may need more."],
      ["Are gutter guards worth it on a tall house?", "They can be, because they cut down on how often someone has to get up there. They still need an occasional check."]
    ]
  }
];

// Weekly batch, 2026-10-26: gutter cleaning per foot, whole-house carpet cleaning,
// trimming several trees and three-story Christmas lights. Same shape as guides.js.
// Prose never states dollar amounts. The computed table on each page shows them.

module.exports = [
  // ---------------- Gutter cleaning ----------------
  {
    slug: "gutter-cleaning-cost-per-foot",
    service: "gutter-cleaning",
    job: "gutter cleaning by the foot",
    title: "Gutter Cleaning Cost Per Foot: How to Measure and Price It",
    description: "How gutter cleaners price by the linear foot, how to measure your gutters, and what the total looks like for small, typical and large homes.",
    intro: "Most gutter cleaners price by the linear foot of gutter, with a minimum charge for small jobs. To measure, add up the length of every edge of the roof that has a gutter. A typical single-family home has somewhere between 120 and 200 feet. The rate per foot goes up for taller homes, steep roofs and gutters that haven't been cleaned in years.",
    rows: [
      { label: "100 feet, 1 story", v: { feet: 100, stories: 0, flush: 1 } },
      { label: "160 feet, 1 story", v: { feet: 160, stories: 0, flush: 1 } },
      { label: "250 feet, 1 story", v: { feet: 250, stories: 0, flush: 1 } },
      { label: "250 feet, 2 stories", v: { feet: 250, stories: 1, flush: 1 } }
    ],
    calc: { feet: 160, stories: 0, flush: 1 },
    included: [
      "Leaves and debris scooped out of every gutter",
      "Downspouts checked and flushed",
      "Debris bagged or cleaned off the ground",
      "A quick look for loose hangers or leaks"
    ],
    factors: [
      "Length. The total feet of gutter sets the base price.",
      "Height. Second and third stories cost more per foot.",
      "How full they are. Packed or overgrown gutters take longer.",
      "Gutter guards. Guards have to be lifted off and put back.",
      "Minimum charge. Very small jobs often pay a flat minimum."
    ],
    diy: "Measure your gutters from the ground with a long tape or a measuring wheel along the house, or use the outline of your roof on a satellite map. If you clean them yourself, use a sturdy ladder with a stabilizer, a gutter scoop and a bucket. Flush each downspout with a hose when you finish.",
    tips: [
      "Measure before you call so you can compare quotes on the same number.",
      "Ask whether downspout flushing and debris haul-away are included.",
      "Book fall cleaning after most leaves have dropped, so you aren't paying twice."
    ],
    faq: [
      ["How do I measure my gutters?", "Walk the house and add up every roof edge that has a gutter. A measuring wheel is the quickest way, or measure on a satellite map."],
      ["Do downspouts count in the length?", "Usually not. Most cleaners price the horizontal gutter and include downspout flushing or charge a small fee for it."],
      ["Is there a minimum charge?", "Yes, most cleaners have one, so very short runs cost about the same as a small house."]
    ]
  },

  // ---------------- Carpet cleaning ----------------
  {
    slug: "whole-house-carpet-cleaning-cost",
    service: "carpet-cleaning",
    job: "whole-house carpet cleaning",
    title: "Whole House Carpet Cleaning Cost",
    description: "What it costs to clean the carpet in a whole house, with and without stairs, how per-room pricing works and how to get the best price.",
    intro: "Most carpet cleaners price by the room, with stairs priced by the flight. Cleaning the whole house in one visit usually costs less per room than booking a room or two at a time, since the setup is the same. Spots and pet accidents add time for pre-treatment. Plan for the carpet to need several hours to dry.",
    rows: [
      { label: "5 rooms and 1 flight of stairs", v: { rooms: 5, stairs: 1, treat: 0 } },
      { label: "7 rooms and 1 flight of stairs", v: { rooms: 7, stairs: 1, treat: 0 } },
      { label: "10 rooms and 2 flights of stairs", v: { rooms: 10, stairs: 2, treat: 0 } },
      { label: "7 rooms and 1 flight, with spot treatment", v: { rooms: 7, stairs: 1, treat: 1 } }
    ],
    calc: { rooms: 7, stairs: 1, treat: 0 },
    included: [
      "A walk-through to agree on rooms and problem spots",
      "Vacuuming of high-traffic areas before cleaning",
      "Pre-treatment of traffic lanes and common spots",
      "Hot water extraction or the cleaner's main method",
      "Light furniture moved and put back on pads or blocks"
    ],
    factors: [
      "Number of rooms. Most cleaners price per room up to a set size.",
      "Stairs. Each flight is usually priced on its own.",
      "Stains and pets. Spot and odor treatment cost extra.",
      "Room size. Large open areas may count as two rooms.",
      "Furniture. Moving heavy pieces can add a fee."
    ],
    diy: "A rental carpet cleaner can handle a few rooms over a weekend. Vacuum well first, pre-treat traffic lanes, and don't over-wet the carpet. For a whole house, a pro's truck-mounted machine pulls out more water, so the carpet dries faster and stays cleaner longer.",
    tips: [
      "Ask how the company defines a room, so quotes are easy to compare.",
      "Book the whole house at once for a better rate per room.",
      "Ask how long the carpet takes to dry and keep pets off until it does."
    ],
    faq: [
      ["How long does it take?", "Usually most of a morning or afternoon, depending on the number of rooms and stains. The calculator above shows an estimate."],
      ["How long until I can walk on it?", "Usually a few hours in socks. Full drying can take longer in humid weather."],
      ["How often should carpet be cleaned?", "Once a year is common. Homes with pets or kids may want it more often."]
    ]
  },

  // ---------------- Tree trimming ----------------
  {
    slug: "cost-to-trim-several-trees",
    service: "tree-trimming",
    job: "trimming several trees",
    title: "Cost to Trim Several Trees at Once",
    description: "What it costs to trim 3, 5 or 10 trees in one visit, why bundling trees saves money and what changes the price.",
    intro: "Tree crews charge for their time, their equipment and hauling the brush away. Getting the truck, chipper and crew to your house is part of every job, so trimming several trees in one visit costs less per tree than calling them out each time. Height matters most. Trees over the house or near power lines need more care.",
    rows: [
      { label: "3 small trees", v: { trees: 3, height: 0, near: 0, haul: 0 } },
      { label: "3 medium trees", v: { trees: 3, height: 1, near: 0, haul: 0 } },
      { label: "5 medium trees", v: { trees: 5, height: 1, near: 0, haul: 0 } },
      { label: "10 small trees", v: { trees: 10, height: 0, near: 0, haul: 0 } }
    ],
    calc: { trees: 5, height: 1, near: 0, haul: 0 },
    included: [
      "Dead, broken and crossing branches cut back",
      "Branches thinned and shaped for each tree",
      "Branches kept off the roof, driveway and walkways",
      "Brush chipped and hauled away, unless you ask to keep it"
    ],
    factors: [
      "Number of trees. More trees per visit lowers the cost per tree.",
      "Height. Tall trees need climbing gear or a bucket truck.",
      "Location. Trees over the house or near lines need extra care.",
      "Cleanup. Chipping and hauling cost more than leaving the wood stacked.",
      "Access. Backyard trees behind fences may need more hand carrying."
    ],
    diy: "Small trees under about 15 feet are a fair DIY job with loppers, a pruning saw and a pole saw from the ground. Avoid climbing with a chainsaw, and leave anything near power lines to a pro. Trim in late winter for most trees, when they are dormant and you can see the branches.",
    tips: [
      "Walk the yard with the crew and point out every tree you want trimmed.",
      "Ask for a price with haul-away and with the wood left stacked.",
      "Ask neighbors if they want trees done the same day. Some crews give a discount."
    ],
    faq: [
      ["Is it cheaper to trim all my trees at once?", "Usually, yes. Setup and travel are spread across more trees, so the price per tree goes down."],
      ["When is the best time to trim trees?", "Late winter is best for most trees. Dead or dangerous branches can be cut any time."],
      ["How long will it take?", "It depends on the number and size of the trees. The calculator above shows an estimate of crew hours for your job."]
    ]
  },

  // ---------------- Christmas lights ----------------
  {
    slug: "three-story-christmas-light-installation-cost",
    service: "christmas-light-installation",
    job: "Christmas light installation on a three-story house",
    title: "Christmas Light Installation Cost for a Three-Story House",
    description: "What it costs to have Christmas lights hung on a three-story home, why tall homes cost more and what to ask before you book.",
    intro: "Three-story homes need taller ladders, roof work and sometimes a lift, so installers charge more per foot than on a one-story home. Most quotes include the lights, clips and labor, plus takedown after the season. Book early. Installers fill their calendars in November, and tall homes take more of a crew's day.",
    rows: [
      { label: "150 ft, 3 stories, install and takedown", v: { feet: 150, stories: 2, takedown: 1 } },
      { label: "250 ft, 3 stories, install and takedown", v: { feet: 250, stories: 2, takedown: 1 } },
      { label: "250 ft, 3 stories, install only", v: { feet: 250, stories: 2, takedown: 0 } },
      { label: "250 ft, 2 stories, for comparison", v: { feet: 250, stories: 1, takedown: 1 } }
    ],
    calc: { feet: 250, stories: 2, takedown: 1 },
    included: [
      "A design plan for rooflines, peaks and gutters",
      "Commercial-grade lights and clips, often leased for the season",
      "Ladder or lift work on upper rooflines",
      "Timers set up and the lights tested",
      "Takedown after the holidays, if booked"
    ],
    factors: [
      "Height. Third-story rooflines take longer and need more safety gear.",
      "Length. Total feet of lights sets the base price.",
      "Roof pitch. Steep roofs need harnesses and more time.",
      "Takedown. Booking takedown with install costs less than a separate visit.",
      "Extras. Trees, bushes and wreaths are usually priced on top."
    ],
    diy: "On a three-story home, upper rooflines are the riskiest part of decorating yourself. If you do it, consider lighting only the first floor, porch and bushes, and leave the high peaks to a pro. Use clips made for your gutters or shingles instead of nails or staples.",
    tips: [
      "Book by early November. Tall homes are the first slots to fill.",
      "Ask whether the lights are yours to keep or leased for the season.",
      "Ask whether the installer carries liability insurance for roof work."
    ],
    faq: [
      ["Why does a three-story house cost more?", "The work is higher and slower, and it may need a lift or roof harness. That adds crew time and risk."],
      ["Do I keep the lights?", "It depends on the company. Many lease the lights for the season and include takedown and storage."],
      ["When do they take them down?", "Usually in early to mid January, on a date you agree on when you book."]
    ]
  }
];

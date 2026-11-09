// Weekly batch, 2026-11-09, picked from the Search Console export of 2026-11-04:
// sewer backups, Christmas lights per foot, tree pruning and trimming near power lines.
// Same shape as guides.js. Prose never states dollar amounts. The computed table shows them.

module.exports = [
  // ---------------- Drain cleaning ----------------
  {
    slug: "cost-to-fix-a-sewer-backup",
    service: "drain-cleaning",
    job: "clearing a sewer backup",
    title: "Cost to Fix a Sewer Backup: Clearing the Main Line",
    description: "What a plumber charges to clear a sewer backup, why nights and weekends cost more, what cleanup may cost on top, and what to do while you wait.",
    intro: "A sewer backup happens when the main line from your house to the street or septic tank is blocked, so wastewater comes back up through the lowest drains. The fix is clearing the main line, usually with a motorized cable through a clean-out. The table shows the plumber's part of the job. Cleaning up sewage that has spread across floors is a separate job, often done by a water damage company.",
    rows: [
      { label: "Clear the main line, easy clean-out, regular hours", v: { job: 2, access: 0, when: 0 } },
      { label: "Clear the main line, no clean-out, regular hours", v: { job: 2, access: 1, when: 0 } },
      { label: "Clear the main line, easy clean-out, night or weekend", v: { job: 2, access: 0, when: 1 } },
      { label: "Clear the main line, no clean-out, night or weekend", v: { job: 2, access: 1, when: 1 } }
    ],
    calc: { job: 2, access: 0, when: 1 },
    included: [
      "Clean-out found and opened, or access made through a toilet or roof vent",
      "Main line cabled to clear the blockage",
      "Drains run to confirm water flows out again",
      "A look at what came back on the cable, such as roots, grease or wipes"
    ],
    factors: [
      "Timing. Backups often happen at night or on weekends, when rates are higher.",
      "Access. An easy outdoor clean-out saves time. No clean-out means more work.",
      "Cause. Tree roots and broken pipe take longer than a simple clog.",
      "Follow-up. A camera inspection or hydro jetting is usually priced on top.",
      "Cleanup. Removing sewage and drying floors is a separate cost."
    ],
    diy: "Clearing a main line yourself means renting a heavy drum machine and working around sewage, which most people should skip. What you can do: stop all water use, keep everyone away from the backed-up area, and find your clean-out so the plumber can start right away. Wear gloves and boots if you have to walk through it.",
    tips: [
      "Stop running water and flushing the moment you see a backup.",
      "Ask the plumber whether a camera inspection is worth it if this has happened before.",
      "Call your insurance company before cleanup starts. Some policies have a sewer backup add-on."
    ],
    faq: [
      ["What are the signs of a sewer backup?", "Water or sewage coming up in a floor drain, shower or tub, gurgling toilets, and several drains backing up at once."],
      ["Does homeowners insurance cover sewer backups?", "Standard policies often don't. Many insurers sell a sewer backup add-on that covers damage, but not the cost of clearing the line."],
      ["How do I stop it from happening again?", "Don't flush wipes or pour grease down the drain. If roots are the cause, ask about regular cleaning, hydro jetting or a camera inspection to find the weak spot."],
      ["Is sewage cleanup included?", "Usually not. Plumbers clear the line. A water damage or restoration company handles cleanup of floors and walls."]
    ]
  },

  // ---------------- Christmas lights ----------------
  {
    slug: "christmas-light-installation-cost-per-foot",
    service: "christmas-light-installation",
    job: "Christmas light installation by the foot",
    title: "Christmas Light Installation Cost Per Foot",
    description: "How Christmas light installers price by the foot of roofline, how to measure your home, and how height and takedown change the total.",
    intro: "Most Christmas light installers price by the linear foot of lights, with a minimum for small homes. To measure, add up the rooflines, peaks and gutters you want lit. A typical front roofline runs somewhere around 100 to 200 feet. The rate per foot rises for taller homes, and booking takedown with the install usually costs less than a separate visit.",
    rows: [
      { label: "100 ft, 1 story, install and takedown", v: { feet: 100, stories: 0, takedown: 1 } },
      { label: "200 ft, 1 story, install and takedown", v: { feet: 200, stories: 0, takedown: 1 } },
      { label: "200 ft, 2 stories, install and takedown", v: { feet: 200, stories: 1, takedown: 1 } },
      { label: "300 ft, 2 stories, install and takedown", v: { feet: 300, stories: 1, takedown: 1 } }
    ],
    calc: { feet: 200, stories: 0, takedown: 1 },
    included: [
      "Measurement and a lighting plan for your roofline",
      "Commercial-grade lights and clips, often leased for the season",
      "Lights cut or sized to fit each run",
      "Timer setup and testing",
      "Takedown after the season, if booked"
    ],
    factors: [
      "Length. Total feet of lights sets the base price.",
      "Height. Second and third stories cost more per foot.",
      "Roof pitch. Steep roofs need harnesses and more time.",
      "Takedown. Booked together, install and takedown cost less.",
      "Extras. Trees, bushes, wreaths and walkways are usually priced on top."
    ],
    diy: "Measure your roofline with a measuring wheel along the ground, or trace it on a satellite map. If you hang lights yourself, buy clips that fit your gutters or shingles, test every strand on the ground first and use outdoor-rated extension cords. Leave anything above the first story to a pro if you're not comfortable on a roof.",
    tips: [
      "Measure before you call so quotes are easy to compare.",
      "Ask whether the price per foot includes the lights or only labor.",
      "Book early. Installers fill up by late November."
    ],
    faq: [
      ["How do I measure my roofline for lights?", "Add up every edge you want lit, including peaks. A measuring wheel along the house works well, or use a satellite map."],
      ["Does the price per foot include the lights?", "Often, yes. Many installers lease the lights for the season. Some charge less if you supply your own."],
      ["Is there a minimum charge?", "Most installers have one, so small jobs cost about the same as a modest roofline."]
    ]
  },

  // ---------------- Tree trimming ----------------
  {
    slug: "tree-pruning-cost",
    service: "tree-trimming",
    job: "tree pruning",
    title: "Tree Pruning Cost: Shaping and Thinning Small and Medium Trees",
    description: "What tree pruning costs for small and medium trees, how pruning differs from trimming, and what a careful pruning job includes.",
    intro: "Pruning means cutting specific branches to keep a tree healthy, safe and well shaped. It is common for fruit trees, ornamental trees and young shade trees. Many people use pruning and trimming to mean the same thing, and crews price them the same way: by the size of the tree, where it stands and whether they haul away the brush.",
    rows: [
      { label: "1 small tree, under 15 ft", v: { trees: 1, height: 0, near: 0, haul: 0 } },
      { label: "1 medium tree, 15 to 30 ft", v: { trees: 1, height: 1, near: 0, haul: 0 } },
      { label: "3 small trees", v: { trees: 3, height: 0, near: 0, haul: 0 } },
      { label: "2 medium trees, wood left stacked", v: { trees: 2, height: 1, near: 0, haul: 1 } }
    ],
    calc: { trees: 1, height: 1, near: 0, haul: 0 },
    included: [
      "Dead, diseased and broken branches removed",
      "Crossing and rubbing branches cut back",
      "The crown thinned to let in light and air",
      "Cuts made just outside the branch collar so the tree heals well",
      "Brush chipped and hauled away, unless you ask to keep it"
    ],
    factors: [
      "Tree size. Taller trees need more gear and time.",
      "Number of trees. More trees per visit lowers the cost per tree.",
      "Location. Trees near the house or lines need more care.",
      "Cleanup. Haul-away costs more than leaving the wood stacked.",
      "Tree type. Fruit trees and ornamentals may need more careful shaping."
    ],
    diy: "Small trees are a good DIY pruning job with bypass pruners, loppers and a pruning saw. Prune in late winter for most trees, remove dead and crossing branches first, and never take more than about a quarter of the canopy in one year. Leave anything you can't reach from the ground to a pro.",
    tips: [
      "Ask whether the crew follows standard pruning practices, not topping.",
      "Ask for prices with haul-away and with the wood left stacked.",
      "Bundle all your trees into one visit for a better rate."
    ],
    faq: [
      ["What's the difference between pruning and trimming?", "Pruning usually means cutting for the tree's health and structure. Trimming often means cutting back for looks or clearance. Most crews price them the same way."],
      ["When is the best time to prune?", "Late winter, while most trees are dormant. Dead or dangerous branches can be removed any time."],
      ["How often should trees be pruned?", "Young trees every few years to set good structure. Mature trees every three to five years, or when dead wood appears."]
    ]
  },
  {
    slug: "tree-trimming-near-power-lines-cost",
    service: "tree-trimming",
    job: "tree trimming near power lines",
    title: "Cost to Trim Trees Near Power Lines",
    description: "What it costs to trim trees near power lines, when the utility company does it for free, and why only qualified crews should work near lines.",
    intro: "Trees growing into power lines can cause outages and fires, so they need careful trimming by crews trained to work near electricity. Utilities usually clear branches around the main lines along the street at no cost to you. The line from the pole to your house is often the homeowner's job. Expect it to cost more than trimming the same tree in an open yard.",
    rows: [
      { label: "1 medium tree near power lines", v: { trees: 1, height: 1, near: 2, haul: 0 } },
      { label: "1 large tree near power lines", v: { trees: 1, height: 2, near: 2, haul: 0 } },
      { label: "2 medium trees near power lines", v: { trees: 2, height: 1, near: 2, haul: 0 } },
      { label: "1 large tree in an open yard, for comparison", v: { trees: 1, height: 2, near: 0, haul: 0 } }
    ],
    calc: { trees: 1, height: 2, near: 2, haul: 0 },
    included: [
      "A check of which lines are nearby and who is responsible for them",
      "Branches cut back from the lines by a trained crew",
      "Ropes used to lower branches away from lines and the house",
      "Brush chipped and hauled away, unless you ask to keep it"
    ],
    factors: [
      "Line type. Main lines along the street are usually the utility's job.",
      "Tree size. Taller trees need climbing gear or a bucket truck.",
      "Clearance needed. More branches near the line means more careful cuts.",
      "Power shut-off. Some jobs need the utility to drop the line first.",
      "Cleanup. Haul-away costs more than leaving the wood stacked."
    ],
    diy: "Don't trim branches near power lines yourself. Branches can conduct electricity, and lines can be live even when the power seems off. The safe DIY step is a phone call: ask your utility whether the lines near your tree are theirs to clear, and whether they can drop the service line to your house while a crew works.",
    tips: [
      "Call your utility first. They may trim around main lines for free.",
      "Hire a crew with line-clearance training and insurance.",
      "Ask whether the quote includes coordinating a power shut-off if one is needed."
    ],
    faq: [
      ["Will the power company trim my tree for free?", "Often, for branches near the main lines on poles. The service line from the pole to your house is usually the homeowner's responsibility, though some utilities will drop it so you can hire a crew."],
      ["Why does it cost more near power lines?", "The crew needs special training, more time, and sometimes a power shut-off. The risk is higher, so the price is too."],
      ["How much clearance do lines need?", "It depends on the line and your utility's rules. The utility or a line-clearance crew can tell you."]
    ]
  }
];

export type EventInfo = {
  slug: string;
  no: string;
  name: string;
  tagline: string;
  color: string;
  icon: string;
  grades: string;
  team: string;
  format: string;
  arena: string;
  rounds: string;
  time: string;
  description: string;
  specs: { label: string; value: string }[];
  rules: string[];
  team_roles: { role: string; desc: string; icon: string }[];
  winning: string[];
};

export const EVENTS: EventInfo[] = [
  {
    slug: "robo-race",
    no: "01",
    name: "Robo Race",
    tagline: "Build. Code. Conquer the loop.",
    color: "#FF7A2F",
    icon: "🏎",
    grades: "Grades III–XII",
    team: "1–3 Members",
    format: "RC / Autonomous",
    arena: "6×3 m",
    rounds: "3",
    time: "90 sec",
    description:
      "Teams design and build wheeled robots that navigate a closed-loop obstacle track at top speed. With turns, ramps, and speed bumps, only the most precisely engineered bots finish in time. Junior teams (Gr III–VII) may use RC control; Senior teams (Gr VIII–XII) may use RC or onboard programming.",
    specs: [
      { label: "Max size", value: "30 × 30 × 30 cm" },
      { label: "Max weight", value: "5 kg" },
      { label: "Power", value: "Battery only (max 12V)" },
      { label: "Controller", value: "Arduino / Raspberry Pi" },
      { label: "Wheels", value: "Rubber grip (no metal tracks)" },
    ],
    rules: [
      "Robot must start fully inside the start box before the whistle.",
      "Touching track boundary = +5 sec penalty per occurrence.",
      "3 timed attempts allowed; best run counts.",
      "Must complete 3 laps within 90 seconds or DNF.",
      "No external help once the run begins — hands off!",
    ],
    team_roles: [
      { role: "Robot Builder", desc: "Designs chassis, drivetrain and mounting", icon: "🔧" },
      { role: "Programmer", desc: "Codes speed control and navigation logic", icon: "💻" },
      { role: "Operator", desc: "RC controller pilot (Junior category)", icon: "🎮" },
      { role: "Strategist", desc: "Analyses runs and plans improvements", icon: "📋" },
    ],
    winning: [
      "Fastest 3-lap run (after penalties) wins the event",
      "Penalty seconds are added to the raw lap time",
      "Tie-breaker: second-best attempt time",
      "Senior category bonus: extra points for full autonomy",
      "Top 3 teams per category (Junior & Senior) awarded trophies",
    ],
  },
  {
    slug: "robo-soccer",
    no: "02",
    name: "Robo Soccer",
    tagline: "Teamwork coded in silicon. The beautiful game, rewired.",
    color: "#2DC653",
    icon: "⚽",
    grades: "Grades V–XII",
    team: "2–5 Members",
    format: "2 vs 2 Bots",
    arena: "3×2 m astroturf",
    rounds: "2 halves",
    time: "5 min each half",
    description:
      "Two teams each field two robots and compete to score goals on a mini football pitch. Junior teams (Gr V–VII) use RC bots. Senior teams (Gr VIII–XII) must programme at least one autonomous bot. Strategy, agility, and quick halftime reprogramming make this a true team sport.",
    specs: [
      { label: "Max size", value: "25 × 25 × 25 cm" },
      { label: "Max weight", value: "1.5 kg per bot" },
      { label: "Power", value: "Battery Only (max 9V)" },
      { label: "Ball", value: "Hollow PVC, 10 cm" },
      { label: "Mechanism", value: "Kicker / dribbler allowed" },
      { label: "Goal Size", value: "40 cm wide × 20 cm tall" },
    ],
    rules: [
      "Match: two 5-minute halves with 2-minute halftime.",
      "Goal valid only when ball fully crosses the goal line.",
      "Pinning opponent to wall >3 seconds = foul.",
      "Out-of-bounds: referee restarts with centre drop ball.",
      "High-speed ram = foul; opponents get penalty kick.",
      "2 repair timeouts per team per match allowed.",
    ],
    team_roles: [
      { role: "Striker Operator", desc: "Pilots attacking bot or codes its play AI", icon: "⚽" },
      { role: "Defender Operator", desc: "Handles defensive bot and goal-line clears", icon: "🛡" },
      { role: "Coach", desc: "Calls strategy & makes halftime tweaks", icon: "🎯" },
      { role: "Coder", desc: "Patches code between matches", icon: "💻" },
    ],
    winning: [
      "Most goals scored across two halves wins the match",
      "Knockout brackets — single-elimination from quarters",
      "Tie-breaker: 2-minute golden goal, then penalty shootout",
      "Senior bonus: +1 goal for autonomous-only side",
      "Champions, Runners-up & 2nd Runners-up per division",
    ],
  },
  {
    slug: "line-follower",
    no: "03",
    name: "Fastest Line Follower",
    tagline: "Where milliseconds make champions.",
    color: "#00C2E0",
    icon: "〰",
    grades: "Grades III–XII",
    team: "1–3 Members",
    format: "Autonomous",
    arena: "5 m track",
    rounds: "3 runs",
    time: "60 sec",
    description:
      "Build a compact autonomous robot that follows a black line on white surface across straights, curves, intersections, and gap-jumps. Pure sensor-and-code precision — no remote control allowed.",
    specs: [
      { label: "Max size", value: "20 × 20 × 20 cm" },
      { label: "Max weight", value: "1 kg" },
      { label: "Sensors", value: "IR array (3–8 sensors)" },
      { label: "Control", value: "Fully autonomous" },
      { label: "Line width", value: "2 cm black on white" },
    ],
    rules: [
      "Bot must complete the track without losing the line for >3 sec.",
      "Manual restart from last checkpoint = +10 sec penalty.",
      "3 attempts allowed; best valid run counts.",
      "Gap-jumps and crossings must be handled autonomously.",
      "No physical interaction with bot during the run.",
    ],
    team_roles: [
      { role: "Hardware Lead", desc: "Designs sensor mount & chassis", icon: "🔧" },
      { role: "Sensor Tuner", desc: "Calibrates IR thresholds", icon: "🎛" },
      { role: "Coder", desc: "Writes PID loop & line logic", icon: "💻" },
    ],
    winning: [
      "Fastest valid completion time wins",
      "Bonus -3 sec for handling all crossings cleanly",
      "Tie-breaker: smoothness score (judge rating)",
      "Top 3 per category awarded trophies & medals",
    ],
  },
  {
    slug: "bot-combat",
    no: "04",
    name: "Bot Combat",
    tagline: "Two bots enter. One bot leaves.",
    color: "#FF3D3D",
    icon: "⚔",
    grades: "Grades VI–XII",
    team: "1–3 Members",
    format: "1 vs 1 Knockout",
    arena: "2×2 m caged arena",
    rounds: "3 min match",
    time: "Best of 3 hits / KO",
    description:
      "Two armoured combat bots face off inside a polycarbonate-walled arena. Weapons (lifters, wedges, spinners under spec) may be used to immobilise the opponent. Built tough. Driven hard.",
    specs: [
      { label: "Max size", value: "30 × 30 × 25 cm" },
      { label: "Max weight", value: "5 kg" },
      { label: "Weapons", value: "Lifters, wedges, low-RPM spinners" },
      { label: "Power", value: "Battery max 14.8V" },
      { label: "Banned", value: "Fire, liquids, projectiles, EMP" },
    ],
    rules: [
      "Pre-match safety inspection is mandatory.",
      "Bot is out if immobilised for 10 seconds.",
      "Tap-out by team captain ends the match.",
      "Damage to arena walls = disqualification.",
      "Refs' decision is final.",
    ],
    team_roles: [
      { role: "Pilot", desc: "Drives the bot in combat", icon: "🎮" },
      { role: "Builder", desc: "Repairs between matches", icon: "🔨" },
      { role: "Strategist", desc: "Reads opponent and calls plays", icon: "🧠" },
      { role: "Safety Officer", desc: "Pre-match checks & shutdown", icon: "🛡" },
    ],
    winning: [
      "KO / immobilisation = instant win",
      "If both bots survive: judges score aggression + damage + control",
      "Single-elimination bracket — winner stays in",
      "Trophy + Best Engineered Bot awards",
    ],
  },
  {
    slug: "drone-racing",
    no: "05",
    name: "Drone Racing Challenge",
    tagline: "Sky-high speed. Pilot-grade precision.",
    color: "#B06EFF",
    icon: "🚁",
    grades: "Grades VII–XII",
    team: "1–3 Members",
    format: "FPV / Line-of-sight",
    arena: "Indoor obstacle course",
    rounds: "Qualifier + Final",
    time: "Best lap time",
    description:
      "Pilots fly micro drones through a neon-lit obstacle gate course. Tight turns, vertical climbs, and hairpin chicanes — fastest clean lap wins. Senior pilots may use FPV goggles.",
    specs: [
      { label: "Drone class", value: "Sub-250g micro / tiny-whoop" },
      { label: "Max prop size", value: "3 inches" },
      { label: "Camera", value: "Optional FPV (Senior only)" },
      { label: "Frequency", value: "Allocated by organisers" },
      { label: "Battery", value: "Provided spares allowed" },
    ],
    rules: [
      "Pilot must remain in designated zone.",
      "Missing a gate = lap invalid.",
      "Crash & restart allowed within 10 sec.",
      "Only allocated frequency channels permitted.",
      "Two qualifier runs + one final.",
    ],
    team_roles: [
      { role: "Pilot", desc: "Flies the drone through the course", icon: "🕹" },
      { role: "Spotter", desc: "Calls obstacles & timings", icon: "👁" },
      { role: "Tech Crew", desc: "Battery swaps & repairs", icon: "🔧" },
    ],
    winning: [
      "Fastest clean lap across qualifier + final",
      "All gates must be hit in order",
      "Tie-breaker: second-best lap",
      "Champion Pilot trophy + Best Rookie award",
    ],
  },
  {
    slug: "innovation",
    no: "06",
    name: "Innovation Challenge",
    tagline: "Your idea. Your prototype. Your future.",
    color: "#FFD700",
    icon: "💡",
    grades: "Grades III–XII",
    team: "1–5 Members",
    format: "Project + Demo + Pitch",
    arena: "Exhibition hall",
    rounds: "Pitch + Judging",
    time: "5 min pitch",
    description:
      "Open category for student-built AI projects, robotics innovations, smart automation, and startup concepts. Bring a working prototype or compelling demo and pitch your vision to a panel of industry judges.",
    specs: [
      { label: "Categories", value: "AI, Robotics, IoT, Automation, Startup" },
      { label: "Demo", value: "Working prototype or video" },
      { label: "Pitch", value: "5 min + 3 min Q&A" },
      { label: "Materials", value: "Poster + slide deck" },
      { label: "Originality", value: "Must be student-built" },
    ],
    rules: [
      "Submit concept abstract in advance.",
      "Demo table provided; bring own laptop.",
      "Judges score on innovation, feasibility, demo, presentation.",
      "Plagiarised projects disqualified.",
      "Audience choice vote runs parallel to judging.",
    ],
    team_roles: [
      { role: "Lead Innovator", desc: "Owns the vision and pitch", icon: "💡" },
      { role: "Engineer", desc: "Builds the prototype", icon: "🔧" },
      { role: "Designer", desc: "Visual identity & poster", icon: "🎨" },
      { role: "Presenter", desc: "Delivers the pitch", icon: "🎤" },
    ],
    winning: [
      "Highest combined score from 4 judges wins",
      "Special awards: Best AI Project, Best Hardware, Audience Choice",
      "Top 3 per category receive cash prize + trophy",
      "Winners featured at national innovation showcase",
    ],
  },
];

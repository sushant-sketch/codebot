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
      "Senior bonus: +1 goal for autonomous-only",
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
    arena: "3×3 m",
    rounds: "3 min match",
    time: "Best of 3 hits / KO",
    description:
      "Two robots enter a raised combat platform. Using wedges, bumpers, or drum spinners (no sharp blades!), teams battle to immobilise, flip, or push the opponent off the platform. Judged on control, aggression, and damage dealt if no KO occurs.",
    specs: [
      { label: "Max size", value: "30 × 30 × 30 cm" },
      { label: "Max weight", value: "5 kg" },
      { label: "Weapons", value: "Wedge / bumper / drum (blunt)" },
      { label: "Power", value: "Battery only (max 12V)" },
      { label: "Banned", value: "Sharp edges, projectiles, fire" },
    ],
    rules: [
      "KO = bot falls off platform OR is immobile for 10 seconds.",
      "Illegal weapons = immediate disqualification from event.",
      "All robots must pass safety inspection before competing.",
      "Operators must stay behind the safety line at all times.",
      "30-minute repair window between rounds allowed.",
      "No KO? Judges score: Control 40% · Aggression 30% · Damage 30%.",
    ],
    team_roles: [
      { role: "Pilot", desc: "Drives the bot in combat", icon: "🎮" },
      { role: "Builder", desc: "Repairs between matches", icon: "🔨" },
      { role: "Strategist", desc: "Reads opponent and calls plays", icon: "🧠" },
      { role: "Safety Officer", desc: "Pre-match checks & shutdown", icon: "🛡" },
    ],
    winning: [
      "KO (off-platform or immobile 10 seconds) = instant win",
      "No KO: judges score on Control (40%) / Aggression (30%) / Damage (30%)",
      "Best of 3 rounds wins the match",
      "Knockout bracket tournament format throughout the day",
      "Safety violation at any point = immediate disqualification",
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
    arena: "20×10m Course Size",
    rounds: "6–10 Gates / Hoops",
    time: "2 min Race Window",
    description:
      "Teams build or assemble a micro-drone and pilot it through 6 to 10 aerial hoops in a 3D indoor course. Junior teams (Gr VII–IX) use standard RC. Everyone can use quadcopter drone also. Speed + precision = gold.",
    specs: [
      { label: "Max diagonal", value: "250mm (micro class)" },
      { label: "Max weight", value: "350 g (incl. battery)" },
      { label: "Battery", value: "LiPo max 3S (11.1V)" },
      { label: "Propellers", value: "Must have prop guards" },
    ],
    rules: [
      "Pilot must remain in designated zone.",
      "Missing a gate = lap invalid.",
      "Crash & restart allowed within 10 sec.",
      "Only allocated frequency channels permitted.",
      "Two qualifier runs + one final.",
    ],
    team_roles: [
      { role: "Drone Technician", desc: "Assembles, tunes and repairs the drone", icon: "🛠" },
      { role: "Pilot", desc: "RC / FPV operator — star of the show", icon: "🎮" },
      { role: "Flight Programmer", desc: "Configures flight controller PID settings", icon: "💻" },
      { role: "Spotter", desc: "Line-of-sight observer and safety officer", icon: "📡" },
    ],
    winning: [
      "Fastest 3-lap time (after penalties) wins each qualifying heat",
      "2 heats per team; best time advances to finals",
      "Finals: top 4 teams fly simultaneously for maximum excitement",
      "First drone to complete 3 clean laps in the final wins Gold",
      "Special Design Award for the best self-built drone entry",
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

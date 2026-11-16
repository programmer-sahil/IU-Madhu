export interface VisualDiagramConfig {
  id: string;
  unit: number;
  section: string;
  title: string;
  subtitle: string;
  type: "wbs-hierarchy" | "kano-moscow-matrix" | "precedences-diagram" | "pert-network-calculator" | "iso25010-tree" | "gantt-chart-view";
  description: string;
  interactiveFeatures: string[];
  keyData: Record<string, any>;
}

export const unit2Visuals: VisualDiagramConfig[] = [
  {
    id: "itpm-u2-vis-01",
    unit: 2,
    section: "2.1",
    title: "Interactive WBS Decomposition Explorer",
    subtitle: "Hierarchical breakdown from Level 1 Project to Level 4 Elementary Tasks with the 100% Rule",
    type: "wbs-hierarchy",
    description: "Explore the 4-level breakdown of the cRobot project: Level 1 (Autonomous Assistant Robot), Level 2 (Hardware, Software, Integration, Project Management), Level 3 (Work packages like Chassis, Navigation AI), Level 4 (Elementary tasks). Hover or click nodes to see bottom-up estimate rollups and WBS dictionary cards.",
    interactiveFeatures: [
      "Expandable and collapsible WBS tree nodes",
      "Bottom-up cost and duration aggregation indicator",
      "100% Rule scope integrity validator",
      "WBS Dictionary detail popover on click"
    ],
    keyData: {
      root: "cRobot Project",
      levels: [
        { level: 1, name: "Project", example: "cRobot Autonomous Assistant" },
        { level: 2, name: "Subsystems / Phases", examples: ["1.0 Hardware Subsystem", "2.0 Software Subsystem", "3.0 System Integration", "4.0 Management & PMO"] },
        { level: 3, name: "Work Packages", examples: ["1.1 Chassis & Skeleton", "1.2 Mobility Motors", "2.1 Navigation AI", "2.2 Voice Interaction"] },
        { level: 4, name: "Elementary Tasks", examples: ["1.1.1 3D Frame CAD Modeling", "2.1.1 Obstacle Avoidance Algorithm"] }
      ]
    }
  },
  {
    id: "itpm-u2-vis-02",
    unit: 2,
    section: "2.2",
    title: "Kano Customer Satisfaction & MoSCoW Matrix",
    subtitle: "Interactive mapping of requirements by customer perception curve and release priority",
    type: "kano-moscow-matrix",
    description: "Interactive visual combining the Kano satisfaction curves (Basic, Performance, Delighters) with MoSCoW release classifications (Must, Should, Could, Won't). Interactive sliders show how investment in features shifts satisfaction and release viability.",
    interactiveFeatures: [
      "Toggle between Kano curve view and MoSCoW quadrant view",
      "Interactive slider showing diminishing returns on performance features",
      "Feature tester demonstrating why missing Basic needs ruins satisfaction",
      "cRobot concrete examples mapped directly into categories"
    ],
    keyData: {
      categories: [
        { name: "Basic / Must-Have", kano: "Must-Be", moscow: "Must-Have", satisfactionCurve: "Flat positive / Severe negative drop", cRobotExample: "Physical Robot Mobility" },
        { name: "Performance / Should-Have", kano: "Linear Satisfier", moscow: "Should-Have", satisfactionCurve: "Linear growth with diminishing returns", cRobotExample: "Response Speed & Battery Life" },
        { name: "Delighter / Could-Have", kano: "Attractive", moscow: "Could-Have", satisfactionCurve: "Exponential positive / Zero negative drop", cRobotExample: "Human-like Head Movement" },
        { name: "Won't-Have (for now)", kano: "Indifferent", moscow: "Won't-Have", satisfactionCurve: "Zero effect on current release", cRobotExample: "Autonomous Stair Climbing" }
      ]
    }
  },
  {
    id: "itpm-u2-vis-03",
    unit: 2,
    section: "2.3",
    title: "Four Precedence Relationships Interactive Simulator",
    subtitle: "Visualizing FS, SS, FF, and SF dependencies, Leads, Lags, and Concurrency",
    type: "precedences-diagram",
    description: "Visual node simulation demonstrating how Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF), and Start-to-Finish (SF) relationships behave on an interactive timeline with adjustable lead and lag values.",
    interactiveFeatures: [
      "Select relationship type (FS, SS, FF, SF) to see timeline shift",
      "Slider for Lead (overlap) and Lag (delay)",
      "Real-time calculation of activity start and completion offsets",
      "Realistic course-book IT scenarios"
    ],
    keyData: {
      precedences: [
        { type: "FS", name: "Finish-to-Start", frequency: "Default / Most Common", logic: "Successor starts after Predecessor finishes", example: "Assembly finishes -> Testing begins" },
        { type: "SS", name: "Start-to-Start", frequency: "Common (Concurrency)", logic: "Successor starts after Predecessor starts", example: "Hardware construction begins -> Software development begins" },
        { type: "FF", name: "Finish-to-Finish", frequency: "Common (Coordination)", logic: "Successor cannot finish until Predecessor finishes", example: "System testing finishes -> Final documentation finishes" },
        { type: "SF", name: "Start-to-Finish", frequency: "Rarest", logic: "Successor cannot finish until Predecessor starts", example: "New cloud database begins operation -> Old server is retired" }
      ]
    }
  },
  {
    id: "itpm-u2-vis-04",
    unit: 2,
    section: "2.3",
    title: "PERT Network & Critical Path Calculator",
    subtitle: "Interactive 6-node network with live Forward Pass, Backward Pass, Slack, and Critical Path",
    type: "pert-network-calculator",
    description: "Fully interactive PERT chart based on course book Figures 15–19. Displays nodes with EST, EFT, LST, LFT, Duration, and Slack. Users can adjust task durations to see the Critical Path dynamically highlight in red and project finish dates update.",
    interactiveFeatures: [
      "Standard PERT element layout (EST, EFT, LST, LFT, Duration, Slack)",
      "Interactive duration sliders for 6 interconnected tasks",
      "Live Forward Pass calculation showing max EFT at merges",
      "Live Backward Pass calculation showing min LST at bursts",
      "Dynamic Critical Path highlighting (red arrows and nodes with zero slack)"
    ],
    keyData: {
      initialNodes: [
        { id: "A", name: "Requirements", duration: 4, predecessors: [] },
        { id: "B", name: "Hardware Design", duration: 6, predecessors: ["A"] },
        { id: "C", name: "Software Architecture", duration: 8, predecessors: ["A"] },
        { id: "D", name: "Hardware Fabrication", duration: 7, predecessors: ["B"] },
        { id: "E", name: "Software Development", duration: 9, predecessors: ["C"] },
        { id: "F", name: "System Integration", duration: 5, predecessors: ["D", "E"] }
      ]
    }
  },
  {
    id: "itpm-u2-vis-05",
    unit: 2,
    section: "2.4",
    title: "ISO/IEC 25010 Quality Models Tree",
    subtitle: "Interactive exploration of Quality-in-Use (5) and Product Quality (8) characteristics",
    type: "iso25010-tree",
    description: "Comprehensive visual tree diagram of the ISO/IEC 25010 software quality standard. Click on any of the 5 Quality-in-Use or 8 Product Quality characteristics to reveal official sub-characteristics, exam definitions, and verification checklists.",
    interactiveFeatures: [
      "Dual-tab view: Quality-in-Use (5) vs Product Quality (8)",
      "Interactive breakdown of sub-characteristics (e.g. non-repudiation, testability, context completeness)",
      "Mnemonic memory cards (S-E-F-E-C and F-P-U-R-S-C-P-M)",
      "Quality Gate audit checklist mapping"
    ],
    keyData: {
      qualityInUse: ["Satisfaction", "Effectiveness", "Freedom from risk", "Efficiency", "Context coverage"],
      productQuality: ["Functional suitability", "Performance efficiency", "Usability", "Reliability", "Security", "Compatibility", "Portability", "Maintainability"]
    }
  }
];

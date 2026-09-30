// Edit this file to update the whole site. Everything shown comes from the resume and LinkedIn profile.
export const profile = {
  name: "Saidali S",
  title: "Software Test Engineer",
  headline: "automotive ECU validation and embedded software testing",
  statement: "I validate automotive software against customer requirements under ASPICE, from system integration to system qualification.",
  location: "Trivandrum, Kerala",
  availability: "Immediate joiner",
  email: "saidali.career@gmail.com",
  linkedin: "https://www.linkedin.com/in/saidali-s-501884247",
};

export const chain = ["Requirement", "Test case", "Execution", "Defect in JIRA", "Test report"];

export const about =
  "I have 3 years of experience testing automotive embedded software at Tata Elxsi, working on ASPICE projects. I analyse requirements, design and run test cases on ECUs, log and track defects with developers, and keep requirements traceable from start to finish. I have also had exposure to Hardware-in-the-Loop (HIL) testing, and I am studying Electrical and Electronics Engineering alongside work.";

export const work = [
  {
    name: "System Integration Testing",
    standard: "ASPICE SYS.4",
    problem: "Check that integrated automotive software behaves as specified when its parts work together.",
    did: "Created and executed SIT test cases, validated ECU behaviour and automotive communication, and supported firmware debugging and issue analysis.",
    tools: "dSPACE AutomationDesk, dSPACE ControlDesk, INCA, PLIN-View Pro, Keil µVision",
    outcome: "Defects were logged, tracked and verified in JIRA together with the development team.",
  },
  {
    name: "System Qualification Testing",
    standard: "ASPICE SYS.5",
    problem: "Confirm that the complete system meets customer requirements before release.",
    did: "Analysed customer requirements and specifications, built test strategies, and ran functional, regression and end-to-end tests. Prepared test plans, execution logs and reports.",
    tools: "JIRA, Git, Gherkin, Lucidchart, Microsoft Office",
    outcome: "Full requirement coverage and end-to-end requirement traceability were maintained.",
  },
  {
    name: "Diagnostic feature validation",
    standard: "ASPICE SYS.5",
    problem: "Verify that vehicle diagnostic features work as their requirements describe.",
    did: "Wrote test cases, executed the validation, and reviewed test coverage.",
    tools: "dSPACE AutomationDesk, dSPACE ControlDesk, INCA",
    outcome: "Test coverage for the diagnostic features was reviewed against requirements.",
  },
];

export const experience = {
  role: "Software Test Engineer",
  company: "Tata Elxsi",
  place: "Trivandrum",
  period: "Oct 2022 to Nov 2025",
  steps: [
    { title: "Direct consultant", period: "Oct 2022 to Sep 2023" },
    { title: "Associate Engineer", period: "Oct 2023 to Sep 2024" },
    { title: "Engineer", period: "Oct 2024 to Nov 2025" },
  ],
  highlights: [
    "Created and executed SIT (ASPICE SYS.4) and SQT (ASPICE SYS.5) test cases for automotive software.",
    "Validated ECUs and automotive communication with dSPACE AutomationDesk, ControlDesk, INCA and PLIN-View Pro.",
    "Performed functional, regression, integration, system qualification and end-to-end testing.",
    "Kept end-to-end requirement traceability and prepared test plans, execution logs and reports.",
    "Wrote Gherkin scenarios, Lucidchart workflows and sequence diagrams to support feature development and validation.",
    "Worked with developers and system engineers in Agile teams, and kept test artifacts in Git.",
  ],
};

export const skills = [
  { group: "Automotive validation", items: ["ECU validation", "Diagnostics testing", "Automotive communication validation", "Embedded software testing", "Industrial automation testing", "HIL (exposure)"] },
  { group: "Process and standards", items: ["ASPICE SYS.4 and SYS.5", "Requirement traceability", "Test case creation", "Test reporting", "Agile", "SDLC and STLC"] },
  { group: "Testing", items: ["Manual", "Functional", "Regression", "SIT", "SQT", "End-to-end", "Defect management"] },
  { group: "Tools", items: ["dSPACE AutomationDesk", "dSPACE ControlDesk", "INCA", "PLIN-View Pro", "Keil µVision", "JIRA", "Gherkin", "Lucidchart"] },
  { group: "Version control", items: ["Git", "GitHub"] },
  { group: "Documentation and reporting", items: ["Word", "Excel", "PowerPoint", "Power BI"] },
];

export const education = [
  { degree: "B.Tech, Electrical and Electronics Engineering", school: "College of Engineering, Trivandrum", period: "Aug 2024 to Aug 2027", note: "Working professional program" },
  { degree: "Diploma, Electronics Engineering", school: "Central Polytechnic College", period: "2019 to 2022" },
];

export const certifications = [
  "Software Testing Fundamentals", "Agile Methodology", "Agile for Beginners", "Git and GitHub",
  "MATLAB Onramp", "Introduction to Generative AI", "Learning Industrial Automation", "Electronics Foundations: Fundamentals",
];

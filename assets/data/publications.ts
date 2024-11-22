export interface Publication {
  title: string;
  authors: Array<string>;
  information: string;
  doi?: string;
}

const publications: Publication[] = [
  {
    title:
      "Asymmetries in Group-Individual Collision Avoidance due to Social Factors",
    authors: [
      "Adrien Gregorj",
      "Zeynep Yücel",
      "Francesco Zanlungo",
      "Takayuki Kanda",
    ],
    information: "Collective Dynamics 9, 1-9, June 2024",
    doi: "10.17815/CD.2024.150",
  },
  {
    title:
      "Social aspects of collision avoidance: a detailed analysis of two-person groups and individual pedestrians",
    authors: [
      "Adrien Gregorj",
      "Zeynep Yücel",
      "Francesco Zanlungo",
      "Claudio Feliciani",
      "Takayuki Kanda",
    ],
    information: "Scientific Reports 13, 5756, April 2023",
    doi: "10.1038/s41598-023-32883-z",
  },
  {
    title:
      "On the Influence of Group Social Interaction on Intrusive Behaviours",
    authors: [
      "Adrien Gregorj",
      "Zeynep Yücel",
      "Francesco Zanlungo",
      "Takayuki Kanda",
    ],
    information:
      "International Conference on Traffic and Granular Flow, 117-124, October 2022",
    doi: "10.1007/978-981-99-7976-9_15",
  },
  {
    title: "Estimating social relation from trajectories",
    authors: [
      "Zeynep Yucel",
      "Francesco Zanlungo",
      "Claudio Feliciani",
      "Adrien Gregorj",
      "Takayuki Kanda",
    ],
    information: "Collective Dynamics 5, 222-229, March 2020",
    doi: "10.17815/CD.2020.54",
  },
  {
    title: "Identification of social relation within pedestrian dyads",
    authors: [
      "Zeynep Yücel",
      "Francesco Zanlungo",
      "Claudio Feliciani",
      "Adrien Gregorj",
      "Takayuki Kanda",
    ],
    information: "PLOS ONE 14(10): e0223656, October 2019",
    doi: "10.1371/journal.pone.0223656",
  },
  {
    title:
      "A signal processing perspective on human gait: Decoupling walking oscillations and gestures",
    authors: [
      "Adrien Gregorj",
      "Zeynep Yücel",
      "Sunao Hara",
      "Akito Monden",
      "Masahiro Shiomi",
    ],
    information:
      "Interactive Collaborative Robotics: 4th International Conference, ICR 2019",
    doi: "10.1007/978-3-030-26118-4_8",
  },
];

export default publications;

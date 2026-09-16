const routingRules = {
  garbage: {
    department: "Sanitation",
  },

  water: {
    department: "Water Supply",
  },

  pollution: {
    department: "Environment",
  },

  road: {
    department: "Roads",
  },

  streetlight: {
    department: "Electrical",
  },

  sanitation: {
    department: "Sanitation",
  },

  public_space: {
    department: "Public Works",
  },
};

export function getDepartment(category) {
  const rule = routingRules[category];

  if (!rule) {
    return "General Local Authority";
  }

  return rule.department;
}
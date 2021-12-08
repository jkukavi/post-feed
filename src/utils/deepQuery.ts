const nestedQuery = (object: any, query: string) => {
  const keys = Object.keys(object);

  for (let key of keys) {
    let prop = object[key];

    if (typeof prop === "object") {
      const match = nestedQuery(object[key], query);
      if (match) return true;
    }

    if (typeof prop === "number") {
      prop = prop.toString();
    }

    if (typeof prop === "string") {
      if (prop.toLowerCase().includes(query)) return true;
    }
  }

  return false;
};

export default nestedQuery;

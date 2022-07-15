const FlrData = (data) => {
  let tempInterval = [];
  data?.map((value) => {
    tempInterval.push(value?.fuzzifikasi);
  });

  let tempFlrData = [];
  for (let i = 0; i < tempInterval.length; i++) {
    tempFlrData.push([tempInterval[i - 1], tempInterval[i]]);
  }

  let flrData = {
    head: ["NO", "Fuzzy Logic Relationship (FLR)"],
    body: [...tempFlrData],
  };

  return flrData;
};

export default FlrData;

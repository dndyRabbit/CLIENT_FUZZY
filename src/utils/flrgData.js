const flrgData = (flrData, intervalLength) => {
  // FLRG SORTING
  let flrgData = [];
  for (let i = 0; i < intervalLength?.length; i++) {
    let key = `A${i + 1}`;
    let arr = [];
    flrData.forEach((value) => {
      if (value[0] === key) {
        arr.push(value[1]);
      }
    });
    let data = {
      key,
      arr,
    };
    flrgData.push(data);
  }

  return {
    head: ["No", "Universe", "Fuzzy logic Relationship Group (FLRG)"],
    body: flrgData,
  };
};

export default flrgData;

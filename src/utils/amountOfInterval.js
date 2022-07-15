const AmountOfInterval = (data, interval) => {
  // FILTERING/TRANSFORMING ALL OF FUZIFIKASI DATA INTO AN ARRAY OF INTERVAL
  // FOR COUNTING AMOUNT OF INTERVAL
  let arr = [];
  data?.body?.map((value) => {
    for (let i = 0; i <= interval?.length; i++) {
      if (value?.fuzzifikasi == `A${i}`) {
        arr.push(`U${i}`);
      }
    }
  });

  // CHANGED THE DATA INTO 2D ARRAY SO THE DATA LENGTH
  // ARE ABLE TO BE COUNTED
  let uniqueKey = interval?.map((value) => {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === value.universe) {
        return ([value.universe] = arr.filter((fil) => {
          return fil == arr[i];
        }));
      }
    }
  });

  // THIS LINE IS FOR COUNTING THE LENGTH OF THE uniqueKey DATA
  let intervalLength = uniqueKey?.map((value) => {
    return value?.length;
  });

  // AFTER ALL THE INGREDIENTS IS FULFILLED, NOW CHANGE THE DATA INTO AN
  // OBJECT OF ARRAY, SO THE DATA CAN BE ACCESSED INTO THE TABLE
  let amountData = [];
  for (let i = 0; i < intervalLength?.length; i++) {
    let data = {
      id: `U${[i + 1]}`,
      intervalLength: intervalLength[i],
    };
    amountData.push(data);
  }

  // MERGING INTERVAL DATA AND AMOUNT OF UNIVERSE
  let newIntevalData = [];
  interval?.map((value, index) => {
    if (amountData?.[index]?.id == value?.universe) {
      let newData = {
        ...value,
        jumlah: amountData?.[index]?.intervalLength,
      };
      newIntevalData.push(newData);
    }
  });

  return newIntevalData;
};

export default AmountOfInterval;

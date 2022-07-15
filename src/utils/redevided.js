import FuzzifikasiRedevidedCheck from "./fuzzifikasiRedevidedCheck";

const Redevided = (data, aktuals) => {
  let val = data?.[0]?.batasAtas - data?.[0]?.batasBawah;
  let newVal = val / 2;

  let newDatas = [];
  data?.map((value, index) => {
    if (value.jumlah >= 3) {
      value.batasAtas = value.batasAtas - newVal;
      value.jumlah = value.jumlah - 3;
      let newValue = {
        batasBawah: value.batasAtas,
        batasAtas: value.batasAtas + newVal,
      };
      newDatas.push(value, newValue);
    } else {
      newDatas.push(value);
    }
  });

  let uodInterval = newDatas.map((value, index) => {
    return {
      universe: `U${index + 1}`,
      batasBawah: value.batasBawah,
      batasAtas: value.batasAtas,
    };
  });

  let interval = [];
  uodInterval.map((value) => {
    interval.push([value.batasBawah, value.batasAtas]);
  });

  // GET THE AKTUAL DATA
  let dataAktual = [];
  aktuals?.map((value) => {
    dataAktual.push(value[2]);
  });

  let timeAktual = [];
  aktuals?.map((value) => {
    timeAktual.push(value[1]);
  });

  let tempFuzzifikasi = FuzzifikasiRedevidedCheck(dataAktual, interval);

  // Menggabungkan semua Data agar bisa di akses di FE
  let fuzzifikasiRedevided = [];
  for (let i = 0; i < tempFuzzifikasi.newDataAktual.length; i++) {
    let data = {
      waktu: timeAktual[i],
      dataAktual: tempFuzzifikasi.newDataAktual[i],
      interval: tempFuzzifikasi.newInterval[i],
      fuzzifikasi: tempFuzzifikasi.fuzzifikasi[i],
    };
    fuzzifikasiRedevided.push(data);
  }

  return {
    fuzzifikasiRedevided,
    uodInterval,
  };
};

export default Redevided;

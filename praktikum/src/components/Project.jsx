export default class Project {
  id = "";
  wisata = ""
  keterangan = ""
  alamat = ""
  pic = ""
  harga = ""
  

  constructor(initilizer) {
    this.id = initilizer.id;
    this.wisata = initilizer.wisata
    this.keterangan = initilizer.keterangan
    this.alamat = initilizer.alamat
    this.pic = initilizer.pic
    this.harga = initilizer.harga

  }
}

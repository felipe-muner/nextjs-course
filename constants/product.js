import fetcher from "./fetcher";

class Product {
  constructor(server) {
    this.server = server
  }
  // async getAll() {
  //   return await fetcher.get("/school");
  // }
  async getAll(){
    const res = await fetcher.get({
      url: this.server + "/api/products",
      data: {},
    })
    const data = await res.json()
    return data
  }
  async add(payload) {
    const res = await fetcher.post({
      url: this.server + "/api/products",
      data: payload,
    })
    const data = await res.json()
    return data
  }

  async update(payload) {
    const res = await fetcher.put({
      url: this.server + "/api/products",
      data: payload,
    });
    const data = await res.json()
    return data
  }
  async delete(payload){
    console.log(payload,'felipeee')
    const res = await fetcher.delete({
      url: this.server + "/api/products",
      data: payload,
    });
    const data = await res.json()
    return data
  }

  felipe(){
    console.log('zxcasd')
  }

  // async new(payload) {
  //   return await fetcher.post("/school/create", payload);
  // }
  // async update(payload) {
  //   return await fetcher.put("/school/update", payload);
  // }
  // async deleteLesson(payload) {
  //   return await fetcher.delete("/school/lesson", {
  //     data: { lessonID: payload }
  //   });
  // }
  // async addLesson(payload) {
  //   return await fetcher.post("/school/lesson", payload);
  // } 
}

export default Product;
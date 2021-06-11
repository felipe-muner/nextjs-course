import fetcher from "./fetcher";

const api = {
  getAll: async function () {
    const res = await fetcher.get({
      url: "/api/products",
      data: {},
    })
    const products = await res.json();
    return products    
  },
  add: async function (payload) {
    const res = await fetcher.post({
      url: "/api/products",
      data: payload,
    })
    const product = await res.json();
    return product
  }
}

export default api
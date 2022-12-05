function ProductService() {
  this.getListProductApi = function () {
    return axios({
      url: "https://637b69b210a6f23f7fa80d9a.mockapi.io/api/Users",
      method: "GET",
    });
  };

  //   delete
  this.deleteProductApi = function (id) {
    return axios({
      url: "https://637b69b210a6f23f7fa80d9a.mockapi.io/api/Users/" + id,
      method: "DELETE",
    });
  };

  // add
  this.addProductApi = function (product) {
    return axios({
      url: `https://637b69b210a6f23f7fa80d9a.mockapi.io/api/Users`,
      method: "POST",
      data: product,
    });
  };

  // update
  this.getProductByIdApi = function (id){
    return axios({
        url : `https://637b69b210a6f23f7fa80d9a.mockapi.io/api/Users/`+id,
        method : "GET",

    });
  };



  this.updateProductApi = function(product){
   return axios ({
        url: `https://637b69b210a6f23f7fa80d9a.mockapi.io/api/Users/${product.id}`,
        method: "PUT",
        data: product
    });
  };
}

var productService = new ProductService();

function getEle(id) {
  return document.getElementById(id);
}

function getListProduct() {
  productService
    .getListProductApi()
    .then(function (result) {
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListProduct();

function renderHTML(data) {
  var content = "";

  data.forEach(function (product, index) {
    content += `
    <tr>
    <td>${index + 1}</td>
    <td>${product.taiKhoan}</td>
    <td>${product.matKhau}</td>
    <td>${product.hoTen}</td>
    <td>${product.email}</td>
    <td>${product.ngonNgu}</td>
    <td>${product.moTa}</td>
    <td>
        <button class = "btn btn-info" data-toggle="modal"
        data-target="#myModal" onclick = "editProduct('${
          product.id
        } ')" >Edit </button>
        <button class = "btn btn-danger" onclick = "deleteProduct('${
          product.id
        } ')">Delete </button>
    </td>
    


    </tr>
    `;
  });

  getEle("tblDanhSachNguoiDung").innerHTML = content;
}

// delete product

function deleteProduct(id) {
  productService
    .deleteProductApi(id)
    .then(function (result) {
      getListProduct();
    })
    .catch(function (error) {
      console.log(error);
    });
}

getEle("btnThemNguoiDung").onclick = function () {
  var title = "Thêm người dùng";
  document.getElementsByClassName("modal-title")[0].innerHTML = title;

  var button = `<button class = "btn btn-success" onclick = "addProduct()">Add</button> `;
  document.getElementsByClassName("modal-footer")[0].innerHTML = button;
};

// add user
function addProduct() {
  var taiKhoan = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;
  var loaiND = getEle("loaiNguoiDung").value;
  var ngonNgu = getEle("loaiNgonNgu").value;
  var moTa = getEle("MoTa").value;

  var product = new Product(
    "",
    taiKhoan,
    hoTen,
    matKhau,
    email,
    loaiND,
    ngonNgu,
    moTa,
    matKhau
  );
  // console.log(product);

  productService
    .addProductApi(product)
    .then(function (result) {
      alert("Add Success!");
      getListProduct();
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}

// edit
function editProduct(id) {
  var title = "Sua";
  document.getElementsByClassName("modal-title")[0].innerHTML = title;

  var button = `<button class = "btn btn-warning" onclick = "updateProduct(${id})">Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = button;

  productService
    .getProductByIdApi(id)
    .then(function (result) {
      var product = result.data;
      getEle("TaiKhoan").value = product.taiKhoan;
      getEle("HoTen").value = product.hoTen;
      getEle("MatKhau").value = product.matKhau;
      getEle("Email").value = product.email;
      getEle("loaiNguoiDung").value = product.loaiND;
      getEle("loaiNgonNgu").value = product.ngonNgu;
      getEle("MoTa").value = product.moTa;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// updateProduct
function updateProduct(id) {
  var taiKhoan = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;
  var loaiND = getEle("loaiNguoiDung").value;
  var ngonNgu = getEle("loaiNgonNgu").value;
  var moTa = getEle("MoTa").value;

  var product = new Product(
    id,
    taiKhoan,
    hoTen,
    matKhau,
    email,
    loaiND,
    ngonNgu,
    moTa,
    matKhau
  );
  productService
    .updateProductApi(product)
    .then(function () {
      alert("update success!");
      getListProduct();
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}

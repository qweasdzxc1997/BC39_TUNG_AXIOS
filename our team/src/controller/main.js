var productService = new ProductSerVice();

function getEle(id) {
  return document.getElementById(id);
}

function getListProduct() {
  var promise = productService.getListProDuctApi();
  promise
    .then(function (result) {
      console.log(result.data);
      renderHTML(result.data)

    })
    .catch(function (error) {
      console.log(error);
    });

  
}

getListProduct();

function renderHTML(data) {
  var content = "";

  data.forEach(function (product, index) {
    content += `<div
    class="bt_bb_column col-xl-3 bt_bb_vertical_align_top bt_bb_align_center bt_bb_padding_text_indent bt_bb_animation_fade_in animate bt_bb_shadow_hover-inner-visible bt_bb_shape_soft-rounded"
    data-width="3"
    data-bt-override-class="{}"
  >
    <div
      class="bt_bb_column_content"
      style="background-color: rgba(255, 255, 255, 1)"
    >
      <div class="bt_bb_column_content_inner">
        <div
          class="bt_bb_image bt_bb_shape_square bt_bb_align_inherit bt_bb_hover_style_zoom-in bt_bb_content_display_always bt_bb_content_align_middle"
          data-bt-override-class="null"
        >
          <span
            ><img
              src="./img/${product.hinhAnh}"
              data-image_src="https://tabula.bold-themes.com/wavy/wp-content/uploads/sites/3/2019/04/teacher_1.jpg"
              title="teacher_1"
              alt="https://tabula.bold-themes.com/wavy/wp-content/uploads/sites/3/2019/04/teacher_1.jpg"
              class="btLazyLoadImage"
          /></span>
        </div>
        <div
          class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_20"
          data-bt-override-class="null"
        ></div>
        <header
          class="bt_bb_headline bt_bb_color_scheme_5 bt_bb_dash_none bt_bb_superheadline bt_bb_size_small bt_bb_align_inherit"
          style="
            --primary-color: #191919;
            --secondary-color: #b61984;
          "
          data-bt-override-class="{}"
        >
          <h4 class="bt_bb_headline_tag">
            <span class="bt_bb_headline_superheadline"
              >${product.ngonNgu}</span
            ><span class="bt_bb_headline_content"
              ><span>${product.taiKhoan}</span></span
            >
          </h4>
        </header>
        <div
          class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_small"
          data-bt-override-class="null"
        ></div>
        <div class="bt_bb_text">
          <p>
            Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit.
          </p>
        </div>
        <div
          class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_35"
          data-bt-override-class="null"
        ></div>
      </div>
    </div>
  </div>`;

    getEle("productItems").innerHTML = content;
  });
}

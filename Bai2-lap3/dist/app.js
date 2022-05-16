var data = [
    {
        name: "Conan",
        category_name: "Manga",
        price: 30000,
        sale_price: 21000,
        image: "../imgs/conan.jpg",
    },
    {
        name: "Doraemon",
        category_name: "Manga",
        price: 30000,
        sale_price: 22000,
        image: "../imgs/doraemon.jpg",
    },
    {
        name: "Khu Vườn ngôn từ",
        category_name: "LightNovel",
        price: 150000,
        sale_price: 95000,
        image: "../imgs/Khu_vuon_ngon_tu.jpg",
    },
    {
        name: "Your Name",
        category_name: "LightNovel",
        price: 150000,
        sale_price: 117000,
        image: "../imgs/your_name.jpg",
    },
    {
        name: "Kimetsu No Yaiba",
        category_name: "Manga",
        price: 200000,
        sale_price: 169000,
        image: "../imgs/Kimetsu_no_yaiba.jpg",
    },
    {
        name: "Nanatsu No Yaiba",
        category_name: "Manga",
        price: 40000,
        sale_price: 25000,
        image: "../imgs/Nanatsu_no_Taizai.jpg",
    },
];
function myDatas() {
    return [
        {
            name: "Conan",
            category_name: "Manga",
            price: 30000,
            sale_price: 21000,
            image: "../imgs/conan.jpg",
        },
        {
            name: "Doraemon",
            category_name: "Manga",
            price: 30000,
            sale_price: 22000,
            image: "../imgs/doraemon.jpg",
        },
        {
            name: "Khu Vườn ngôn từ",
            category_name: "LightNovel",
            price: 150000,
            sale_price: 95000,
            image: "../imgs/Khu_vuon_ngon_tu.jpg",
        },
        {
            name: "Your Name",
            category_name: "LightNovel",
            price: 150000,
            sale_price: 117000,
            image: "../imgs/your_name.jpg",
        },
        {
            name: "Kimetsu No Yaiba",
            category_name: "Manga",
            price: 200000,
            sale_price: 169000,
            image: "../imgs/Kimetsu_no_yaiba.jpg",
        },
        {
            name: "Nanatsu No Yaiba",
            category_name: "Manga",
            price: 40000,
            sale_price: 25000,
            image: "../imgs/Nanatsu_no_Taizai.jpg",
        },
    ];
}
;
var showProductList = function (data) {
    var _html = '';
    for (let key of data) {
        _html += `
            <tr>
                <th scope="row">${key.name}</th>
                <td>${key.category_name}</td>
                <td><del>${key.price}</del></td>
                <td>${key.sale_price}</td>
                <td><img src="${key.image}"/></td>
            </tr>
        `;
    }
    var _bodyList = document.getElementById("tbody-list");
    _bodyList.innerHTML = _html;
};
showProductList(data);
var input_cate = document.getElementById('input_cate');
var btn_filter_cate = document.getElementById('btn');
btn_filter_cate.onclick = function () {
    let _myData = myDatas();
    let cates = input_cate.value;
    if (cates == '') {
        alert('Vui Long Nhap Category Name');
        return;
    }
    let ProductFilter = data.filter(function (obj) {
        return cates == obj.category_name;
    });
    showProductList(ProductFilter);
};
var sortPrices = (sort_type) => {
    let _myData = myDatas();
    if (sort_type == 'ascending') {
        let priceSort = data.sort(function (a, b) {
            return a.price < b.price ? -1 : 0;
        });
        showProductList(priceSort);
    }
    else if (sort_type == 'descending') {
        let priceSort = data.sort(function (a, b) {
            return a.price > b.price ? -1 : 0;
        });
        showProductList(priceSort);
    }
    else {
        showProductList(data);
        return;
    }
};
var input_f = document.getElementById("input_first");
var input_s = document.getElementById("input_second");
var btn_sort = document.getElementById('btn_sort');
btn_sort.onclick = function () {
    let first = input_f.value;
    let second = input_s.value;
    if (first == '' || second == '') {
        alert('Vui Long Nhap Gia Tri');
        return;
    }
    let Filter = data.filter(function (obj) {
        return first <= obj.sale_price && obj.sale_price <= second;
    });
    showProductList(Filter);
};

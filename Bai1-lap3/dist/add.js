var myData = [
    { code: 'B1234', lop: 'C2110H1', name: "Hoàng Bá Hào", email: 'hao@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 7 },
    { code: 'B1235', lop: 'C2110H2', name: "Trần Ngọc Đào", email: 'daongoc@gmail.com', password: '123456', toan: 5, ly: 7, hoa: 7 },
    { code: 'B1236', lop: 'C2110H1', name: "Vũ Văn Kiên", email: 'kien@gmail.com', password: '123456', toan: 4, ly: 6, hoa: 7 },
    { code: 'B1237', lop: 'C2110H1', name: "Lê Trung Tín", email: 'tintrung@gmail.com', password: '123456', toan: 6, ly: 5, hoa: 4 },
    { code: 'B1238', lop: 'C2110H1', name: "Đào Ngọc Hòa", email: 'hoadn@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 5 },
    { code: 'B1239', lop: 'C2110H1', name: "Lê Văn Vinh", email: 'vinlv@gmail.com', password: '123456', toan: 5, ly: 7, hoa: 3 },
    { code: 'B1240', lop: 'C2110H1', name: "Đỗ Đức Hiếu", email: 'hieudd@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 9 },
    { code: 'B1241', lop: 'C2110H1', name: "Tào Công Long", email: 'longtao@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 7 },
    { code: 'B1242', lop: 'C2110H1', name: "Vũ Chí Bảo", email: 'baovc@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 7 }
];
function myDatas() {
    return [
        { code: 'B1234', lop: 'C2110H1', name: "Hoàng Bá Hào", email: 'hao@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 7 },
        { code: 'B1235', lop: 'C2110H2', name: "Trần Ngọc Đào", email: 'daongoc@gmail.com', password: '123456', toan: 5, ly: 7, hoa: 7 },
        { code: 'B1236', lop: 'C2110H1', name: "Vũ Văn Kiên", email: 'kien@gmail.com', password: '123456', toan: 4, ly: 6, hoa: 7 },
        { code: 'B1237', lop: 'C2110H1', name: "Lê Trung Tín", email: 'tintrung@gmail.com', password: '123456', toan: 6, ly: 5, hoa: 4 },
        { code: 'B1238', lop: 'C2110H1', name: "Đào Ngọc Hòa", email: 'hoadn@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 5 },
        { code: 'B1239', lop: 'C2110H1', name: "Lê Văn Vinh", email: 'vinlv@gmail.com', password: '123456', toan: 5, ly: 7, hoa: 3 },
        { code: 'B1240', lop: 'C2110H1', name: "Đỗ Đức Hiếu", email: 'hieudd@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 9 },
        { code: 'B1241', lop: 'C2110H1', name: "Tào Công Long", email: 'longtao@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 7 },
        { code: 'B1242', lop: 'C2110H1', name: "Vũ Chí Bảo", email: 'baovc@gmail.com', password: '123456', toan: 8, ly: 10, hoa: 7 }
    ];
}
// Tạo hàm in danh sách mảng dữ liệu sinh viên lên bảng html để tái sử dụng như sau
var showStudentList = function (data) {
    var _html = '';
    // duyệt mảng
    for (let std of data) {
        var tongDiem = std.toan + std.ly + std.hoa;
        let diemTB = tongDiem / 3; //làm tròn kết quả lên 1 dấu
        let xepLoai = '';
        if (diemTB > 5 && diemTB < 6.5) {
            xepLoai = 'Trung Bình';
        }
        else if (diemTB >= 6.5 && diemTB < 8) {
            xepLoai = 'Khá';
        }
        else if (diemTB >= 8 && diemTB < 9) {
            xepLoai = 'Giỏi';
        }
        else if (diemTB >= 9) {
            xepLoai = 'Xuất sắc';
        }
        else {
            xepLoai = 'Yếu kém';
        }
        _html += `<tr>
        <td>${std.code}</td>
        <td>${std.lop}</td>
        <td>${std.name}</td>
        <td>${std.email}</td>
        <td>${std.toan}</td>
        <td>${std.ly}</td>
        <td>${std.hoa}</td>
        <td>${diemTB.toFixed(1)}</td>
        <td>${xepLoai}</td>
        </dtr> `;
    }
    var _bodyList = document.getElementById('tbody-list');
    _bodyList.innerHTML = _html;
};
// Gọi lại hàm
showStudentList(myData);
// truy cập các điều khiển tren form
var input_marks = document.getElementById('input_marks');
var btn_filter = document.getElementById('btn_filter');
btn_filter.onclick = function () {
    let marks = input_marks.value;
    // kiemr tra xem đã nhập giá trị chưa
    if (marks == '') {
        alert('VUi lòng nhập ddiemr cần tìm');
        return;
    }
    // sử dụng hàm filter để lọc theo điều kiện
    let studentFIlters = myData.filter(function (obj) {
        var totalMarks = obj.toan + obj.ly + obj.hoa;
        let markAvg = totalMarks / 3; //làm tròn kết quả lên 1 dấu
        return markAvg.toFixed(1) >= marks;
    });
    showStudentList(studentFIlters); // gọi lại hàm in dữ liệu sau khi lọc kết qu
};
// khai báo hàm sort_markAvg kiể arrow function
var sort_markAvg = (sort_type) => {
    let _myData = myDatas(); // load lại dữ liệu mỗi làn click
    if (sort_type == 'ASC') {
        let studenSort = myData.sort(function (a, b) {
            return a.toan < b.toan ? -1 : 0;
        });
        showStudentList(studenSort);
    }
    else if (sort_type == 'DESC') {
        let studenSort = myData.sort(function (a, b) {
            return a.toan > b.toan ? -1 : 0;
        });
        showStudentList(studenSort);
    }
    else {
        // Gọi lại hàm
        showStudentList(myData);
    }
};
var input_class = document.getElementById('input_class');
var btn_filter_class = document.getElementById('btn_filter_class');
btn_filter_class.onclick = function () {
    let classes = input_class.value;
    // kiemr tra xem đã nhập giá trị chưa
    if (classes == '') {
        alert('VUi lòng nhập Class cần tìm');
        return;
    }
    // sử dụng hàm filter để lọc theo điều kiện
    let studentFIlters = myData.filter(function (obj) {
        return classes == obj.lop;
    });
    showStudentList(studentFIlters); // gọi lại hàm in dữ liệu sau khi lọc kết qu
};

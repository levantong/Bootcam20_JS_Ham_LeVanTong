//Lập công thức NumberFormat để số tiền hiển thị đẹp hơn

const NumberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})

    /**BÀI 1 - QUẢN LÝ TUYỂN SINH*/

function Tinh_diem(diem1,diem2,diem3,diem_khuvuc,diem_doituong) { //lập hàm tính điểm
    var tong_diem = Number(diem1)+Number(diem2)+Number(diem3)+Number(diem_khuvuc)+Number(diem_doituong);
    return tong_diem;
}

function Xet_dauRot(){
    //lấy giá trị các số nhập vào
    var diemChuan = document.getElementById("diemChuan").value ; 
    var diem_1 = document.getElementById("diem_1").value ; 
    var diem_2 = document.getElementById("diem_2").value; 
    var diem_3 = document.getElementById("diem_3").value; 

    var khuVuc = document.getElementById("khuVuc").value; 
    var doiTuong = document.getElementById("doiTuong").value; 
    var diem_khuVuc = 0; 
    var diem_doiTuong = 0;

    switch (khuVuc){
        case "X": diem_khuVuc = 0;
        break;
        case "A": diem_khuVuc = 2;
        break;
        case "B": diem_khuVuc = 1;
        break;
        case "C": diem_khuVuc = 0.5;
        break;
    }
    switch (doiTuong){
        case "0": diem_doiTuong = 0;
        break;
        case "1": diem_doiTuong = 2.5;
        break;
        case "2": diem_doiTuong = 1.5;
        break;
        case "3": diem_doiTuong = 1;
        break;
    }

    //kiểm tra xem user có chọn khu vực hay đối tượng chưa?
    if (khuVuc == "null" || doiTuong == "null"){ 
        document.getElementById("result1").style.display = "block"; 
        document.getElementById("result1").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result1").innerHTML = "Vui lòng chọn khu vực hoặc đối tượng!" //Nhắc user nhập cho đủ
    
        //kiểm tra xem user có nhập đủ điểm chưa?
    } else if(diem_1.length == 0 ||  diem_2.length == 0 ||  diem_3.length == 0){
        document.getElementById("result1").style.display = "block"; 
        document.getElementById("result1").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result1").innerHTML = "Vui lòng nhập vào đủ điểm thi 3 môn!" //Nhắc user nhập cho đủ
    
        //bắt đầu xét có điểm liệt ko?
    } else if(diem_1 == 0 || diem_2 == 0 || diem_3 == 0 ){
        document.getElementById("result1").style.display = "block";  //hiện kết quả
        document.getElementById("result1").className = "alert alert-danger mt-3"; //đổi lại màu thông báo sang kiểu danger thông báo rớt
        document.getElementById("result1").innerHTML = "Bạn đã rớt do có điểm 1 môn bằng 0 (điểm liệt)"
    
        //xét xem có đủ điểm không?
    } else if(Tinh_diem(diem_1, diem_2, diem_3, diem_khuVuc, diem_doiTuong) >= diemChuan){
        document.getElementById("result1").style.display = "block";  //hiện kết quả
        document.getElementById("result1").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result1").innerHTML = "Chúc mừng! Bạn đã đậu với tổng số điểm là: "+Tinh_diem(diem_1, diem_2, diem_3, diem_khuVuc, diem_doiTuong)
    } else{
        document.getElementById("result1").style.display = "block";  //hiện kết quả
        document.getElementById("result1").className = "alert alert-danger mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result1").innerHTML = "Bạn đã rớt với tổng số điểm là: "+Tinh_diem(diem_1, diem_2, diem_3, diem_khuVuc, diem_doiTuong)

    }
}
document.getElementById("btnCalc1").onclick = Xet_dauRot; 

        /**BÀI 2 - TÍNH TIỀN ĐIỆN*/
function tinh_tienDien(){
    //lấy giá trị các số nhập vào
    var tenKH = document.getElementById("tenKhachHang").value ; 
    var soDien = document.getElementById("soDien").value ; 
    var thanhTien = 0;

    //Khai báo giá điện theo bậc thang
    const giaBac1 = 500; //50kw đầu
    const giaBac2 = 650; //50kw tiếp theo (Tiêu thụ 50- 100kw)
    const giaBac3 = 850; //100kw tiếp theo (Tiêu thụ 100- 200kw)
    const giaBac4 = 1100; //150kw tiếp theo (Tiêu thụ 200- 350kw)
    const giaBac5 = 1300; //Các kw về sau (trên 350kw)

    //kiểm tra xem user có nhập tên hay số điện chưa?
    if (tenKH.length == 0 || soDien.length == 0 ){ 
        document.getElementById("result2").style.display = "block"; 
        document.getElementById("result2").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result2").innerHTML = "Vui lòng nhập vào tên Khách hàng và chỉ số tiêu thụ!" //Nhắc user nhập cho đủ
    } else {
        if (soDien <= 50) {
            thanhTien = soDien * giaBac1
        } else if (soDien > 50 && soDien <= 100) {
            thanhTien = 50 * giaBac1 + (soDien - 50) * giaBac2
        } else if (soDien > 100 && soDien <= 200) {
            thanhTien = 50 * giaBac1 + 50 * giaBac2 + (soDien - 100) * giaBac3
        } else if (soDien > 200 && soDien <= 350) {
            thanhTien = 50 * giaBac1 + 50 * giaBac2 + 100 * giaBac3 + (soDien - 200) * giaBac4
        } else {
            thanhTien = 50 * giaBac1 + 50 * giaBac2 + 100 * giaBac3 + 150 * giaBac4 + (soDien - 350) * giaBac5
        }
        document.getElementById("result2").style.display = "block";  //hiện kết quả
        document.getElementById("result2").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result2").innerHTML = "Tiền điện tiêu thụ của Khách hàng : " + tenKH + " là " + NumberFormat.format(thanhTien)
    }
} // đóng hàm

document.getElementById("btnCalc2").onclick = tinh_tienDien; 

    /**BÀI 3 - Tính thuế thu nhập cá nhân*/

function tinhThue(){
    //lấy giá trị các số nhập vào
    var ten_nopThue = document.getElementById("ten_nopThue").value ; 
    var thuNhap = document.getElementById("thuNhap").value ; 
    var soNguoi_phuThuoc = document.getElementById("soNguoi_phuThuoc").value ; 
    var tongThue = 0;

    //Khai báo thuế suất theo bậc thang
    const thue_Bac1 = 5; //Thu nhập bằng hoặc dưới 60tr
    const thue_Bac2 = 10; //Thu nhập trên 60 - 120tr
    const thue_Bac3 = 15; //Thu nhập trên 120 - 210tr
    const thue_Bac4 = 20; //Thu nhập trên 210 - 384tr
    const thue_Bac5 = 25; //Thu nhập trên 384 - 624tr
    const thue_Bac6 = 30; //Thu nhập trên 624 - 960tr
    const thue_Bac7 = 35; //Thu nhập trên 960tr

    //kiểm tra xem user có nhập đủ các trường chưa?
    if (ten_nopThue.length == 0){ 
        document.getElementById("result3").style.display = "block"; 
        document.getElementById("result3").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result3").innerHTML = "Vui lòng nhập vào tên người nộp thuế!" //Nhắc user nhập cho đủ
    } else if(thuNhap.length == 0){ 
        document.getElementById("result3").style.display = "block"; 
        document.getElementById("result3").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result3").innerHTML = "Vui lòng nhập vào thu nhập!" //Nhắc user nhập cho đủ
    } else {
        if (thuNhap <= 60) {
            tongThue = (thuNhap - 4 - soNguoi_phuThuoc * 1.6) * thue_Bac1 /100
        } else if (thuNhap > 60 && thuNhap <= 120) {
            tongThue = (thuNhap - 4 - soNguoi_phuThuoc * 1.6) * thue_Bac2 /100
        } else if (thuNhap > 120 && thuNhap <= 210) {
            tongThue = (thuNhap - 4 - soNguoi_phuThuoc * 1.6) * thue_Bac3 /100
        } else if (thuNhap > 210 && thuNhap <= 384) {
            tongThue = (thuNhap - 4 - soNguoi_phuThuoc * 1.6) * thue_Bac4 /100
        } else if (thuNhap > 384 && thuNhap <= 624) {
            tongThue = (thuNhap - 4 - soNguoi_phuThuoc * 1.6) * thue_Bac5 /100
        } else if (thuNhap > 624 && thuNhap <= 960) {
            tongThue = (thuNhap - 4 - soNguoi_phuThuoc * 1.6) * thue_Bac6 /100
        } else {
            tongThue = (thuNhap - 4 - soNguoi_phuThuoc * 1.6) * thue_Bac7 /100
        }
        document.getElementById("result3").style.display = "block";  //hiện kết quả
        document.getElementById("result3").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result3").innerHTML = "Số tiền thuế thu nhập cá nhân của " + ten_nopThue + " là " + NumberFormat.format(tongThue*1000000)
    }
} // đóng hàm

document.getElementById("btnCalc3").onclick = tinhThue; 

/**BÀI 4 - Tính tiền cáp*/


//làm hàm disabled-enable nút số kết nối khi chọn loại khách
function Tim_loaiKhach(src) { //tham khảo onchange cho kiểu radio check:  https://codepen.io/ramtob/pen/qZWzeE
    var loaikhach = src.value;
    switch (loaikhach){
        case "canhan":
            document.getElementById("so_KetNoi").disabled = true;
            document.getElementById("so_KetNoi").value = 1; //reset về 1 tránh trường hợp user nhập số vào trước rồi check radio phía trên, lúc đó radio disable không sửa giá trị được nữa
            break;
        case "doanhnghiep":
            document.getElementById("so_KetNoi").disabled = false;
            document.getElementById("so_KetNoi").placeholder = "";
            break;
    }
}

function tinhTienCap() { 

    var khCaNhan = document.getElementById("khCaNhan").checked;
    var KHdoanhNghiep = document.getElementById("KHdoanhNghiep").checked;

    var loaiKH = "";
    if (khCaNhan) {
        loaiKH = "canhan";
    } else if (KHdoanhNghiep) {
        loaiKH = "doanhnghiep";
    }

    //lấy giá trị các số nhập vào
    var maKH = document.getElementById("maKH").value ; 
    var so_KetNoi = document.getElementById("so_KetNoi").value ; 
    var soKenh_caoCap = document.getElementById("soKenh_caoCap").value ; 
    var tiencap = 0;

    //Các loại phí nhà dân:
    const PHI_HOADON_ND = 4.5;
    const PHI_DICHVU_ND = 20.5;
    const KENH_CAOCAP_ND = 7.5;
    //Các loại phí doanh nghiệp:
    const PHI_HOADON_DN = 15;
    const PHI_DICHVU_DN_10 = 75;
    const PHI_DICHVU_DN_OVER10 = 5; //75$/10 kết nối đầu, từ kn 11 trở đi 5$/kn
    const KENH_CAOCAP_DN = 50;

    
    if (loaiKH.length == 0) { //kiểm tra xem user có chọn loại kh chưa?
        document.getElementById("result4").style.display = "block";
        document.getElementById("result4").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result4").innerHTML = "Vui lòng chọn loại Khách hàng!" //Nhắc user nhập cho đủ
    } else {
        switch (loaiKH) {
            case "canhan":
                tiencap = PHI_HOADON_ND + PHI_DICHVU_ND + KENH_CAOCAP_ND * soKenh_caoCap;
                break;
            case "doanhnghiep":
                if (so_KetNoi <= 10) {
                    tiencap = PHI_HOADON_DN + PHI_DICHVU_DN_10 + KENH_CAOCAP_DN * soKenh_caoCap;
                } else {
                    tiencap = PHI_HOADON_DN + PHI_DICHVU_DN_10 + PHI_DICHVU_DN_OVER10 * (so_KetNoi - 10) + KENH_CAOCAP_DN * soKenh_caoCap;
                }
                break;
        }
        document.getElementById("result4").style.display = "block";  //hiện kết quả
        document.getElementById("result4").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result4").innerHTML = "Tổng tiền cáp của thuê bao " + maKH + " là: " + new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(tiencap)
    }
    console.log(tiencap)
}

document.getElementById("btnCalc4").onclick = tinhTienCap; 

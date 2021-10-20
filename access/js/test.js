//ktra xem user có nhập đúng số có 3 chữ số chưa:
if (document.getElementById("NumberLesson7").value.length != 3){
    document.getElementById("result7").style.display = "block"; 
    document.getElementById("result7").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
    document.getElementById("result7").innerHTML = "Vui lòng nhập vào số có 3 chữ số!" //Nhắc user chọn lại cho đúng    
} else{
    var cachdoc = "";
if (ten_digit == "một"){ //Xem hàng chục nó phải số 1 không vì số 1 hàng chục sẽ đọc là mười, không dùng từ 'một'
    ten_digit = "mười"; // nếu đúng đổi 'một' thành 'mười'

    if (hundreds_digit == "không" && unit_digit != "không") {  //xử lý khi nhập số 0 hàng trăm: 01*
        cachdoc = "Số "+ numInput+ " đọc là : '" + ten_digit + " " + unit_digit + "'."
    } else 
    if(hundreds_digit != "không" && unit_digit == "không"){  //xử lý khi nhập số 0 hàng đơn vị: *10
        cachdoc = "Số "+ numInput + " đọc là : '"+ hundreds_digit + " trăm " + ten_digit+ "'."
    } else
    if(hundreds_digit == "không" && unit_digit == "không"){  //xử lý khi nhập số dạng 010
        cachdoc = "Số "+ numInput+ " đọc là : '" + ten_digit + "'."
    }else { //Không có số 0 đọc bình thường
        cachdoc = "Số "+ numInput+ " đọc là : '" + hundreds_digit + " trăm " + ten_digit + " "+ unit_digit + "'."
    }
} else{  //Nếu ko phải dạng *1* thì xét tiếp cách đọc khi các chữ số bằng không

    if (unit_digit == "một"){
        unit_digit == "mốt";
        if (hundreds_digit == "không" && ten_digit != "không" && unit_digit != "không") {  //xử lý khi nhập số 0 hàng trăm
            cachdoc = "Số "+ numInput+ " đọc là : '"+ten_digit+" mươi "+unit_digit+"'."
        } else 
        if(hundreds_digit != "không" && ten_digit == "không" && unit_digit != "không"){  //xử lý khi nhập số 0 hàng chục
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm lẻ "+unit_digit+"'."
        } else 
        if(hundreds_digit != "không" && ten_digit != "không" && unit_digit == "không"){  //xử lý khi nhập số 0 hàng đơn vị
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm "+ten_digit+" mươi'."
        } else
        if(hundreds_digit == "không" && ten_digit == "không" && unit_digit != "không"){  //xử lý khi nhập số dạng 00*
            cachdoc = "Số "+ numInput+ " đọc là : '"+unit_digit+"'."
        } else
        if(hundreds_digit != "không" && ten_digit == "không" && unit_digit == "không"){  //xử lý khi nhập số dạng *00
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm "+"'."
        } else
        if(hundreds_digit == "không" && ten_digit != "không" && unit_digit == "không"){  //xử lý khi nhập số dạng 0*0
            cachdoc = "Số "+ numInput+ " đọc là : '"+ten_digit+" mươi'."
        }else { //Không có số 0 đọc bình thường
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm "+ten_digit+" mươi "+ unit_digit+"'."
        }
        
    } else if(unit_digit == "năm"){
        unit_digit == "lăm";
        if (hundreds_digit == "không" && ten_digit != "không" && unit_digit != "không") {  //xử lý khi nhập số 0 hàng trăm
            cachdoc = "Số "+ numInput+ " đọc là : '"+ten_digit+" mươi "+unit_digit+"'."
        } else 
        if(hundreds_digit != "không" && ten_digit == "không" && unit_digit != "không"){  //xử lý khi nhập số 0 hàng chục
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm lẻ "+unit_digit+"'."
        } else 
        if(hundreds_digit != "không" && ten_digit != "không" && unit_digit == "không"){  //xử lý khi nhập số 0 hàng đơn vị
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm "+ten_digit+" mươi'."
        } else
        if(hundreds_digit == "không" && ten_digit == "không" && unit_digit != "không"){  //xử lý khi nhập số dạng 00*
            cachdoc = "Số "+ numInput+ " đọc là : '"+unit_digit+"'."
        } else
        if(hundreds_digit != "không" && ten_digit == "không" && unit_digit == "không"){  //xử lý khi nhập số dạng *00
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm "+"'."
        } else
        if(hundreds_digit == "không" && ten_digit != "không" && unit_digit == "không"){  //xử lý khi nhập số dạng 0*0
            cachdoc = "Số "+ numInput+ " đọc là : '"+ten_digit+" mươi'."
        }else { //Không có số 0 đọc bình thường
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm "+ten_digit+" mươi "+ unit_digit+"'."
        }

    } else{
        if (hundreds_digit == "không" && ten_digit != "không" && unit_digit != "không") {  //xử lý khi nhập số 0 hàng trăm
            cachdoc = "Số "+ numInput+ " đọc là : '"+ten_digit+" mươi "+unit_digit+"'."
        } else 
        if(hundreds_digit != "không" && ten_digit == "không" && unit_digit != "không"){  //xử lý khi nhập số 0 hàng chục
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm lẻ "+unit_digit+"'."
        } else 
        if(hundreds_digit != "không" && ten_digit != "không" && unit_digit == "không"){  //xử lý khi nhập số 0 hàng đơn vị
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm "+ten_digit+" mươi'."
        } else
        if(hundreds_digit == "không" && ten_digit == "không" && unit_digit != "không"){  //xử lý khi nhập số dạng 00*
            cachdoc = "Số "+ numInput+ " đọc là : '"+unit_digit+"'."
        } else
        if(hundreds_digit != "không" && ten_digit == "không" && unit_digit == "không"){  //xử lý khi nhập số dạng *00
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm "+"'."
        } else
        if(hundreds_digit == "không" && ten_digit != "không" && unit_digit == "không"){  //xử lý khi nhập số dạng 0*0
            cachdoc = "Số "+ numInput+ " đọc là : '"+ten_digit+" mươi'."
        }else { //Không có số 0 đọc bình thường
            cachdoc = "Số "+ numInput+ " đọc là : '"+hundreds_digit +" trăm "+ten_digit+" mươi "+ unit_digit+"'."
        }
    }
    
    
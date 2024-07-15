// code JS
function songuyento(n){
    //WRITE CODE HERE 
    for(var i=2;i<Math.sqrt(n);i++){
        if(n % i== 0) { // kiểm tra chia hết hay ko
            alert(`${n} không phải số nguyen tố`);
            // nếu ở đây mà đã xong việc, muốn dừng hàm
            return ;// return sẽ làm cho hàm hoàn thành và thoát ra ngoài
        }
    }

    alert(`${n} là số nguyên tố`);
    return ;

}

function kiemtraSNT(n){
    for(var i=2;i<Math.sqrt(n);i++){
        if(n % i== 0) { // kiểm tra chia hết hay ko
            return false; //false khi ko phair SNT
        }
    }
    return true;
}
function tinhchuvi(a,b,c){
    return a +b +c;
}

// viết các function để xử lý array -- input : array
// 1. viết function tìm số lớn nhất của 1 mảng
// 2. viết fucntion tính trung bình cộng của 1 mảng
// 3. viết function tìm số dương nhỏ nhất trong 1 mảng số
// 4. viết function timf trung bình cộng các số dương trong mảng

function array_max(arr){ //phải nhớ arr là mảng (quy ước đặt tên tham số)

}
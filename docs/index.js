// Tạo một Promise
const promise = new Promise((resolve, reject) => {
    // Thực hiện yêu cầu HTTP
    fetch('https://example.com/').then(
        (response) => {
            // Giải quyết Promise với kết quả của yêu cầu
            resolve(response);
        },
        (error) => {
            // Từ chối Promise với lỗi
            reject(error);
        }
    );
});

// Xử lý kết quả thành công của Promise
promise.then((result) => {
    console.log(result); // "Kết quả thành công"
});

// Xử lý lỗi của Promise
promise.catch((error) => {
    console.log(error); // null
});

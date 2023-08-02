const text = "javascript";

const text2 = ["bmw", "porches"];

function render(...args) {
    console.log(args);
    const cat = args.reduce((acc, curr) => acc.concat(curr), []);
    console.log(cat.join(""));
}

render(...text);

// khi giai ra se truyen vao 2 doi so bwm va porches thi neu dung destructor thi phai nhan vao hai tham so chu ok
// con neu dung ...rest khong thi se tao ra mot mang va nhan vao 2 doi so kia thuoc mot mang lun
// khi spread khi giai String se tach nhau bang dau phay

// var lengthh = 100;
// function f1() {
//     console.log(arguments[0]())
//     console.log(f2())
// }
// function f2(){
//     console.log(this.lengthh)
// }
// // f1(f2,2,2,3)
// f2()

// var length = 100;
// function f1() {
//     console.log(this.length)
// }
// var obj = {
//     length: 10,
//     f2: function (f1) {
//         f1();
//         arguments[0]();
//     }
// }
// // obj.f2(f1,1,2)
// f1()


// var a = 10;
// function test() {
//     console.log(a);
//     a=100;
//     console.log(this.a);
//     // var a;
//     console.log(a);
// }
// test();


var a = 10;
function f1(){
    var b=2*a;
    var a=20;
    var c=a+1;
    console.log(b);
    console.log(c);
}
f1()
let img = document.querySelector('img');

img.addEventListener('load', function () {
    // woo yey image loaded
    console.log('Image load')
});

img.addEventListener('error', function () {
    // argh everything's broken
    console.log("Error");
});

log(1)

function x (){
    log(2);
}

log(3)

(function y (){
    log(4);
})()

setTimeout(log(5), 10000)
setTimeout(log(5.1), 5000)
setTimeout(log(5.2), 0)



log(6)

ajax(log(7), 2000)

log(8)

promise(log(9), 12000)

log(10)

1
3
4
6
8
10
5.2
7
5.1
5
9
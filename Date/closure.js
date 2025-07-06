// function x(){
//     var i = 10;
//     console.log('******************');
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
//     console.log('******************');
// }
// x();
function x(){
    // for(var i = 1; i <= 5; i++){
    //     setTimeout(function(){
    //         console.log(i);  
    //     }, i * 1000);
    // }
    for(var i = 1; i <= 5; i++){
        function close(a){
            setTimeout(function() {
                console.log(a);
            }, a * 1000);
        }
        close(i);
    }
}
x();
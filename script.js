
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function mousefollower(){
    window.addEventListener("mousemove",function(dets){
        this.document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;

    })
}
mousefollower();

var elem= document.querySelectorAll(".container1");



elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[1].style.opacity=1;
    });

    val.addEventListener("mouseleave",function(){
        val.childNodes[1].style.opacity=0;
    })

    val.addEventListener("mousemove",function(dets){
        val.childNodes[1].style.left=dets.clientX+"px";
    });
})
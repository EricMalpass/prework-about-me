<script type="text/javascript">
    
document.getElementById("growBtn").addEventListener("click", function(){
    document.getElementById("box").style.height = "250px";
});
document.getElementById("color").addEventListener("click", function(){
    document.getElementById("box").style.background-color = "blue";
});
document.getElementById("fade").addEventListener("click", function(){
    document.getElementById("box").style.background-color = "orange";
});
document.getElementById("resetbtn").addEventListener("click", function(){
    document.getElementById("box").style.hieght = "150px";
});

</script>
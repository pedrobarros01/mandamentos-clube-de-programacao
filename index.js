const origemBiblia = document.getElementById("biblia-enable");
const destinoBiblia = document.getElementById("biblia-disable");

function esconderBiblia(){
    origemBiblia.style.display = "none";
    destinoBiblia.style.display  ="block";
}
function descobrirBiblia(){
    origemBiblia.style.display = "block";
    destinoBiblia.style.display  ="none";
}
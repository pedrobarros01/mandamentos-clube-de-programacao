const origemBiblia = document.getElementById("biblia-enable");
const destinoBiblia = document.getElementById("biblia-disable");

function esconderBiblia(){
    origemBiblia.classList.remove("block");
    origemBiblia.classList.add("hidden");

    destinoBiblia.classList.remove("hidden");
    destinoBiblia.classList.add("block");
}
function descobrirBiblia(){
    origemBiblia.classList.remove("hidden");
    origemBiblia.classList.add("block");

    destinoBiblia.classList.remove("block");
    destinoBiblia.classList.add("hidden");
}
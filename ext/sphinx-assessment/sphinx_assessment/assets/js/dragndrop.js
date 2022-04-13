function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log("drag source: " + ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var elt = document.getElementById(data);
  var target = ev.target
  while (target.tagName != 'DIV') {
      target = target.parentNode;
  }    
  target.appendChild(elt);
}

function checkDnd(ev) {
    var dnd = ev.target.parentNode;
    var items = dnd.querySelectorAll(".dndsourceitem");
    for (const item of items) {
        if ((item.parentNode.dataset != null) && (item.dataset.value == item.parentNode.dataset.value)) {
            item.style.backgroundColor = "yellowGreen";
        } else {
            item.style.backgroundColor = "salmon";
        }
    }
}

function resetDnd(ev) {
    var dnd = ev.target.parentNode;
    var items = dnd.querySelectorAll(".dndsourceitem");
    var source = dnd.querySelector(".dndsourcelist");
    for (const item of items) {
        if (item.parentNode != source) {
            source.appendChild(item);
        }
        item.style.backgroundColor = "";
    }    
}

function find_dragndrops() {
    var sources = document.getElementsByClassName("dndsourceitem");
    for (const item of sources) {
        item.ondragstart = drag;
    }    
    var targets = document.getElementsByClassName("dndtargetitem");
    for (const item of targets) {    
        item.ondrop = drop;
        item.ondragover = allowDrop;        
    }
    var checkbuttons = document.getElementsByClassName("dndcheckbutton");
    for (const button of checkbuttons) {
        button.onclick = checkDnd;
    }
    var resetbuttons = document.getElementsByClassName("dndresetbutton");
    for (const button of resetbuttons) {
        button.onclick = resetDnd;
    }    
}



document.addEventListener('DOMContentLoaded', function(event) {
    find_dragndrops();
    console.log("init dragndrop")
})
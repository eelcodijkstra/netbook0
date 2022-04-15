(function() {
  function mcHandler(event) {
    console.log('target: ' + event.target.id);
    const myform = event.target;
    const correct = myform.dataset.correct;
    const feedbackline = myform.getElementsByClassName('feedback')[0];
    if (myform.answer.value == correct) {
      feedbackline.innerHTML = '<i class="fas fa-check"> </i>';
    } else {
      feedbackline.innerHTML = '<i class="fas fa-times"> </i>';
    }
    const feedbacklist = myform.getElementsByTagName('ul')[0];
    feedbacklist.hidden = false;
    const feedbacks = feedbacklist.getElementsByTagName('li');
    for (let i = 0; i < feedbacks.length; i++) {
      if (feedbacks[i].dataset.value == myform.answer.value) {
        feedbacks[i].hidden = false;
        if (myform.answer.value == correct) {
          feedbacklist.style.backgroundColor = 'yellowgreen';
        } else {
          feedbacklist.style.backgroundColor = 'salmon';
        }
      } else {
        feedbacks[i].hidden = true;
      }
    }
    return false; // no further action
  }

  function mcResetHandler(event) {
    console.log('target: ' + event.target.id);
    console.log('form: ' + event.target.form.id);
    const myform = event.target.form;
    const feedbacklist = myform.getElementsByTagName('ul')[0];
    feedbacklist.hidden = true;
    const feedbacks = feedbacklist.getElementsByTagName('li');
    for (let i = 0; i < feedbacks.length; i++) {
      feedbacks[i].hidden = true;
    }
    const elements = myform.elements;
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].nodeName == 'INPUT') {
        elements[i].checked = false;
      }
    }
    return false; // no further action
  }

  function findMchoices() {
    const forms = document.getElementsByClassName('mchoice');
    for (let i = 0; i < forms.length; i++) {
      forms[i].onsubmit = mcHandler;
      const resetButton = forms[i].querySelector('button[type=reset]');
      resetButton.onclick = mcResetHandler;
    }
  }

  /*
  ** fillintheblank
  */

  function fitbcheck(evt, item) {
    console.log('check fitb');
    const answers = item.getElementsByClassName('fitbanswer');
    for (const answer of answers) {
      const type = answer.dataset.type;
      const answer1 = answer.dataset.answer;
      const answer2 = answer.dataset.answer2;
      const input = answer.value;
      console.log(
          'Check: ' + type + ' - ' + answer1 + ' - ' + answer2 + ' > ' + input
      );
      let ok = false;
      if (type == 'text') {
        ok = answer.value == answer.dataset.answer;
      } else if (type == 'range') {
        const num = Number(answer.value);
        const min = Number(answer.dataset.answer);
        const max = Number(answer.dataset.answer2);
        ok = (min <= num) && (num <= max);
      } else if (type == 'regexp') {
        const regexp = new RegExp(answer.dataset.answer);
        ok = regexp.test(answer.value);
      }
      if (ok) {
        answer.style.backgroundColor = 'lightGreen';
      } else {
        answer.style.backgroundColor = 'salmon';
      }
    }
  }

  function findFillintheblanks() {
    //    const fitbs = document.getElementsByClassName('fillintheblank');
    const fitbs = document.querySelectorAll('.fillintheblank');
    for (const item of fitbs) {
      const checkbutton = item.querySelector('.fitbcheckbutton');
      checkbutton.onclick = function(evt) {
        fitbcheck(evt, item);
      };
    }
  }
  /*
  ** Dragndrop
  */

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
    console.log('drag source: ' + ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    const elt = document.getElementById(data);
    let target = ev.target;
    while (target.tagName != 'DIV') {
      target = target.parentNode;
    }
    target.appendChild(elt);
  }

  function checkDnd(ev) {
    const dnd = ev.target.parentNode;
    const items = dnd.querySelectorAll('.dndsourceitem');
    for (const item of items) {
      if (
        (item.parentNode.dataset != null) &&
        (item.dataset.value == item.parentNode.dataset.value)
      ) {
        item.style.backgroundColor = 'yellowGreen';
      } else {
        item.style.backgroundColor = 'salmon';
      }
    }
  }

  function resetDnd(ev) {
    const dnd = ev.target.parentNode;
    const items = dnd.querySelectorAll('.dndsourceitem');
    const source = dnd.querySelector('.dndsourcelist');
    for (const item of items) {
      if (item.parentNode != source) {
        source.appendChild(item);
      }
      item.style.backgroundColor = '';
    }
  }

  function findDragndrops() {
    const sources = document.getElementsByClassName('dndsourceitem');
    for (const item of sources) {
      item.ondragstart = drag;
    }
    const targets = document.getElementsByClassName('dndtargetitem');
    for (const item of targets) {
      item.ondrop = drop;
      item.ondragover = allowDrop;
    }
    const checkbuttons = document.getElementsByClassName('dndcheckbutton');
    for (const button of checkbuttons) {
      button.onclick = checkDnd;
    }
    const resetbuttons = document.getElementsByClassName('dndresetbutton');
    for (const button of resetbuttons) {
      button.onclick = resetDnd;
    }
  }

  /*
  ** initialization
  */
  document.addEventListener('DOMContentLoaded', function(event) {
    findFillintheblanks();
    findMchoices();
    findDragndrops();
  });
})();

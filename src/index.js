// console.log(`I'm a silly entry point`);
import style from './main.css';
import App from './App';
// const arr = [1, 2, 3];
// const iAmJavascriptES6 = () => console.log(...arr);
// window.iAmJavascriptES6 = iAmJavascriptES6
// console.log(App);
// $("body").load(() => {
//     printData1("todo");
// });
// const xhr = new XMLHttpRequest();

const constants = require('./constants.js');
console.log(constants.objects.maxlen);
const engwords = require('an-array-of-english-words');
$(document).ready(() => {

  // console.log(dictionary.dict);
// Insert task into db.json using fetch
  $('#insertId').click(() => {
    const date = new Date();

    const timestamp = date.getTime();

    // let input =
        let x =$('#taskvalue').val();
    // input = input +";";
    // let inputvalues = input.split(';');
    // inputvalues.forEach((x) => {
      if (!allLetter(x)) {
        return;
      }
      let promise = fetch('http://localhost:3000/tasks', {
        method :'get',
        headers : {
          Accept : 'application/json',
          'Content-type': 'application/json',
        },
      })
          .then((data) => {
            return data.json()
          })
          .then((data)=> {
            let flag = true;
            data.forEach((item) => {
              if((item.task).toUpperCase() === x.toUpperCase()) {
                alert("Sorry... Task already exists in "+item.status);
                flag = false;
              }
            });
            return flag;
          }).then((flag) => {

            if( flag ) {
              fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-type': 'application/json',
                },
                body: JSON.stringify({ task: x, timestamp:timestamp, status: 'todo', important :'no' }),
              }).then(() => {
                window.printData1('todo');
              }).catch((error) => {
                console.log(error);
              });
            }
          })

    });




});

window.allLetter = (inputtxt) => {

  console.log(engwords);
  const letters = /^[A-Za-z ]+$/;
  if (!inputtxt.match(letters)) {

    alert('Please Do enter valid words !!');
    return false;
  }
  let inputwords = inputtxt.split(' ');
  console.log(inputwords);
  for (let i =0; i<inputwords.length ; i++) {
    let flag = false;
    for (let j =0;j<engwords.length ; j++) {
      if(inputwords[i]===engwords[j]) {
        flag = true;
      }
    }
    if(!flag) {

      alert('Please Do enter valid words !!');
      return false;
    }
  }


  // let words = inputtxt.split(' ');
  // let flag= true;
  // words.forEach((word) => {
  //   let flag = dict.find(function (word) {
  //     return word == inputtxt;
  //   });
  //   if(!flag) {
  //     return false;
  //   }
  // })

  return true;
};



window.create_Text_Element = (id, task,imp,spanimg) => {
  const div = $('<div>');
  div.addClass('altcolor');
  const spana = $('<span>');
  spana.text(id);
  spana.addClass('a');
  $(div).append(spana);
  const div1 = $('<div>');
  div1.addClass('textBox');
  const spanc = $('<span>');



  spanc.addClass('c');
  // spanc.attr('id','taskid');

  spanc.text(task);
  // div.append(spanimg);
  div1.append(spanc);

  // const spanhover = $("<span>");
  // spanhover.text("double click the task to mark Important");
  // spanhover.addClass("spanhover");
  // spanhover.attr("id","spanhoverid");
  // div1.append(spanhover);
  // const img =$('<img>');

  //
  // let img = document.createElement("IMG");
  // img.setAttribute("src", "completed.jpg");
  // img.setAttribute("width", "20");
  // img.setAttribute("height", "20");

  // img.src ='completed.jpg';
  // div1.append(img);
  div.append(div1);
  const spand = $('<span>');
  spand.addClass('d');

  const btn = $('<button>');
  btn.addClass('closebtn');
  btn.text('X');
  spand.append(btn);
  div.append(spand);
  div.append('<br>');
  return div;
};
window.create_checkbox1 = (flag, div) => {
  const input = $('<input>');
  input.addClass('checked');
  input.attr('type', 'checkbox');
  input.attr('checked', 'true');
  input.attr('disabled', 'true');
  const spanb = $('<span>');
  spanb.addClass('b');
  spanb.text(flag);
  div.append(input);
  div.append(spanb);
  return div;
};
window.create_checkbox2 = (flag, div) => {
  const input = $('<input>');
  if (flag === 'inprogress') {
    input.addClass('update_task2');
  }
  if (flag === 'Todo') {
    input.addClass('update_task1');
  }
  if (flag === 'Done' && flag!=="Todo") {
    input.addClass('update_task3');
  }
  input.attr('type', 'checkbox');
  const spanb = $('<span>');
  spanb.addClass('b');
  spanb.text(flag);
  div.append(input);
  div.append(spanb);
  return div;
};
// Printing data based on the selected flag say todo or inprogress or done
window.printData1 = (flag) => {
  fetch('http://localhost:3000/tasks').then(data => (data.json())).then((tasks) => {
    // let data = "<div class ='flex-container'>";
    const data = $('<div>');
    // data.addClass('flex-container');
    data.attr('class', 'flex-container');
    data.attr('id','flex-container-id');

    if (flag === 'todo') {
      $('#title').html(flag);
      $('#description').html('<i>......  Here you add the taskname that you need to complete .....</i>');
      document.getElementById('todo_active').style.backgroundColor = '#C0C0C0';
      document.getElementById('inprogress_active').style.backgroundColor = 'black';
      document.getElementById('done_active').style.backgroundColor = 'black';
    }
    if (flag === 'inprogress') {
      $('#title').html(flag);
      $('#description').html('<i>......the following tasks indicates the  tasks in progress .....</i>');
      document.getElementById('inprogress_active').style.backgroundColor = '#C0C0C0';
      document.getElementById('todo_active').style.backgroundColor = 'black';
      document.getElementById('done_active').style.backgroundColor = 'black';
    }
    if (flag === 'done') {
      $('#title').html(flag);
      $('#description').html('<i>......these are the tasks that were accomplished .....</i>');
      document.getElementById('done_active').style.backgroundColor = '#C0C0C0';
      document.getElementById('inprogress_active').style.backgroundColor = 'black';
      document.getElementById('todo_active').style.backgroundColor = 'black';
    }

    // const spanimg = $('<span>');
    // spanimg.append('<img src= constants.object.imagepath width="20" height="20">');
    for (let i = 0; i < tasks.length; i++) {
      // creating task by DOM
      if (tasks[i].status === flag) {
        let div = create_Text_Element(tasks[i].id, tasks[i].task,tasks[i].important);
        (data).append(div);
        let flag1 = true;
        let flag2 = true;
        if(flag === 'todo') {
          flag1 = false;
        }
        if(flag === 'inprogress' ){
          flag2 = false;
        }
        // data.append("<br><br>");
        // data += `<div class ="altcolor" ><span class="a">${tasks[i].id}</span><div class="textBox"><span class="c">`;
        // data += `${tasks[i].task}</span></div><span class="d">`;
        // data += '<button style="color:black ;" class="closebtn" type ="button" > X </button></span><br>';
        if(flag === 'todo') {

          div = window.create_checkbox2('inprogress', div);
        }

        if(flag === 'inprogress') {

          div = window.create_checkbox2('Done', div);
        }
        if(flag === 'done') {

          div = window.create_checkbox2('inprogress', div);
        }

        // if (flag === 'todo') {
        //
        //   flag1 = false;
        //   // flag1 = false;
        //   // div = window.create_checkbox1('Todo', div);
        // } else {
        //   div = window.create_checkbox2('Todo', div);
        // }
        // if (flag === 'inprogress') {
        //
        //   // div = window.create_checkbox1('inprogress', div);
        // } else {
        //   div = window.create_checkbox2('inprogress', div);
        // }
        // if (flag === 'done' && flag1) {
        //   // div = window.create_checkbox1('Done', div);
        // } else if ( flag1 ){
        //   div = window.create_checkbox2('Done', div);
        // }
        data.append(div);
      }
    }

    // $(".c").click(()=> {
    //   console.log("doublie click");
    // });

    // $(".c").on('click', function(event){
    //   event.stopPropagation();
    //   event.stopImmediatePropagation();
    //   //(... rest of your JS code)
    // });
    //
    // let all = $(".c").map(function() {
    //   return this.innerHTML;
    // }).get();
    // console.log(all);
    // $('#about').click(()=> {
    //   alert("about todo app")
    // });

    $('#printing').html(data);

    const complete = document.getElementsByClassName('c');

    for (let i = 0; i < complete.length; i++) {
      complete[i].addEventListener('click', function () {
        console.log(this);

        const row = this.parentNode.parentNode;
        const node = row.childNodes[0].innerHTML;
        console.log(node);
        let status ='';
        let imp ='';
        fetch('http://localhost:3000/tasks/'+node).then(data => (data.json())).then((item) => {
          console.log(item);
          if(item.important === 'no') {
            imp ='yes';
          } else {
            imp = 'no';
          }
          status = item.status;

          fetch(`http://localhost:3000/tasks/`+node, {
            method: 'PATCH',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ important:imp }),
          }).then(() => {
            window.printData1(status);
          }).catch(() => {
            console.log('Insert Failed with status code');
          });
        });

        // if(node.style.display === "none") {
        //   node.style.display ="block";
        // } else {
        //   node.style.display ="none";
        // }
      })
    }


    $('.update_task1').click(function () {
      const parent_node = this.parentNode;
      const class_array = parent_node.getElementsByClassName('a');
      const key = class_array[0].innerHTML;

      const stat = 'todo';
      fetch(`http://localhost:3000/tasks/${key}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: stat }),
      }).then(() => {
        window.printData1(stat);
      }).catch(() => {
        console.log('Insert Failed with status code');
      });
    });
    $('.update_task2').click(function () {
      const parent_node = this.parentNode;
      const class_array = parent_node.getElementsByClassName('a');
      const key = class_array[0].innerHTML;

      const stat = 'inprogress';
      fetch(`http://localhost:3000/tasks/${key}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: stat }),
      }).then(() => {
        window.printData1(stat);
      }).catch(() => {
        console.log('Insert Failed with status code');
      });
    });

    $('.update_task3').click(function () {
      const parent_node = this.parentNode;
      const class_array = parent_node.getElementsByClassName('a');
      const key = class_array[0].innerHTML;

      const stat = 'done';
      fetch(`http://localhost:3000/tasks/${key}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: stat }),
      }).then(() => {
        window.printData1(stat);
      }).catch(() => {
        console.log('Insert Failed with status code');
      });
    });

    // $('#flex-container-id').on("mouseover", function(e){
    //   console.log(e.clientX+" "+e.clientY);
    //
    //
    // });
    // $('#flex-container-id').on("mouseout", function(e){
    //   console.log(e.clientX+" "+e.clientY);
    //   console.log("out");
    //   // $('#spanhoverid').style.left
    // });






    const btns = document.getElementsByClassName('closebtn');
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        const row = this.parentNode.parentNode;
        const node = row.childNodes[0].childNodes[0].nodeValue;
        // const temp =row.childNodes[1].childNodes[0].childNodes[0].nodeValue;
        fetch(`http://localhost:3000/tasks/${node}`)
          .then(data => (data.json())).then((task) => {
            const stat = task.status;
            fetch(`http://localhost:3000/tasks/${node}`, {
              method: 'delete',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            }).then(() => {
              printData1(stat);
            }).catch(() => {
              console.log('delete Failed with status code');
            });
          });
      });
    }
    // document.getElementById('printing').innerHTML = data;
  }).catch((error) => {
    console.log(error);
  });
};

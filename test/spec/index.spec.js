
// import toDo from '../src/index.js';

// eslint-disable-next-line no-undef
describe('TodoApp', () => {
  const arr = [5, 3, 2];
  it('should check with all the data', async () => {
    const tasks = await ToDo.getData();
    let todo_count = 0;
    let inprogress_count = 0;
    let done_count = 0;
    tasks.forEach((item) => {
      if (item.status === 'todo') {
        todo_count++;
      }
      if (item.status === 'inprogress') {
        inprogress_count++;
      }
      if (item.status === 'done') {
        done_count++;
      }
    });
    expect([todo_count, inprogress_count, done_count]).toEqual(arr);
    console.log(todo_count, inprogress_count, done_count);
  });

  xit('should insert data', async () => {
    const obj = {
      id: 1,
      timestamp: 12345678,
      task: 'manoj',
      status: 'todo',
    };
    await ToDo.insertData(obj);
    const tasks = await ToDo.getData();
    const arr = [];
    tasks.forEach((item) => {
      arr.push(item);
    });
    expect(arr).toContain(obj);
  });

  xit('should delete data', async () => {
    await ToDo.deleteData(69);
    const tasks = await ToDo.getData();
    let flag = 0;
    tasks.forEach((item) => {
      if (item.id == '69') {
        flag = 1;
      }
    });
    expect(flag).toEqual(0);
  });

  xit('should update Data', async () => {
    await ToDo.updateData('66', 'done');
    const tasks = await ToDo.getData();
    let flag1 = 0;
    tasks.forEach((item) => {
      if (item.id == '66' && item.status == 'done') {
        flag1 = 1;
      }
    });
    expect(flag1).toEqual(1);
  });
});

describe('Todoapptesting', () => {
  xit('should insert data', async () => {
    const obj = {
      id: 1,
      timestamp: 12345678,
      task: 'manoj',
      status: 'todo',
    };
    await ToDo.insertData(obj);
    const tasks = await ToDo.getData();
    const arr = [];
    tasks.forEach((item) => {
      arr.push(item);
    });
    expect(arr).toContain(obj);
  });
});


// fetch(`http://localhost:3000/tasks/${key}`, {
//     method: 'PATCH',
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({status: stat}),
// }).then(() => {
//     window.printData1(stat);
// }).catch(() => {
//     console.log('Insert Failed with status code');
// });


//
//
// describe("calculator",function() {
//
//     //test case: 1
//     it("Should retain the current value of all time", function () {
//         expect(Calculator.currentVal).toBeDefined();
//         expect(Calculator.currentVal).toEqual(0);
//         Calculator.currentVal =0;
//     });
//
//     //test case: 2
//     it("should add numbers",function() {
//         expect(Calculator.add(5)).toEqual(5);
//         expect(Calculator.add(5)).toEqual(10);
//         Calculator.currentVal =0;
//     });
//
//     //test case :3
//     it("Should add any number of numbers",function () {
//         expect(Calculator.addAny(1,2,3)).toEqual(6);
//         Calculator.currentVal =0;
//
//     });
//
//
//     it("should Return Hello world",function() {
//         expect(Calculator.helloworld()).toEqual('Hello World');
//     });
//
//     it("should return tempo", function() {
//         expect(Calculator.tempo()).toEqual('tempo');
//
//
//     })
// });

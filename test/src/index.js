window.ToDo = {
    getData: function () {
        console.log("getData function");
         return (fetch("http://localhost:3000/tasks")
            .then(data => (data.json()))
            .then((tasks) => {
                return tasks
            }));
    },
    insertData : function(data) {

        console.log("insertData function");
         (fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(() => {
            return this.arr;
        }).catch((error) => {
            console.log(error);
        }));
    },

    deleteData : function(item) {
            return (fetch("http://localhost:3000/tasks/"+item, {
                method : "delete",
                headers : {
                    Accept: "application/json",
                    "Content-type" : "application/json",
                },
            }).then(() => {
                return "hey";
            }));
    },

    updateData : function(item,stat) {

        return (fetch(`http://localhost:3000/tasks/${item}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({status: stat}),
        }).then(() => {
            console.log("updated successfully");
        }).catch((err) => {
            console.log(err);
        }));
    }
};





























document.getElementById('add').onclick = function() {
    if(document.querySelector('#collect').value.length ==0) {
        alert('please enter the task')
    }else {
        document.querySelector('#task').innerHTML += `
        <h1>${document.querySelector('#collect').value}</h1>
        <button class="btn" style='color: white'; backgroundColor: 'green'>delete</button>
        `;
         var delete_y = document.querySelectorAll('.btn');
         for(var i=0; i<delete_y.length; i++ ) {
             delete_y[i].onclick = function() {
                 this.parentNode.remove()
             }
         }
         document.querySelector('#collect').value = "";
    }
}
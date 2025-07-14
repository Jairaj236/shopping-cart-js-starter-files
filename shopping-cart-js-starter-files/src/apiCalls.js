 const dis = document.getElementById('users')
function getUsers(){
     fetch('https://jsonplaceholder.typicode.com/users')
   .then((res)=>{
    if(!res.ok){
        throw new Error(`status code: ${res.status}`)
    }
    return res.json()
   })
   .then((data)=>{
      dis.innerHTML = data.map((item) => {
        return `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.address.city}</td>
          </tr>
        `;
      }).join('');
    })
   .catch((err)=> console.log(err.message))
}
getUsers();
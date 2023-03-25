function getTodo(){
    axios.get('https://640c65d094ce1239b0ac36a6.mockapi.io/todo').then((res)=>{
     $('.todo').html(
     res.data.map((value)=>{
      return `
     <li><input onclick="onDelete(${value.id})" type="checkbox"><h3>${value.title}</h3></li>
      
      `
     })
     )
    console.log(res.data)
})
}
function onDelete(id){
 axios.delete(`https://640c65d094ce1239b0ac36a6.mockapi.io/todo/${id}`).then(()=>{getTodo()})
 console.log(id)
}

$('.send').click(function(){
    const value = $(".add").val()
    const requ = {
        title:value,
        completed:false
    }
    // axios.post('https://640c65d094ce1239b0ac36a6.mockapi.io/todo',requ)
    axios.post('https://640c65d094ce1239b0ac36a6.mockapi.io/todo',requ).then(()=>{
        getTodo()
    })
}) 
getTodo()
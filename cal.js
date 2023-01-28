function displaydata(data){
    result.value+=data
}
function allclear(){
result.value=""
}
function equal(){
  result.value=eval(result.value)
}
function space(){
    data=result.value
    result.value=data.slice(0,-1)
}
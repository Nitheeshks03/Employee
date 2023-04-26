function homePage(){
    window.location="home.html"
}

function storeEmployee(){
    employee={empname:empnam.value,empid:eid.value,empdsgn:designtn.value,empexp:exp.value,empsal:sal.value}
    
    if(eid.value in localStorage){
        alert("employee already exists")
    }
    else{localStorage.setItem(eid.value,JSON.stringify(employee))
    alert("New employee added")}
}

function search(){
    id=search1.value
    if(id in localStorage){
        emp=JSON.parse(localStorage.getItem(id))
result.innerHTML=`
<p>Employee name ${emp.empname}</p>
<p>Employee id ${emp.empid}</p>
<p>Employee designation ${emp.empdsgn}</p>
<p>Employee experience ${emp.empexp}</p>
<p>Employee salary ${emp.empsal}</p>


`
    }
    else{alert("employee does not exist")}
}
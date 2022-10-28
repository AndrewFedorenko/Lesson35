function count(){

let getSec = document.getElementById('time').value
let getCity = document.getElementById('select').value

let acc = new Map()
acc.set("dn",10)
acc.set("ky",15)
acc.set("hr",12)
acc.set("od",14)
acc.set("ni",9)

document.getElementById('result').value = acc.get(getCity) * (getSec / 60)

}
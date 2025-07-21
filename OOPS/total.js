export function total(){
    let mobile = document.getElementById("mobile");
    let quantity = document.getElementById("quantity");

    function update(){
        let mobVal = mobile.value;
        let qua = quantity.value;
        const total = mobVal * qua;
        document.getElementById("price").textContent = mobVal;
        document.getElementById("tot").textContent = total;
        return total;
    }

    mobile.addEventListener("change", update);
    quantity.addEventListener("change", update);

    update();
}
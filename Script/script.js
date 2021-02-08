console.log('hi...');

let medicineList = document.getElementById('medicineList');

let med_list = ``;

for (i = 0; i < 14; i++) {
    med_list += `<div  id="med-ele" >
                    <img src="/SPpharm/images/Medicine/Abilify-2mg.jpg" class="card-img-top" alt="Error">
                    <div>
                        <h5 class="card-title">Item ${i+1}</h5>
                        <p class="card-text">MRP:Rs.200</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>`
}

medicineList.innerHTML=med_list;
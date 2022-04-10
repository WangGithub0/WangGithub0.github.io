window.onload=function(){
    let radioH = document.querySelector("#prefer-hiring");
    let contactForm = document.querySelector("#contact-form");
    let desp = document.querySelector("#description");
    let row = document.createElement("div");

    radioH.addEventListener("focus", function () {
      // row col label
      row.className = "row";
      let col = document.createElement("div");
      col.className = "form-group col";
      row.appendChild(col);
      let label = document.createElement("label");
      label.for = "contact-hourly-rate";
      let span = document.createElement("span");
      span.className = "text-danger";
      span.innerHTML = "*";
      label.append(span, "Hourly rate");
      col.appendChild(label);
      // $
      let inputGroup = document.createElement("div");
      inputGroup.className = "input-group mb-3";
      let inputGroupPrepend = document.createElement("div");
      inputGroupPrepend.className = "input-group-prepend";
      inputGroup.appendChild(inputGroupPrepend);
      let spanTxt = document.createElement("span");
      spanTxt.className = "input-group-text";
      spanTxt.innerHTML = "$";
      inputGroupPrepend.appendChild(spanTxt);
      col.appendChild(inputGroup);
      // input
      let input = document.createElement("input");
      input.className = "form-control";
      input.id = "contact-hourly-rate";
      input.name = "hourly-rate";
      input.type = "number";
      input.step = "0.01";
      input.value = "$";
      input.min = "0";
      input.required = true;
      inputGroupPrepend.appendChild(input);
      contactForm.insertBefore(row, desp);
      console.log("checked");
    });


    let radioQ = document.querySelector("#prefer-question");
    radioQ.addEventListener("focus", function () {
       row.innerHTML = "";
       contactForm.insertBefore(row,desp);
    });

    let radioC = document.querySelector("#prefer-comment");
    radioC.addEventListener("focus", function () {
        row.innerHTML = "";
        contactForm.insertBefore(row, desp);
    });

    let form = document.querySelector('#contact-form');
    form.onsubmit = function(event){
        if(!form.checkValidity()){
            form.classList.add('was-validated');
            event.preventDefault();
            return false;
        }
        return true;
    };
}




                // <div class="row">
                //     <div class="form-group col">
                //         <label for="contact-address"><span class="text-danger">*</span>Address</label>
                //             <div class="input-group mb-3">
                //                 <div class="input-group-prepend">
                //                     <span class="input-group-text">$</span>
                //                 </div>
                                // <input
                                //     class="form-control"
                                //     id="contact-address"
                                //     name="address"
                                //     autocomplete="street-address"
                                //     type="text"
                                //     tabindex="3"
                                //     required
                                // >
                //          <div>
                //     </div>
                // </div>
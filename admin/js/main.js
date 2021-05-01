

const offerTable = document.querySelector(".table_offers");
offerTable.addEventListener('click', e=>{

    // toggle offer 
    if(e.target.classList.contains("visibility-switch")){
        console.log(e.target.value);
        console.log("hiyya cb is  " + e.target.checked);
        let offerCheckboxData = {
            offerCheckboxValue : e.target.value,
            toggleValue: e.target.checked ? "show" : "hide"
        };

        // pass data to php using fetch

        fetch ('hideShowOffers.php', {
            method: 'post',
            body:JSON.stringify(offerCheckboxData)
        })
        .then(data => data.json())
        .then(resp => console.log(" hayabusa magic " + resp.magic ))
        .catch((error) => console.log(error))
    }

    // delete offer 

    if(e.target.classList.contains("delete_icon")){

        console.log("delete icon id " + e.target.id);

        let deleteofferData = {
            deleteOfferId : e.target.id,
        };

        // pass data to php using fetch

        fetch ('deleteOffers.php', {
            method: 'post',
            body:JSON.stringify(deleteofferData)
        })
        .then(data => data.json())
        .then(resp => {
            console.log(" offer deleted  " + resp.magic ); 
            window.location.reload();
        } )
        .catch((error) => console.log(error))
    }

});


// for noakhali

document.getElementById('btn-noakhali').addEventListener('click',function(event){

    event.preventDefault();

    const donation = parseFloat(document.getElementById('input-noakhali').value);
    

   if(donation=== 'number' || donation>=0){
    const preAmount = parseFloat(document.getElementById('balance-noakhali').innerText);
   
    const totalDonate = donation + preAmount;

    document.getElementById('balance-noakhali').innerText = totalDonate;

    const balance=parseFloat(document.getElementById('totalBalance').innerText);
    
    const finalBalance = balance-donation;

    document.getElementById('totalBalance').innerText =finalBalance;


   }



   else{
    alert('Invalid Donation amount')
   }

})

// for feni 

document.getElementById('btn-feni').addEventListener('click',function(event){

    event.preventDefault();

    const donation = parseFloat(document.getElementById('input-feni').value);
    
    if(donation=== 'number' || donation>=0){
    const preAmount = parseFloat(document.getElementById('balance-feni').innerText);
   
    const totalDonate = donation + preAmount;

    document.getElementById('balance-feni').innerText = totalDonate;

    const balance=parseFloat(document.getElementById('totalBalance').innerText);
    
    const finalBalance = balance-donation;

    document.getElementById('totalBalance').innerText =finalBalance;

    }

    else{
        alert('Invalid Donation amount')
       }


})


// protest 

document.getElementById('btn-protest').addEventListener('click',function(event){

    event.preventDefault();

    const donation = parseFloat(document.getElementById('input-protest').value);
    
    if(donation=== 'number' || donation>=0){
    const preAmount = parseFloat(document.getElementById('balance-protest').innerText);
   
    const totalDonate = donation + preAmount;

    document.getElementById('balance-protest').innerText = totalDonate;

    const balance=parseFloat(document.getElementById('totalBalance').innerText);
    
    const finalBalance = balance-donation;

    document.getElementById('totalBalance').innerText =finalBalance;

    }

    else{
        alert('Invalid Donation amount')
       }


})




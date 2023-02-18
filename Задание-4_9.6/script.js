const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const err = document.querySelector('.error');

btn.addEventListener('click', () => {

    const inp_firstValue = document.querySelector('.input1').value;
    const inp_secValue = document.querySelector('.input2').value;

    if ((inp_firstValue >= 100 && inp_firstValue <= 300)
         && (inp_secValue  >= 100 && inp_secValue <= 300)){

            fetch(`https://picsum.photos/${inp_firstValue}/${inp_secValue}`)
            .then((response) => {
                let block = `
                    <img src=${response.url}>
                `;

                result.innerHTML += block;
            })
    } else {
                 
        let error = `
            <h3> Одно из веденных числе вне диапазона от 100 до 300 <h3>
        `;

        err.innerHTML += error;
    }

   
});
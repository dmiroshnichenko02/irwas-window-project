const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            // Регулярное выражение замешает все не цифры в строке на пустую строку
            item.value = item.value.replace(/\D/, "")
        });
    });
}; 

export default checkNumInputs;
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentExpression = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'C') {
            currentExpression = '';
        }
        else if (buttonText === '=') {
            try {
                const result = eval(currentExpression);
                display.textContent = result;
                currentExpression = result.toString();
            } catch (error) {
                display.textContent = 'Error';
            }
        } else {
            currentExpression += buttonText;
        }

        display.textContent = currentExpression;
    });
});
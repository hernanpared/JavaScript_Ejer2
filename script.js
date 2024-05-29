document.addEventListener('DOMContentLoaded', (event) => {
    const textArea = document.getElementById('textArea');
    const charCount = document.getElementById('charCount');

    textArea.addEventListener('input', () => {
        const count = textArea.value.length;
        charCount.textContent = `Caracteres: ${count}`;
    });
});

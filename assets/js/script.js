const inputs = document.querySelectorAll('input');

function update() {
    let end = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + end);
}

inputs.forEach (input => input.addEventListener('change', update));
inputs.forEach(input => input.addEventListener('mousemove', update));
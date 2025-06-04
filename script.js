// const generatorBtn = document.getElementById("generatorBtn");
const result = document.getElementById("result");

const generator = () => {
    const inspiration = [
            ["Successful people maintain a positive focus in life no matter what is going on around them. - Jack Canfield"],
            ["Stay focused and stay determined. Don’t look to anyone else to be your determination — have self-determination. It will take you very far. - Justice Smith"],
            ["To create something exceptional, your mindset must be relentlessly focused on the smallest detail. - Giorgio Armani"],
            ["Focus on you — your soul, spirit, blessing people with who you are, and following your heart’s passions. - Ally Brooke"],
            ["Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau"]
        ];


    const randomNumber = Math.floor(Math.random() * inspiration.length);
    const randomInspirationArray = inspiration[randomNumber][0]; 
    result.textContent = randomInspirationArray;
}

console.log(generator())
window.onload = () => {
    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };

    const numbersAction = document.getElementById("numbersAction");
    const numbersDisplay = document.getElementById("numbersDisplay");

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
    };

    arrays.numbers.sort((a, b) => a - b);

    numbersAction.onclick = () => {
        for (let number of arrays.numbers) {
            console.log(number);
            elfCode.appendToList(numbersDisplay, number);
        }
    }

    const languageNameAction = document.getElementById("languageNameAction");
    const languageNameDisplay = document.getElementById("languageNameDisplay");

    const newArray = {
        languages: ['JavaScript', 'HTML', 'CSS', 'Java', 'C#', 'Python', 'C/C++']
    };

    newArray.languages.sort();

    languageNameAction.onclick = () => {
        for (let language of newArray.languages) {
            console.log(language);
            elfCode.appendToList(languageNameDisplay, language);
        }
    }

    const languagePopularityAction = document.getElementById("languagePopularityAction");
    const languagePopularityDisplay = document.getElementById("languagePopularityDisplay");

    const languagePopularity = [
        {
            language: 'JavaScript',
            rank: 1
        },
        {
            language: 'HTML',
            rank: 2
        },
        {
            language: 'CSS',
            rank: 3
        }
    ];
  languagePopularity.sort(compareRank);
function compareRank(a, b) {
    const rankA = a.rank;
   const rankB = b.rank;

   let comparison = 0;
   if (rankA > rankB) {
       comparison = 1;
   } else if (rankA < rankB) {
       comparison = -1;
   }
   return comparison;
}
    
    languagePopularityAction.onclick = () => {
        console.log(languagePopularity);
       elfCode.appendToList(languagePopularityDisplay, languagePopularity)
    }

}
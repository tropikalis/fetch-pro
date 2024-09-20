/**
 * Pagal gautus varotoju duomenis yra sugeneruojamas HTML.
 * @param {Object[]} data Vartotoju duomenu sarasas.
 * @param {string} data[].name Vartotojo vardas;
 * @param {number} data[].age Vartotojo amzius metais;
 * @param {boolean} data[].isMarried Vartotojo vedybinis statusas;
 * @returns 
 */
export function renderUsersList(data) {
    const ulDOM = document.querySelector('ul');
    let HTML = '';

    for (const user of data) {
        HTML += `<li>
                    <div>${user.name}</div>
                    <div>${user.age}</div>
                    <div>${user.isMarried}</div>
                </li>`;
    }

    ulDOM.innerHTML = HTML;
}



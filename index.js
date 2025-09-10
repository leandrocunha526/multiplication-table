/*
   Copyright 2025 Unknown <arch@archlinux-pc>

   This program is free software; you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation; either version 2 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program; if not, write to the Free Software
   Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
   MA 02110-1301, USA.
*/

const setup = () => {
    document.querySelector("#go-button").addEventListener("click", addTable);
}
 
const addTable = () => {
    const numberInput = document.querySelector("#number-input");
    const number = numberInput.value;
 
    if (isNaN(number)) {
        emptyForm();
        showError();
        return;
    }
    removeError();
 
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("table");
 
    const header = document.createElement("div");
    header.textContent = `Tabela de ${number} criada em: ${new Date().toLocaleTimeString()}`;
    outerDiv.appendChild(header);
 
    Array.from({ length: 10 }, (_, i) => i + 1).forEach(i => {
        const entry = document.createElement("div");
        entry.textContent = `${i} * ${number} = ${i * number}`;
        outerDiv.appendChild(entry);
    });
 
    document.querySelector("#tables").appendChild(outerDiv);
    emptyForm();
}
 
const emptyForm = () => {
    document.querySelector("#number-input").value = '';
}
 
const showError = () => {
    document.querySelector("#error").classList.remove("hidden");
}
 
const removeError = () => {
    document.querySelector("#error").classList.add("hidden");
}
 
window.addEventListener("load", setup);

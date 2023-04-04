import React from 'react';
import './tech.css'
const Tech = () => {
  return (
    <>
     {
      (el => {
      const TIMER = 500;
      const minItems = 1;
      const maxItems = 20;
      let direction = 1;
      const distance = '12rem';
      let currentItems = 0;
      
      // Reset the rotation of the elements in the list
      const resetRotation = n => [...el.children].forEach((li, idx) => {
        const rot = idx * 360 / n;
        li.style.transform = `translate(-50%, -50%) rotate(${rot}deg) translateY(-${distance}) rotate(-${rot}deg)`;
      });
      
      // Remove an item from the list
      const removeItem = () => {
        el.lastChild.remove();
        currentItems--;
      };
      
      // Add an item to the list
      const addItem = () => {
        currentItems++;
        const newLi = document.createElement('li');
        newLi.innerHTML = currentItems;
        el.appendChild(newLi);
      };

      // Logic to handle the number of items in the list
      // if < max, add one, > min remove the last one
      // We need to call resetRotatION
      const manageItemList = () => {
        if (currentItems < maxItems && direction === 1) {
          addItem();	
        }
        else if (currentItems > minItems && direction === -1) {
          removeItem();
        }
        else {
          direction = currentItems === minItems ? 1 : -1;
        }

        resetRotation(currentItems);
        setTimeout(manageItemList, TIMER);
      };
      
      manageItemList();
      
     })(document.querySelector('.circle-container ul'));
    }
      <div class="circle-container">
        <svg class="guide-circle" viewbox="0 0 64 64">
          <circle r="18" cx="32" cy="32" class="circle" />
        </svg>
        <ul></ul>
      </div>
    </>
  );
};

export default Tech;

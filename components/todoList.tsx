'use client';

import { useState } from 'react';

interface Item {
  type: 'Fruit' | 'Vegetable';
  name: string;
}

const initialItems: Item[] = [
  { type: 'Fruit', name: 'Apple' },
  { type: 'Vegetable', name: 'Broccoli' },
  { type: 'Vegetable', name: 'Mushroom' },
  { type: 'Fruit', name: 'Banana' },
  { type: 'Vegetable', name: 'Tomato' },
  { type: 'Fruit', name: 'Orange' },
  { type: 'Fruit', name: 'Mango' },
  { type: 'Fruit', name: 'Pineapple' },
  { type: 'Vegetable', name: 'Cucumber' },
  { type: 'Fruit', name: 'Watermelon' },
  { type: 'Vegetable', name: 'Carrot' },
];

export default function TodoList() {
  const [mainList, setMainList] = useState<Item[]>(initialItems);
  const [fruitColumn, setFruitColumn] = useState<Item[]>([]);
  const [vegetableColumn, setVegetableColumn] = useState<Item[]>([]);

  const moveToColumn = (item: Item) => {
    setMainList((prev) => prev.filter((i) => i.name !== item.name));
    if (item.type === 'Fruit') {
      setFruitColumn((prev) => [...prev, item]);
    } else {
      setVegetableColumn((prev) => [...prev, item]);
    }

    setTimeout(() => {
      moveToMainList(item);
    }, 5000);
  };

  const moveToMainList = (item: Item) => {
    setFruitColumn((prev) => prev.filter((i) => i.name !== item.name));
    setVegetableColumn((prev) => prev.filter((i) => i.name !== item.name));
    setMainList((prev) => [...prev, item]);
  };

  return (
    <div className="flex gap-4 p-4">
      <div className="w-1/3 p-4 border rounded">
        <h2 className="text-lg font-bold">Main List</h2>
        {mainList.map((item) => (
          <button
            key={item.name}
            className="block p-2 m-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => moveToColumn(item)}
          >
            <span className='text-slate-800'>{item.name}</span>
          </button>
        ))}
      </div>

      <div className="w-1/3 p-4 border rounded">
        <h2 className="text-lg font-bold">Fruits</h2>
        {fruitColumn.map((item) => (
          <button
            key={item.name}
            className="block p-2 m-1 bg-green-200 rounded hover:bg-green-300"
            onClick={() => moveToMainList(item)}
          >
            <span className='text-slate-800'>{item.name}</span>
          </button>
        ))}
      </div>

      <div className="w-1/3 p-4 border rounded">
        <h2 className="text-lg font-bold">Vegetables</h2>
        {vegetableColumn.map((item) => (
          <button
            key={item.name}
            className="block p-2 m-1 bg-red-200 rounded hover:bg-red-300"
            onClick={() => moveToMainList(item)}
          >
            <span className='text-slate-800'>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react'
import Menu from '../components/Menu';
import Categories from '../components/Categories';
import items from '../data/data';


const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function Home() {
  const [menuItems, setMenuItems] = useState(items)
 const [categories] = useState(allCategories);


  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default Home
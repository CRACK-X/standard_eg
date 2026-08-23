import { useState } from 'react'
import { Check, Minus, Plus, ShoppingCart } from 'lucide-react'
import { useLocale } from '../../utils/i18n'
import { menuCatalog } from '../../utils/menuCatalog'
import { menuCollectionImages } from '../../utils/siteData'
import { useCart } from '../../context/CartContext'
import Reveal from '../common/Reveal'
import SectionIntro from '../common/SectionIntro'

function MenuItemRow({ item, collectionTitle }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart({
      id: `${collectionTitle}-${item}`.toLowerCase().replace(/\s+/g, '-'),
      name: item,
      quantity,
      note: ''
    })
    setAdded(true)
    setQuantity(1)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <li className="menu-item-row">
      <span className="menu-item-row__name"><Check size={14} />{item}</span>
      <div className="menu-item-row__actions">
        <div className="menu-item-row__qty">
          <button aria-label="Decrease quantity" onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={12} /></button>
          <span>{quantity}</span>
          <button aria-label="Increase quantity" onClick={() => setQuantity(q => q + 1)}><Plus size={12} /></button>
        </div>
        <button
          className={`menu-item-row__add ${added ? 'menu-item-row__add--added' : ''}`}
          onClick={handleAdd}
          aria-label={`Add ${item} to cart`}
        >
          {added ? <><Check size={14} /></> : <><ShoppingCart size={14} /></>}
        </button>
      </div>
    </li>
  )
}

export default function MenuCatalog() {
  const { language } = useLocale()
  const catalog = menuCatalog[language]

  return <section className="menu-catalog" aria-labelledby="menu-catalog-title">
    <Reveal>
      <SectionIntro eyebrow={catalog.eyebrow} title={catalog.title} copy={catalog.copy} />
    </Reveal>
    <div className="menu-catalog__grid">
      {Object.entries(catalog.collections).map(([key, collection], index) => <Reveal key={key} delay={index * 85}>
        <article className="menu-collection">
          <img className="menu-collection__image" src={menuCollectionImages[key]} alt={collection.title} loading="lazy" width="600" height="400" />
          <div className="menu-collection__body">
            <h3>{collection.title}</h3>
            <p>{collection.intro}</p>
            {collection.groups.map(group => <section className="menu-collection__group" key={group.title}>
              <h4>{group.title}</h4>
              <ul className="menu-item-list">{group.items.map(item => <MenuItemRow key={item} item={item} collectionTitle={collection.title} />)}</ul>
            </section>)}
          </div>
        </article>
      </Reveal>)}
    </div>
    <Reveal><p className="menu-catalog__note">{catalog.note}</p></Reveal>
  </section>
}

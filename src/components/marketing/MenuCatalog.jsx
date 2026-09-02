import { useState } from 'react'
import { Check, Minus, Plus, ShoppingCart, Search, X } from 'lucide-react'
import { useLocale } from '../../utils/i18n'
import { menuCatalog } from '../../utils/menuCatalog'
import { menuCollectionImages } from '../../utils/siteData'
import { useCart, MIN_QUANTITY } from '../../context/CartContext'
import Reveal from '../common/Reveal'
import SectionIntro from '../common/SectionIntro'

function MenuItemRow({ item, collectionTitle, imageKey }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(MIN_QUANTITY)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart({
      id: `${collectionTitle}-${item}`.toLowerCase().replace(/\s+/g, '-'),
      name: item,
      quantity,
      note: '',
      collection: imageKey
    })
    setAdded(true)
    setQuantity(MIN_QUANTITY)
    setTimeout(() => setAdded(false), 1500)
  }

  const handleQuickAdd = (qty) => {
    addToCart({
      id: `${collectionTitle}-${item}`.toLowerCase().replace(/\s+/g, '-'),
      name: item,
      quantity: qty,
      note: '',
      collection: imageKey
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <li className="menu-item-row">
      <span className="menu-item-row__name"><Check size={14} />{item}</span>
      <div className="menu-item-row__actions">
        <div className="menu-item-row__qty">
          <button aria-label="Decrease quantity" onClick={() => setQuantity(q => Math.max(MIN_QUANTITY, q - 1))}><Minus size={12} /></button>
          <span>{quantity}</span>
          <button aria-label="Increase quantity" onClick={() => setQuantity(q => q + 1)}><Plus size={12} /></button>
        </div>
        <div className="menu-item-row__presets">
          <button onClick={() => handleQuickAdd(10)} aria-label="Add 10">10</button>
          <button onClick={() => handleQuickAdd(20)} aria-label="Add 20">20</button>
          <button onClick={() => handleQuickAdd(50)} aria-label="Add 50">50</button>
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
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...Object.keys(catalog.collections)]

  const filteredCollections = Object.entries(catalog.collections).reduce((acc, [key, collection]) => {
    if (selectedCategory !== 'all' && selectedCategory !== key) return acc

    const filteredGroups = collection.groups.map(group => ({
      ...group,
      items: group.items.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(group => group.items.length > 0)

    if (filteredGroups.length > 0) {
      acc[key] = { ...collection, groups: filteredGroups }
    }

    return acc
  }, {})

  const hasResults = Object.keys(filteredCollections).length > 0

  return <section className="menu-catalog" aria-labelledby="menu-catalog-title">
    <Reveal>
      <SectionIntro centered eyebrow={catalog.eyebrow} title={catalog.title} copy={catalog.copy} />
    </Reveal>
    
    <Reveal>
      <div className="menu-catalog__controls">
        <div className="menu-catalog__search">
          <Search size={18} />
          <input
            type="text"
            placeholder={language === 'ar' ? 'ابحث في القائمة...' : 'Search menu...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search menu"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} aria-label="Clear search">
              <X size={18} />
            </button>
          )}
        </div>
        
        <div className="menu-catalog__filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={selectedCategory === cat ? 'active' : ''}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'all' 
                ? (language === 'ar' ? 'الكل' : 'All')
                : catalog.collections[cat]?.title || cat
              }
            </button>
          ))}
        </div>
      </div>
    </Reveal>

    <Reveal>
      <nav className="menu-catalog__nav" aria-label={catalog.eyebrow}>
        {Object.entries(catalog.collections).map(([key, collection]) => (
          <a 
            key={key} 
            href={`#${key}`}
            className={!filteredCollections[key] ? 'disabled' : ''}
          >
            {collection.title}
          </a>
        ))}
        <a href="#open-buffet" className="menu-catalog__nav-open-buffet">{catalog.openBuffetLabel}</a>
      </nav>
    </Reveal>

    <div className="menu-catalog__grid">
      {hasResults ? (
        Object.entries(filteredCollections).map(([key, collection], index) => <Reveal key={key} delay={index * 85}>
          <article className="menu-collection" id={key}>
            <img className="menu-collection__image" src={menuCollectionImages[key]} alt={collection.title} loading="lazy" decoding="async" width="600" height="400" />
            <div className="menu-collection__body">
              <h3>{collection.title}</h3>
              <p>{collection.intro}</p>
              {collection.groups.map(group => <section className="menu-collection__group" key={group.title}>
                <h4>{group.title}</h4>
                <ul className="menu-item-list">{group.items.map(item => <MenuItemRow key={item} item={item} collectionTitle={collection.title} imageKey={key} />)}</ul>
              </section>)}
            </div>
          </article>
        </Reveal>)
      ) : (
        <Reveal>
          <div className="menu-catalog__no-results">
            <p>{language === 'ar' ? 'لم يتم العثور على نتائج' : 'No results found'}</p>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('all') }}>
              {language === 'ar' ? 'مسح البحث' : 'Clear search'}
            </button>
          </div>
        </Reveal>
      )}
    </div>
    <Reveal><p className="menu-catalog__note">{catalog.note}</p></Reveal>
  </section>
}

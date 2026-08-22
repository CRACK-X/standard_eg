import { Check } from 'lucide-react'
import { useLocale } from '../../utils/i18n'
import { menuCatalog } from '../../utils/menuCatalog'
import { menuCollectionImages } from '../../utils/siteData'
import Reveal from '../common/Reveal'
import SectionIntro from '../common/SectionIntro'

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
              <ul>{group.items.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul>
            </section>)}
          </div>
        </article>
      </Reveal>)}
    </div>
    <Reveal><p className="menu-catalog__note">{catalog.note}</p></Reveal>
  </section>
}

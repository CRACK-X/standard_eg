import { Eyebrow, GoldRule } from '../common/SectionIntro'

export default function PageHero({ eyebrow, title, copy }) {
  return <section className="page-hero"><div className="page-hero__orb" /><div className="shell page-hero__content"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><GoldRule />{copy && <p>{copy}</p>}</div></section>
}

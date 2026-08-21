export function Eyebrow({ children, centered = false }) {
  return <p className={'eyebrow ' + (centered ? 'eyebrow--center' : '')}>{children}</p>
}

export function GoldRule() {
  return <span className="gold-rule" aria-hidden="true" />
}

export default function SectionIntro({ eyebrow, title, copy, centered = false }) {
  return <div className={'section-intro ' + (centered ? 'section-intro--center' : '')}>
    <Eyebrow centered={centered}>{eyebrow}</Eyebrow>
    <h2>{title}</h2>
    <GoldRule />
    {copy && <p>{copy}</p>}
  </div>
}

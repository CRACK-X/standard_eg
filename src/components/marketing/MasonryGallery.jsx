export default function MasonryGallery({ items, className = '', label }) {
  return <div className={'masonry-gallery ' + className} role="list" aria-label={label}>
    {items.map((item, index) => <figure className="masonry-gallery__tile" role="listitem" key={item.src}>
      <img src={item.src} alt={item.alt} loading={index > 1 ? 'lazy' : 'eager'} width="600" height="600" />
    </figure>)}
  </div>
}

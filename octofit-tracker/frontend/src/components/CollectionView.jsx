import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

export default function CollectionView({ component, endpoint, title, description, renderItem, emptyMessage }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let active = true
    fetchCollection(component, endpoint)
      .then((nextItems) => { if (active) { setItems(nextItems); setStatus('ready') } })
      .catch(() => { if (active) setStatus('error') })
    return () => { active = false }
  }, [component, endpoint])

  return <section className="data-page"><div className="page-heading"><p className="eyebrow">OctoFit / {component}</p><h1>{title}</h1><p className="lede">{description}</p></div>{status === 'loading' && <div className="state-panel">Loading {component}...</div>}{status === 'error' && <div className="state-panel error-state">Couldn&apos;t reach the API. Check that the backend is running on port 8000.</div>}{status === 'ready' && items.length === 0 && <div className="state-panel">{emptyMessage}</div>}{status === 'ready' && items.length > 0 && <div className="collection-grid">{items.map((item, index) => <article className="data-card" key={item._id || item.id || index}>{renderItem(item)}</article>)}</div>}</section>
}

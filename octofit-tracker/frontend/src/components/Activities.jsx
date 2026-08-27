import CollectionView from './CollectionView'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

export default function Activities() {
  return <CollectionView component="activities" endpoint={activitiesEndpoint} title="Activity log" description="Every run, walk, and strength session adds up." emptyMessage="No activities logged yet." renderItem={(item) => <><p className="card-kicker">{item.type || 'activity'}</p><h2>{item.durationMinutes || 0} <small>minutes</small></h2><p>{item.points || 0} points earned</p><time>{item.completedAt ? new Date(item.completedAt).toLocaleDateString() : 'Recently'}</time></>} />
}

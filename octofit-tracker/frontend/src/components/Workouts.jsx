import CollectionView from './CollectionView'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

export default function Workouts() {
  return <CollectionView component="workouts" endpoint={workoutsEndpoint} title="Workouts" description="Personalized starting points for whatever energy you have today." emptyMessage="No workouts available yet." renderItem={(item) => <><p className="card-kicker">{item.activityType || 'movement'} / {item.difficulty || 'all levels'}</p><h2>{item.title || 'Workout'}</h2><p>{item.description || 'A focused session for today.'}</p><time>{item.durationMinutes || 0} minutes</time></>} />
}

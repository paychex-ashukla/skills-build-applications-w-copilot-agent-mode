import CollectionView from './CollectionView'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

export default function Leaderboard() {
  return <CollectionView component="leaderboard" endpoint={leaderboardEndpoint} title="Leaderboard" description="A little friendly pressure for a lot more movement." emptyMessage="The leaderboard is waiting for its first scores." renderItem={(item) => <><p className="rank">#{item.rank || '—'}</p><h2>{item.points || 0} <small>points</small></h2><p>{item.user?.displayName || item.user?.username || 'OctoFit student'}</p><time>{item.period || 'Current month'}</time></>} />
}

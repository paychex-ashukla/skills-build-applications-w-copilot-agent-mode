import CollectionView from './CollectionView'

export default function Teams() {
  return <CollectionView component="teams" title="Teams" description="Find your people, pick a pace, and keep each other going." emptyMessage="No teams have formed yet." renderItem={(item) => <><p className="card-kicker">team</p><h2>{item.name || 'Unnamed team'}</h2><p>{item.motto || 'Move together.'}</p><time>{item.members?.length || 0} members</time></>} />
}

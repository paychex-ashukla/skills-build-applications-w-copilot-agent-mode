import CollectionView from './CollectionView'

export default function Users() {
  return <CollectionView component="users" title="Students" description="A quick, privacy-minded view of the people in motion." emptyMessage="No student profiles found." renderItem={(item) => <><p className="card-kicker">grade {item.grade || '—'}</p><h2>{item.displayName || item.username || 'Student'}</h2><p>{item.email || 'Profile ready'}</p><time>@{item.username || 'student'}</time></>} />
}

import CollectionView from './CollectionView'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

export default function Users() {
  return <CollectionView component="users" endpoint={usersEndpoint} title="Students" description="A quick, privacy-minded view of the people in motion." emptyMessage="No student profiles found." renderItem={(item) => <><p className="card-kicker">grade {item.grade || '—'}</p><h2>{item.displayName || item.username || 'Student'}</h2><p>{item.email || 'Profile ready'}</p><time>@{item.username || 'student'}</time></>} />
}

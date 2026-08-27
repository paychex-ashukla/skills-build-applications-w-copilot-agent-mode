import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

const navigation = [
  { path: '/', label: 'Overview', icon: '✦' },
  { path: '/activities', label: 'Activities', icon: '↗' },
  { path: '/leaderboard', label: 'Leaderboard', icon: '◎' },
  { path: '/teams', label: 'Teams', icon: '◌' },
  { path: '/users', label: 'Students', icon: '◉' },
  { path: '/workouts', label: 'Workouts', icon: '▦' },
]

function Overview() {
  return <div className="overview"><div className="page-heading"><p className="eyebrow">Mergington High School / PE department</p><h1>Keep moving together.</h1><p className="lede">A live pulse on student activity, friendly competition, and the next good workout.</p></div><div className="stat-grid"><div className="stat-card accent-coral"><span>01</span><strong>3</strong><p>active students</p></div><div className="stat-card accent-teal"><span>02</span><strong>2</strong><p>teams in motion</p></div><div className="stat-card accent-gold"><span>03</span><strong>300</strong><p>points logged</p></div></div><div className="welcome-panel"><span className="panel-mark">O</span><div><p className="eyebrow">Today&apos;s nudge</p><h2>Consistency beats intensity.</h2><p>Check the leaderboard, celebrate a small win, then choose a workout that fits the day.</p></div><NavLink className="button-link" to="/workouts">Find a workout <span>→</span></NavLink></div></div>
}

function App() {
  return <BrowserRouter><div className="app-shell"><aside className="sidebar"><NavLink className="brand" to="/"><span className="brand-icon">O</span><span>OctoFit<small>TRACKER</small></span></NavLink><p className="nav-label">Explore</p><nav>{navigation.map((item) => <NavLink key={item.path} className="nav-link" to={item.path} end={item.path === '/'}><span className="nav-icon">{item.icon}</span>{item.label}</NavLink>)}</nav><div className="sidebar-footer"><span className="status-dot" /> API connected<br /><small>School year 2026</small></div></aside><main className="main-content"><header className="topbar"><span className="mobile-brand">OCTOFIT / TRACKER</span><span className="topbar-note">Mergington High <span className="slash">/</span> Fitness lab</span><span className="date-stamp">AUG 27, 2026</span></header><Routes><Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /></Routes></main></div></BrowserRouter>
}

export default App

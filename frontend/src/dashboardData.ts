export type Metric = {
  label: string
  value: string
  accent: string
}

export type Player = {
  name: string
  role: string
  server: string
  ping: string
  activity: string
}

export type ServerStats = {
  uptime?: string[]
}

export async function getServerStats(): Promise<ServerStats | null> {
  try {
    const response = await fetch('/server_stats', { method: 'POST' })

    if (!response.ok) {
      throw new Error(`Server stats request failed: ${response.status}`)
    }

    const dataFromServer = await response.json()
    return typeof dataFromServer === 'string' ? JSON.parse(dataFromServer) : dataFromServer
  } catch (error) {
    console.error('Error loading server stats:', error)
    return null
  }
}

export const initialMetrics: Metric[] = [
  {
    label: 'Redis',
    value: '98.7%',
    accent: 'violet',
  },
  {
    label: 'Postgres',
    value: '124 ms',
    accent: 'magenta',
  },
  {
    label: 'Server Uptime',
    value: 'Loading',
    accent: 'blue',
  },
  {
    label: 'Players',
    value: '1,284',
    accent: 'green',
  },
  {
    label: 'Load',
    value: '2.61',
    accent: 'amber',
  },
]

export const players: Player[] = [
  {
    name: 'Nova',
    role: 'Admin',
    server: 'EU-West 3',
    ping: '18 ms',
    activity: 'Managing server settings',
  },
  {
    name: 'Echo',
    role: 'Moderator',
    server: 'EU-Central 1',
    ping: '24 ms',
    activity: 'Reviewing chat reports',
  },
  {
    name: 'Mira',
    role: 'Builder',
    server: 'US-East 2',
    ping: '41 ms',
    activity: 'Testing world changes',
  },
  {
    name: 'Rook',
    role: 'Player',
    server: 'EU-West 3',
    ping: '32 ms',
    activity: 'In lobby',
  },
]

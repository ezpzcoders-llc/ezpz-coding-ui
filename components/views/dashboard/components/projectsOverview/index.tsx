import { useSelector } from 'react-redux'
import { Card } from 'antd'

import { useRouter } from 'next/router'

import styles from './ProjectOverview.module.scss'

const ProjectOverview = () => {
    const router = useRouter()
    const completedProjects = []
    const { clients } = useSelector((state: any) => state.allClients)

    return (
        <Card
            className={styles.ProjectOverviewContent}
            onClick={() => router.push('/dashboard/projects/overview')}>
            <span>
                Projects: {completedProjects?.length} / {clients?.length}
            </span>
        </Card>
    )
}

export default ProjectOverview

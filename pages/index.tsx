import { XIXLayout } from '@/components/layouts'
import { PresentationLayout } from '../components/layouts/PresentationLayout';
import { ProjectsLayout } from '../components/layouts/ProjectsLayout';
import { ContactLayout } from '@/components/layouts/ContactLayout';

export default function Home() {
  return (
    <XIXLayout title={'Quintanal - Portfoil'} pageDescription={'Portfafolio de desarrollador multiplataforma Aarón Quintanal Martín'}>
      <PresentationLayout />
      <ProjectsLayout />
      <ContactLayout />
    </XIXLayout>
  )
}

import { Card } from '@/shared-components/Card'
import { FormWithSupscription } from './FormWithSupscription'

export const MainForm = () => {
  return (
    <>
      <Card detail={{ title: 'FormSpy 101' }}>
        <div className="space-y-20">
          <FormWithSupscription />
          <FormWithSupscription
            subscription={{ submitting: true, pristine: true }}
          />
        </div>
      </Card>
    </>
  )
}

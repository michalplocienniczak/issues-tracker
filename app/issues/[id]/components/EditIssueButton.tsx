import { Pencil2Icon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

interface Props {
  issueId: string
}

const EditIssueButton = ({ issueId }: Props) => {
  return (
    <Button className="cursor-pointer">
      <Pencil2Icon />
      <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  )
}

export default EditIssueButton

import prisma from '@/prisma/client'
import { Box, Grid } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import { EditIssueButton, IssueDetails } from './components'

interface Props {
  params: { id: string }
}

const IssueDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== 'string') notFound()

  const issue = await prisma.issue.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  if (!issue) notFound()

  return (
    <Grid
      columns={{
        initial: '1',
        md: '2',
      }}
      gap="5"
    >
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton issueId={params.id} />
      </Box>
    </Grid>
  )
}

export default IssueDetailPage

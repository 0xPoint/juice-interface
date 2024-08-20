import { Trans } from '@lingui/macro'
import { CartItemBadge } from 'components/CartItemBadge'
import { ProjectHeaderLogo } from 'components/Project/ProjectHeader/ProjectHeaderLogo'
import { ProjectMetadataContext } from 'contexts/ProjectMetadataContext'
// import { useProjectHasErc20Token } from 'packages/v2v3/components/V2V3Project/ProjectDashboard/hooks/useProjectHasErc20Token'
// import { BUYBACK_DELEGATE_ENABLED_PROJECT_IDS } from 'packages/v2v3/constants/buybackDelegateEnabledProjectIds'
import { useContext } from 'react'
import { twMerge } from 'tailwind-merge'
import { useProjectPaymentTokens } from '../hooks/useProjectPaymentTokens'

export const ReceiveTokensItem = ({ className }: { className?: string }) => {
  const { projectId } = useContext(ProjectMetadataContext)
  const { receivedTickets, receivedTokenSymbolText } = useProjectPaymentTokens()
  // const projectHasErc20Token = useProjectHasErc20Token()
  const projectHasErc20Token = false

  const badgeTitle = projectHasErc20Token ? (
    'ERC-20'
  ) : (
    <Trans>Juicebox Native</Trans>
  )

  if (receivedTickets === '0') {
    return null
  }

  return (
    <div className={twMerge('flex flex-col gap-4', className)}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center">
          <ProjectHeaderLogo className="h-12 w-12 rounded-full" />
          <span className="ml-3">
            <Trans>{receivedTokenSymbolText} Token</Trans>
          </span>
          <CartItemBadge className="ml-2">
            <Trans>{badgeTitle} Token</Trans>
          </CartItemBadge>
        </div>
        <div>{receivedTickets}</div>
      </div>
    </div>
  )
}

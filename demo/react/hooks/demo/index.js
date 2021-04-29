import {
  Anchor,
  Box,
  H1,
  H2,
  ListItem,
  OrderedList
} from '@s-ui/documentation-library'

import UseBooleanDemo from './UseBooleanDemo'
import UseEventListenerDemo from './UseEventListenerDemo'
import UseLegacyStateDemo from './UseLegacyStateDemo'
import UseMediaQueryDemo from './UseMediaQueryDemo'
import UseMergeRefsDemo from './UseMergeRefsDemo'
import UseMountDemo from './UseMountDemo'
import UseMountedStateDemo from './UseMountedStateDemo'
import UseNearScreenDemo from './UseNearScreenDemo'
import UseOnScreenDemo from './UseOnScreenDemo'
import UseScrollDemo from './UseScrollDemo'
import UseStepsDemo from './UseStepsDemo'
import UseSwipeDemo from './UseSwipeDemo'
import UseToggleDemo from './UseToggleDemo'
import UseControlledStateDemo from './UseControlledStateDemo'
import UseCopyToClipboardDemo from './UseCopyToClipboardDemo'
import UseSetStateDemo from './UseSetStateDemo'

const orderedHookList = [
  UseBooleanDemo,
  UseControlledStateDemo,
  UseCopyToClipboardDemo,
  UseEventListenerDemo,
  UseLegacyStateDemo,
  UseMediaQueryDemo,
  UseMergeRefsDemo,
  UseMountDemo,
  UseMountedStateDemo,
  UseNearScreenDemo,
  UseOnScreenDemo,
  UseSetStateDemo,
  UseStepsDemo,
  UseSwipeDemo,
  UseToggleDemo
]

// eslint-disable-next-line react/prop-types
function HookDemo({component: Component}) {
  return (
    <Box
      id={Component.demoName}
      outline
      elementType="article"
      color="#167db7"
      style={{marginBottom: '1em'}}
    >
      <H2>{Component.demoName}</H2>
      <Component />
    </Box>
  )
}

export default function HooksDemo() {
  return (
    <Box>
      <H1>SUI React Hooks</H1>
      <OrderedList>
        {orderedHookList.map((HookComponent, id) => (
          <ListItem key={id}>
            <Anchor href={`#${HookComponent.demoName}`}>
              {HookComponent.demoName}
            </Anchor>
          </ListItem>
        ))}
      </OrderedList>
      {orderedHookList.map((HookComponent, id) => (
        <HookDemo key={id} component={HookComponent} />
      ))}
      <UseScrollDemo />
    </Box>
  )
}

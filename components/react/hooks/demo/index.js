/* eslint-disable react/prop-types */
import {
  Anchor,
  Box,
  H1,
  H2,
  ListItem,
  OrderedList
} from '@s-ui/documentation-library'

import UseBooleanDemo from './UseBooleanDemo.js'
import UseControlledStateDemo from './UseControlledStateDemo.js'
import UseCopyToClipboardDemo from './UseCopyToClipboardDemo.js'
import UseEventListenerDemo from './UseEventListenerDemo.js'
import UseLegacyStateDemo from './UseLegacyStateDemo.js'
import UseLocalStorageDemo from './UseLocalStorageDemo.js'
import UseMediaQueryDemo from './UseMediaQueryDemo.js'
import UseMergeRefsDemo from './UseMergeRefsDemo.js'
import UseMountDemo from './UseMountDemo.js'
import UseMountedStateDemo from './UseMountedStateDemo.js'
import UseNearScreenDemo from './UseNearScreenDemo.js'
import UseOnScreenDemo from './UseOnScreenDemo.js'
import UseScrollDemo from './UseScrollDemo.js'
import UseStepsDemo from './UseStepsDemo.js'
import UseSwipeDemo from './UseSwipeDemo.js'
import UseToggleDemo from './UseToggleDemo.js'

const orderedHookList = [
  UseBooleanDemo,
  UseControlledStateDemo,
  UseCopyToClipboardDemo,
  UseEventListenerDemo,
  UseLegacyStateDemo,
  UseLocalStorageDemo,
  UseMediaQueryDemo,
  UseMergeRefsDemo,
  UseMountDemo,
  UseMountedStateDemo,
  UseNearScreenDemo,
  UseOnScreenDemo,
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

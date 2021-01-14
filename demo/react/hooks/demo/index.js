import {
  Anchor,
  Box,
  H1,
  H2,
  ListItem,
  OrderedList
} from '@s-ui/documentation-library'

import UseEventListenerDemo from './UseEventListenerDemo'
import UseLegacyStateDemo from './UseLegacyStateDemo'
import UseMediaQueryDemo from './UseMediaQueryDemo'
import UseMountDemo from './UseMountDemo'
import UseNearScreenDemo from './UseNearScreenDemo'
import UseOnScreenDemo from './UseOnScreenDemo'
import UseScrollDemo from './UseScrollDemo'
import UseSwipeDemo from './UseSwipeDemo'
import UseToggleDemo from './UseToggleDemo'

const orderedHookList = [
  UseEventListenerDemo,
  UseLegacyStateDemo,
  UseMediaQueryDemo,
  UseMountDemo,
  UseNearScreenDemo,
  UseOnScreenDemo,
  UseSwipeDemo,
  UseToggleDemo
]

// eslint-disable-next-line react/prop-types
function HookDemo({component: Component}) {
  return (
    <Box
      id={Component.name}
      outline
      elementType="article"
      color="#167db7"
      style={{marginBottom: '1em'}}
    >
      <H2>{Component.name}</H2>
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
            <Anchor href={`#${HookComponent.name}`}>
              {HookComponent.name}
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

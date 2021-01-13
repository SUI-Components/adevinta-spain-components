import {useState, useRef} from 'react'
import {
  Box,
  H3,
  UnorderedList,
  ListItem,
  Label,
  Input,
  Grid,
  Cell
} from '@s-ui/documentation-library'

import {useEventListener} from '../../../../components/react/hooks/src'

const availableEvents = ['click', 'mouseenter', 'scroll']

export default function UseEventListenerDemo() {
  const targetRef = useRef()
  const [triggered, setTriggered] = useState(null)
  const [events, setEvents] = useState(() => new Set(['click']))

  const updateEvents = e => {
    const {value} = e.target
    setEvents(prev => {
      const newState = new Set(prev)
      if (newState.has(value)) newState.delete(value)
      else newState.add(value)
      return newState
    })
  }

  useEventListener(
    Array.from(events),
    e => setTriggered(e.type),
    targetRef.current
  )

  return (
    <Grid cols={4}>
      <Cell span={1}>
        <H3>Active event listeners on the target</H3>
        <UnorderedList>
          {availableEvents.map((event, idx) => (
            <ListItem key={idx}>
              <Label>
                <Input
                  type="checkbox"
                  value={event}
                  checked={events.has(event)}
                  onChange={updateEvents}
                />
                {event}
              </Label>
            </ListItem>
          ))}
        </UnorderedList>
      </Cell>
      <Cell span={3}>
        <H3>Target</H3>
        <Box outline>
          <div ref={targetRef} style={{height: 300, overflow: 'scroll'}}>
            {triggered && <span>Triggered event: {triggered}</span>}
            <div style={{height: 600}} />
          </div>
        </Box>
      </Cell>
    </Grid>
  )
}

# AbtestingHooks

Useful hooks to be used for AB Testing.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/abtesting-hooks --save
```

## Available hooks

### useExperiment

> Depending on the params, this hook can assume the following two different roles.

#### ⎡🧪👂⎦ Experiment Context Consumer

```js
const {isActive, isDefault, isVariation, ...} = useExperiment()
```

When it's used in some of the children of OptimizelyXExperiment (down in the rendering hierarchy) and no params are given, it just receives the context from an upper experiment component in the hierarchy.

See OptimizelyXExperiment's readme to see advanced examples about consuming the experiment context: Advanced Usage → Experiment Context.

#### ⎡🧪⚙️⎦ Experiment Core Runner

```js
const {isActive, isDefault, isVariation, ...} = useExperiment({
  experimentId: 40000,
  variations: [
    {id: 700000, isDefault: true},
    {id: 700001},
    {id: 700002}
  ]
})
  ```

When `experimentId` and `variations` are given as params, it runs an experiment itself so a decision from Optimizely is received and experiment data returned by the hook is updated accordingly.

It behaves in a similar way `OptimizelyXExperiment` does because they share the same core. The only differences are:

- It's a hook, not a component, so it's not limited to be used within the render nor having specific effect over a concrete area of the render.
- The response from Optimizely causes an update of the returned experiment data, not a render swapping which sometimes leads to undesired reference losings in the DOM.
- OptimizelyXExperiment performs a render task for each variation, so you may have performance gainings by using the hook instead (especially for huge experiments).

Also, you may be wondering how to provide experiment context in order to be consumed down in the render hierarchy when the experiment is ran by the hook. Well, you can just feed the OptimizelyXExperiment component with the experiment data, and it will only act as a context provider:

```js
// Run experiment
const experimentData = useExperiment({
  experimentId: 40000,
  variations: [
    {id: 700000, isDefault: true},
    {id: 700001},
    {id: 700002}
  ]
})

// Use experimentData for anything you like
const {isActive, isDefault, isVariation, ...} = experimentData

// Wrap within OptimizelyXExperiment any area of the render you'd like to
// provide experiment context for.
return (
  <OptimizelyXExperiment feed={experimentData}>
    ...
    All the components rendered here are reached by the experiment context,
    which can be consumed by `useExperiment()` as well.
    ...
  </OptimizelyXExperiment>
)
```

To learn more about the experiment experience and how the core works, please read OptimizelyXExperiment's readme since that is already well covered there.

> **Find full description and more examples in the [demo page](#).**

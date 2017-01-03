# Suprematism Divider

An Angular 2 divider component.


#### Installation
```bash
npm i -S CINBCUniversal/suprematism-divider
```
Until it is published to npm, point to github. A consequence of this is that
built files must be checked-in. When we publish to npm with `npm publish`,
there is a prehook to build the files and a posthook to delete them
(so only source files are saved in git). For now, after doing development,
we must manually run the publish prehook and save the files.


#### View
- [Hosted on Github Pages](https://cinbcuniversal.github.io/suprematism-divider/)
- Run the example locally with `npm run example`


## Components
- [`supre-divider`](#supre-divider)

#### <a id="supre-divider"></a> `supre-divider`
A component for a divider.

##### Directives
- `position: Position` - an object of the type {top: string, left: string} specifing the initial position (mandatory)
- `isResizable: boolean` - specifies whether or no the divider is draggable (optional, defaults to true)
- `rightArrow: boolean` - specifies whether or no the divider has a right arrow (optional, defaults to true)

##### Events
- `leftUpdated: string` - specifies the dynamic left position
- `isResizing: boolean` - specifies whether or no the divider is being dragged (moused down on)


## States
- The divider component has these states:
  - `is-resizable`: whether the component is draggable


## Example
```html
<supre-divider
  [position]="{top: '0px', left: '50vw'}"
  [rightArrow]="false"
  [isResizable]="false"
></supre-divider>
```

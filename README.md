# Koi Pool - React Components Library
Koi Pool is a React-based components library that offers a flexible and easy-to-use set of components for creating and managing a variety of components in React applications. With full TypeScript support, it provides type-safe props and an intuitive API to enhance developer productivity and ensure robust application development. It has styles that are inheritedly fitting for the koi foundation brand. 

# Getting Started
## Installation

To integrate Koi Pool into your project, ensure you have React and TypeScript set up. Then, install the library using either npm or yarn:
```bash 
npm install koi-pool
# or
yarn add koi-pool
```
## Components
### Modals
#### GenericModalBase
A foundational modal component providing essential functionality.

##### Props
```typescript
    handleClose: () => void // Function to close the modal.
    isOpen: boolean // Indicates if the modal is visible.
    children: ReactNode // Content displayed inside the modal.
    modalAttributes?: HTMLAttributes<HTMLDivElement> // Additional HTML attributes for the modal.
```

##### Usage

```jsx
import { GenericModalBase } from 'koi-pool';

<GenericModalBase isOpen={isOpen} handleClose={handleClose}>
  <p>Modal content</p>
</GenericModalBase>
```

#### GenericModal
Extends GenericModalBase with a title and action buttons.

##### Props
```typescript
    // Inherits GenericModalBaseProps.
    title: ReactNode // Title of the modal, can either be a string which will become a h1, or any other React Node
    actionButtons?: ReactNode[] // Action buttons for the modal.
    actionGroupAttributes?: HTMLAttributes<HTMLDivElement> // Customizes the button groups div attributes
    bodyAttributes?: HTMLAttributes<HTMLDivElement> // Customizes the body wrapping the children's div attributes
    cardAttributes?: HTMLAttributes<HTMLDivElement> // Customizes the card of the modal div attributes
```
##### Usage

```jsx

import { GenericModal, Button } from 'koi-pool';

<GenericModal
  isOpen={isOpen}
  handleClose={handleClose}
  title="Modal Title"
  actionButtons={[
    <Button onClick={actionHandler}>Action</Button>
  ]}>
  <p>Modal content</p>
</GenericModal>
```

#### GenericAcceptanceModal

A specialized modal for acceptance actions, extending GenericModal.
##### Props
```typescript
    // Includes all GenericModalProps excluding actionButtons prop.
    handleSubmit: () => void // Function for submission action.
```
##### Usage

```jsx

import { GenericAcceptanceModal } from 'koi-pool';

<GenericAcceptanceModal
  isOpen={isOpen}
  handleClose={handleClose}
  handleSubmit={handleSubmit}
  title="Confirm Submission"
>
  <p>Confirm submission?</p>
</GenericAcceptanceModal>
```
#### GenericModalWithTabs

A versatile modal component that supports tabbed navigation for organizing content into separate sections.
##### Props
```typescript
    // Inherits properties from GenericModalProps except for children and title.
    tabs: GenericModalTabsProps[] // An array of tab objects, each containing title, body, and optional actionButtons.
```
**GenericModalTabsProps**
```typescript
    title: string // the title for the tab, what the user will click on
    body: ReactNode // the content of that tab
    actionButtons?: ReactNode[] // The action buttons at the bottom of the modal, optional
```
##### Usage

```jsx

import { GenericModalWithTabs } from 'koi-pool';

const tabs = [
  {
    title: "Tab 1",
    body: <p>Content for Tab 1</p>,
  },
  {
    title: "Tab 2",
    body: <p>Content for Tab 2</p>,
    actionButtons: [<Button>Button 2</Button>]
  },
];

<GenericModalWithTabs
  isOpen={isOpen}
  handleClose={handleClose}
  tabs={tabs}
/>
```
This component renders a modal with tabbed navigation at the top. Users can switch between tabs to view different content sections. Each tab can have its own set of action buttons, or none at all.

### Buttons
#### IconButton
A button component for displaying icons.

##### Props
```typescript
    // Any default Button html attributes
    className?: string // Custom class name.
    variants?: 'standard' | 'disabled'.
    src: string // Image source URL.
    alt?: string // Image alt text.
    isActive? boolean // Active state indicator.
```

##### Usage
```jsx
import { IconButton } from 'koi-pool';
import icon from './icon-path'
<IconButton src={icon} alt="Icon" />
```
#### CloseButton

A button specifically designed for closing or dismissing content.
##### Props
```typescript
    // Any default Button html attributes
    className?: string // Custom class name.
```
##### Usage

```jsx

import { CloseButton } from 'koi-pool';

<CloseButton />
```
#### Button

A flexible button component supporting various states and variants.
##### Props
```typescript
    // Any default Button html attributes
    className?: string // Custom class name.
    variants?: 'cancel' | 'standard' | 'disabled'.
    children: ReactNode // Button content.
    isActive?: boolean // Active state indicator.
```
#####Usage

```jsx

import { Button } from 'koi-pool';

<Button variants="cancel">Cancel</Button>
```
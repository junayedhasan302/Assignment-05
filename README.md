# 🧱 Dev Stack Builder

This is a React web app where developer can explore many popular web technologies, compare them by category, difficulty and rating, and also build their own personal "tech stack" by adding and removing tools from a sidebar. It is fully responsive also.

---

## 📖 Description

Dev Stack Builder is helping developer to pick right tools for their next project. You can browse 20+ technologies, like Frontend, Backend, Database, Styling, DevOps and Tools category. Every technology card is showing its rating, difficulty level and small description. User can add technology to their own stack, see the selection live in sidebar, and remove one by one or remove all at same time. Every action also show toast notification instantly.

---

## 🛠️ Technology I Used

- **React.js** — for making the UI with components
- **TypeScript** — for type safety, so less bug happen
- **Tailwind CSS** — for styling fast with utility classes
- **React-Toastify** — for showing toast notification
- **Vite** — for fast dev server and build
- **JSON** — for storing all technology data

---

## ✨ 3 Features of My Project

1. **🃏 Technology Grid** — All technology show in responsive grid (3 column in desktop, 2 in tablet, 1 in mobile). Every card have icon, badge, category, difficulty, rating and "Add to Stack" button.

2. **🧰 Stack Sidebar** — When user add technology, it show in "Your Stack" sidebar instantly, with live count of how many selected. User can remove one item or remove all item with one click.

3. **🔔 Toast Notification** — Every time user add, remove, remove all, or try add same technology two time, a toast message pop up so user always know what happen.

---

## 📱 Responsive

I try to make it responsive for mobile, tablet and desktop. Navbar have hamburger menu in mobile, and footer also stack nicely in small screen.

---

## 🎨 Gradient Theme

I use one gradient color (orange to pink to purple) for brand name, hero heading and main button, so whole website look same theme everywhere.

---

## ❓ React Question Answer (in my own word)

### 1. What is JSX, and why it is used in React?
JSX (JavaScript XML) is like writing HTML code but inside JavaScript file. Normally we need write `React.createElement()` many time, but with JSX we can just write `<div>Hello</div>` directly. It is used because it make code more easy to read and understand, we can see how UI look just by reading the code , In my word, JSX is the visual of a component.

### 2. What is difference between props and state?
Props is data that come from parent component to child component. Child cannot change props, it just use it. State is data that component keep inside itself and it can change, like when user click button. Example: in my project, `stack` is state in `App.tsx`, but `TechCard` get `tech`, `isAdded`, `onAdd` as props from parent.

### 3. What `useState` hook do, and where I use it in this project?
`useState` help component to remember some valUe and update it when something change. When state change, React render component again automatically. I use `useState` in `App.tsx` for `stack` array (list of selected technology), in `Nav.tsx` for `menuOpen` (mobile menu open/close), and in `TechnologyList.tsx` for `technologies` data and `isLoading` state.

### 4. What `useEffect` hook do, and why I need it for load JSON data?
`useEffect` is used for do some "side effect" thing, like fetching data, which is not normal rendering job. I need it because fetching JSON data is async thing, it cannot happen directly while component render. So in `TechnologyList.tsx`, I put `fetch("/technology.json")` inside `useEffect` with empty array `[]`, so it run only one time when component first load, then update state with the data.

### 5. Why every item in `.map()` need unique `key` prop?
React use `key` for identify which item is changed, added or removed when list re-render. Without unique key, React get confuse which element is which, and it can cause wrong UI update or bug. In my project I use `tech.id` as key for `TechCard` and stack items, because every technology have own unique id.

### 6. What is conditional rendering? Show one place I use it.
Conditional rendering mean show different UI depend on condition, just like `if` statement but inside JSX. I use it in `StackSidebar.tsx` for show empty message when no technology added yet:

```tsx
{stack.length === 0 && (
  <p className="text-sm text-gray-400 border border-dashed px-5 py-3 rounded-lg mx-3 my-2">
    No technology added yet.
  </p>
)}
```

This message only show when `stack.length` is `0`. When user add one item, this disappear and stack list show instead.

### 7. How you pass data parent to child, and how child send data back to parent?
Parent send data to child using **props** — just write it like attribute when call the compoonent, example `<TechCard tech={tech} isAdded={isAdded} onAdd={onAdd} />`. For child send data back to parent, parent give a function as prop, and child call that function (usually inside `onClick`) when something happen. In my project, `App.tsx` give `addToStack` function to `TechnologyList`, then to `TechCard`, as `onAdd` prop. When user click "Add to Stack" button, `TechCard` call `onAdd(tech)`, and this run `addToStack` back in `App.tsx`, which update `stack` state there.



Thank You :D

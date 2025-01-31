# **ReuseUI - A Modular UI Component Library and Design System**

**Description**:  
*ReuseUI* is a **React + Tailwind CSS** component library designed for reusability, accessibility, and scalability. Inspired by **MUI, Chakra UI**, and **Tailwind’s utility-first approach**, this library provides modular, flexible, and customizable UI components.

---

## **🚀 Links**
- **Live Docs**: [Coming Soon](#)  
- **NPM Package**: [Coming Soon](#)  
- **Storybook**: [Coming Soon](#)  
- **Case Study**: [Coming Soon](#)  

---

## **📌 Features**
✅ **Fully Typed with TypeScript** – Provides full IntelliSense support  
✅ **Composable and Customizable** – Built with **compound components** for flexibility  
✅ **Theming Support** – Modify styles using `theme` overrides  
✅ **Accessibility First (A11Y)** – WAI-ARIA compliant components  
✅ **Vite-Powered** – Super-fast build & local development  

---

## **📦 Installation**
Install ReuseUI via **NPM** or **Yarn**:
```bash
npm install reuse-ui
# or
yarn add reuse-ui
```

### **Peer Dependencies**
Ensure you have **React 18+**, **React-DOM**, and **Tailwind CSS** installed:
```bash
npm install react react-dom tailwindcss
```

---

## **📖 Usage**
Start using the components by importing them:

```tsx
import { Button } from "reuse-ui";

export default function App() {
  return (
    <Button color="info" onClick={() => alert("Clicked!")}>
      Click Me
    </Button>
  );
}
```

### **Tailwind Setup**
Make sure Tailwind is configured in your project. Add this to `tailwind.config.js`:
```js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## **📖 Documentation**
To run the **documentation site locally**:
```bash
npm run build-docs
npm run preview
```
- **Deploying to Vercel**:
  ```bash
  vercel --prod
  ```

---

## **📜 Available Components**
| Component  | Description |
|------------|------------|
| `Button` | Fully customizable button component |
| `Accordion` | Expandable/collapsible panels |
| `Modal` | Dialog box with header, body, footer |
| `Tabs` | Navigation with multiple tabbed views |
| `Alert` | Info, warning, success, and error messages |
| `Badge` | Small status indicators for UI elements |
| `Avatar` | Profile pictures with different styles |
| `Breadcrumb` | Navigation breadcrumbs |
| **More...** | More components being added! 🚀 |

📖 **See full component docs in [Storybook](#)**

---

## **📘 Storybook**
View **live interactive examples** of all components using Storybook:
```bash
npm run storybook
```
To **build the Storybook**:
```bash
npm run build-storybook
```

---

## **📤 Publishing to NPM**
To build and publish the library:

1️⃣ **Generate TypeScript Declarations**  
Ensure your `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "declaration": true,
    "emitDeclarationOnly": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
```
Then build:
```bash
npm run build
```

2️⃣ **Publish to NPM**
```bash
npm login
npm publish --access public
```

---

## **📂 Project Structure**
```
src/
 ├── components/         # UI components
 │   ├── Button/
 │   ├── Modal/
 │   ├── Accordion/
 │   ├── ...
 ├── docs/               # Documentation
 ├── stories/            # Storybook files
 ├── utils/              # Helper functions
 ├── theme/              # Theming utilities
 ├── index.ts            # Export all components
```

---

## **📚 Theming & Customization**
To override default styles, use a **custom theme**:

```tsx
import { ReuseUI } from "reuse-ui";

const customTheme = {
  button: {
    color: {
      info: "bg-blue-900 text-white hover:bg-blue-700",
    },
  },
};

export default function App() {
  return (
    <ReuseUI theme={{ theme: customTheme }}>
      <Button color="info">Custom Info Button</Button>
    </ReuseUI>
  );
}
```

---

## **📊 Case Study**
### **Why I Built ReuseUI**
I wanted to create a **React-based UI library** that integrates well with **Tailwind CSS** while following **best practices** for:
- Component composition using the **Compound Component Pattern**.
- Accessibility (`aria-*` attributes, keyboard interactions).
- Full TypeScript support (`.d.ts` files for IntelliSense).
- A flexible **theming system**.

### **Challenges & Solutions**
#### 🛠 **Centralizing State in Parent Components**
- **Problem**: Each sub-component managed state separately, causing issues with syncing.
- **Solution**: Used **context** to centralize logic. Example for `<Accordion>`:
```tsx
const AccordionContext = createContext({ activePanel: 0, setActivePanel: () => {} });

function Accordion({ children }) {
  const [activePanel, setActivePanel] = useState(0);
  return (
    <AccordionContext.Provider value={{ activePanel, setActivePanel }}>
      {children}
    </AccordionContext.Provider>
  );
}
```

#### 🎯 **Ensuring Full IntelliSense in TypeScript**
- **Problem**: Some component types weren’t inferred correctly.
- **Solution**: Used `React.FC` and **TypeScript Generics**:
```tsx
type ButtonProps = {
  color?: "info" | "success" | "warning";
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ color = "info", onClick, children }) => (
  <button className={`btn-${color}`} onClick={onClick}>
    {children}
  </button>
);
```

---

## **🚀 Roadmap**
🔹 **More Components** – Progress bars, tooltips, date pickers  
🔹 **Better Theming** – Dark mode, user presets  
🔹 **Drag & Drop Support**  
🔹 **Improved Docs** – More examples, API references  

---

## **📝 License**
This project is licensed under the **MIT License**. Feel free to use, modify, and contribute!

---

## **💡 Contributing**
Pull requests are welcome! Open an issue if you find bugs or want to request a new feature.

---

## **🤝 Support**
If you find this library useful, consider **starring ⭐ the repo** and **sharing it**!
